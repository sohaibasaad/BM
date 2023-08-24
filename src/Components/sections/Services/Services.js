import "./Services.css";
import Client1 from "../../assets/images/client1.png";
import Client2 from "../../assets/images/client2.png";
import Client3 from "../../assets/images/client3.png";
import Client4 from "../../assets/images/client4.png";
import Client5 from "../../assets/images/client5.png";
import Card from "../../Card/Card";

function Services() {
  return (
    <div className="services-sec">
      <div className="container">
        <div className="client-wrap">
          <ul className="client-list">
            <li>
              <img className="img-fluid" src={Client1} alt="client" />
            </li>
            <li>
              <img className="img-fluid" src={Client2} alt="client" />
            </li>
            <li>
              <img className="img-fluid" src={Client3} alt="client" />
            </li>
            <li>
              <img className="img-fluid" src={Client4} alt="client" />
            </li>
            <li>
              <img className="img-fluid" src={Client5} alt="client" />
            </li>
          </ul>
        </div>
        <div className="services-inner-wrap">
          <div className="services-head text-center">
            <h2>Our services</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
}

export default Services;
