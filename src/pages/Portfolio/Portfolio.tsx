import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import "./Portfolio.css";

// Image imports
import freebird from "../../assets/images/freebird.png";
import frozen from "../../assets/images/frozen.png";
import greyburn from "../../assets/images/greyburn.png";
import farms from "../../assets/images/farms.png";
import listMeister from "../../assets/images/list-meister.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="card">
        <h2>Portfolio</h2>
        <span><strong> The majority of my work has been for closed source applications and
          therefore cannot be shared publicly. </strong>
         
        </span>
        <p>However, below are a handful of projects I have completed in the past.</p>
        <p>
          Some are full stack apps, one is a Wordpress site and the others are ReactJs or React Native apps.
        </p>
      </div>
      <div className="portfolio-grid">
        <PortfolioCard
          title="Farms Water Monitoring"
          text="This is a farm water meter monitoring React web app. I built the full-stack (MERN) app, while working for Bluetwist NZ."
          imageSrc={farms}
        />
        <PortfolioCard
          title="Building Maintenance Portal"
          text="This is a fault reporting web app for a building maintenance company, which solved their problem of having to manually enter data into a CRM from up to a hundred weekly emails.
          Essentially an email was forwarded to this app and it formatted the data and created tickets in the CRM."
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
          text="One of the first React app's I made for my daughter when I was learning React. Not the best design ever, but you gotta start somewhere!"
          imageSrc={frozen}
        />
      </div>
    </div>
  );
};
export default Portfolio;
