import Image from "../Image/Image"
import "./PortfolioCard.css"

type PortfolioCardProps = {
    title: string
    text: string
    imageSrc: string
}

const PortfolioCard = ({title, text, imageSrc}: PortfolioCardProps) => {
  return (
    <div className="portfolio-card card">
        <div className="portfolio-card-title"><h3>{title}</h3></div>
        <div className="portfolio-card-text"><p>{text}</p></div>
        <div className="portfolio-card-image">
        <Image  src={imageSrc}/>
        </div>
    </div>
  )
}

export default PortfolioCard
