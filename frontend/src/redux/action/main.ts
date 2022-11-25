import * as t from "../types";

export const setInfoUser = (userAddress: any) => (dispatch: any) => {
  dispatch({ type: t.SET_ADDRESS, payload: userAddress })
}

export const getInfoUser = () => (dispatch: any) => {
  dispatch({ type: t.GET_ADDRESS })
}