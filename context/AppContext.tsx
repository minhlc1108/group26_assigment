"use client";
import { createContext, useEffect, useState, ReactNode, useContext } from "react";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
}
interface ThemeStyle {
  backgroundColor: string;
  color: string;
}
interface AppContextType {
  userData: UserData;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDay: boolean;
  setIsDay: React.Dispatch<React.SetStateAction<boolean>>;
  themeStyle: ThemeStyle;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isDay, setIsDay] = useState(true);

  const themeStyles = {
    day: {
      backgroundColor: "#f4f4f4", // Nền sáng (xám nhạt)
      color: "#333333", // Chữ tối (đen đậm)
    },
    night: {
      backgroundColor: "#6998AB", // Nền tối (màu đen sâu)
      color: "white", // Chữ sáng (xám nhạt)
    },
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users/2")
      .then((res) => res.json())
      .then((res) => {
        setUserData({
          firstName: res.data.first_name,
          lastName: res.data.last_name,
          email: res.data.email,
        });
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        userData,
        isOpen,
        setIsOpen,
        isDay,
        setIsDay,
        themeStyle: isDay ? themeStyles.day : themeStyles.night,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext)
}