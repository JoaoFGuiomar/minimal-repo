import { styled } from "@linaria/react";
import { css } from "@linaria/core";

// Imported components cause the bug
export const StyledButton = styled.button`
  font-size: 4rem; // Change this value to "10rem" and back to "4rem"
`;

export const primary = css`
  padding: 40px 50px;
  border: 5px solid black;
  border-radius: 20px;

  :hover {
    background: red;
    color: white;
  }
`;
