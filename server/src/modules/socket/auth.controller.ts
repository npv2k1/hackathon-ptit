import { Namespace } from "socket.io";
import { SOCKET_SERVER_EVENTS } from "src/common/constants";
import authService from "../auth/auth.service";

export function authSocket(namespace: Namespace) {
  namespace.on("connection", async (socket) => {
    if (socket.handshake.auth.token) {
      const user = await authService.getUser(socket.handshake.auth.token);
      socket.emit("me", { user: user });
    }

    socket.on(SOCKET_SERVER_EVENTS.SIGNUP, async (data) => {
      console.log("data :>> ", data);
      const token = await authService.signup(
        data.name,
        data.email,
        data.password
      );
      socket.emit(SOCKET_SERVER_EVENTS.SIGNUP, {
        token: token,
      });
    });
    socket.on(SOCKET_SERVER_EVENTS.LOGIN, async (data) => {
      try {
        console.log("data :>> ", data);
        const token = await authService.login(data.email, data.password);
        socket.emit(SOCKET_SERVER_EVENTS.LOGIN, {
          token: token,
        });
      } catch (e) {
        console.error(e);
        socket.emit("error", {
          message: "Login error",
        });
      }
    });
  });
  return;
}
