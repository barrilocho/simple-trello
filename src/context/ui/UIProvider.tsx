import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sidebarOpen: boolean;
}

const INITIAL_STATE: UIState = {
  sidebarOpen: false,
};

interface Props {
  children: React.ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);

  const closeSidebar = () => {
    dispatch({ type: 'UI - Close Sidebar' });
  };
  const openSidebar = () => {
    dispatch({ type: 'UI - Open Sidebar' });
  };

  return (
    <UIContext.Provider value={{ ...state, closeSidebar, openSidebar }}>
      {children}
    </UIContext.Provider>
  );
};
