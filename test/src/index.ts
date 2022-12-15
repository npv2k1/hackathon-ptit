import Web3 from "web3";
import { AbiItem } from "web3-utils";
import EmployeeIDABI from "contract/artifacts/contracts/EmployeeID.sol/EmployeeID.json";
import TokenABI from "contract/artifacts/contracts/Token.sol/VdtToken.json";
import CheckinABI from "contract/artifacts/contracts/Checkin.sol/CheckinContract.json";
import {
  CHECKIN_CONTRACT_ADDRESS,
  EMPLOYEE_CONTRACT_ADDRESS,
  TOKEN_CONTRACT_ADDRESS,
} from "./common/constant";
import { EmployeeID } from "contract/src/types/contracts";
const main = async () => {
  const web3: any = new Web3(
    new Web3.providers.HttpProvider("http://127.0.0.1:7545")
  );
  const employeeContract: EmployeeID = new web3.eth.Contract(
    EmployeeIDABI.abi as AbiItem[],
    EMPLOYEE_CONTRACT_ADDRESS
  );
  console.log("ìno", await employeeContract.methods.getInfo().call());

  const result = await employeeContract.methods
    .setInfo("jcsdbh")
    .send({ from: "0xdf0D5d151818F84c8C7CA054117d76684EeB6Cc8" });
  console.log("🚀 ~ file: socket.ts:65 ~ socket.on ~ result", result);


};
main();
