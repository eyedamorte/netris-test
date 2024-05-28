import { expect, test } from "vitest";
import { timestampToTime } from "./timestampToTime";

test("timestamp to format. 0:6:160", () => {
  expect(timestampToTime(6.160356073346696)).toBe("0:6:160");
});
