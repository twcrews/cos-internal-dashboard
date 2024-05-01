import { ChartData } from "chart.js";
import { EventDay } from "src/app/dashboard/agenda/lib/types";
import { PersonTile } from "src/app/dashboard/person-tile/person-tile.component";
import { Rsvp } from "src/app/dashboard/rsvp-item/lib/types";

export type AppData = {
  newProfiles?: PersonTile[];
  rsvps?: Rsvp[];
  firstTimeVisitors?: PersonTile[];
  birthdays?: PersonTile[];
  newDonors?: PersonTile[];

  auditoriumData?: ChartData;
  kidsCheckInData?: ChartData;
  givingData?: ChartData;

  agenda?: EventDay[];
}