import { Server } from "socket.io";
import authService from "../auth/auth.service";
import { drawModel } from "../../models/models";

export class DrawControler {
  io: Server;
  socketMap: Map<String, any> = new Map();
  constructor(io: Server) {
    this.io = io;
  }
  handleDraw = () => {
    const namespaces = this.io.of(/^\/[a-z]{3}-[a-z]{4}-[a-z]{3}$/);
    namespaces.on("connection", async (socket) => {
      const namespace = socket.nsp;

      if (socket.handshake.auth.token) {
      }

      console.log("userToken", socket.handshake.auth);
      const { token } = socket.handshake.auth;
      if (!token) {
        socket.emit("error", {
          message: "Không có quyền",
        });
        socket.disconnect();
      }
      const user = await authService.getUser(socket.handshake.auth.token);

      console.log(
        "🚀 ~ file: socket.ts ~ line 41 ~ namespaces.on ~ user",
        user
      );
      socket.emit("me", {
        user: {
          ...user,
          socketId: socket.id,
        },
      });

      this.socketMap.set(socket.id, {
        ...user,
        socketId: socket.id,
      });

      drawModel
        .findOne({
          sessionId: namespace.name,
        })
        .then(async (dt) => {
          if (dt) {
            socket.emit("firstDraw", dt.data);
          } else {
            socket.emit("firstDraw", []);
            await drawModel.create({
              sessionId: namespace.name,
              data: [],
            });
          }
        });

      socket.on("connected", async () => {
        // console.log("A client connected", socket.id, namespace.name);
        // let users = [];
        // namespace.sockets.forEach((socket) => {
        //   users.push(socket.id);
        // });
        // console.log("users :>> ", users);
        // this.io.of(namespace.name).emit("users", users);

        socket.broadcast.emit("user-connected", {
          user: this.socketMap.get(socket.id),
        });
        socket.emit("user-connected-success", {
          user: this.socketMap.get(socket.id),
        });
        await listUser();
      });

      socket.broadcast.emit("user-connected", { id: socket.id });

      socket.on("message", function (data) {
        console.log("A message was received from a client: ", data);
        socket.broadcast.emit("message", data);
      });

      socket.on("disconnect", async () => {
        socket.broadcast.emit("user-disconnect", {
          user: this.socketMap.get(socket.id),
        });
        console.log("A client disconnected", socket.id, namespace.name);
        this.socketMap.delete(socket.id);
        socket.broadcast.emit("user-disconnect", { id: socket.id });

        await listUser();
      });

      socket.on("reload", async () => {
        const dt = await drawModel.findOne({
          sessionId: namespace.name,
        });
        socket.emit("firstDraw", dt.data);
      });

      const listUser = async () => {
        // get list socket from namespace
        const listSocket = await namespace.fetchSockets();

        let users = [];
        for (const socket of listSocket) {
          users.push(this.socketMap.get(socket.id));
        }

        this.io.of(namespace.name).emit("list-user", {
          users,
        });
      };

      socket.on("list-user", async () => {
        await listUser();
        console.log("list user");
      });

      socket.on("init-message", async () => {
        const data = await drawModel.findOne({
          sessionId: namespace.name,
        });
        if (data) {
          console.log("init-message", "ok");
          socket.emit("init-message", {
            messages: data.chats,
          });
        }
      });

      socket.on("messages", async (data) => {
        const res = await drawModel.updateOne(
          {
            sessionId: namespace.name,
          },
          {
            $push: {
              chats: data,
            },
          },
          { upsert: true, setDefaultsOnInsert: true }
        );
        console.log("chat", res);
        this.io.of(namespace.name).emit("messages", data);
      });

      socket.on("get-user", () => {
        socket.emit("get-user", {
          user: user,
        });
      });

      socket.on("init-scene", async () => {
        const dt = await drawModel.findOne({
          sessionId: namespace.name,
        });
        socket.emit("init-scene", {
          elements: dt.data,
        });
      });

      socket.on("server-broadcast", async (data) => {
        // console.log("data :>> ", data.type);
        if (data.type === "SCENE_UPDATE") {
          const res = await drawModel.updateOne(
            {
              sessionId: namespace.name,
            },
            {
              $set: {
                data: data.payload.elements,
              },
            },
            { upsert: true, setDefaultsOnInsert: true }
          );
          //   console.log("🚀 ~ file: socket.ts ~ line 159 ~ socket.on ~ res", res);
        }
        socket.broadcast.emit("client-broadcast", data);
      });

      socket.on("server-volatile-broadcast", (data) => {
        socket.volatile.broadcast.emit("client-broadcast", data);
      });

      socket.on("disconnect", () => {
        socket.removeAllListeners();
      });
    });
  };
}
