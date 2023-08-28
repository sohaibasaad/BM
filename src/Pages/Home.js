import Header from "../Components/Sections/Header/Header";
import Banner from "../Components/Sections/Banner/Banner";
import Services from "../Components/Sections/Services/Services";
import Work from "../Components/Sections/Work/Work";
import WeWork from "../Components/Sections/WeWork/WeWork";
import Security from "../Components/Sections/Security/Security";
import Reviews from "../Components/Sections/Reviews/Reviews";
import ContactUs from "../Components/Sections/ContactUs/ContactUs";

function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <Work /> 
      <WeWork />
      <Security/>
      <Reviews />
      <ContactUs />
    </div>
  );
}

export default Home;
