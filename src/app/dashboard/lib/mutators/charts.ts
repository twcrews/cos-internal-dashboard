import { ChartData } from 'chart.js';
import { DateTime } from 'luxon';
import { PlanningCenterSingleResponse } from 'src/lib/planningCenter/shared';
import {
  DashboardWidget,
  PeopleDashboardsData,
} from 'src/lib/planningCenter/undocumented/people/types';

export const parseWeeklyChartData = (
  value: PlanningCenterSingleResponse<DashboardWidget>
): ChartData<'bar'> => {
  const rawData: PeopleDashboardsData[] =
    value.data?.attributes?.data?.attributes?.data ?? [];
  return {
    labels: rawData.map((d) =>
      DateTime.fromFormat(
        d.period?.split('/')[1] ?? '1970-01-01',
        'yyyy-MM-dd'
      ).toFormat('LLL dd')
    ),
    datasets: [
      {
        label: (DateTime.local().year - 1).toString(),
        data: rawData.map((d) => (d.aggregations ?? [])[0].comparison ?? 0),
        backgroundColor: '#E18888',
        borderRadius: 4,
      },
      {
        label: DateTime.local().year.toString(),
        data: rawData.map((d) => (d.aggregations ?? [])[0].current ?? 0),
        backgroundColor: '#E14444',
        borderRadius: 4,
      },
    ],
  };
};

export const parseMonthlyChartData = (
  value: PlanningCenterSingleResponse<DashboardWidget>
): ChartData<'bar'> => {
  const result = parseWeeklyChartData(value);
  result.labels =
    result.labels?.map((l) =>
      DateTime.fromFormat(l as string, 'LLL dd').toFormat('LLL')
    ) ?? result.labels;
  return result;
};
