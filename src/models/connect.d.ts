import { AnyAction } from "redux";
import { RouterTypes } from "umi";

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login?: boolean;
  };
}

export interface ConnectState {
  loading: Loading;
}

export interface Route {
  routes?: Route[];
}

/**
 * @type T: Params matched in dynamic routing
 */
export interface ConnectProps<T = {}> extends Partial<RouterTypes<Route, T>> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch?<K = any>(action: AnyAction): K;
}
