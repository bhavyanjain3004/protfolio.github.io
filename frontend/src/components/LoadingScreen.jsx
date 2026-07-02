import React, { useEffect } from "react";

export default function LoadingScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      data-testid="loading-screen"
      className="fixed inset-0 z-[90] flex items-center justify-center"
      style={{ background: "var(--cream)" }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="relative"
          style={{
            width: 360,
            height: 30,
            border: "3px solid var(--pixel-ink)",
            background: "#fff",
            boxShadow: "3px 3px 0 0 var(--pixel-ink)",
          }}
        >
          <div
            className="loadbar-fill h-full"
            style={{
              background:
                "repeating-linear-gradient(90deg, var(--win-blue) 0 14px, var(--win-blue-deep) 14px 18px)",
            }}
          />
        </div>
        <div
          className="pixel-font"
          style={{ fontSize: 18, letterSpacing: 2 }}
        >
          LOADING<span className="blink">...</span>
        </div>
      </div>
    </div>
  );
}
