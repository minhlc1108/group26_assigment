"use client";

import { useTheme } from "../../context/assignment7/ThemeContext";

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        background: theme === "light" ? "#89b0c2" : "#4a6572",
        padding: "20px",
        borderRadius: "6px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div>
        <h2>Hello Janet Weaver</h2>
        <button
          onClick={toggleSidebar}
          style={{
            padding: "8px 16px",
            borderRadius: "4px",
            background: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          Show/Hide Profile
        </button>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span>Dark</span>
        <label style={{ position: "relative", display: "inline-block", width: "50px", height: "24px" }}>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
            style={{ opacity: 0, width: 0, height: 0 }}
          />
          <span style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: theme === "dark" ? "#2196F3" : "#ccc",
            transition: ".4s",
            borderRadius: "24px"
          }} />
          <span style={{
            position: "absolute",
            height: "18px",
            width: "18px",
            left: theme === "dark" ? "26px" : "4px",
            bottom: "3px",
            backgroundColor: "white",
            transition: ".4s",
            borderRadius: "50%"
          }} />
        </label>
      </div>
    </header>
  );
}
