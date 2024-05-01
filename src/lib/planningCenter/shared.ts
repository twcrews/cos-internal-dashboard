import { planningCenterApiKey } from '../configuration';

export interface PlanningCenterSingleResponse<T>
  extends PlanningCenterResponseBase {
  data?: PlanningCenterResponseData<T>;
}

export interface PlanningCenterCollectionResponse<T>
  extends PlanningCenterResponseBase {
  data?: PlanningCenterResponseData<T>[];
}

export interface PlanningCenterResponseData<T>
  extends PlanningCenterResponseDataBase {
  attributes?: T;
  relationships?: Record<string, PlanningCenterRelationshipValue>;
  links?: Record<string, string>;
}

export type PlanningCenterMetadata = {
  total_count?: number;
  count?: number;
  next?: {
    offset?: number;
  };
  prev?: {
    offset?: number;
  };
  can_order_by?: string[];
  can_query_by?: string[];
  can_include?: string[];
  can_filter?: string[];
  parent?: PlanningCenterResponseDataBase;
  description?: string;
  help?: string;
};

export type PlanningCenterResponseError = {
  code?: string;
  title?: string;
  status?: number;
  detail?: string;
};

type PlanningCenterResponseBase = {
  links?: Record<string, string>;
  included?: any[];
  meta?: PlanningCenterMetadata;
  errors?: PlanningCenterResponseError[];
};

type PlanningCenterRelationshipValue = {
  data?: PlanningCenterResponseDataBase | PlanningCenterResponseDataBase[];
};

export type PlanningCenterResponseDataBase = {
  type?: string;
  id?: string;
};

export const fetchCollection = <T>(url: string) =>
  fetch(url, {
    headers: {
      'X-Functions-Key': planningCenterApiKey.get() ?? '',
    },
  })
    .then((response) => response.json())
    .then((data) => data as PlanningCenterCollectionResponse<T>);

export const fetchSingle = <T>(url: string) =>
  fetch(url, {
    headers: {
      'X-Functions-Key': planningCenterApiKey.get() ?? '',
    },
  })
    .then((response) => response.json())
    .then((data) => data as PlanningCenterSingleResponse<T>);

export const fetchAvatar = (url: string) =>
  fetch(url, {
    headers: {
      'X-Functions-Key': planningCenterApiKey.get() ?? '',
    },
  }).then((response) => response.blob());
