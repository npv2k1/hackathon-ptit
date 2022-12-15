import debug from "debug";
import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";
import { checkinModel } from "../../models/models";
export const socketDebug = debug("socket");

import VCheckinABI from "contract/artifacts/contracts/VCheckin.sol/VCheckin.json";
import { VCheckin } from "contract/src/types/contracts";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import {
  ADMIN_ADDRESS,
  ADMIN_PRIVATE_KEY,
  CHECKIN_CONTRACT_ADDRESS,
  GAS_LIMIT,
  WEB3_PROVIDER_URL,
} from "src/common/constants";
const web3 = new Web3(new Web3.providers.HttpProvider(WEB3_PROVIDER_URL));
// @ts-ignore
const VCheckinContract: VCheckin = new web3.eth.Contract(
  // @ts-ignore
  VCheckinABI.abi as AbiItem[],
  CHECKIN_CONTRACT_ADDRESS
);

async function getListCheckin(address) {
  const checkins = await checkinModel
    .find({
      address: address,
    })
    .sort({ date: -1 });
  let listCheckin = checkins.map((e) => {
    let location = JSON.parse(e.data);
    return {
      transactionHash: e?.transactionHash || "",
      data: e?.data || "",
      timestamp: e?.date || "",
      ...location,
    };
  });
  return listCheckin;
}

/**
 * It creates a new socket.io server, and when a client connects to it, it logs the connection, and
 * then calls the messSocket function
 * @param {HttpServer} httpServer - The HTTP server instance that the Socket.IO server will attach to.
 */
export default function initSocket(httpServer: HttpServer) {
  const io = new Server(httpServer, {
    allowEIO3: true,
    transports: ["websocket"],
  });

  io.on("connection", (socket: Socket) => {
    socket.on("checkin", async (data) => {
      console.log("checkindata", data);
      const msg = data.msg;
      const signature = data.signature;
      const key = web3.eth.accounts.recover(msg, signature);
      console.log("CHECKIN >>>", key);
      // TODO: save to ipfs
      const tx = {
        from: ADMIN_ADDRESS,
        to: CHECKIN_CONTRACT_ADDRESS,
        gas: GAS_LIMIT,
        data: VCheckinContract.methods.attest(key).encodeABI(),
      };
      const signPromise = await web3.eth.accounts.signTransaction(
        tx,
        ADMIN_PRIVATE_KEY
      );

      const sentTx = web3.eth.sendSignedTransaction(
        // @ts-ignore
        signPromise.raw || signPromise.rawTransaction
      );
      sentTx.on("receipt", async (receipt) => {
        // do something when receipt comes back
        console.log("receipt :>> ", receipt);
        // console.log("receipt :>> ", receipt.events["Attest"]["returnValues"]);

        await checkinModel.create({
          address: key,
          data: msg,
          transactionHash: receipt.transactionHash,
        });
        socket.emit("checkin:success", receipt.transactionHash);

        socket.emit("list-checkin", await getListCheckin(key));
      });
      sentTx.on("error", (err: string) => {
        // do something on transaction error
        console.log("CHECKIN ERR", err);
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
      socket.emit("list-checkin", await getListCheckin(data.address));
    });
  });
}
