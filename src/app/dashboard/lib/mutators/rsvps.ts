import { NeededPosition, Team, PlanPersonStatus } from "../../../../lib/planningCenter/services/2018-11-01/types";
import { PlanningCenterSingleResponse, PlanningCenterResponseData } from "../../../../lib/planningCenter/shared";
import { Rsvp } from "../../rsvp-item/lib/types";
import { filterData, getTeamId, getStatusCount } from "./mutation";

export const parseRsvps = (value: PlanningCenterSingleResponse<any>): Rsvp[] => {
  const includedData = value.included as PlanningCenterResponseData<any>[];
  const planPeople = filterData(includedData, 'PlanPerson');
  const neededPositions: PlanningCenterResponseData<NeededPosition>[] =
    filterData(includedData, 'NeededPosition');

  const teams: PlanningCenterResponseData<Team>[] = filterData(
    includedData,
    'Team'
  );

  const visibleTeams = teams.filter((t) =>
    planPeople.map((p) => getTeamId(p)).includes(t.id)
  );

  return visibleTeams.map((t) => ({
    title: t.attributes?.name ?? 'Unknown team',
    confirmedCount: getStatusCount(planPeople, t, PlanPersonStatus.Confirmed),
    unconfirmedCount:
      getStatusCount(planPeople, t, PlanPersonStatus.Unconfirmed) +
      neededPositions
        .filter(
          (n) =>
            (n.relationships?.['team'].data as PlanningCenterResponseData<Team>)
              .id === t.id
        )
        .map((p) => p?.attributes?.quantity ?? 0)
        .reduce((sum, number) => sum + number, 0),
    declinedCount: getStatusCount(planPeople, t, PlanPersonStatus.Declined),
  }));
};