import { WrappedFormUtils } from "antd/lib/form/Form";
import { Component } from "react";

export interface PartnerModel {
  partnerKey?: string;
  partnerName?: string;
  priceType?: string;
  status?: number;
  properties?: string[];
  store?: string[];
}

export interface UnOpenPartnerModel {
  key?: string;
  name?: string;
  verifyMode?: string;
  tips?: string;
}

export interface PartModel {
  partId?: number;
  partNo?: string;
  partName?: string;
  brand?: string;
  factory?: string;
  insureCertType?: string;
}

export interface PartsStoreModel {
  depotNo: string;
  depotName: string;
}

export interface PriceTypeModel {
  code: string;
  name: string;
}

export interface PaginationData {
  page: number;
  pageSize: number | undefined;
}

export interface FormCreateProps {
  form: WrappedFormUtils;
}

export interface FormCreateRef<T> extends Component<T> {
  getForm: () => WrappedFormUtils;
}
