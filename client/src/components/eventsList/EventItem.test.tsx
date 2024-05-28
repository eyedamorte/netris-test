import { render, fireEvent, screen } from "@testing-library/react";
import { EventItem } from "./EventItem";
import { describe, expect, it, vitest } from "vitest";
import { timestampToTime } from "../../utils";

describe("EventItem", () => {
  const timestamp = 6.160356073346696;

  it("calls the onClick function when clicked", () => {
    const onClick = vitest.fn();
    render(<EventItem timestamp={timestamp} onClick={onClick} />);

    const eventItem = screen.getByText(timestampToTime(timestamp));

    fireEvent.click(eventItem);

    expect(onClick).toHaveBeenCalledWith(timestamp);
  });
});
