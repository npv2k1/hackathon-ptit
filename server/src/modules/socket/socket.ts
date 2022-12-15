import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";
import { messSocket } from "./mess.controller";
import { checkinModel, drawModel } from "../../models/models";
import debug from "debug";
import { authSocket } from "./auth.controller";
import authService from "../auth/auth.service";
import { User } from "src/common/types";
import { DrawControler } from "./draw.controler";
export const socketDebug = debug("socket");

import Web3 from "web3";
import { AbiItem } from "web3-utils";
import EmployeeIDABI from "contract/artifacts/contracts/EmployeeID.sol/EmployeeID.json";
import TokenABI from "contract/artifacts/contracts/Token.sol/VdtToken.json";
import CheckinABI from "contract/artifacts/contracts/Checkin.sol/CheckinContract.json";
import VCheckinABI from "contract/artifacts/contracts/VCheckin.sol/VCheckin.json";
import {
  CHECKIN_CONTRACT_ADDRESS,
  EMPLOYEE_CONTRACT_ADDRESS,
  TOKEN_CONTRACT_ADDRESS,
} from "../../common/constants";
import { EmployeeID, VCheckin } from "contract/src/types/contracts";
const web3: any = new Web3(
  new Web3.providers.HttpProvider("https://testnet.aurora.dev")
);

// const VCheckinContract: VCheckin = new web3.eth.Contract(
//   VCheckinABI.abi as AbiItem[],
//   "0x3A0E539e2Fe708F7D5C9117c541C0D08007C3dbf"
// );
const VCheckinContract: VCheckin = new web3.eth.Contract(
  VCheckinABI.abi as AbiItem[],
  "0x77301B281EFB644D9ed3932EB6d59a960C5F1A7E"
);

const adminAddress = "0xa63854a9DbB221dB8cA865BF4559cd09d974FB60";

const privateKey =
  "d93e625372d02744e863fda06ffdf69ff6844d0af62ca956db73a45f5bcf416b";

/**
 * It creates a new socket.io server, and when a client connects to it, it logs the connection, and
 * then calls the messSocket function
 * @param {HttpServer} httpServer - The HTTP server instance that the Socket.IO server will attach to.
 */
export default function initSocket(httpServer: HttpServer) {
  let socketMap: Map<String, any> = new Map();

  const io = new Server(httpServer, {
    allowEIO3: true,
    transports: ["websocket"],
  });
  const authNamespace = io.of("/auth");
  authSocket(authNamespace);

  io.on("connection", (socket: Socket) => {
    socket.on("checkin", async (data) => {
      console.log("checkindata", data);
      const msg = data.msg;
      const signature = data.signature;
      const key = web3.eth.accounts.recover(msg, signature);
      console.log("Checkin acc", key);

      // const result = await VCheckinContract.methods
      //   .attest(key)
      //   .send({ from: adminAddress, gas: 3000000 });

      const tx = {
        // this could be provider.addresses[0] if it exists
        from: adminAddress,
        // target address, this could be a smart contract address
        to: "0x77301B281EFB644D9ed3932EB6d59a960C5F1A7E",
        // optional if you want to specify the gas limit
        gas: 3000000,
        // optional if you are invoking say a payable function
        // value: 0,
        // this encodes the ABI of the method and the arguements
        data: VCheckinContract.methods.attest(key).encodeABI(),
      };
      const signPromise = await web3.eth.accounts.signTransaction(
        tx,
        privateKey
      );
      console.log({ signPromise });
      const sentTx = web3.eth.sendSignedTransaction(
        signPromise.raw || signPromise.rawTransaction
      );
      sentTx.on("receipt", (receipt: string) => {
        // do something when receipt comes back
        console.log("receipt :>> ", receipt);
      });
      sentTx.on("error", (err: string) => {
        // do something on transaction error
        console.log("err", err);
      });
      // get result data
      // console.log(
      //   "checkin result",
      //   result.events["Attest"]["returnValues"]["tokenId"]
      // );

      // const checkin = await checkinModel.create({
      //   address: key,
      //   data: msg,
      //   tokenId: result.events["Attest"]["returnValues"]["tokenId"],
      // });
      // TODO: save to ipfs

      // socket.emit("checkin", checkin);
      // console.log("checkin result", checkin);

      // const checkins = await checkinModel.find({
      //   address: key,
      // });

      // let listCheckin = checkins.map((e) => {
      //   let location = JSON.parse(e.data);

      //   return {
      //     tokenId: e.tokenId,
      //     data: e.data,
      //     timestamp: e.date,
      //     ...location,
      //   };
      // });

      // socket.emit("list-checkin", listCheckin);
    });
    socket.on("list-checkin", async (data) => {
      const checkins = await checkinModel.find({
        address: data.address,
      });

      let listCheckin = checkins.map((e) => {
        let location = JSON.parse(e.data);

        return {
          tokenId: e.tokenId,
          data: e.data,
          timestamp: e.date,
          ...location,
        };
      });

      socket.emit("list-checkin", listCheckin);
    });
  });

  const drawControler = new DrawControler(io);
  drawControler.handleDraw();
}
