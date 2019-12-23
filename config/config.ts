import { IConfig } from "umi-types";

import routes from "./routes";

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  routes,
  theme: "./config/theme.js",
  outputPath: "./docs/",
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      "umi-plugin-react",
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: "",
        dll: true,
        locale: {
          default: "zh-CN",
          antd: true,
          baseSeparator: "-",
        },

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};

export default config;
