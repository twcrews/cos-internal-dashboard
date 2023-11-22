import { DateTime } from "luxon";
import { CheckIn, CheckInTime, EventTime, Event } from "src/lib/planningCenter/check-ins/2023-04-05/types";
import { Person, BirthdayPeople } from "src/lib/planningCenter/people/2023-03-21/types";
import { PlanningCenterCollectionResponse, PlanningCenterResponseData, PlanningCenterSingleResponse } from "src/lib/planningCenter/shared";
import { PersonTile } from "../../person-tile/person-tile.component";

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
      subCaption:
        DateTime.fromISO(
          eventTime?.attributes?.starts_at?.toString() ?? ''
        ).toFormat('MMMM d') ?? undefined,
    };
  });
};

export const getBirthdays = (
  value: PlanningCenterSingleResponse<BirthdayPeople>
): PersonTile[] => {
  const people = value.data?.attributes?.people ?? [];

  return people.map((person) => {
    const birthdate = DateTime.fromISO(person.birthdate?.toString() ?? '');
    const [, month, day] = (person.birthdate?.toString() ?? '--').split('-');
    const birthdateThisYear = DateTime.fromISO(
      `${DateTime.now().year}-${month}-${day}`
    );

    return {
      name: person.name ?? 'Unknown person',
      avatarUrl: person.avatar,
      caption: `${birthdateThisYear.toRelativeCalendar()} | ${
        Math.trunc(birthdate.diffNow().negate().as('years'))
      } years old`,
    };
  }).slice(0, 10);
};