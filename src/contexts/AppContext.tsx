import React, { createContext, useEffect, useReducer } from "react";

export interface IAppState {
  isLoggedIn: boolean;
  isAuthenticated: boolean;
  showMobileMenu : boolean;
  error          : string;
  loading        : boolean;
}
export enum appActionType {
  LOGIN     = "login",
  LOGOUT    = "logout",
  SIGNUP    = "signup",
  SHOW_MENU = "show_menu",
  ERROR     = "error",
  LOADING   = "loading",
}

type AppContextType = {
  appDispatch: React.Dispatch<any>;
  isLoggedIn: boolean;
  isAuthenticated: boolean;
  appActionType: typeof appActionType;
  showMobileMenu: boolean;
  setShowMobileMenu: (value: boolean) => void;
  setError: (message: string) => void;
  login: () => void;
  logout: () => void;
  error: string;
  loading: boolean;
};

const initialAuthState: IAppState = {
  isLoggedIn     : false,
  isAuthenticated: false,
  showMobileMenu : false,
  error          : "",
  loading        : false,
};

export const AppContext = createContext<AppContextType | null>(null);

export const appReducer = (appState: IAppState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case appActionType.LOGIN:
      return { ...appState, isLoggedIn: true, error: "" };
    case appActionType.LOGOUT:
      return { ...appState, isLoggedIn: false, error: ""};
    case appActionType.SHOW_MENU:
      return { ...appState, showMobileMenu: payload };
    case appActionType.ERROR:
      return { ...appState, error: payload };
    case appActionType.LOADING:
      return { ...appState, loading: payload };
    default:
      return appState;
  }
};

export const AppContextProvider = (prop: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [appState, appDispatch] = useReducer(appReducer, initialAuthState);


  const setShowMobileMenu = (value: boolean) => {
    appDispatch({ type: appActionType.SHOW_MENU, payload: value });
    const sidebar = document.querySelector(".sidebar") as HTMLDivElement;
    sidebar.classList.toggle("open");
  };

  const login = () => {
    appDispatch({ type: appActionType.LOGIN});
  };
  const logout = () => {
    appDispatch({ type: appActionType.LOGOUT});
  };

  const setError = (message: string) => {
    appDispatch({ type: appActionType.ERROR, payload: message});
  };

  return (
    <AppContext.Provider
      value={{ ...appState, appDispatch, setShowMobileMenu, login, logout, setError, appActionType }}
    >
      {prop.children}
    </AppContext.Provider>
  );
};
