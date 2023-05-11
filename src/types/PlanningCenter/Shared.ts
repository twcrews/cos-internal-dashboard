export type PlanningCenterResponse<T> = {
  links?: Record<string, string>;
  data?: PlanningCenterResponseData<T> | PlanningCenterResponseData<T>[];
  included?: any[];
  meta?: PlanningCenterMetadata;
  errors?: PlanningCenterResponseError[];
};

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
};

export type PlanningCenterResponseError = {
  code?: string;
  title?: string;
  status?: number;
  detail?: string;
};

type PlanningCenterRelationshipValue = {
  data?: PlanningCenterResponseDataBase;
};

type PlanningCenterResponseDataBase = {
  type?: string;
  id?: number;
};
