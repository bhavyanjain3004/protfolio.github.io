import React, { useEffect, useState } from "react";

export default function BootScreen({ onDone }) {
  const [lines, setLines] = useState([]);
  const bootLines = [
    "BHAVYA_OS v3.04  Copyright (c) 2026",
    "CPU: Intel(R) Pentium IV @ 1.6 GHz   OK",
    "Memory Test: 65536 KB                 OK",
    "Initializing PS/2 Keyboard            OK",
    "Loading Java Virtual Machine          OK",
    "Connecting to AWS EC2 nodes           OK",
    "Mounting /dev/portfolio               OK",
    "Starting BhavyaShell ...",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= bootLines.length) {
        clearInterval(interval);
        setTimeout(onDone, 700);
        return;
      }
      setLines((prev) => [...prev, bootLines[i]]);
      i += 1;
    }, 220);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      data-testid="boot-screen"
      className="fixed inset-0 bg-black text-green-400 p-6 z-[100] body-font"
      style={{ fontFamily: '"VT323", monospace', fontSize: "20px", lineHeight: 1.3 }}
    >
      {lines.map((l, idx) => (
        <div key={idx}>{l}</div>
      ))}
      <span className="blink">█</span>
    </div>
  );
}
