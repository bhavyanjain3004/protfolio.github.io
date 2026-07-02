import React from "react";
import { PROFILE } from "@/data/portfolio";

export default function Resume() {
  return (
    <div data-testid="app-resume" className="space-y-4 text-center">
      <h2 className="pixel-font" style={{ fontSize: 14, color: "var(--win-blue)" }}>
        RESUME.PDF
      </h2>
      <div className="border-t-2 border-black border-dashed" />
      <div className="flex flex-col items-center gap-4 py-4">
        <div
          style={{
            width: 110,
            height: 140,
            background: "#fff",
            border: "3px solid var(--pixel-ink)",
            boxShadow: "4px 4px 0 0 var(--pixel-ink)",
            padding: 8,
            textAlign: "left",
            fontFamily: "VT323, monospace",
            fontSize: 11,
            lineHeight: 1.1,
            transform: "rotate(-3deg)",
          }}
        >
          <div className="pixel-font" style={{ fontSize: 7, marginBottom: 4 }}>
            CV.PDF
          </div>
          <div style={{ background: "#000", height: 2, width: "80%", marginBottom: 3 }} />
          <div style={{ background: "#000", height: 2, width: "60%", marginBottom: 6 }} />
          <div style={{ background: "#777", height: 1, width: "100%", marginBottom: 2 }} />
          <div style={{ background: "#777", height: 1, width: "90%", marginBottom: 2 }} />
          <div style={{ background: "#777", height: 1, width: "95%", marginBottom: 2 }} />
          <div style={{ background: "#777", height: 1, width: "70%", marginBottom: 6 }} />
          <div style={{ background: "#777", height: 1, width: "100%", marginBottom: 2 }} />
          <div style={{ background: "#777", height: 1, width: "85%", marginBottom: 2 }} />
        </div>
        <p style={{ fontSize: 18 }}>
          Download a printable copy of {PROFILE.name}&apos;s résumé.
        </p>
        <a
          href="/bhavya_resume.pdf"
          download
          className="win-btn"
          data-testid="resume-download-btn"
          style={{
            background: "var(--pixel-green)",
            color: "#fff",
            fontFamily: "Press Start 2P",
            fontSize: 11,
            padding: "10px 18px",
          }}
        >
          ⬇ DOWNLOAD RESUME
        </a>
      </div>
    </div>
  );
}
