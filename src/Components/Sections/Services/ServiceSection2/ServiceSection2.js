import './ServiceSection2.css'
import Button from '../../../Button/Button'
// import servicesArrow2 from '../../../assets/images/services-arrow-2.png'
import Slider from "react-slick";

function ServiceSection2() {
    const serviceContent = [
        {
            number: "01",
            heading: "web development and design",
            para: "As a well-known digital agency, we provide complete webs design and development services.",
        },
        {
            number: "02",
            heading: "ecommerce store development",
            para: "Bytes Master offers global clients full-cycle e-commerce development services.",
        },
        {
            number: "03",
            heading: "mobile app development",
            para: "Our mobile app development services provide cutting-edge applications for various platforms, ensuring innovation and user-friendly experiences.",
        },
        {
            number: "04",
            heading: "logo design",
            para: "At Bytes Master, we ensure to make your brand identity stand out from the crowd by hiring skilled designers.",
        },
        {
            number: "05",
            heading: "brand development",
            para: "With our robust brand development solutions, we specialize in building a rock-solid foundation for your business.",
        },
        {
            number: "06",
            heading: "marketing collaterals",
            para: "Our experts assist businesses in increasing brand awareness with eye-catching marketing assets.",
        },
        {
            number: "07",
            heading: "Motion raphics",
            para: "We create influential motion graphics with a focused team and versatile narrative tools.",
        },
        {
            number: "08",
            heading: "Search Engine Optimization",
            para: "We help businesses increase their visibility and sales by utilizing smart SEO tactics.",
        },
        {
            number: "09",
            heading: "Social Media Marketing",
            para: "To reach your objectives, we generate and disseminate compelling content on social media networks.",
        }
    ];

    const servicesSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
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
        <div className='service-page-section2'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-12'>
                        <div className='services_content position-relative text-center'>
                            <h2>Shaping a vision. delivering digital products. creating world-class experiences.</h2>
                            <p>At the heart of our mission lies the commitment to transform ideas into reality. With a keen focus on innovation and a passion for excellence, we craft digital products that not only meet but exceed expectations. We believe in pushing boundaries to create immersive and unforgettable experiences that resonate with users worldwide. Join us on this journey as we continue to shape the future, one visionary digital product at a time.</p>
                            {/* <div className='mt-4'>
                                <Button secondary>How can we help?</Button>
                            </div>
                            <img src={servicesArrow2} className='img-fluid servicesArrow2' /> */}
                        </div>
                    </div>
                    <div className='col-12 col-lg-12 mt-5'>
                        <Slider {...servicesSlider}>
                            {
                                serviceContent.map((serviceContent, index) => {
                                    return (
                                        <div className=''>
                                            <div className={`services_boxes`} key={index}>
                                                <div className='services_box_width1'>
                                                    <span>{serviceContent.number}</span>
                                                </div>
                                                <div className='services_box_width2'>
                                                    <h2>{serviceContent.heading}</h2>
                                                    <p>{serviceContent.para}</p>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })

                            }
                        </Slider>
                        <div className='mt-4 text-center'>
                            <Button secondary>How can we help?</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection2
