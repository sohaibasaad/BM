import './Banner.css';
import BannerImage from "../../assets/images/banner-image.png";
import BannerArrow from "../../assets/images/banner-arrow.png";
import Button from '../../Button/Button';


function Banner() {
    return (
        <div className='bannerMain'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 px-5 ps-0">
                        <div className="banner-content-main-wrap">
                            <div className="banner-content-inner px-5 ps-0">
                                <h1>
                                    Leads that clients can see
                                    and <span>hear|</span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                </p>
                            </div>
                            <div className="banner-buttons">
                                <Button secondary>Book your meeting</Button>
                                <Button primary className="ms-3">How can we help?</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end px-0">
                        <div className="banner-image-main-wrap">
                            <img className='img-fluid' src={BannerImage} alt="Banner Image" />
                            <img className='banner-arrow' src={BannerArrow} alt="Banner Arrow" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner