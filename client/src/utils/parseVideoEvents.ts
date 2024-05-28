import { Event, EventWithEndTime } from "../types";

export const parseAndSortVideoEvents = (
  videoEvents: Event[]
): EventWithEndTime[] => {
  return videoEvents
    .sort((a, b) => {
      return a.timestamp - b.timestamp;
    })
    .map((event) => {
      return { ...event, endTime: event.timestamp + event.duration };
    });
};
