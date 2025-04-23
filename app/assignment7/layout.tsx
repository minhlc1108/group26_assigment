import { AppProvider } from "@/context/AppContext";

export default function Assignment7Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>{children}</AppProvider>
  )
}