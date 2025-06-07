import { ChartData } from 'chart.js';
import { DateTime } from 'luxon';
import { PlanningCenterSingleResponse } from '../../../../lib/planningCenter/shared';
import {
  DashboardWidget,
  PeopleDashboardsData,
} from '../../../../lib/planningCenter/undocumented/people/types';

export const parseWeeklyChartData = (
  value: PlanningCenterSingleResponse<DashboardWidget>,
  currency?: boolean
): ChartData<'bar'> => {
  const rawData: PeopleDashboardsData[] =
    value.data?.attributes?.data?.attributes?.data ?? [];

  let prevData = rawData.map((d) => (d.aggregations ?? [])[0].comparison ?? 0);
  let currentData = rawData.map((d) => (d.aggregations ?? [])[0].current ?? 0);

  if (currency) {
    prevData = prevData.map(p => parseFloat((p / 100).toFixed(2)));
    currentData = currentData.map(p => parseFloat((p / 100).toFixed(2)));
  }

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
        data: prevData,
        backgroundColor: '#367',
        borderRadius: 4,
      },
      {
        label: DateTime.local().year.toString(),
        data: currentData,
        backgroundColor: '#4BD',
        borderRadius: 4,
      },
    ],
  };
};

export const parseMonthlyChartData = (
  value: PlanningCenterSingleResponse<DashboardWidget>
): ChartData<'bar'> => {
  const result = parseWeeklyChartData(value, true);
  result.labels =
    result.labels?.map((l) =>
      DateTime.fromFormat(l as string, 'LLL dd').toFormat('LLL')
    ) ?? result.labels;
  return result;
};