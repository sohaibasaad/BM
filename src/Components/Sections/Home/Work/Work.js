import workImage from '../../../assets/images/work1.png'
import './Work.css'
import Button from '../../../Button/Button'
import workArrow from '../../../assets/images/work-arrow.png'

function Work() {
  return (
    <div className='work-section'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-5 px-5'>
            <div className='work_image'>
              <img src={workImage} className='img-fluid' alt="Work" />
            </div>
          </div>
          <div className='col-12 col-lg-7 work_content_main'>
            <div class="work_content">
              <h2>we are a professional digital company</h2>
              <p className='mt-3'>We are a full-cycle design and development company committed to creating innovative solutions for you that enable you to grow your brand and create endless possibilities for you. Our experts craft customized solutions for you that are able to fulfill your requirements in the best way possible.</p>
              <p className='mt-3'>We are a full-cycle design and development company committed to creating innovative solutions for you that enable you to grow your brand and create endless possibilities for you. Our experts craft customized solutions for you that are able to fulfill your requirements in the best way possible.</p>
              <p className='mt-3 mb-4'>We are not just another design company, We are your partners in growing your bussiness.</p>
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
