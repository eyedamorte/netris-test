export interface Event {
  timestamp: number;
  duration: number;
  zone: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
}

export interface EventWithEndTime extends Event {
  endTime: number;
}
