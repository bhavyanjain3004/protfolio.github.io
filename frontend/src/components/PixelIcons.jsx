// Pure-CSS / SVG pixel icons (no emoji, no external images)
import React from "react";

const px = { shapeRendering: "crispEdges", imageRendering: "pixelated" };

export const FolderIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" style={px}>
    <rect x="0" y="3" width="6" height="2" fill="#1b1b1b" />
    <rect x="6" y="4" width="10" height="1" fill="#1b1b1b" />
    <rect x="0" y="5" width="16" height="9" fill="#f0c33b" />
    <rect x="0" y="13" width="16" height="1" fill="#1b1b1b" />
    <rect x="0" y="5" width="1" height="9" fill="#1b1b1b" />
    <rect x="15" y="5" width="1" height="9" fill="#1b1b1b" />
    <rect x="1" y="6" width="14" height="1" fill="#fff5c4" />
    <rect x="2" y="9" width="12" height="1" fill="#c79224" />
  </svg>
);

export const ComputerIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" style={px}>
    <rect x="1" y="1" width="14" height="9" fill="#1b1b1b" />
    <rect x="2" y="2" width="12" height="7" fill="#8aa1c8" />
    <rect x="3" y="3" width="2" height="1" fill="#fff" />
    <rect x="5" y="5" width="3" height="1" fill="#fff" />
    <rect x="3" y="7" width="6" height="1" fill="#fff" />
    <rect x="6" y="10" width="4" height="2" fill="#c5c2b3" />
    <rect x="3" y="12" width="10" height="2" fill="#1b1b1b" />
    <rect x="4" y="13" width="8" height="1" fill="#c5c2b3" />
  </svg>
);

export const DocIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" style={px}>
    <rect x="2" y="1" width="10" height="14" fill="#1b1b1b" />
    <rect x="3" y="2" width="8" height="12" fill="#fff" />
    <rect x="11" y="1" width="3" height="3" fill="#1b1b1b" />
    <rect x="11" y="4" width="1" height="11" fill="#1b1b1b" />
    <rect x="4" y="4" width="6" height="1" fill="#1b1b1b" />
    <rect x="4" y="6" width="6" height="1" fill="#1b1b1b" />
    <rect x="4" y="8" width="5" height="1" fill="#1b1b1b" />
    <rect x="4" y="10" width="6" height="1" fill="#1b1b1b" />
    <rect x="4" y="12" width="4" height="1" fill="#1b1b1b" />
  </svg>
);

export const BriefcaseIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" style={px}>
    <rect x="5" y="2" width="6" height="1" fill="#1b1b1b" />
    <rect x="5" y="3" width="6" height="1" fill="#6b3a1b" />
    <rect x="1" y="4" width="14" height="10" fill="#1b1b1b" />
    <rect x="2" y="5" width="12" height="8" fill="#a85d2a" />
    <rect x="7" y="8" width="2" height="2" fill="#1b1b1b" />
    <rect x="2" y="9" width="12" height="1" fill="#6b3a1b" />
  </svg>
);

export const StarIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" style={px}>
    <rect x="7" y="2" width="2" height="2" fill="#1b1b1b" />
    <rect x="7" y="3" width="2" height="2" fill="#f0c33b" />
    <rect x="5" y="5" width="6" height="3" fill="#1b1b1b" />
    <rect x="6" y="6" width="4" height="1" fill="#f0c33b" />
    <rect x="2" y="6" width="3" height="2" fill="#1b1b1b" />
    <rect x="11" y="6" width="3" height="2" fill="#1b1b1b" />
    <rect x="3" y="7" width="1" height="1" fill="#f0c33b" />
    <rect x="12" y="7" width="1" height="1" fill="#f0c33b" />
    <rect x="4" y="8" width="8" height="2" fill="#1b1b1b" />
    <rect x="5" y="9" width="6" height="1" fill="#f0c33b" />
    <rect x="4" y="10" width="3" height="3" fill="#1b1b1b" />
    <rect x="9" y="10" width="3" height="3" fill="#1b1b1b" />
    <rect x="5" y="11" width="1" height="2" fill="#f0c33b" />
    <rect x="10" y="11" width="1" height="2" fill="#f0c33b" />
  </svg>
);

export const HeartIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" style={px}>
    <rect x="2" y="3" width="4" height="2" fill="#1b1b1b" />
    <rect x="10" y="3" width="4" height="2" fill="#1b1b1b" />
    <rect x="1" y="5" width="6" height="3" fill="#f4a8c4" />
    <rect x="9" y="5" width="6" height="3" fill="#f4a8c4" />
    <rect x="2" y="8" width="12" height="2" fill="#f4a8c4" />
    <rect x="3" y="10" width="10" height="1" fill="#f4a8c4" />
    <rect x="4" y="11" width="8" height="1" fill="#f4a8c4" />
    <rect x="5" y="12" width="6" height="1" fill="#f4a8c4" />
    <rect x="6" y="13" width="4" height="1" fill="#f4a8c4" />
    <rect x="7" y="14" width="2" height="1" fill="#f4a8c4" />
    <rect x="2" y="6" width="2" height="1" fill="#ffd0e2" />
    <rect x="10" y="6" width="2" height="1" fill="#ffd0e2" />
  </svg>
);

export const MailIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" style={px}>
    <rect x="1" y="3" width="14" height="10" fill="#1b1b1b" />
    <rect x="2" y="4" width="12" height="8" fill="#fff" />
    <rect x="2" y="4" width="12" height="1" fill="#d6362a" />
    <rect x="2" y="5" width="2" height="6" fill="#5dbb47" />
    <rect x="5" y="6" width="7" height="1" fill="#1b1b1b" />
    <rect x="5" y="8" width="7" height="1" fill="#1b1b1b" />
    <rect x="5" y="10" width="5" height="1" fill="#1b1b1b" />
  </svg>
);

export const GamepadIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" style={px}>
    <rect x="1" y="5" width="14" height="6" fill="#1b1b1b" />
    <rect x="2" y="6" width="12" height="4" fill="#dedede" />
    <rect x="3" y="7" width="1" height="2" fill="#1b1b1b" />
    <rect x="5" y="7" width="1" height="2" fill="#1b1b1b" />
    <rect x="4" y="8" width="3" height="1" fill="#1b1b1b" />
    <rect x="11" y="7" width="1" height="1" fill="#d6362a" />
    <rect x="12" y="8" width="1" height="1" fill="#5dbb47" />
    <rect x="10" y="8" width="1" height="1" fill="#1c2eaf" />
    <rect x="11" y="9" width="1" height="1" fill="#f0c33b" />
  </svg>
);

export const CapIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" style={px}>
    <rect x="1" y="5" width="14" height="2" fill="#1b1b1b" />
    <rect x="2" y="6" width="12" height="1" fill="#2d3a64" />
    <rect x="7" y="7" width="2" height="3" fill="#f0c33b" />
    <rect x="6" y="3" width="4" height="2" fill="#1b1b1b" />
    <rect x="7" y="4" width="2" height="1" fill="#2d3a64" />
    <rect x="3" y="8" width="2" height="2" fill="#1b1b1b" />
    <rect x="11" y="8" width="2" height="2" fill="#1b1b1b" />
  </svg>
);

export const CertIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" style={px}>
    <rect x="1" y="2" width="14" height="10" fill="#1b1b1b" />
    <rect x="2" y="3" width="12" height="8" fill="#fff5c4" />
    <rect x="3" y="5" width="8" height="1" fill="#1b1b1b" />
    <rect x="3" y="7" width="6" height="1" fill="#1b1b1b" />
    <rect x="3" y="9" width="4" height="1" fill="#1b1b1b" />
    <rect x="11" y="9" width="3" height="3" fill="#d6362a" />
    <rect x="11" y="12" width="1" height="3" fill="#d6362a" />
    <rect x="13" y="12" width="1" height="3" fill="#d6362a" />
  </svg>
);

export const UserIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" style={px}>
    <rect x="5" y="2" width="6" height="6" fill="#1b1b1b" />
    <rect x="6" y="3" width="4" height="4" fill="#f0c096" />
    <rect x="2" y="9" width="12" height="6" fill="#1b1b1b" />
    <rect x="3" y="10" width="10" height="5" fill="#5dbb47" />
    <rect x="6" y="11" width="4" height="1" fill="#1b1b1b" />
  </svg>
);
