import { PlanningCenterResponseData } from '../../shared';

export type DashboardWidget = {
  data?: PeopleDashboards;
  refreshed_at?: Date;
  error?: any;
  status?: string;
};

export type DashboardWidgetConfig = {
  segments?: {
    headcounts?: string;
  };
};

export type PeopleDashboards = {
  calculated_at?: Date;
  comparison?: string;
  data?: PeopleDashboardsData[];
  timeframe?: string;
  type?: string;
};

export type PeopleDashboardsData = {
  aggregations?: PeopleDashboardsDataAggregation[];
  period?: string;
};

export type PeopleDashboardsDataAggregation = {
  comparison?: number;
  current?: number;
  description?: string;
  id?: number;
};
