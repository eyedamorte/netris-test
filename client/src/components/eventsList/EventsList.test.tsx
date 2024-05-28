import { render, screen } from "@testing-library/react";
import { EventsList } from "./EventsList";
import { describe, expect, it, vitest } from "vitest";
import { EventWithEndTime } from "../../types";

describe("EventsList", () => {
  const events = [
    { timestamp: 0 },
    { timestamp: 100 },
    { timestamp: 200 },
  ] as EventWithEndTime[];

  vitest.mock("react-redux", () => ({
    useSelector: vitest.fn(),
    useDispatch: () => vitest.fn(),
  }));

  it("correctly displays the number of events", () => {
    render(<EventsList eventsList={events} />);
    const eventItems = screen.getAllByTestId(/^event-item-/);
    expect(eventItems.length).toBe(events.length);
  });
});
