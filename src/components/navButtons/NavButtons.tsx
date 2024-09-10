import { Link } from "react-router-dom";
import { AiOutlineHome ,AiOutlineFolderOpen, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import FooterIconButton from "../Buttons/footerIconButton/FooterIconButton";
import "./NavButtons.css"
import { useApp } from "../../hooks/useApp";
import SidebarButton from "../Buttons/sidebar/SidebarButton";
import { IconType } from "react-icons";
import { useIsMobile } from "../../hooks/useIsMobile";

type NavButtonProps = {
}

const NavButtons = ({}: NavButtonProps) => {
    const { isLoggedIn, setError, hasRun } = useApp();
    const isMobile = useIsMobile();

    const RenderButton = ({ IconName, buttonText }: { IconName: IconType, buttonText: string }) => {
        return isMobile ?
        (<FooterIconButton IconName={IconName} buttonText={buttonText}/>)
        :
        (<SidebarButton IconName={IconName} buttonText={buttonText}/>)
    }

    const handleButtonClick = () => {
      !isLoggedIn && setError("Oops, just like a real app, these pages are protected, so you'll need to login first!");
    }
    const isReady = () => {
      
      if(!isLoggedIn || isLoggedIn && !hasRun) return false;
      return true;
    }

  return (
    <>
          <Link
            style={{ textDecoration: "none" }}
            to={isReady() ? "/" : "#"}
            onClick={handleButtonClick}
          >
            <RenderButton IconName={AiOutlineHome } buttonText={"Home"} />
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={isReady() ? "/portfolio" : "#"}
            onClick={handleButtonClick}
          >
            <RenderButton
              IconName={AiOutlineFolderOpen}
              buttonText={"Portfolio"}
            />
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={isReady() ? "/About" : "#"}
            onClick={handleButtonClick}
          >
            <RenderButton
              IconName={AiOutlineUser}
              buttonText={"About"}
            />
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={isReady() ? "/Contact" : "#"}
            onClick={handleButtonClick}
          >
            <RenderButton
              IconName={AiOutlineMail}
              buttonText={"Contact"}
            />
          </Link>
        </>
  )
}

export default NavButtons