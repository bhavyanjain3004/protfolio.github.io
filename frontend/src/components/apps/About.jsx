import React from "react";
import { PROFILE, ADDITIONAL } from "@/data/portfolio";

export default function About() {
  return (
    <div data-testid="app-about" className="space-y-3">
      <h2 className="pixel-font" style={{ fontSize: 14, color: "var(--win-blue)" }}>
        {PROFILE.name}
      </h2>
      <p className="pixel-font" style={{ fontSize: 9 }}>
        {PROFILE.tagline}
      </p>
      <div className="border-t-2 border-black border-dashed my-3" />
      {PROFILE.about.map((p, i) => (
        <p key={i} style={{ fontSize: 20 }}>
          {">"} {p}
        </p>
      ))}
      <div className="border-t-2 border-black border-dashed my-3" />
      <h3 className="pixel-font" style={{ fontSize: 10 }}>QUICK STATS</h3>
      <ul className="list-none">
        {ADDITIONAL.map((a, i) => (
          <li key={i}>★ {a}</li>
        ))}
      </ul>
    </div>
  );
}
