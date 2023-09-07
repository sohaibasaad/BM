import './AboutContent.css'
import aboutImageRight from '../../../assets/images/about-image-right.png'
import aboutImage from '../../../assets/images/about-image.png'
import aboutImage2 from '../../../assets/images/about-image-2.png'
import aboutImage3 from '../../../assets/images/about-image-3.png'
import aboutArrow from '../../../assets/images/about-arrow.png'
import aboutImageleft from '../../../assets/images/about-image-left.png'
import aboutArrow2 from '../../../assets/images/about-arrow-2.png'
import Button from '../../../Button/Button'

function AboutContent() {
    return (
        <div className='about-content'>
            <div className='about-content-bg'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-12 col-lg-6 px-lg-3'>
                            <div className='about_content_heading'>
                                <h2 className='mb-4'>We are small but nice group of people passionate about creating great products.</h2>
                                <p className='mb-4 pe-lg-5'>Bytes master is a company comprised of experienced teams in every aspect of Digital Services. We started a year ago as a team of a few individuals with the passion to learn how to provide our clients unmeasurable growth through the Digital World. Our extensive research and our practical learning helped us to understand the small and fragile steps needed to turn every project into a success.</p>
                                <p className='mb-4 pe-lg-5'>In the past year, We have grown our company and reputation from a few individuals to the same individuals leading their own respective departments. Every department has team members from experienced team leads to fresh apprentices. We have always focused on increasing our own knowledge and skills while sharing all that experience with the juniors.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 position-relative right_image_about'>
                            <img src={aboutImageRight} className='img-fluid' />
                            <img src={aboutArrow} className='img-fluid aboutArrow' />
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-12 col-lg-4'>
                            <img src={aboutImage} className='img-fluid' />
                        </div>
                        <div className='col-12 col-lg-4 mt-lg-0 mt-4'>
                            <img src={aboutImage2} className='img-fluid' />
                        </div>
                        <div className='col-12 col-lg-4 mt-lg-0 mt-4'>
                            <img src={aboutImage3} className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-content-without-bg'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-12 col-lg-6 position-relative'>
                            <img src={aboutImageleft} className='img-fluid' />
                            <img src={aboutArrow2} className='img-fluid aboutArrow2' />
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='about_content_heading'>
                                <h2 className='mb-4 mt-4 mt-lg-0'>Our Achievements</h2>
                                <p className='mb-4 pe-lg-5'>Our packages are amazingly cost-effective and are being offered to suit any business size. We are your solution provider not a pocket breaker. Our tally of projects so far:</p>
                                <div className='row'>
                                    <div className='col-12 col-lg-4'>
                                        <div className='achievement_counter'>
                                            <h2>67<span>+</span></h2>
                                            <p>Websites</p>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4'>
                                        <div className='achievement_counter'>
                                            <h2>1K<span>+</span></h2>
                                            <p>Logos</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 col-lg-4'>
                                        <div className='achievement_counter'>
                                            <h2>32<span>+</span></h2>
                                            <p>Mobile Apps</p>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4'>
                                        <div className='achievement_counter'>
                                            <h2>50<span>+</span></h2>
                                            <p>Portals</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button secondary>Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
