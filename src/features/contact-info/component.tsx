import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ContactCard from "../../components/ContactCard";
import { selectAddressBook } from "../selectors";

const ContactInfo = () => {
  const { id } = useParams<{ id: string }>();
  const personLists = useSelector(selectAddressBook);
  const [contactDetails, setContactDetails] = useState<any>();
  useEffect(() => {
    const foundDetails = personLists.find((e) => e.key === id);
    setContactDetails(foundDetails);
  }, [id, personLists, contactDetails]);
  return (
    <>
      {contactDetails && contactDetails.key ? (
        <ContactCard
          firstName={contactDetails.name.first}
          lastName={contactDetails.name.last}
          phoneNumber={contactDetails?.phone}
          email={contactDetails?.email}
          picture={contactDetails?.picture.large}
        />
      ) : (
        <div>Information Not Found</div>
      )}
    </>
  );
};

export default ContactInfo;
