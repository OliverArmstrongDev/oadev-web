import React, { useEffect, useState } from 'react'
import "./Header.css"
import { useApp } from '../../hooks/useApp';
import Button from '../../components/Buttons/primary/Button';
import { useNavigate } from 'react-router-dom';


interface Props {
  headerRight?: React.ReactNode;
  headerLeft: React.ReactNode;
}

const Header:React.FC<Props> = ({headerRight, headerLeft}) => {
  const {setShowMobileMenu, setHasRun, showMobileMenu, logout, isLoggedIn} = useApp();
  const navigate = useNavigate();
  
  const handleMobileMenuClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleLogout: React.MouseEventHandler<HTMLDivElement> = () => {
    logout();
    setHasRun(false);
    navigate("/")
  };

  useEffect(() => {
  }, [isLoggedIn])
  
  return (
    <header className="header-container">
        {/* desktop header left */}
        <div className="header-left">{headerLeft}</div>
        {/* desktop header right */}
        <div className="header-right">{ isLoggedIn && <Button
            buttonType="button"
            buttonText={"Logout"}
            onButtonClick={handleLogout}
          />}</div>
      </header>
        )
}

export default Header