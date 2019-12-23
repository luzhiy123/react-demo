import React from "react";
import { Layout } from "antd";
import { IRoute } from "umi-types";
import BaseMenu from "./BaseMenu";

const { Content } = Layout;

export interface BasicProps {
  route: IRoute;
  location: Location;
}

const BasicLayout: React.FC<BasicProps> = props => {
  return (
    <Layout className="full-height">
      <BaseMenu {...props} />
      <Layout>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
