import "../globals.css";
import { ThemeProvider } from "../../context/assignment7/ThemeContext";

export const metadata = {
  title: "Assignment 7 Clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
