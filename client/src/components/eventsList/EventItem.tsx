import { timestampToTime } from "../../utils";

import styles from "./eventsList.module.scss";

type EventItemType = {
  timestamp: number;
  onClick: (timestamp: number) => void;
};

export const EventItem = (props: EventItemType) => {
  const { timestamp, onClick } = props;

  return (
    <button
      data-testid={`event-item-${timestamp}`}
      onClick={() => onClick(timestamp)}
      className={styles.eventItemStyles}
    >
      {timestampToTime(timestamp)}
    </button>
  );
};
