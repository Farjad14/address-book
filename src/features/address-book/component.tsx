import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tile from "../../components/Tile";
import { TContactItem } from "../../types";
import { getContactList } from "../actions";
import { selectAddressBook } from "../selectors";

const AddressBook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getContactList({
        res: 50,
        seed: "abc",
        inc: "name,phone,picture,email",
      })
    );
  }, [dispatch]);
  const list = useSelector(selectAddressBook);

  return (
    <>
      {list &&
        list.length &&
        list.map(({ key, name, picture }: TContactItem) => (
          <Tile
            key={key}
            id={key}
            title={name.title}
            firstName={name.first}
            picture={picture.large}
          />
        ))}
    </>
  );
};
export default AddressBook;
