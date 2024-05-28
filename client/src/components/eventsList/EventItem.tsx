import { EventWithEndTime } from "../../types";
import { timestampToTime } from "../../utils";

import styles from "./eventsList.module.scss";

type EventItemType = {
  event: EventWithEndTime;
  onClick: (event: EventWithEndTime) => void;
};

export const EventItem = (props: EventItemType) => {
  const { event, onClick } = props;

  return (
    <button onClick={() => onClick(event)} className={styles.eventItemStyles}>
      {timestampToTime(event.timestamp)}
    </button>
  );
};
