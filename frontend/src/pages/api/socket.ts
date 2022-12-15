import { Server, Socket } from 'socket.io'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import Web3 from 'web3'

const prisma = new PrismaClient()
import { recoverPersonalSignature } from 'eth-sig-util'
import { bufferToHex } from 'ethereumjs-util'
import { AbiItem } from 'web3-utils'
import EmployeeIDABI from 'contract/artifacts/contracts/EmployeeID.sol/EmployeeID.json'
import TokenABI from 'contract/artifacts/contracts/Token.sol/VdtToken.json'
import CheckinABI from 'contract/artifacts/contracts/Checkin.sol/CheckinContract.json'
import VCheckinABI from 'contract/artifacts/contracts/VCheckin.sol/VCheckin.json'
import {
  CHECKIN_CONTRACT_ADDRESS,
  EMPLOYEE_CONTRACT_ADDRESS,
  TOKEN_CONTRACT_ADDRESS,
} from 'src/common/constant'
import { EmployeeID, VCheckin } from 'contract/src/types/contracts'
const web3: any = new Web3(
  new Web3.providers.HttpProvider('http://127.0.0.1:7545')
)

const VCheckinContract: VCheckin = new web3.eth.Contract(
  VCheckinABI.abi as AbiItem[],
  '0x6FED80fbB0bdc2163839CA6962B6b25D1334C2a4'
)

const adminAddress = '0xa63854a9DbB221dB8cA865BF4559cd09d974FB60'
export default function SocketHandler(req: any, res: any) {
  // It means that socket server was already initialised
  // if (res.socket.server.io) {
  //   console.log('Already set up')
  //   res.end()
  //   return
  // }

  const io = new Server(res.socket.server)
  res.socket.server.io = io

  // const onConnection = (socket: Socket) => {
  //   // messageHandler(io, socket)

  //   socket.on('setInfo', (data) => {
  //     console.log('profile-update', data)
  //     io.emit('profile-update', data)
  //   })
  // }

  // // Define actions inside
  // io.on('connection', onConnection)

  io.on('connection', (socket) => {
    socket.on('setInfo', async (msg) => {
      // console.log('profile-update', msg)

      // // recover signature from msg
      // // const signature = msg.signature
      // // var provider = new Provider(privatekey, rpcurl)

      // // create web3 with private key
      // // const web3 = new Web3(provider)

      // console.log('ìno', await employeeContract.methods.getInfo().call())

      // const result = await employeeContract.methods
      //   .setInfo(msg.info)
      //   .send({ from: msg.address })
      // console.log('🚀 ~ file: socket.ts:65 ~ socket.on ~ result', result)

      // recover user from signature
      // var hash = web3.utils.sha3(msg.info)
      // if (hash) {
      //   var signing_address = await web3.eth.personal.ecRecover(hash, signature)
      //   console.log(
      //     '🚀 ~ file: index.tsx ~ line 260 ~ handleSign ~ signing_address',
      //     signing_address
      //   )
      // }
      let key = web3.eth.accounts.recover('hello', msg.signature)
      console.log('🚀 ~ file: socket.ts:47 ~ socket.on ~ key', key)

      // TODO: check if user exists in db

      // SAVE USER TO DB

      // Mint NFT to user

      // socket.broadcast.emit('update-input', msg)

      // We now are in possession of msg, publicAddress and signature. We
      // will use a helper from eth-sig-util to extract the address from the signature
      // const msgBufferHex = bufferToHex(Buffer.from(msg.info, 'utf8'))
      // const address = recoverPersonalSignature({
      //   data: msgBufferHex,
      //   sig: msg.signature,
      // })
      // console.log('🚀 ~ file: socket.ts:65 ~ socket.on ~ address', address)
    })

    socket.on('checkin', async (data) => {
      console.log('checkindata', data)
      const msg = data.msg
      const signature = data.signature
      const key = web3.eth.accounts.recover(msg, signature)
      console.log('Checkin acc', key)

      const result = await VCheckinContract.methods
        .attest(key)
        .send({ from: adminAddress })

      socket.emit('checkin', result)
      console.log('checkin result', result)
    })
  })

  res.end()
}
