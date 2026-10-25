import { describe, expect, it } from "vitest";
import { guard360Metrics } from "@/lib/portfolio-metrics";

describe("Approved Guard360 outcomes", () => {
  it("uses a 50% reduction in related complaints", () => {
    expect(guard360Metrics.fewerComplaintsPercent).toBe(50);
  });
  it("uses a 40% reduction in manual triage effort", () => {
    expect(guard360Metrics.lessManualTriagePercent).toBe(40);
  });
});
