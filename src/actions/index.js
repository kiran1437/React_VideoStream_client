import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS
} from "./types";
import streamsApi from "../api/streamsApi";
import history from "../history";

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

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streamsApi.post("/streams", { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push("/");
};

export const fetchStreams = () => async dispatch => {
  const response = await streamsApi.get("/streams");
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  });
};

export const fetchStream = id => async dispatch => {
  const response = await streamsApi.get(``);
  dispatch({
    type: FETCH_STREAM,
    payload: response.data
  });
};
export const editStream = (id, formValues) => async dispatch => {
  const response = await streamsApi.put(`streams/${id}`, formValues);
  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  });
};

export const deleteStream = id => async dispatch => {
  await streamsApi.delete(`streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};
