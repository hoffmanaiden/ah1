import './PortfolioItem.css'
import { Link } from "react-router-dom";

export default function PortfolioItem({ project }) {
  let newName = project.name.replace(" ", "_")
  return (
    <Link to={project.id}>
      <div className="PortfolioItem">
        <div className="centerPortfolioItem">
          <div className="portfolioText">
            <span className='projectName'>{project.name}</span>
            <div className='briefDescription'>{project.briefDescription}<br />Click to see details.</div>
          </div>
          <img src={project.imgThumbnail} />
        </div>
      </div>
    </Link>
  )
}