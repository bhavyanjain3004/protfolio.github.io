import React, { useState } from "react";
import Window from "@/components/Window";
import Taskbar from "@/components/Taskbar";
import {
  FolderIcon,
  ComputerIcon,
  DocIcon,
  BriefcaseIcon,
  StarIcon,
  HeartIcon,
  MailIcon,
  GamepadIcon,
  CapIcon,
  CertIcon,
  UserIcon,
} from "@/components/PixelIcons";
import About from "@/components/apps/About";
import Education from "@/components/apps/Education";
import Experience from "@/components/apps/Experience";
import Skills from "@/components/apps/Skills";
import Projects from "@/components/apps/Projects";
import Certifications from "@/components/apps/Certifications";
import Resume from "@/components/apps/Resume";
import Contact from "@/components/apps/Contact";
import { PROFILE } from "@/data/portfolio";

const APPS = [
  { id: "about", title: "ABOUT.EXE", Icon: UserIcon, Component: About, w: 520, h: 460, x: 70, y: 60 },
  { id: "education", title: "EDUCATION.EXE", Icon: CapIcon, Component: Education, w: 520, h: 360, x: 130, y: 100 },
  { id: "experience", title: "EXPERIENCE.EXE", Icon: BriefcaseIcon, Component: Experience, w: 600, h: 500, x: 180, y: 70 },
  { id: "projects", title: "PROJECTS.EXE", Icon: GamepadIcon, Component: Projects, w: 640, h: 540, x: 220, y: 90 },
  { id: "skills", title: "SKILLS.EXE", Icon: StarIcon, Component: Skills, w: 540, h: 460, x: 270, y: 110 },
  { id: "certs", title: "CERTS.EXE", Icon: CertIcon, Component: Certifications, w: 520, h: 380, x: 320, y: 80 },
  { id: "resume", title: "RESUME.EXE", Icon: DocIcon, Component: Resume, w: 480, h: 480, x: 360, y: 70 },
  { id: "contact", title: "CONTACT.EXE", Icon: MailIcon, Component: Contact, w: 520, h: 480, x: 410, y: 100 },
];

export default function Desktop() {
  const [openIds, setOpenIds] = useState(["about"]);
  const [focusOrder, setFocusOrder] = useState(["about"]);
  const [startOpen, setStartOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(true);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const openApp = (id) => {
    setStartOpen(false);
    setOpenIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setFocusOrder((prev) => [...prev.filter((x) => x !== id), id]);
  };
  const closeApp = (id) => {
    setOpenIds((prev) => prev.filter((x) => x !== id));
    setFocusOrder((prev) => prev.filter((x) => x !== id));
  };
  const focusApp = (id) => {
    setFocusOrder((prev) => [...prev.filter((x) => x !== id), id]);
  };

  return (
    <div className="fixed inset-0 overflow-hidden" data-testid="desktop">
      {/* Pixel landscape background */}
      <div className="pixel-landscape">
        <div className="glow-ellipse" />
        <div className="star" style={{ top: "20%", left: "80%" }} />
        <div className="star" style={{ top: "30%", left: "85%" }} />
      </div>
      <div className="crt absolute inset-0 pointer-events-none" />

      {/* Hero banner / mini-card top-left */}
      <div
        className="absolute pixel-font hidden md:block"
        style={{
          left: 24,
          top: 18,
          color: "#fff",
          textShadow: "3px 3px 0 #1b1b1b",
          fontSize: 22,
          letterSpacing: 2,
          zIndex: 5,
        }}
        data-testid="hero-name"
      >
        {PROFILE.name}
      </div>
      <div
        className="absolute hidden md:block"
        style={{
          left: 24,
          top: 56,
          color: "#fff",
          textShadow: "2px 2px 0 #1b1b1b",
          fontSize: 22,
          fontFamily: "VT323, monospace",
          zIndex: 5,
        }}
      >
        {PROFILE.tagline} _<span className="blink">|</span>
      </div>

      {/* Desktop icons grid (top-right) */}
      <div
        className="absolute hidden md:grid gap-3 p-3"
        style={{
          right: 18,
          top: 18,
          gridTemplateColumns: "repeat(2, 96px)",
          zIndex: 5,
        }}
        data-testid="desktop-icons"
      >
        {APPS.map((a) => (
          <button
            key={a.id}
            className="desktop-icon"
            onDoubleClick={() => openApp(a.id)}
            onClick={() => openApp(a.id)}
            data-testid={`desktop-icon-${a.id}`}
          >
            <a.Icon size={48} />
            <span className="icon-label">{a.title}</span>
          </button>
        ))}
      </div>

      {/* Mobile: vertical stack of "windows" */}
      {isMobile && (
        <div
          className="absolute inset-0 overflow-y-auto p-3"
          style={{ paddingBottom: 60, zIndex: 10 }}
          data-testid="mobile-stack"
        >
          <div
            className="win-window mb-3"
            style={{ position: "relative" }}
          >
            <div className="win-titlebar" style={{ cursor: "default" }}>
              <span className="pixel-font" style={{ fontSize: 9 }}>HERO.EXE</span>
              <div className="win-min-btn" />
            </div>
            <div className="p-3" style={{ background: "var(--win-gray-light)" }}>
              <div className="win-sunken p-3 text-center">
                <div className="pixel-font" style={{ fontSize: 12, color: "var(--win-blue)" }}>
                  {PROFILE.name}
                </div>
                <div className="mt-2" style={{ fontSize: 18 }}>{PROFILE.tagline}</div>
              </div>
            </div>
          </div>
          {APPS.map((a) => {
            const App = a.Component;
            return (
              <div key={a.id} className="win-window mb-3" style={{ position: "relative" }} data-testid={`mobile-window-${a.id}`}>
                <div className="win-titlebar">
                  <span className="pixel-font" style={{ fontSize: 9 }}>{a.title}</span>
                  <div className="win-min-btn" />
                </div>
                <div className="p-3" style={{ background: "var(--win-gray-light)" }}>
                  <div className="win-sunken p-3 body-font">
                    <App />
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{ height: 60 }} />
        </div>
      )}

      {/* Warning popup (matches user's screenshot vibe) */}
      {showWarning && !isMobile && (
        <div
          data-testid="warning-popup"
          className="win-window absolute"
          style={{ left: 60, bottom: 100, width: 260, zIndex: 50 }}
        >
          <div className="win-titlebar" style={{ background: "#3a3a3a" }}>
            <span className="pixel-font" style={{ fontSize: 9 }}>WARNiNG</span>
            <button
              className="win-close-btn"
              data-testid="warning-close"
              onClick={() => setShowWarning(false)}
              aria-label="Close warning"
            >
              X
            </button>
          </div>
          <div className="p-4 body-font text-center" style={{ background: "var(--win-gray-light)" }}>
            <div className="pixel-font mb-3" style={{ fontSize: 10 }}>DO YOU WANT</div>
            <div className="pixel-font mb-3" style={{ fontSize: 10 }}>TO HIRE ME?</div>
            <div className="flex justify-center gap-3">
              <button
                className="win-btn"
                data-testid="warning-yes"
                onClick={() => {
                  setShowWarning(false);
                  openApp("contact");
                }}
              >
                Yes
              </button>
              <button
                className="win-btn"
                data-testid="warning-no"
                onClick={() => setShowWarning(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pixel decorations */}
      <div className="absolute hidden md:block" style={{ left: "40%", top: "55%", zIndex: 4 }}>
        <HeartIcon size={28} />
      </div>
      <div className="absolute hidden md:block" style={{ right: 220, top: "65%", zIndex: 4 }}>
        <HeartIcon size={20} />
      </div>

      {/* Windows */}
      {!isMobile &&
        openIds.map((id, idx) => {
          const app = APPS.find((a) => a.id === id);
          if (!app) return null;
          const App = app.Component;
          const z = 10 + focusOrder.indexOf(id);
          return (
            <Window
              key={id}
              id={id}
              title={app.title}
              width={Math.min(app.w, window.innerWidth - 60)}
              height={Math.min(app.h, window.innerHeight - 100)}
              initialX={app.x + idx * 12}
              initialY={app.y + idx * 12}
              zIndex={z}
              onClose={closeApp}
              onFocus={focusApp}
            >
              <App />
            </Window>
          );
        })}

      {/* Taskbar */}
      <Taskbar
        openWindows={openIds.map((id) => APPS.find((a) => a.id === id)).filter(Boolean)}
        onWindowClick={(id) => focusApp(id)}
        onStartClick={() => setStartOpen((v) => !v)}
        startOpen={startOpen}
      />

      {/* Mobile quick-open bar at bottom (covered by taskbar — show signature) */}
      <div
        className="absolute pixel-font"
        style={{ right: 16, bottom: 56, color: "#fff", textShadow: "2px 2px 0 #1b1b1b", fontSize: 9, letterSpacing: 1, zIndex: 5 }}
      >
        @BHAVYA
      </div>
    </div>
  );
}
