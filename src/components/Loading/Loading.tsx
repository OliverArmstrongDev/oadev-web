

import "./Loading.css";
import Image from "../Image/Image";
import Me from "../../assets/images/Oliver-Armstrong.png"

const Loading = () => {
  return (
    <div className="loading-container">
      <h2>Amazing Loading page! 😁</h2>
      <p>You will need to logout to see this page again, because it's visibility is tracked by the app.</p>
      <p className="loading-spinner"></p>
    </div>
  );
};
export default Loading;
