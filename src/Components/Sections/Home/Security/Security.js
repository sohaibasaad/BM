import securityImage from '../../../assets/images/security.png'
import './Security.css'
import Button from '../../../Button/Button'
import securityArrow from '../../../assets/images/security-arrow.png'

function Security() {
    return (
        <div>
            <div className='security-section'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-12 col-lg-6 security_content_main'>
                            <div class="security_content">
                                <h2>Gain a competitive advantage with our digital agency</h2>
                                <p className='mt-3'>We are a leading force in the world of website design and web development, specializing in the art of crafting transformative digital experiences that empower brands and ignite business growth. Our expert team is driven by a passion for innovation, consistently delivering visually stunning websites and applications that not only captivate visitors but also drive meaningful conversions and elevate critical performance metrics. Whether you're embarking on a digital journey from scratch or looking to revitalize your online presence, we possess the expertise to turn your vision into a vibrant reality.</p>
                                <p className='mt-3 mb-4'>At our core, we are storytellers in the digital realm, weaving compelling narratives that resonate with your audience. We understand that a well-designed website isn't just about aesthetics; it's about creating an immersive journey that leaves a lasting impression. With a commitment to excellence and a knack for staying ahead of industry trends, we're your trusted partner on the path to online success, transforming your ideas into digital brilliance</p>
                                <Button secondary>Get Started</Button>
                            </div>
                            <div className='security_image_arrow'>
                                <img src={securityArrow} className='img-fluid' alt="security Arrow" />
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 px-5 mt-5 mt-lg-0'>
                            <div className='security_image'>
                                <img src={securityImage} className='img-fluid' alt="security" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security
