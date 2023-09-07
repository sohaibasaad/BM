import Slider from "react-slick";
import "./Services.css";
import Client1 from "../../../assets/images/client1.png";
import Client2 from "../../../assets/images/client2.png";
import Client3 from "../../../assets/images/client3.png";
import Client4 from "../../../assets/images/client4.png";
import Client5 from "../../../assets/images/client5.png";
import Card from "../../../Card/Card";

function Services() {
  const clientsSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };
  return (
    <div className="services-sec">
      <div className="container">
        <div className="client-wrap">
          <div className="client-list">
          <Slider {...clientsSlider}>
            <div>
              <img className="img-fluid" src={Client1} alt="client" />
            </div>
            <div>
              <img className="img-fluid" src={Client2} alt="client" />
            </div>
            <div>
              <img className="img-fluid" src={Client3} alt="client" />
            </div>
            <div>
              <img className="img-fluid" src={Client4} alt="client" />
            </div>
            <div>
              <img className="img-fluid" src={Client5} alt="client" />
            </div>
            <div>
              <img className="img-fluid" src={Client1} alt="client" />
            </div>
            <div>
              <img className="img-fluid" src={Client2} alt="client" />
            </div>
            <div>
              <img className="img-fluid" src={Client3} alt="client" />
            </div>
            <div>
              <img className="img-fluid" src={Client4} alt="client" />
            </div>
            <div>
              <img className="img-fluid" src={Client5} alt="client" />
            </div>
            </Slider>
          </div>
        </div>

        <div className="services-inner-wrap">
          <div className="services-head text-center">
            <h2>Why do clients Accross the world choose us?</h2>
            <p>
              We provide a comprehensive range of services to help your brand reach its full potential. All of the services provided here are specifically tailored to elevate your business.
            </p>
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
}

export default Services;
