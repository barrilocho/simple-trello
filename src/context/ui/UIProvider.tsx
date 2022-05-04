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
  return (
    <UIContext.Provider value={{ sidebarOpen: INITIAL_STATE.sidebarOpen }}>
      {children}
    </UIContext.Provider>
  );
};
