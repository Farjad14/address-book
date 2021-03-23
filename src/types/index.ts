export interface TPersonName {
  title: string;
  first: string;
  last: string;
}

export interface TPersonPhoto {
  large: string;
  medium: string;
}

export interface TContactItem {
  key: string;
  name: TPersonName;
  phone: string;
  picture: TPersonPhoto;
}

export interface TPerson {
  name: TPersonName;
  phone: string;
}

export interface TAddressBookState {
  contactLists: TContactItem[];
  isLoading: boolean;
}

export interface RootState {
  addressBook: TAddressBookState;
}
