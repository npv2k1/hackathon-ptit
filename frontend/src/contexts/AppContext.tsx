import { EmployeeID } from "contract/src/types/contracts";
import { message } from "antd";
import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import getWeb3 from "src/utils/getWeb3";
import { VdtToken } from "contract/src/types/contracts/Token.sol";
import { CheckinContract } from "contract/src/types/contracts/Checkin.sol";
// ABI import
import { AbiItem } from "web3-utils";
import EmployeeIDABI from "contract/artifacts/contracts/EmployeeID.sol/EmployeeID.json";
import TokenABI from "contract/artifacts/contracts/Token.sol/VdtToken.json";
import CheckinABI from "contract/artifacts/contracts/Checkin.sol/CheckinContract.json";
import {
  CHECKIN_CONTRACT_ADDRESS,
  EMPLOYEE_CONTRACT_ADDRESS,
  TOKEN_CONTRACT_ADDRESS,
} from "src/common/constant";

interface Props {
  children: ReactNode;
}

export enum AppActionType {
  SET_MY_STREAM,
  SET_USER,
  SET_LIST_USER,
  SET_ACCOUNT,
  SET_CHECKIN_CONTRACT,
  SET_VDT_TOKEN,
  SET_EMPLOYEE_CONTRACT,
}
export interface IAppState {
  myStream: MediaStream | null;
  account: string | null;
  employeeContract: EmployeeID | null;
  tokenContract: VdtToken | null;
  checkinContract: CheckinContract | null;
}
export interface IBranchAction {
  type: AppActionType;
  payload: Partial<IAppState>;
}

interface IAppContextDefault {
  state: IAppState;
  dispatch: Dispatch<{ type: AppActionType; payload: Partial<IAppState> }>;
  methods: any;
}

const branchStateDefault: IAppState = {
  myStream: null,
  account: null,
  employeeContract: null,
  tokenContract: null,
  checkinContract: null,
};

export const reducer = (state: IAppState, action: IBranchAction): IAppState => {
  switch (action.type) {
    case AppActionType.SET_MY_STREAM: {
      return {
        ...state,
        myStream: action.payload.myStream as IAppState["myStream"],
      };
    }
    case AppActionType.SET_ACCOUNT: {
      return {
        ...state,
        account: action.payload.account as IAppState["account"],
      };
    }
    case AppActionType.SET_EMPLOYEE_CONTRACT: {
      return {
        ...state,
        employeeContract: action.payload
          .employeeContract as IAppState["employeeContract"],
      };
    }
    case AppActionType.SET_VDT_TOKEN: {
      return {
        ...state,
        tokenContract: action.payload
          .tokenContract as IAppState["tokenContract"],
      };
    }
    case AppActionType.SET_CHECKIN_CONTRACT: {
      return {
        ...state,
        checkinContract: action.payload
          .checkinContract as IAppState["checkinContract"],
      };
    }

    default:
      return state;
  }
};

export interface IAppMethods {
  getUserInfo: () => Promise<any>;
}

export const AppCtx = createContext<IAppContextDefault>({
  state: branchStateDefault,
  dispatch: () => null,
  methods: null,
});

const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, branchStateDefault);

  useEffect(() => {
    const connect = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        const account = accounts[0];
        dispatch({ type: AppActionType.SET_ACCOUNT, payload: { account } });
      } else {
        message.error("Please connect to MetaMask");
      }
      dispatch({
        type: AppActionType.SET_EMPLOYEE_CONTRACT,
        payload: {
          employeeContract: new web3.eth.Contract(
            EmployeeIDABI.abi as AbiItem[],
            EMPLOYEE_CONTRACT_ADDRESS
          ),
        },
      });
      dispatch({
        type: AppActionType.SET_VDT_TOKEN,
        payload: {
          tokenContract: new web3.eth.Contract(
            TokenABI.abi as AbiItem[],
            TOKEN_CONTRACT_ADDRESS
          ),
        },
      });
      dispatch({
        type: AppActionType.SET_CHECKIN_CONTRACT,
        payload: {
          checkinContract: new web3.eth.Contract(
            CheckinABI.abi as AbiItem[],
            CHECKIN_CONTRACT_ADDRESS
          ),
        },
      });
    };
    connect();
  }, [dispatch]);

  // useEffect(()=>{
  //   new web3.eth.Contract(
  //     TODO_LIST_ABI.abi as AbiItem[],
  //     "0xcF5b213B9AefF188690804Bd6F099EFCA2900D83"
  //   );
  // },[dispatch])

  const getUserInfo = useCallback(() => {
    if (state.employeeContract && state.account) {
      return state.employeeContract.methods.getInfo().call();
    }
  }, [state.account, state.employeeContract]);
  const setUserInfo = useCallback(
    (info: string) => {
      if (state.employeeContract && state.account) {
        return state.employeeContract.methods
          .setInfo(info)
          .send({ from: state.account });
      }
    },
    [state.account, state.employeeContract]
  );
  const getBalance = useCallback(() => {
    if (state.tokenContract && state.account) {
      return state.tokenContract.methods.balanceOf(state.account).call();
    }
  }, [state.account, state.tokenContract]);
  const getCheckin = useCallback(
    (id: string | number) => {
      if (state.checkinContract && state.account) {
        return state.checkinContract.methods.getCheckIn(id).call();
      }
    },
    [state.account, state.checkinContract]
  );
  const checkin = useCallback(
    (checkinData: string) => {
      if (state.checkinContract && state.account) {
        return state.checkinContract.methods
          .checkIn(checkinData)
          .send({ from: state.account });
      }
    },
    [state.account, state.checkinContract]
  );

  const totalCheckin = useCallback(() => {
    if (state.checkinContract && state.account) {
      return state.checkinContract.methods.checkinId().call();
    }
  }, [state.account, state.checkinContract]);

  const getMyCheckin = useCallback(() => {
    if (state.checkinContract && state.account) {
      return state.checkinContract.methods

        .getMyCheckIn()
        .call({ from: state.account });
    }
  }, [state.account, state.checkinContract]);

  // listen checkin event
  useEffect(() => {
    if (state.checkinContract) {
      state.checkinContract.events
        .CheckinEvent()
        .on("data", (event: any) => {
          console.log(event);
          message.success("Checkin event success");
        })
        .on("error", console.error);
    }
  }, [state.checkinContract]);


  const connect  = useCallback(async () => {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    if (accounts.length > 0) {
      const account = accounts[0];
      dispatch({ type: AppActionType.SET_ACCOUNT, payload: { account } });
    } else {
      message.error("Please connect to MetaMask");
    }
  }, [dispatch]);

  const changeAccount = useCallback(async () => {
    await window?.ethereum.request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }],
    });
  }, []);


  const methods = {
    getUserInfo,
    setUserInfo,
    getBalance,
    getCheckin,
    checkin,
    totalCheckin,
    getMyCheckin,
    connect,
    changeAccount
  };

  return (
    <AppCtx.Provider value={{ state, dispatch, methods }}>
      {children}
    </AppCtx.Provider>
  );
};

export default AppProvider;
