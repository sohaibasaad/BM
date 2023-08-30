import './ServiceSection3.css'
import technologies from '../../../assets/images/technologies.png'
import Button from '../../../Button/Button'

function ServiceSection3() {
    return (
        <div className='services-page-section3'>
            <div className='container'>
                <h2>Technologies we are using</h2>
                <img src={technologies} className='img-fluid' />
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                <div className='col-12 contact-button'>
                    <Button secondary>How can we help?</Button>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection3
