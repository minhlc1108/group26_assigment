"use client";

import { useTheme } from "../../context/assignment7/ThemeContext";

export default function Sidebar() {
  const { theme } = useTheme();

  return (
    <aside
      style={{
        width: "250px",
        background: theme === "light" ? "#89b0c2" : "#4a6572",
        padding: "20px"
      }}
    >
      <h2>Thông tin người dùng</h2>
      <p><strong>Janet Weaver</strong></p>
      <p>Email: janet.weaver@reqres.in</p>
    </aside>
  );
}
