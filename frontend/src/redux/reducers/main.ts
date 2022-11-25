import * as t from "../types";
const main = (state = { userAddress: "" }, action: any) => {
  switch (action.type) {
    case t.SET_ADDRESS:
      return {
        ...state,
        userAddress: action.payload
      };
    case t.GET_ADDRESS:
      return {
        userAddress: state?.userAddress,
      }
    default:
      return { ...state };
  };
}

export default main