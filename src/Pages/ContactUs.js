import WebBanner from "../Components/Sections/WebBanner/WebBanner"
import ContactUsForm from "../Components/Sections/ContactUs/ContactUsForm/ContactUsForm"
import contactBanner from '../Components/assets/images/contact-banner.png'

function ContactUs() {
  return (
    <div>
        <WebBanner bannerHeading="Contact Us" bannerImage={contactBanner}/>
        <ContactUsForm />
    </div>
  )
}

export default ContactUs
