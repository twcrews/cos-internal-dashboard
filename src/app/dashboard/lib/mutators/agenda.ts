import {
  Event,
  EventInstance,
  Tag,
} from 'src/lib/planningCenter/calendar/types';
import {
  PlanningCenterCollectionResponse,
  PlanningCenterResponseData,
  PlanningCenterResponseDataBase,
} from 'src/lib/planningCenter/shared';
import { EventDay } from '../../agenda/lib/types';
import { DateTime } from 'luxon';

export const parseAgenda = (
  value: PlanningCenterCollectionResponse<EventInstance>
): EventDay[] => {
  if (!value.data) {
    return [];
  }

  const data = value.data;
  const included = value.included as PlanningCenterResponseData<Event | Tag>[];
  const days: EventDay[] = [];
  value.data?.forEach((eventInstance) => {
    const event = included.find(
      (i) =>
        i.type === 'Event' &&
        i.id ===
          (
            eventInstance.relationships?.['event']
              .data as PlanningCenterResponseDataBase
          )?.id
    );
    const tags = (
      included.filter(
        (i) =>
          i.type === 'Tag' &&
          (
            eventInstance.relationships?.['tags']
              .data as PlanningCenterResponseDataBase[]
          )
            .map((t) => t.id)
            .includes(i.id)
      ) as PlanningCenterResponseData<Tag>[]
    )
      .map((d) => d.attributes)
      .filter((t) => t !== undefined) as Tag[];
    const startTimeJS = eventInstance.attributes?.starts_at;
    const endTimeJS = eventInstance.attributes?.ends_at;
    if (!startTimeJS || !endTimeJS) {
      return;
    }
    const startTime = DateTime.fromJSDate(new Date(startTimeJS));
    const endTime = DateTime.fromJSDate(new Date(endTimeJS));
    const startDate = startTime.startOf('day');

    const existingDay = days.find(
      (d) => d.date.toISODate() === startTime.toISODate()
    );

    const agendaEvent = {
      title: event?.attributes?.name ?? 'Untitled Event',
      subtitle: eventInstance.attributes?.all_day_event
        ? 'All day'
        : `${startTime.toFormat('h:mm a')} – ${endTime.toFormat('h:mm a')}`,
      tags: tags,
    };

    if (!existingDay) {
      days.push({
        date: startDate,
        events: [agendaEvent],
      });
    } else {
      existingDay.events.push(agendaEvent);
    }
  });
  return days;
};
