import React from "react";
import { EDUCATION } from "@/data/portfolio";

export default function Education() {
  return (
    <div data-testid="app-education" className="space-y-4">
      <h2 className="pixel-font" style={{ fontSize: 14, color: "var(--win-blue)" }}>
        EDUCATION.LOG
      </h2>
      <div className="border-t-2 border-black border-dashed" />
      {EDUCATION.map((e, i) => (
        <div key={i} className="space-y-1">
          <div className="pixel-font" style={{ fontSize: 11 }}>{e.school}</div>
          <div>{e.degree}</div>
          <div style={{ color: "var(--win-shadow)" }}>{e.spec}</div>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="pixel-chip">{e.period}</span>
            <span className="pixel-chip" style={{ background: "var(--pixel-yellow)" }}>{e.gpa}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
