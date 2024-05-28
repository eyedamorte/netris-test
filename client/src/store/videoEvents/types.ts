import { EventWithEndTime } from "../../types";

export type VideoEventsState = {
  videoEvents: EventWithEndTime[] | null;
  pending: boolean;
};
