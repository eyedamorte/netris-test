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

  const onEventClick = (event: EventWithEndTime) => {
    dispatch(setSelectedTime(event.timestamp));
  };

  return (
    <div className={styles.eventListStyles}>
      {eventsList?.map((event) => {
        return (
          <EventItem
            key={event.timestamp}
            event={event}
            onClick={onEventClick}
          />
        );
      })}
    </div>
  );
};
