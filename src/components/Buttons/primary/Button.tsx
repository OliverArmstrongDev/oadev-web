import "./Button.css";
import { IconType } from "react-icons";

interface ButtonProps {
  buttonText: string;
  IconName?: IconType;
  onButtonClick: (e: any) => any;
  buttonType?:  "button" | "submit" | "reset" | undefined;
  buttonStyles?: any
  disabled?: boolean
}

const Button = ({ buttonText, IconName, onButtonClick, buttonStyles, disabled, buttonType='button'}: ButtonProps) => {
  return (
      <button disabled={disabled} style={{...buttonStyles}} type={buttonType} className="primary-button" onClick={(e) => onButtonClick(e)}>
      {IconName && <IconName size={20} className="primary-button-icon" />}
        {buttonText}
      </button>
  );
};

export default Button;
