import { createContext } from 'react';

interface ContextProps {
  sidebarOpen: boolean;

  //Methods
  closeSidebar: () => void;
  openSidebar: () => void;
}

export const UIContext = createContext({} as ContextProps);
