import { peopleApiUrl } from "src/lib/configuration";
import { fetchCollection, fetchSingle } from "../../shared";
import { DashboardWidget } from "./types";

export const PeopleUndocumented = {
  dashboards: {
    select: (id: string) => ({
      widgets: {
        fetchAll: () =>
          fetchCollection<DashboardWidget>(`${peopleApiUrl}/dashboards/${id}/widgets`),
      },
    }),
  },
};