"use client";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <div
      style={{
        padding: "10px 20px",
        backgroundColor: "#f2f2f2",
        borderBottom: "1px solid #ccc",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Hello Janet Weaver</h1>
      <button
        onClick={toggleSidebar}
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Show profile
      </button>
    </div>
  );
}