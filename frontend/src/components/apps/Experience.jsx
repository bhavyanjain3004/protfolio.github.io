import React from "react";
import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <div data-testid="app-experience" className="space-y-5">
      <h2 className="pixel-font" style={{ fontSize: 14, color: "var(--win-blue)" }}>
        WORK.HISTORY
      </h2>
      <div className="border-t-2 border-black border-dashed" />
      {EXPERIENCE.map((e, i) => (
        <div key={i} className="space-y-2">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div className="pixel-font" style={{ fontSize: 11 }}>
              {e.role}
            </div>
            <span className="pixel-chip">{e.period}</span>
          </div>
          <div style={{ color: "var(--win-blue)" }}>@ {e.company}</div>
          <ul className="space-y-1 ml-1">
            {e.bullets.map((b, j) => (
              <li key={j}>▸ {b}</li>
            ))}
          </ul>
          {i < EXPERIENCE.length - 1 && <div className="border-t-2 border-black border-dotted mt-3" />}
        </div>
      ))}
    </div>
  );
}
