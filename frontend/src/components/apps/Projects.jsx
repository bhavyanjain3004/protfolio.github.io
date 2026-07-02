import React from "react";
import { PROJECTS, PROFILE } from "@/data/portfolio";

export default function Projects() {
  return (
    <div data-testid="app-projects" className="space-y-5">
      <h2 className="pixel-font" style={{ fontSize: 14, color: "var(--win-blue)" }}>
        PROJECTS.DIR
      </h2>
      <div className="border-t-2 border-black border-dashed" />
      {PROJECTS.map((p, i) => (
        <div
          key={i}
          className="p-3"
          style={{
            background: "#fff",
            border: "2px solid var(--pixel-ink)",
            boxShadow: "3px 3px 0 0 var(--pixel-ink)",
          }}
          data-testid={`project-card-${i}`}
        >
          <div className="flex flex-wrap justify-between items-baseline gap-2">
            <div className="pixel-font" style={{ fontSize: 12, color: "var(--win-blue)" }}>
              [{String(i + 1).padStart(2, "0")}] {p.title}
            </div>

          </div>
          <div className="mt-1" style={{ color: "var(--win-shadow)" }}>{p.subtitle}</div>
          <div className="my-2 flex flex-wrap">
            {p.stack.map((s, j) => (
              <span key={j} className="pixel-chip" style={{ background: "var(--pixel-yellow)" }}>
                {s}
              </span>
            ))}
          </div>
          <ul className="space-y-1">
            {p.bullets.map((b, j) => (
              <li key={j}>▸ {b}</li>
            ))}
          </ul>
        </div>
      ))}
      
      <div className="flex justify-center pt-2">
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="win-btn"
          style={{
            background: "var(--pixel-green)",
            color: "#fff",
            fontFamily: "\"Press Start 2P\", monospace",
            fontSize: 14,
            padding: "14px 24px",
            marginTop: "10px",
          }}
        >
          + VIEW MORE ON GITHUB
        </a>
      </div>
    </div>
  );
}
