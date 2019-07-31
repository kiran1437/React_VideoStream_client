import { SIGN_IN, SIGN_OUT } from "./types";

export const signInAction = gUserId => {
  return {
    type: SIGN_IN,
    payload: gUserId
  };
};

export const signOutAction = () => {
  return {
    type: SIGN_OUT
  };
};
