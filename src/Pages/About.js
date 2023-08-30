import AboutContent from "../Components/Sections/About/AboutContent/AboutContent"
import WebBanner from "../Components/Sections/WebBanner/WebBanner"
import aboutBanner from '../Components/assets/images/about-banner.png'

function About() {
  return (
    <div>
      <WebBanner bannerHeading="About Us" bannerImage={aboutBanner} />
      <AboutContent />
    </div>
  )
}

export default About
