import React from "react";
import "./Sidebar.css";
import { AiOutlineBars, AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarButton from "../../components/Buttons/sidebar/SidebarButton";
import { useApp } from "../../hooks/useApp";
import NavButtons from "../../components/navButtons/NavButtons";

interface Props {
  children?: string;
}

const Sidebar: React.FC<Props> = ({ children }) => {
  const {error} = useApp();

  return (
    <div className="sidebar-content">
      <NavButtons />
      <p className="error">{error}</p>
      </div>
  );
};

export default Sidebar;
