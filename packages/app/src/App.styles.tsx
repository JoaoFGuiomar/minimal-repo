import { styled } from "@linaria/react";
import { css } from "@linaria/core";

const globals = css`
  :global() {
    html {
      height: 100%;
    }

    body {
      height: 100%;
      margin: 0;
    }
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: papayawhip;
`;
