import React from "react";
import styled from "@emotion/styled";
// @ts-expect-error
import units from "design-units";
import { TileProps } from "./Tile";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  position: relative;
  padding: 1rem;
  border: 1px solid;
  border-radius: 15px;
  margin: 0 0 2rem;
  ${units({
    borderColor: "lightGrey",
    backgroundColor: "white",
  })};
`;

const ProfilePicture = styled.img`
  width: 100px;
  background-image: url(${(props) => props.src});
  background-size: cover;
`;

interface ContactCardProps extends TileProps {
  lastName: string;
  phoneNumber: string;
  email: string;
}

const ContactCard = ({ firstName, lastName, picture, phoneNumber, email }: ContactCardProps) => {
  return (
    <Wrapper>
      <ProfilePicture src={picture} alt={"Avatar"} />
      <span>First Name: {firstName}</span>
      <span>Last Name: {lastName}</span>
      <span>Phone Number: {phoneNumber}</span>
      <span>Email: {email}</span>
    </Wrapper>
  );
};
export default ContactCard;
