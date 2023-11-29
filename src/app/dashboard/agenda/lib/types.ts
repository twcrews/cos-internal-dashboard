import { DateTime } from "luxon"
import { VEvent } from "ts-ics";

export type Day = {
	day: DateTime;
	events: NamedEvent[];
}

export type NamedEvent = {
	name: string;
	event: VEvent;
}
