import { getPlanPersonStatus } from 'src/lib/planningCenter/services/2018-11-01/helpers';
import {
  PlanPerson,
  PlanPersonStatus,
  Team,
} from 'src/lib/planningCenter/services/2018-11-01/types';
import {
  PlanningCenterResponseData,
  PlanningCenterSingleResponse,
} from 'src/lib/planningCenter/shared';
import { Rsvp } from './types';

export const getRsvps = (value: PlanningCenterSingleResponse<any>): Rsvp[] => {
  const includedData = value.included as PlanningCenterResponseData<any>[];
  const planPeople = filterData(includedData, 'PlanPerson');

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
    unconfirmedCount: getStatusCount(
      planPeople,
      t,
      PlanPersonStatus.Unconfirmed
    ),
    declinedCount: getStatusCount(planPeople, t, PlanPersonStatus.Declined),
  }));
};

const filterData = (data: PlanningCenterResponseData<any>[], type: string) =>
  data.filter((i) => i.type === type);

const getTeamId = (person: PlanningCenterResponseData<PlanPerson>) =>
  (person.relationships?.['team'].data as PlanningCenterResponseData<Team>).id;

const getStatusCount = (
  people: PlanningCenterResponseData<PlanPerson>[],
  team: PlanningCenterResponseData<Team>,
  status: PlanPersonStatus
) =>
  people.filter(
    (p) => getTeamId(p) === team.id && getPlanPersonStatus(p) === status
  ).length;
