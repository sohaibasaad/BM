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
                    <img src={servicesImage} className='img-fluid' />
                    <img src={servicesArrow} className='img-fluid serviceArrow' />
                </div>
                <div className='col-12 col-lg-6 mt-lg-0 mt-5 ps-lg-4'>
                    <div className='services_content'>
                        <h2>Digital demand thrives in our hands</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content page when looking at its layout.</p>
                        <ul>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="7.5" stroke="#3B6F4F"/>
                                    <circle cx="8.00312" cy="7.99922" r="4.8" fill="#3B6F4F"/>
                                </svg>
                                <p>It is a long established fact that a reader will be distracted by the.</p>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="7.5" stroke="#3B6F4F"/>
                                    <circle cx="8.00312" cy="7.99922" r="4.8" fill="#3B6F4F"/>
                                </svg>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="7.5" stroke="#3B6F4F"/>
                                    <circle cx="8.00312" cy="7.99922" r="4.8" fill="#3B6F4F"/>
                                </svg>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="7.5" stroke="#3B6F4F"/>
                                    <circle cx="8.00312" cy="7.99922" r="4.8" fill="#3B6F4F"/>
                                </svg>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="7.5" stroke="#3B6F4F"/>
                                    <circle cx="8.00312" cy="7.99922" r="4.8" fill="#3B6F4F"/>
                                </svg>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
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
