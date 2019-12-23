import React, { Component } from "react";
import { Layout } from "antd";
import { connect, Dispatch } from "dva";
import { AnyAction } from "redux";
import TestTable from "./TestTable";

const { Content } = Layout;

interface PartProps {
  dispatch: Dispatch<AnyAction>;
  visible: boolean;
  currentStep: number;
  activeTab: string;
}

class PartList extends Component<PartProps> {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "test/fetchData",
    });
  }
  render() {
    return (
      <Layout className="full-height">
        <Content className="full-height" style={{ padding: "10px 16px" }}>
          <TestTable />
        </Content>
      </Layout>
    );
  }
}

export default connect()(PartList);
