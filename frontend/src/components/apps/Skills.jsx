import React from "react";
import { SKILLS } from "@/data/portfolio";

export default function Skills() {
  return (
    <div data-testid="app-skills" className="space-y-4">
      <h2 className="pixel-font" style={{ fontSize: 14, color: "var(--win-blue)" }}>
        SKILLS.DAT
      </h2>
      <div className="border-t-2 border-black border-dashed" />
      {Object.entries(SKILLS).map(([cat, arr]) => (
        <div key={cat}>
          <div className="pixel-font mb-2" style={{ fontSize: 10 }}>{cat.toUpperCase()}</div>
          <div className="flex flex-wrap">
            {arr.map((s, i) => (
              <span
                key={i}
                className="pixel-chip"
                data-testid={`skill-${cat}-${i}`}
                style={{
                  background:
                    cat === "Languages & Frameworks"
                      ? "var(--pixel-green)"
                      : cat === "Tools & Cloud"
                      ? "var(--pixel-yellow)"
                      : "#fff",
                  color: cat === "Languages & Frameworks" ? "#fff" : "#1b1b1b",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
