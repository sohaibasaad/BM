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
                                <h2>Ensure max security of your digital assets forever</h2>
                                <p className='mt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                <p className='mt-3 mb-4'>
                                    letters, as opposed to using 'Content here, content here', making it look like readable English by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
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
