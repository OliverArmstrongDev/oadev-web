import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useApp } from "../../hooks/useApp";
import { AiFillHome , AiFillPlusCircle ,AiFillFolderOpen, AiFillFolder } from "react-icons/ai";
import FooterIconButton from "../../components/Buttons/footerIconButton/FooterIconButton";
import NavButtons from "../../components/navButtons/NavButtons";

interface Props {}

const Footer = (props: Props) => {
  const { isLoggedIn } = useApp();
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-buttons">
          <NavButtons />
        </div>
        <p>{`© Copyright Oliver Armstrong ${new Date().getFullYear()}`}</p>
      </div>
    </footer>
  );
};

export default Footer;
