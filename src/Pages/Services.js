import WebBanner from "../Components/Sections/WebBanner/WebBanner"
import ServicesSection1 from "../Components/Sections/Services/ServiceSection1/ServiceSection1"
import ServicesSection2 from "../Components/Sections/Services/ServiceSection2/ServiceSection2"
import ServicesSection3 from "../Components/Sections/Services/ServiceSection3/ServiceSection3"
import serviceBanner from '../Components/assets/images/service-banner.png'

function Services() {
    return (
        <div>
            <WebBanner bannerHeading="Services" bannerImage={serviceBanner}/>
            <ServicesSection1 />
            <ServicesSection2 />
            <ServicesSection3 />
        </div>
    )
}

export default Services
