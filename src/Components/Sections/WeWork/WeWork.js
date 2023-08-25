import './WeWork.css'
import weWork from '../../assets/images/we-work.png'
import weWorkArrow from '../../assets/images/we-work-arrow.png'

function WeWork() {
    return (
        <div className='we-work-section'>
            <div className='container'>
                <div className='we-work-content'>
                    <h2>Watch this video to see how we work</h2>
                    <p className='mt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
                    </p>
                    <p className='mt-3 mb-4'>Letters, as opposed to using 'Content here, content here', making it look like readable English by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution. The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                    
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
