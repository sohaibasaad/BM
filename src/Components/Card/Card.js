import './Card.css';
import ServiceArrow from "../assets/images/service-arrow.png";

function Card({ elements }) {
    const renderedElements= elements.map((element,index) => {
      return(
        <div className='cardMain col-md-4' key={element.id}>
            <div className='cardImg'>
                <img src={element.image} alt="service Image" />
            </div>
            <div className="cardHeading">
                <h4>{element.heading}</h4>
            </div>
            <div className="cardCnt">
                <p>{element.para}</p>
                <a><img src={ServiceArrow} alt="Arrow Icon" /></a>
            </div>
        </div>
      );
    });

    return (
        <div className='cards-main-wrap row'>
            {renderedElements}
        </div>
    )
}

export default Card