"use client";

import { useState } from "react";
import Sidebar from "@/components/assignment7/Sidebar";
import Header from "@/components/assignment7/Header";
import Content from "@/components/assignment7/Content";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {showSidebar && <Sidebar />}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header toggleSidebar={() => setShowSidebar(!showSidebar)} />
        <Content />
      </div>
    </div>
  );
}