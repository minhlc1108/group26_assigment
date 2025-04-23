"use client";

import { useState } from "react";
import Sidebar from "../../components/assignment7/Sidebar";
import Header from "../../components/assignment7/Header";
import Content from "../../components/assignment7/Content";

export default function Assignment7Page() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {showSidebar && <Sidebar />}
      <main style={{ flex: 1, padding: "20px" }}>
        <Header toggleSidebar={() => setShowSidebar(prev => !prev)} />
        <Content />
      </main>
    </div>
  );
}
