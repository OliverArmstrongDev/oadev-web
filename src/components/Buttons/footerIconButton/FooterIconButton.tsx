import Button from "../primary/Button";
import { IconType } from "react-icons";
import "./FooterIconButton.css";

interface ButtonProps {
  buttonText: string;
  IconName: IconType;
}

const FooterIconButton = ({ buttonText, IconName }: ButtonProps) => {
  return (
      <button className="footer-button">
      <IconName size={20} className="footer-button-icon" />
      {buttonText}
    </button>
  );
};

export default FooterIconButton;
