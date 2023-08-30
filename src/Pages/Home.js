import Banner from "../Components/Sections/Home/Banner/Banner";
import Services from "../Components/Sections/Home/Services/Services";
import Work from "../Components/Sections/Home/Work/Work";
import WeWork from "../Components/Sections/Home/WeWork/WeWork";
import Security from "../Components/Sections/Home/Security/Security";
import Reviews from "../Components/Sections/Home/Reviews/Reviews";
import ContactUs from "../Components/Sections/Home/ContactUs/ContactUs";

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
