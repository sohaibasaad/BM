import './AboutContent.css'
import aboutImageRight from '../../assets/images/about-image-right.png'
import aboutImage from '../../assets/images/about-image.png'
import aboutImage2 from '../../assets/images/about-image-2.png'
import aboutImage3 from '../../assets/images/about-image-3.png'
import aboutArrow from '../../assets/images/about-arrow.png'
import aboutImageleft from '../../assets/images/about-image-left.png'
import aboutArrow2 from '../../assets/images/about-arrow-2.png'
import Button from '../../Button/Button'

function AboutContent() {
    return (
        <div className='about-content'>
            <div className='about-content-bg'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-12 col-lg-6 px-lg-3'>
                            <div className='about_content_heading'>
                                <h2 className='mb-4'>We are small but nice group of people passionate about creating great products.</h2>
                                <p className='mb-4 pe-lg-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution letters, as opposed to using 'Content here, content here' making it look like. </p>
                                <p className='mb-4 pe-lg-5'>Readable English by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
                                <p className='mb-4 pe-lg-5'>It is a long established fact that a reader will be distrac by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                                <div className='row'>
                                    <div className='col-12 col-lg-4'>
                                        <div className='achievement_counter'>
                                            <h2>98<span>%</span></h2>
                                            <p>Private Office</p>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4'>
                                        <div className='achievement_counter'>
                                            <h2>20M<span>+</span></h2>
                                            <p>Coworking Desks</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 col-lg-4'>
                                        <div className='achievement_counter'>
                                            <h2>100K<span>+</span></h2>
                                            <p>Meeting Rooms</p>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4'>
                                        <div className='achievement_counter'>
                                            <h2>55<span>%</span></h2>
                                            <p>Meeting Rooms</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-12 col-lg-6'>

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
