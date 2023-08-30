import './ServiceSection2.css'
import Button from '../../../Button/Button'
import servicesArrow2 from '../../../assets/images/services-arrow-2.png'

function ServiceSection2() {
    const serviceContent = [
        {
            number: "01",
            heading: "Project Kickoff",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
        },
        {
            number: "02",
            heading: "Project Kickoff",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
        },
        {
            number: "03",
            heading: "Project Kickoff",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
        },
    ];
    return (
        <div className='service-page-section2'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6  mt-lg-5 pt-lg-5'>
                        <div className='services_content position-relative'>
                            <h2>Shaping a vision. delivering digital products. creating world-class experiences.</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                            <div className='mt-4'>
                                <Button secondary>How can we help?</Button>
                            </div>
                            <img src={servicesArrow2} className='img-fluid servicesArrow2' />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 mt-lg-0 mt-5'>
                        {
                            serviceContent.map((serviceContent, index) => {
                                const isMarginTop = index == 0 ? "0px" : "25px";
                                return (
                                    <div className={`services_boxes`} style={{marginTop: isMarginTop}} key={index}>
                                        <div className='services_box_width1'>
                                            <span>{serviceContent.number}</span>
                                        </div>
                                        <div className='services_box_width2'>
                                            <h2>{serviceContent.heading}</h2>
                                            <p>{serviceContent.para}</p>
                                        </div>
                                    </div>
                                )
                            })

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection2
