import { useState, useRef, useEffect, useCallback } from "react";
import { EventWithEndTime } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import styles from "./player.module.scss";

interface VideoPlayerProps {
  events: EventWithEndTime[];
}

export const Player = (props: VideoPlayerProps) => {
  const { events } = props;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [rectangles, setRectangles] = useState<EventWithEndTime[]>([]);

  const { selectedTime } = useSelector((state: RootState) => ({
    selectedTime: state.video.selectedTime,
  }));

  const handleVideoClick = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;

      const visibleRectangles = events.filter(
        (event) =>
          currentTime >= event.timestamp && currentTime <= event.endTime
      );

      setRectangles(visibleRectangles);
    }
  }, [events]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = selectedTime;
      handleTimeUpdate();
    }
  }, [handleTimeUpdate, selectedTime]);

  return (
    <div className={styles.playerContainer}>
      <video
        onAuxClickCapture={handleVideoClick}
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        className={styles.player}
        controls={true}
        width={1280}
        height={720}
        data-testid="player"
      />
      {rectangles.map((event, index) => (
        <div
          key={index}
          className={styles.rectangle}
          style={{
            left: event.zone.left,
            top: event.zone.top,
            width: event.zone.width,
            height: event.zone.height,
          }}
        />
      ))}
    </div>
  );
};
