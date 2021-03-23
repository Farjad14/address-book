import { RootState } from "../types";

export const selectAddressBook = ({ addressBook: { contactLists } }: RootState) => contactLists;
