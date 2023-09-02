import { getPlanPersonStatus } from 'src/lib/planningCenter/services/2018-11-01/helpers';
import {
  NeededPosition,
  PlanPerson,
  PlanPersonStatus,
  Team,
} from 'src/lib/planningCenter/services/2018-11-01/types';
import {
  PlanningCenterCollectionResponse,
  PlanningCenterResponseData,
  PlanningCenterSingleResponse,
} from 'src/lib/planningCenter/shared';
import { Rsvp } from '../rsvp-item/lib/types';
import {
  CheckIn,
  CheckInTime,
  Event,
  EventTime,
  Person,
} from 'src/lib/planningCenter/check-ins/2023-04-05/types';
import { PersonTile } from '../person-tile/person-tile.component';
import { friendlyTimespanArray, timespan } from 'src/lib/formatting/date';

export const getRsvps = (value: PlanningCenterSingleResponse<any>): Rsvp[] => {
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
      (neededPositions.filter(
        (n) =>
          (n.relationships?.['team'].data as PlanningCenterResponseData<Team>)
            .id === t.id
      ).map(p => p?.attributes?.quantity ?? 0)
      .reduce((sum, number) => sum + number, 0)),
    declinedCount: getStatusCount(planPeople, t, PlanPersonStatus.Declined),
  }));
};

export const getFirstTimeVisitors = (
  value: PlanningCenterCollectionResponse<CheckIn>
): PersonTile[] => {
  const checkIns = value.data ?? [];

  const events: PlanningCenterResponseData<Event>[] =
    value.included?.filter((i) => i.type === 'Event') ?? [];
  const checkInTimes: PlanningCenterResponseData<CheckInTime>[] =
    value.included?.filter((i) => i.type === 'CheckInTime') ?? [];
  const eventTimes: PlanningCenterResponseData<EventTime>[] =
    value.included?.filter((i) => i.type === 'EventTime') ?? [];
  const people: PlanningCenterResponseData<Person>[] =
    value.included?.filter((i) => i.type === 'Person') ?? [];

  return checkIns.map((checkIn) => {
    const person = people.find(
      (p) =>
        p.id ===
        (
          checkIn.relationships?.['person']
            .data as PlanningCenterResponseData<Person>
        ).id
    );
    const event = events.find(
      (e) =>
        e.id ===
        (
          checkIn.relationships?.['event']
            .data as PlanningCenterResponseData<Event>
        ).id
    );
    const eventTime = eventTimes.find(
      (e) =>
        e.id ===
        (
          checkInTimes.find(
            (c) =>
              c.id ===
              (
                checkIn.relationships?.['check_in_times']
                  .data as PlanningCenterResponseData<CheckInTime>[]
              )[0].id
          )?.relationships?.['event_time']
            .data as PlanningCenterResponseData<EventTime>
        ).id
    );

    return {
      name: person?.attributes?.name ?? 'Unknown person',
      avatarUrl: person?.attributes?.demographic_avatar_url?.split('?')[0],
      caption: event?.attributes?.name ?? 'Unknown event',
      subCaption: `${
        friendlyTimespanArray(
          timespan(
            new Date(eventTime?.attributes?.starts_at ?? new Date()),
            new Date()
          )
        )[0]
      } ago`,
    };
  });
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
