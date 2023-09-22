import './ServiceSection1.css'
import servicesImage from '../../../assets/images/service-image.png'
import servicesArrow from '../../../assets/images/services-arrow.png'
import Button from '../../../Button/Button'

function ServiceSection1() {
  return (
    <div className='service-page-section'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-12 col-lg-6 position-relative '>
                    <img src={servicesImage} className='img-fluid' alt='services' />
                    <img src={servicesArrow} className='img-fluid serviceArrow' alt='services'/>
                </div>
                <div className='col-12 col-lg-6 mt-lg-0 mt-5 ps-lg-4'>
                    <div className='services_content'>
                        <h2>Digital demand thrives in our hands</h2>
                        <p>In today's fast-paced world, we feel that a tailored website is the to ultimate growth. Our result-oriented website design and development agency is dedicated to providing solutions that keep your organization ahead of the competition.</p>
                        <ul>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="7.5" stroke="#3B6F4F"/>
                                    <circle cx="8.00312" cy="7.99922" r="4.8" fill="#3B6F4F"/>
                                </svg>
                                <p>We develop websites that strive to increase brand exposure through exceptional planning.</p>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="7.5" stroke="#3B6F4F"/>
                                    <circle cx="8.00312" cy="7.99922" r="4.8" fill="#3B6F4F"/>
                                </svg>
                                <p>For the best outcomes, our professionals monitor every step of your web design process.</p>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="7.5" stroke="#3B6F4F"/>
                                    <circle cx="8.00312" cy="7.99922" r="4.8" fill="#3B6F4F"/>
                                </svg>
                                <p>We create user-centered websites by employing cutting-edge technologies and a talented team.</p>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="7.5" stroke="#3B6F4F"/>
                                    <circle cx="8.00312" cy="7.99922" r="4.8" fill="#3B6F4F"/>
                                </svg>
                                <p>To optimize brand success in their specific sector, we employ a robust marketing procedure.</p>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="7.5" stroke="#3B6F4F"/>
                                    <circle cx="8.00312" cy="7.99922" r="4.8" fill="#3B6F4F"/>
                                </svg>
                                <p>We create an everlasting impact on the target market with innovative post-launch services.</p>
                            </li>
                        </ul> 
                        <div className='mt-4'>
                            <Button secondary>How can we help?</Button> 
                        </div>  
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ServiceSection1
