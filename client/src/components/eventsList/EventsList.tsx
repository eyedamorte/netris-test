import { useDispatch } from "react-redux";
import { EventWithEndTime } from "../../types";
import { EventItem } from "./EventItem";
import { setSelectedTime } from "../../store";

import styles from "./eventsList.module.scss";

type EventsListType = {
  eventsList: EventWithEndTime[] | null;
};

export const EventsList = (props: EventsListType) => {
  const { eventsList } = props;

  const dispatch = useDispatch();

  const onEventClick = (timestamp: number) => {
    dispatch(setSelectedTime(timestamp));
  };

  return (
    <div className={styles.eventListStyles} data-testid="event-list">
      {eventsList?.map((event) => {
        return (
          <EventItem
            data-testid={`event-item-${event.timestamp}`}
            key={event.timestamp}
            timestamp={event.timestamp}
            onClick={onEventClick}
          />
        );
      })}
    </div>
  );
};
