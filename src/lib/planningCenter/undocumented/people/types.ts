import { PlanningCenterResponseData } from '../../shared';

export type DashboardWidget = {
  comparison?: string;
  config?: DashboardWidgetConfig;
  created_at?: Date;
  data?: PlanningCenterResponseData<PeopleDashboards>;
  position?: number;
  refresh_after?: Date;
  refreshed_at?: Date;
  size?: string;
  status?: string;
  timeframe?: string;
  title?: string;
  updated_at?: Date;
  widget_type?: string;
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
