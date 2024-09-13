import Image from "../Image/Image"
import "./PortfolioCard.css"

type PortfolioCardProps = {
    title: string
    text: string
    optionalText?: string
    imageSrc: string
}

const PortfolioCard = ({title, text, imageSrc, optionalText}: PortfolioCardProps) => {
  return (
    <div className="portfolio-card card">
        <div className="portfolio-card-title"><h3>{title}</h3></div>
        <div className="portfolio-card-text"><p>{text}</p></div>
        <div className="portfolio-card-image">
        <Image  src={imageSrc}/>
        </div>
        {optionalText && <span className="opt-text">{optionalText}</span>}
    </div>
  )
}

export default PortfolioCard
