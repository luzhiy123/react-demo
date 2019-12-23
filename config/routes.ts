import { IRoute } from "umi-types";

const routes: IRoute[] = [
  {
    path: "/",
    component: "../layouts",
    routes: [
      { path: "/", redirect: "demo" },
      {
        path: "demo",
        // icon: "setting",
        title: "Demo",
        name: "Demo",
        component: "./Demo",
      },
      {
        component: "404",
      },
    ],
  },
];

export default routes;
