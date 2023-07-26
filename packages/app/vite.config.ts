import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import linaria from "@linaria/vite";

export default () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const { default: linaria } = require("@linaria/vite");

  return defineConfig({
    build: {
      outDir: "build",
    },
    plugins: [
      linaria(),
      react({
        jsxRuntime: "classic",
      }),
    ],
  });
};
