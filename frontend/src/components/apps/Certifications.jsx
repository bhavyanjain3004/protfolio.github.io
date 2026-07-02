import React from "react";
import { CERTIFICATIONS } from "@/data/portfolio";

export default function Certifications() {
  return (
    <div data-testid="app-certifications" className="space-y-4">
      <h2 className="pixel-font" style={{ fontSize: 14, color: "var(--win-blue)" }}>
        CERTIFICATES.SYS
      </h2>
      <div className="border-t-2 border-black border-dashed" />
      <ul className="space-y-3">
        {CERTIFICATIONS.map((c, i) => (
          <li
            key={i}
            className="flex justify-between items-center p-3"
            style={{
              background: "#fff",
              border: "2px solid var(--pixel-ink)",
              boxShadow: "2px 2px 0 0 var(--pixel-ink)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                style={{
                  width: 28,
                  height: 28,
                  background: "var(--pixel-yellow)",
                  border: "2px solid var(--pixel-ink)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Press Start 2P",
                  fontSize: 10,
                }}
              >
                ★
              </div>
              <div>{c.name}</div>
            </div>
            <span className="pixel-chip">{c.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
