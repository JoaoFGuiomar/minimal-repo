import React, { ReactNode } from "react";
import { StyledButton, primary } from "./Button.styles";

interface ButtonProps {
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => (
  <StyledButton className={primary}>{children}</StyledButton>
);
