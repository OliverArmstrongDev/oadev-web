import React from "react";
import "./Layout.css";
import Header from "./header/Header";
import Logo from "../components/Logo/Logo";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormContextProvider } from "../contexts/FormContext";
import { useApp } from "../hooks/useApp";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  children,
}: LayoutWrapperProps) => {
  const {isLoggedIn} = useApp();
  return (
      <FormContextProvider>
        {/* <AppContextProvider> */}
          <BrowserRouter>
            <div className="layout-wrapper-container logged-out">
              {/* Header */}
              <Header headerLeft={<Logo />} />
              {/* Sidebar */}
              <div className="sidebar" >{<Sidebar />}</div>
              {/* Main content */}
              <main className="layout-content-container">{children}</main>
              {/* Footer */}
              {isLoggedIn && <Footer />}
            </div>
          </BrowserRouter>
        {/* </AppContextProvider> */}
      </FormContextProvider>
  );
};
export default LayoutWrapper;
