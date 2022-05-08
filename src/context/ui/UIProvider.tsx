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

  const openSidebar = () => {
    dispatch({ type: 'UI - Open Sidebar' });
  };
  const closeSidebar = () => {
    dispatch({ type: 'UI - Close Sidebar' });
  };

  return (
    <UIContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </UIContext.Provider>
  );
};
