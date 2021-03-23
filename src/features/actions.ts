import { TPerson } from "../types";
import backend from "../utils/backend";

export enum ADDRESS_BOOK_REQUEST {
  REQUEST = "ADDRESS_BOOK_REQUEST",
  LOADING = "ADDRESS_BOOK_LOADING",
  SUCCESS = "ADDRESS_BOOK_SUCCESS",
  FAILURE = "ADDRESS_BOOK_FAILURE",
}

export type TLoadContactListAction = {
  type: ADDRESS_BOOK_REQUEST;
  list?: TPerson;
};

export interface TRequestParams {
  res: number;
  seed: string;
  inc: string;
}
export const PARAMS = {
  RESULTS: "results",
  SEED: "seed",
  INCLUDE: "inc",
};

export const getContactList = ({ res, seed, inc }: TRequestParams) => async (dispatch: any) => {
  dispatch({ type: ADDRESS_BOOK_REQUEST.REQUEST });
  try {
    const { data } = await backend.get(
      `?${PARAMS?.RESULTS}=${res}&${PARAMS.SEED}=${seed}&${PARAMS.INCLUDE}=${inc}`
    );
    if (!data) {
      throw new Error("No data in network response");
    }
    const { results } = data;

    const updatedData = results.map((elm: any, index: number) => ({
      ...elm,
      key: `${index}${elm.name.first}`,
    }));

    dispatch({
      type: ADDRESS_BOOK_REQUEST.SUCCESS,
      payload: { data: updatedData },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADDRESS_BOOK_REQUEST.FAILURE,
      payload: { errors: err },
    });
  }
};
