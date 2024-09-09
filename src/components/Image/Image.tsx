import "./Image.css";
import image from "../../assets/images/OADEV_Logo.png";

type ImageProps = {
  src?: string
}

const Image = ({src}:ImageProps ) => {
  return (
    <div className="image-container">
        <img className="image-img"  src={src || image} />
      
    </div>
  );
};

export default Image;
