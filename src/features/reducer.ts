import { TAddressBookState } from "../types";
import { ADDRESS_BOOK_REQUEST } from "./actions";

const initialState: TAddressBookState = {
  contactLists: [],
  isLoading: false,
};

export const addressBookReducer = (state = initialState, action: any): TAddressBookState => {
  switch (action.type) {
    case ADDRESS_BOOK_REQUEST.REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADDRESS_BOOK_REQUEST.SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        contactLists: data,
        isLoading: false,
      };
    case ADDRESS_BOOK_REQUEST.FAILURE:
      return {
        ...state,
        isLoading: false,
        contactLists: [],
      };
    default:
      return state;
  }
};
