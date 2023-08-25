import workImage from '../../assets/images/work1.png'
import './Work.css'
import Button from '../../Button/Button'
import workArrow from '../../assets/images/work-arrow.png'

function Work() {
  return (
    <div className='work-section'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-6 px-5'>
            <div className='work_image'>
              <img src={workImage} className='img-fluid' alt="Work" />
            </div>
          </div>
          <div className='col-12 col-lg-6 work_content_main'>
            <div class="work_content">
              <h2>Real leeds, real returns</h2>
              <p className='mt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
              <p className='mt-3 mb-4'>
                letters, as opposed to using 'Content here, content here', making it look like readable English by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
              <Button primary>Get Started</Button>
            </div>
            <div className='work_image_arrow'>
              <img src={workArrow} className='img-fluid' alt="Work Arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
