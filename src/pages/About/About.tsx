import "./About.css";
import Image from "../../components/Image/Image";
import Me from "../../assets/images/Oliver-Armstrong.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="card">
      <div className="about-container">
        <div className="about-content">
          <h2>About me</h2>
          <span>
            I'm from New Zealand (NZ) and I work as a Full-Stack Developer /
            Software Engineer.
          </span>
          <p>
            And have done so for <strong>around the last 4 years.</strong> I
            started off freelancing in 2020 and then in 2022 I contracted
            full-time (100% remotely) for a New Zealand business to build a farm
            water meter monitoring app.{" "}
          </p>
          <span>
            Then I was invited to work on their{" "}
            <strong>Medical Practice Management app</strong>. Which I worked on
            until August 2024.
          </span>

          <p>
            I made the decision to go back into freelance development so that I
            could work on a wider range of apps, across various industries.
          </p>
          <p>
            If the right opportunity comes along, with the right company, I will
            certainly consider contracting solely for them as I did previously.
          </p>
          <p>
            If you're interested in working with me for your next project,
            please don't hesitate to {" "}
          <Link style={{ textDecoration: "none" }} to={"/Contact"}>
            get in touch.
          </Link>{" "}
          </p>
          <p>I look forward to hearing from you,</p>
          <p>Oliver.</p>
        </div>
        <div className="about-image">
          <Image src={Me} />
        </div>
      </div>
    </div>
  );
};
export default About;
