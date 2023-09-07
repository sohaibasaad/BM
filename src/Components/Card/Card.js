import "./Card.css";
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
      heading: "Unique Logo Designs",
      para:
        "We have the top designers and illustrators in the market to design creative logos for your brand for individual and business purpose. Our logos will guarantee Brand Recognition, Identity & Loyalty",
    },
    {
      image: Service2,
      heading: "Website Design & Development",
      para:
        "Bytes Master works with a team of enthusiastic designers and developers who are dedicated professionals in delivering the best websites for any business Interactive, Mobile Friendly, Optimized & Responsive",
    },
    {
      image: Service3,
      heading: "Result Driven SEO",
      para:
        "Bytes Master incorporate SEO service in website design, content marketing, blogs, social media posts and marketing collaterals to make your entire online campaign Efficient, Optimized, Measurable & Tailored",
    },
    {
      image: Service4,
      heading: "Animation Expert",
      para:
        "Bytes Master is equipped with the right brains and technology to design and create engaging animations to bring any content to life. Animations we sell are High Resolution, Engaging, Interactive & 3D graphics.",
    },
    {
      image: Service5,
      heading: "App Development",
      para:
        "Bytes Master empowers developers into developing creative and innovative mobile application solutions for clients' needs with High Speed, Simplicity, Accessible & Interactive",
    },
    {
      image: Service6,
      heading: "Social Media Marketing",
      para:
        "Bytes Master digital services are tailored to increase and manage client’s digital growth.We explore and utilize multiple platforms that yields outstanding result for personal and business purpose.",
    },
  ];

  const renderedElements = elements.map((element, index) => {
    return (
      <div className="col-lg-4 col-md-6 col-12 mb-5" key={index}>
        <div className="cardMain">
          <div className="cardImg">
            <img src={element.image} className="img-fluid" alt="service" />
          </div>
          <div className="cardHeading">
            <h4>{element.heading}</h4>
          </div>
          <div className="cardCnt">
            <p>{element.para}</p>
            <Link to={"/home"}>
              <img src={ServiceArrow} alt="Arrow Icon" />
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return <div className="row align-items-stretch">{renderedElements}</div>;
}

export default Card;
