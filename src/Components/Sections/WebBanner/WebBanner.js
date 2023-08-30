import './WebBanner.css'

function AboutBanner({ bannerHeading, bannerImage }) {
    return (
        <div className='web-banner' style={{backgroundImage: `url(${bannerImage})`}}>
            <div className="container">
                <div className="banner-heading">
                    <h1 className='text-center'>{bannerHeading}</h1>
                </div>
            </div>
        </div>
    )
}

export default AboutBanner
