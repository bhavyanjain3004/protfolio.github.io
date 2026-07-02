import React from "react";
import { PROFILE } from "@/data/portfolio";

const Row = ({ label, value, href, testId }) => (
  <div
    className="flex flex-wrap items-center justify-between gap-2 p-2"
    style={{
      background: "#fff",
      border: "2px solid var(--pixel-ink)",
      boxShadow: "2px 2px 0 0 var(--pixel-ink)",
    }}
  >
    <div className="pixel-font" style={{ fontSize: 10, color: "var(--win-blue)" }}>
      {label}
    </div>
    {href ? (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        data-testid={testId}
        style={{ fontSize: 18 }}
      >
        {value}
      </a>
    ) : (
      <div data-testid={testId} style={{ fontSize: 18 }}>{value}</div>
    )}
  </div>
);

export default function Contact() {
  return (
    <div data-testid="app-contact" className="space-y-3">
      <h2 className="pixel-font" style={{ fontSize: 14, color: "var(--win-blue)" }}>
        CONTACT.INI
      </h2>
      <div className="border-t-2 border-black border-dashed" />
      <p style={{ fontSize: 18 }}>
        {">"} Reach out anytime — DM or email.
      </p>
      <div className="space-y-2 mt-2">
        <Row label="EMAIL" value={PROFILE.email} href={`mailto:${PROFILE.email}`} testId="contact-email" />
        <Row label="PHONE" value={PROFILE.phone} href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`} testId="contact-phone" />
        <Row label="GITHUB" value="github.com/bhavyanjain3004" href={PROFILE.github} testId="contact-github" />
        <Row label="LINKEDIN" value="linkedin.com/in/bhavya-jain-2424b0250" href={PROFILE.linkedin} testId="contact-linkedin" />
        <Row label="LOCATION" value={PROFILE.location} testId="contact-location" />
      </div>
      <div
        className="mt-4 p-3 text-center"
        style={{
          background: "var(--pixel-yellow)",
          border: "2px solid var(--pixel-ink)",
          boxShadow: "3px 3px 0 0 var(--pixel-ink)",
        }}
      >
        <span className="pixel-font" style={{ fontSize: 10 }}>
          THANKS FOR VISITING ♥
        </span>
      </div>
    </div>
  );
}
