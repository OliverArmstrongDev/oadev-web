import Image from "../../components/Image/Image";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import "./Portfolio.css";

// Image imports
import freebird from "../../assets/images/freebird.png";
import frozen from "../../assets/images/frozen.png";
import greyburn from "../../assets/images/greyburn.png";
import coldcreek from "../../assets/images/coldcreek.png";
import listMeister from "../../assets/images/list-meister.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="card">
        <h2>Portfolio</h2>
        <span>A handfull of projects and websites.</span>
        <p>
          My recent projects are React apps (MERN stack), but I also worked on a number of Wordpress sites, there are a couple shown here.
        </p>
      </div>
      <div className="portfolio-grid">
        <PortfolioCard
          title="Coldcreek Farms Water Monitoring"
          text="This is a farm water meter monitoring React web app. I built the full-stack (MERN) app, while working for Bluetwist NZ."
          imageSrc={coldcreek}
        />
        <PortfolioCard
          title="Building Maintenance Portal"
          text="This is a fault reporting web app for a building maintenance company, which solved their problem of having to manually enter data into a CRM from up to a hundred weekly emails."
          imageSrc={greyburn}
        />
        <PortfolioCard
          title="Wordpress Redesign"
          text="Freebird Wedding Films was a redesign of a website that was originally created by the owner.
          There was previously one page with one big section. There were no showcase videos and no calls to action, hence it had 0% conversions."
          imageSrc={freebird}
        />
        <PortfolioCard
          title="List Meister - React Native"
          text="A private shopping list (or todo) app. Has a current list and a master list for regularly used items."
          imageSrc={listMeister}
        />
        <PortfolioCard
          title="My first Ever React Game!"
          text="One of the first React app's I made when I started learning React. Not the best design ever, but you gotta start somewhere!"
          imageSrc={frozen}
        />
      </div>
    </div>
  );
};
export default Portfolio;
