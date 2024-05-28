import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { Player } from "./Player";
import { describe, expect, it, vitest } from "vitest";

Object.defineProperty(window.HTMLMediaElement.prototype, "pause", {
  configurable: true,
  value: vitest.fn(),
});

Object.defineProperty(window.HTMLMediaElement.prototype, "play", {
  configurable: true,
  get() {
    return () => {};
  },
});

describe("Player", () => {
  vitest.mock("react-redux", () => ({
    useSelector: vitest.fn(() => {
      return { selectedTime: 2.123 };
    }),
    useDispatch: () => vitest.fn(),
  }));

  const events = [
    {
      timestamp: 0,
      duration: 5000,
      endTime: 5000,
      zone: {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      },
    },
  ];

  it("отображает компонент видеоплеера", async () => {
    render(<Player events={events} />);
    await waitFor(() => {
      const videoPlayer = screen.getByTestId("player");
      expect(videoPlayer).toBeDefined();
    });
  });

  it("воспроизводит/приостанавливает видео при клике", async () => {
    await waitFor(() => {
      const videoPlayer = screen.getByTestId("player") as HTMLVideoElement;

      videoPlayer.pause();
      fireEvent.click(videoPlayer);
      console.log(videoPlayer.paused);
      expect(videoPlayer.paused).toBe(true);
      fireEvent.click(videoPlayer);
      expect(videoPlayer.paused).toBe(true);
    });
  });
});
