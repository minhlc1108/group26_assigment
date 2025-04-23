"use client";

import { useTheme } from "../../context/assignment7/ThemeContext";

export default function Content() {
  const { theme } = useTheme();

  return (
    <section
      style={{
        flex: 1,
        background: theme === "light" ? "#e3f2fd" : "#263238",
        padding: "20px",
        height: "calc(100vh - 150px)",
        overflowY: "auto",
        borderRadius: "6px",
        marginTop: "20px"
      }}
    >
      <p><strong>Nhiệt liệt chào mừng Janet Weaver</strong></p>
      <p>Đón quý khách tại văn phòng Saigontourist 01 Nguyễn Chí Thanh lúc 5h00 sáng... Đoàn tiếp tục đến Làng Nổi Tân Lập – khám phá nét đẹp hoang sơ...</p>
    </section>
  );
}
