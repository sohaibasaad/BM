import './Reviews.css'
import Slider from "react-slick";

function Reviews() {
  const reviewSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };

  const reviewContent = [
    {
      reviewHeading: "Great Work",
      reviewPara: "It gives me great pleasure to endorse Bytes Master to anyone who might be interested. Throughout the course of our collaboration, they have been thorough, professional, and knowledgeable. We believe that we have built a lasting relationship with them. Our new website has received tremendously excellent feedback",
      reviewInitials: "KJ",
      reviewerName: "Kevin J.",
      reviewerPosition: "Owner",
    },
    {
      reviewHeading: "Good Job",
      reviewPara: "In every way, Bytes Master are true professionals. They were attentive to my needs, provided solutions that would meet them, responded promptly to all of my inquiries, and, most importantly, they never lied to me. Without a doubt, this is the most fruitful website I have ever had created for my business.",
      reviewInitials: "AP",
      reviewerName: "Amber P.",
      reviewerPosition: "Owner",
    },
    {
      reviewHeading: "Perfect",
      reviewPara: "I would advise anyone seeking for a website that looks professional to contact Bytes Master. Not only their designs are of superior quality, they also provide exceptional assistance in a timely manner.",
      reviewInitials: "LJ",
      reviewerName: "Linda J Schroeder",
      reviewerPosition: "Owner",
    },
    {
      reviewHeading: "Awesome",
      reviewPara: "We were able to significantly expand the functionality of our website and reduce expenditures with the help of Bytes Master. Our website is lot easier to use, contains many more features than it had in the past, and is very simple to manage. We love our new site! Thankyou Bytes Master!",
      reviewInitials: "HS",
      reviewerName: "Henry Samuel",
      reviewerPosition: "Owner",
    },


    {
      reviewHeading: "Awesome",
      reviewPara: "The logo speaks volume and have received numerous appreciations for it. The impact is profound and we are enjoying the success.",
      reviewInitials: "JH",
      reviewerName: "Jeffery Houston",
      reviewerPosition: "Owner",
    },
    {
      reviewHeading: "Good Job",
      reviewPara: "What I liked most was the professionalism right from the moment design consultant contacted us till project delivery. We at Quick Check love the new logo and are excited with our new identity",
      reviewInitials: "JS",
      reviewerName: "John Smith",
      reviewerPosition: "Owner",
    },
    {
      reviewHeading: "Flawless Timing",
      reviewPara: "Thanks to Bytes Master, I was able to launch this product right on time. The brand identity they designed for me was perfect for my product. Thanks for the great work. I recommendthem.",
      reviewInitials: "BB",
      reviewerName: "Blare Benson",
      reviewerPosition: "Marketing",
    },
    {
      reviewHeading: "Awesome Coordination",
      reviewPara: "Bytes Master is my go-to service for all my branding and designing needs. I only send them the instruction about my logo for company and every time they have delivered me unique and flawless designs. They are very easy to work with.",
      reviewInitials: "NA",
      reviewerName: "Nicole Anderson",
      reviewerPosition: "Owner",
    },
  ];
  return (
    <div className='review_section'>
      <div className="container">
        <h1 className="main_heading text-center"><span>Numbers</span> That Move Mountains</h1>
        <p className="main_para mb-5 mt-4 text-center px-5">Bytes Master is more than just another digital marketing agency. We offer flawless digital solutions to turn brilliant ideas into working realities for you. Let’s hear digital success stories from our satisfied clients!</p>
        <Slider {...reviewSlider}>
          {
            reviewContent.map((reviewContent, index) => {
              return (
                <div className="" key={index}>
                  <div className="review_secion_box">
                    <h6>{reviewContent.reviewHeading}</h6>
                    <p>{reviewContent.reviewPara}</p>
                    <ul className="rating_ul">
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                    </ul>
                    <div className="review_info">
                      <span>{reviewContent.reviewInitials}</span>
                      <div className="review_info_content">
                        <h6>{reviewContent.reviewerName}</h6>
                        <p>{reviewContent.reviewerPosition}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default Reviews
