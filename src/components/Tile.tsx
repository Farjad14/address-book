import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
// @ts-expect-error
import units from "design-units";

export const StyledTile = styled(Link)`
  display: inline-block;
  border: 1px solid;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: 0.1s;
  min-height: 40px;
  margin: 8px;
  padding: 8px;
  width: 120px;
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily.primary};
  ${units({
    color: "black",
    backgroundColor: "lynxWhite",
    borderColor: "lightGrey",
  })};
  &hover: {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ProfilePicture = styled.img`
  width: 54px;
  background-image: url(${(props) => props.src});
  background-size: cover;
`;
const TitleWrapper = styled.div`
  ${units({
    color: "black",
    backgroundColor: "lynxWhite",
    borderColor: "lightGrey",
  })};
`;
export interface TileProps {
  title?: string;
  firstName: string;
  id?: string;
  picture: string;
}

const Tile = ({ title, firstName, id, picture }: TileProps) => {
  return (
    <StyledTile to={`/contact-info/${id}`}>
      <ProfilePicture src={picture} alt={"Avatar"} />
      <TitleWrapper>
        {title}&nbsp;{firstName}
      </TitleWrapper>
    </StyledTile>
  );
};

export default Tile;
