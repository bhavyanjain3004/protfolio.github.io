import React, { useRef, useState, useEffect } from "react";

export default function Window({
  id,
  title,
  children,
  initialX = 80,
  initialY = 80,
  width = 560,
  height = 420,
  onClose,
  onFocus,
  zIndex = 10,
}) {
  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const [dragging, setDragging] = useState(false);
  const startRef = useRef({ x: 0, y: 0, ox: 0, oy: 0 });
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const onDown = (e) => {
    if (isMobile) return;
    setDragging(true);
    onFocus && onFocus(id);
    const clientX = e.clientX ?? e.touches?.[0]?.clientX;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY;
    startRef.current = { x: clientX, y: clientY, ox: pos.x, oy: pos.y };
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => {
      const clientX = e.clientX ?? e.touches?.[0]?.clientX;
      const clientY = e.clientY ?? e.touches?.[0]?.clientY;
      const dx = clientX - startRef.current.x;
      const dy = clientY - startRef.current.y;
      setPos({
        x: Math.max(0, Math.min(window.innerWidth - 80, startRef.current.ox + dx)),
        y: Math.max(0, Math.min(window.innerHeight - 80, startRef.current.oy + dy)),
      });
    };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging]);

  const desktopStyle = {
    left: pos.x,
    top: pos.y,
    width,
    height,
    zIndex,
  };
  const mobileStyle = {
    position: "relative",
    width: "100%",
    height: "auto",
    margin: "0 0 16px 0",
  };

  return (
    <div
      data-testid={`window-${id}`}
      className="win-window absolute flex flex-col"
      style={isMobile ? mobileStyle : desktopStyle}
      onMouseDown={() => onFocus && onFocus(id)}
    >
      <div
        className="win-titlebar"
        onMouseDown={onDown}
        onTouchStart={onDown}
        data-testid={`window-titlebar-${id}`}
      >
        <div className="flex items-center gap-2">
          <div className="win-titlebar-stripes" style={{ width: 18, height: 14, border: "2px solid #000" }} />
          <span className="pixel-font" style={{ fontSize: 10, letterSpacing: 1 }}>
            {title}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <div className="win-min-btn" aria-hidden="true" />
          <button
            data-testid={`window-close-${id}`}
            className="win-close-btn"
            onClick={(e) => {
              e.stopPropagation();
              onClose && onClose(id);
            }}
            aria-label={`Close ${title}`}
          >
            X
          </button>
        </div>
      </div>
      <div
        className="flex-1 overflow-auto win-scroll p-4"
        style={{ background: "var(--win-gray-light)" }}
      >
        <div className="win-sunken p-4 body-font" style={{ minHeight: "100%" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
