import React, { useEffect, useState } from "react";

export default function Taskbar({ openWindows, onWindowClick, onStartClick, startOpen }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const formatted = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div
      data-testid="taskbar"
      className="win-taskbar fixed bottom-0 left-0 right-0 flex items-center px-2 py-1 gap-2 z-[200]"
      style={{ height: 44 }}
    >
      <button
        data-testid="start-button"
        className="start-btn"
        onClick={onStartClick}
      >
        ▶ START
      </button>

      <div className="flex-1 flex items-center gap-1 overflow-x-auto px-2 win-scroll">
        {openWindows.map((w) => (
          <button
            key={w.id}
            data-testid={`taskbar-window-${w.id}`}
            className="win-btn"
            style={{ fontSize: 14, padding: "2px 8px" }}
            onClick={() => onWindowClick(w.id)}
          >
            {w.title}
          </button>
        ))}
      </div>

      <div
        className="win-sunken px-3 py-1 pixel-font"
        style={{ fontSize: 10, background: "#f7f1de" }}
        data-testid="taskbar-clock"
      >
        {formatted}
      </div>

      {startOpen && (
        <div
          data-testid="start-menu"
          className="win-window absolute"
          style={{ left: 4, bottom: 50, width: 240, padding: 0 }}
        >
          <div
            className="pixel-font"
            style={{
              background: "var(--win-blue)",
              color: "#fff",
              padding: "10px 12px",
              borderBottom: "3px solid #000",
              fontSize: 10,
            }}
          >
            BHAVYA.N.JAIN
          </div>
          <div className="p-3 body-font flex flex-col gap-2" style={{ fontSize: 18 }}>
            <a
              href="mailto:bhavyajain3004@gmail.com"
              className="win-btn justify-start"
              data-testid="start-menu-email"
            >
              ✉ Email Me
            </a>
            <a
              href="https://github.com/bhavyanjain3004"
              target="_blank"
              rel="noreferrer"
              className="win-btn justify-start"
              data-testid="start-menu-github"
            >
              ⌘ GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bhavya-jain-2424b0250/"
              target="_blank"
              rel="noreferrer"
              className="win-btn justify-start"
              data-testid="start-menu-linkedin"
            >
              ✦ LinkedIn
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
