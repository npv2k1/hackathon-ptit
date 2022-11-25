
import { useDispatch, useSelector } from "react-redux";
import * as t from "../redux/types"
import Cookies from "js-cookie";
import EMPLOYEE from "../../../contract/artifacts/contracts/EmployeeID.sol/EmployeeID.json";
import getWeb3 from "src/utils/getWeb3";

export const useSetInfo = () => {
  const dispatch = useDispatch();
  return (userAddress: string) => {
    dispatch({
      type: t.SET_ADDRESS,
      payload: userAddress
    });
    Cookies.set("userAddress", userAddress);
  }

}

export const useGetUser = () => {
  const address = Cookies.get("userAddress") || "";
  return useSelector(
    (state: any) => {
      return state.common.userAddress || address;
    });
}

export const useConnectContractEmployee = () => {
  const web3 = getWeb3();
  return new web3.eth.Contract(
    EMPLOYEE.abi,
    "0x67AcED192123d84eFC1B18A98f024c10e656Bc09"
  )
}

export const useHandleFetchUserData = () => {
  const contract = useConnectContractEmployee();
  return async () => await contract.methods.getInfo().call();
}
