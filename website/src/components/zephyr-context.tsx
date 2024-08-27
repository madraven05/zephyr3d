import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface ZephyrContextType {
  isDarkModeEnabled: boolean;
  setIsDarkModeEnabled: Dispatch<SetStateAction<boolean>>;
}

export const ZephyrContext = createContext<ZephyrContextType | undefined>(
  undefined
);

interface ZephyrProviderProps {
  children: ReactNode;
}

export const ZephyrProvider: React.FC<ZephyrProviderProps> = ({ children }) => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  return (
    <ZephyrContext.Provider value={{ isDarkModeEnabled, setIsDarkModeEnabled }}>
      {children}
    </ZephyrContext.Provider>
  );
};
