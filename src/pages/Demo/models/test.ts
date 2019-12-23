import { Effect } from "dva";
import { Reducer } from "redux";
import { loadTestData } from "@/services/api";

export interface TestModelState {
  data: [];
  selectedRowKeys: string[] | number[];
  totalPage: number;
  totalSize: number;
}

const defaultState: TestModelState = {
  data: [],
  selectedRowKeys: [],
  totalPage: 0,
  totalSize: 0,
};

export interface TestModelType {
  namespace: string;
  state: TestModelState;
  effects: {
    fetchData: Effect;
  };
  reducers: {
    saveData: Reducer<TestModelState>;
    selectedRowKeys: Reducer<TestModelState>;
  };
}

const BaseDataModel: TestModelType = {
  namespace: "test",

  state: {
    ...defaultState,
  },

  effects: {
    *fetchData({ payload }, { put, call }) {
      const res = yield call(loadTestData, payload);
      yield put({
        type: "saveData",
        payload: res,
      });
    },
  },
  reducers: {
    saveData(state, { payload }) {
      return {
        ...defaultState,
        ...state,
        data: payload.rows,
        totalSize: payload.totalSize,
        totalPage: payload.totalPage,
      };
    },
    selectedRowKeys(state, { payload }) {
      return {
        ...defaultState,
        ...state,
        selectedRowKeys: payload,
      };
    },
  },
};

export default BaseDataModel;
