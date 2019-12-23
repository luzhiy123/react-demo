import { ConnectState } from "@/models/connect";
import { TestModelState } from "./test";

export interface TestConnectState extends ConnectState {
  test: TestModelState;
}
