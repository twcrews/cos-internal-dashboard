import { getPlanPersonStatus } from "../../../../lib/planningCenter/services/2018-11-01/helpers";
import { PlanPerson, Team, PlanPersonStatus } from "../../../../lib/planningCenter/services/2018-11-01/types";
import { PlanningCenterResponseData } from "../../../../lib/planningCenter/shared";


export const filterData = (data: PlanningCenterResponseData<any>[], type: string) =>
  data.filter((i) => i.type === type);

export const getTeamId = (person: PlanningCenterResponseData<PlanPerson>) =>
  (person.relationships?.['team'].data as PlanningCenterResponseData<Team>).id;

export const getStatusCount = (
  people: PlanningCenterResponseData<PlanPerson>[],
  team: PlanningCenterResponseData<Team>,
  status: PlanPersonStatus
) =>
  people.filter(
    (p) => getTeamId(p) === team.id && getPlanPersonStatus(p) === status
  ).length;
