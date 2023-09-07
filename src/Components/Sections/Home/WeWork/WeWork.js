import './WeWork.css'
import weWork from '../../../assets/images/we-work.png'
import weWorkArrow from '../../../assets/images/we-work-arrow.png'

function WeWork() {
    return (
        <div className='we-work-section'>
            <div className='container'>
                <div className='we-work-content'>
                    <h2>Our Process</h2>
                    <p className='mt-3 mb-4'>At Bytes Master, our holistic approach begins with a thorough understanding of your goals. We craft bespoke websites, captivating logos, and intuitive UI/UX designs that resonate with your brand. Our SEO experts ensure maximum online visibility, while our social media gurus amplify your presence. Our process is a fusion of creativity and data-driven strategies, driving your success from concept to execution.</p>
                    
                    <div className='we_work_image'>
                        <img src={weWork} className='img-fluid' alt='how we work' />
                        <img src={weWorkArrow} className='img-fluid we_work_arrow_image' alt='how we work Arrow' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeWork
