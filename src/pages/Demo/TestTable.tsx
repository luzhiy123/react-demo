import React, { Dispatch } from "react";
import { Table } from "antd";
import { connect } from "dva";
import { AnyAction } from "redux";
import { TestConnectState } from "./models";

export interface ElectricityTableProps {
  dispatch: Dispatch<AnyAction>;
  data: [];
  loading: boolean | undefined;
  selectedRowKeys: string[] | number[];
}

const TestTable: React.FC<ElectricityTableProps> = props => {
  const { data, selectedRowKeys, dispatch, loading } = props;
  console.log(data);

  const columns = [
    {
      title: "名称",
      dataIndex: "partnerName",
    },
    {
      title: "价格类型",
      dataIndex: "priceTypeName",
    },
    {
      title: "性质",
      dataIndex: "partProperties",
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: string[] | number[]) =>
      dispatch({
        type: "test/saveSelectedRowKeys",
        payload: selectedRowKeys,
      }),
  };

  return (
    <div className="container-block" style={{ marginTop: 20 }}>
      <div id="components-table-demo-basic">
        <Table
          size="small"
          columns={columns}
          dataSource={data}
          rowKey="id"
          rowSelection={rowSelection}
          pagination={false}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default connect(({ test, loading }: TestConnectState) => ({
  data: test.data,
  selectedRowKeys: test.selectedRowKeys,
  loading: loading.effects["test/fetchData"],
}))(TestTable);
