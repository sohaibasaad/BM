import './Card.css';
import { Link } from "react-router-dom";
import ServiceArrow from "../assets/images/service-arrow.png";
import Service1 from "../assets/images/service1.png";
import Service2 from "../assets/images/service2.png";
import Service3 from "../assets/images/service3.png";
import Service4 from "../assets/images/service4.png";
import Service5 from "../assets/images/service5.png";
import Service6 from "../assets/images/service6.png";

function Card() {
    const elements = [
        { 
            image: Service1, 
            heading: 'Paid search google ads', 
            para: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.' 
        },
        { 
            image: Service2, 
            heading: 'Social Media', 
            para: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.' 
        },
        { 
            image: Service3, 
            heading: 'SEO', 
            para: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.' 
        },
        { 
            image: Service4, 
            heading: 'Web designing & development', 
            para: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.' 
        },
        { 
            image: Service5, 
            heading: 'Video advertising', 
            para: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.' 
        },
        { 
            image: Service6, 
            heading: 'Programmatic display & remarketing ', 
            para: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.' 
        }
    ]

    const renderedElements= elements.map((element,index) => {
      return(
        <div className='cardMain col-md-4' key={index}>
            <div className='cardImg'>
                <img src={element.image} alt="service" />
            </div>
            <div className="cardHeading">
                <h4>{element.heading}</h4>
            </div>
            <div className="cardCnt">
                <p>{element.para}</p>
                <Link to={'/home'}><img src={ServiceArrow} alt="Arrow Icon" /></Link>
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