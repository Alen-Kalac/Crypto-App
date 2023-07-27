import './index.scss';
import {
  AiFillGithub
} from 'react-icons/ai';
import './infocard.scss'

const InfoCard = ({
  name,
  img,
  description,
  gitHubLink
}) => {
  return (
  <div className='Parent'>
    <div className="container">
      <div className="card">
        <div className="image">
          <img className='person' src={img} alt="person"></img>
          <h2 className='Name'>{name}</h2>
          <i className='location'>Novi Pazar,Serbia</i>  
        </div>
        <div className="content">
          <p className='desc'>{description}</p>
          <div>
            <a href={gitHubLink} target="_blank" rel="noreferrer">
              <AiFillGithub className="icons-about" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default InfoCard;