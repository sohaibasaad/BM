import './ContactUs.css'
import Button from '../../../Button/Button'
import contactBg from '../../../assets/images/contact-bg.png'
import contactArrow from '../../../assets/images/contact-arrow.png'

function ContactUs() {

    const handleSubmit = () => {
        debugger
        let rawFormData = document.querySelector(".contact-us")

        var obj = rawFormData;
        var formData = new FormData(obj);

        fetch(window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1) + "sendmail.php", {
            method: "POST",
            body: formData,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                if (response.status === 1) {
                    document.querySelector("#thankyouModal").style.display = "block";
                    obj.reset();
                } else {
                    return false;
                }
            })
            .catch(function (error) {
                console.error("Error:", error);
            });

        return false;
    }

    return (
        <div className='contact-us-section'>
            <div className='container'>
                <div className='row justify-content-around'>
                    <div className='col-12 col-lg-5 rearrange-order-2'>
                        <div className='home-form'>
                            <form className='contact-us' onSubmit={handleSubmit}>
                                <div className='custom_input_field'>
                                    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7.56436" cy="4.10256" r="3.35256" stroke="#969696" stroke-width="1.5" />
                                        <path d="M14.158 16H1.02977C1.02977 16 0.209256 9.84619 7.18362 9.84619C14.158 9.84619 14.158 16 14.158 16Z" stroke="#969696" stroke-width="1.5" />
                                    </svg>
                                    <input className='form-control' name='quote[Name]' placeholder='Name' required />
                                </div>
                                <div className='custom_input_field'>
                                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.6" y="0.6" width="20.8" height="14.8" rx="1.4" stroke="#969696" stroke-width="1.2" />
                                        <path d="M1.09973 14.8574L7.69973 8.00021M7.69973 8.00021C7.69973 8.00021 10.4497 10.8574 10.9997 10.8574C11.5497 10.8574 14.2997 8.00021 14.2997 8.00021M7.69973 8.00021L1.09973 1.14307M14.2997 8.00021L20.8997 14.8574M14.2997 8.00021L20.8997 1.14307" stroke="#969696" stroke-width="1.2" />
                                    </svg>

                                    <input className='form-control' name='quote[Email]' placeholder='Email' required />
                                </div>
                                <div className='custom_input_field'>
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_2129)">
                                            <path d="M18.93 1.84405L20.141 0.633C20.1424 0.630781 20.1438 0.628306 20.1456 0.625044C20.1476 0.621498 20.1502 0.617022 20.1537 0.610936C20.1618 0.597119 20.1744 0.576633 20.1937 0.557278C20.3083 0.442686 20.459 0.389982 20.6071 0.393313M18.93 1.84405L20.6098 0.39338C20.6089 0.393356 20.608 0.393333 20.6071 0.393313M18.93 1.84405L18.6773 1.59133C18.6759 1.58911 18.6745 1.58663 18.6727 1.58336C18.6707 1.57982 18.6681 1.57535 18.6646 1.56927C18.6565 1.55545 18.6439 1.53496 18.6245 1.51561C18.5099 1.40102 18.3593 1.34832 18.2112 1.35165C18.0632 1.34831 17.9125 1.40102 17.7979 1.51561C17.7786 1.53496 17.7659 1.55545 17.7579 1.56927C17.7543 1.57535 17.7518 1.57982 17.7498 1.58336C17.7479 1.58663 17.7465 1.58911 17.7452 1.59133L16.6354 2.7007C16.2745 2.17681 15.6779 1.82845 14.9912 1.82845C14.42 1.82845 13.9082 2.06849 13.5418 2.44885C13.5351 2.45255 13.5212 2.46062 13.5079 2.47394L8.69278 7.28861L8.76349 7.35932L8.69278 7.28861C8.47117 7.51023 8.47117 7.87015 8.69278 8.09176L8.69287 8.09186C8.9149 8.3133 9.27427 8.31343 9.49593 8.09176L12.772 4.8157L12.8427 4.74498L12.8413 4.74354L14.2699 3.31492L14.2752 3.31844L14.333 3.25402C14.496 3.07238 14.7293 2.95707 14.9907 2.95707C15.3659 2.95707 15.6838 3.19164 15.8132 3.52234L2.56507 16.7695C2.4513 16.8324 2.35244 16.9311 2.30117 17.0651C2.3011 17.0653 2.30104 17.0655 2.30097 17.0656L0.461364 21.7556C0.444532 21.7884 0.433912 21.8212 0.425527 21.8476L0.425283 21.8481L0.425249 21.8481L0.424165 21.8507C0.419015 21.8627 0.417048 21.8733 0.416191 21.8804C0.404103 21.9265 0.392729 21.979 0.392597 22.0376M18.93 1.84405L1.13238 22.5972C1.08773 22.609 1.03496 22.621 0.976148 22.6206C0.917689 22.6222 0.86534 22.6116 0.817865 22.5987C0.812076 22.5984 0.796512 22.5973 0.779149 22.5916L0.775612 22.5904L0.775636 22.5903C0.766672 22.5869 0.759591 22.583 0.754611 22.5798C0.704637 22.5594 0.662992 22.5313 0.626404 22.5034C0.624708 22.5022 0.622547 22.5008 0.620022 22.499C0.605846 22.4893 0.580196 22.4717 0.560845 22.4524C0.541486 22.433 0.523915 22.4074 0.514205 22.3932C0.512559 22.3908 0.511138 22.3887 0.509974 22.3871C0.481209 22.3497 0.454098 22.3081 0.433816 22.2593C0.430551 22.2542 0.426329 22.2467 0.42292 22.2376L0.422146 22.2355L0.422169 22.2355C0.41573 22.2171 0.41476 22.2003 0.414454 22.195L0.414432 22.1946C0.401967 22.1478 0.391543 22.0953 0.392597 22.0376M20.6071 0.393313C20.7551 0.389981 20.9058 0.442686 21.0204 0.55728C21.0397 0.576633 21.0523 0.597119 21.0604 0.610936C21.064 0.617022 21.0665 0.621498 21.0685 0.625044C21.0704 0.628306 21.0718 0.630781 21.0731 0.633M20.6071 0.393313L21.0731 0.633M21.0731 0.633L22.3819 1.94179C22.3842 1.94319 22.3868 1.94463 22.39 1.94647C22.3937 1.94854 22.3983 1.95113 22.4045 1.95475C22.4184 1.9629 22.4383 1.97523 22.4575 1.99395L22.4591 1.99549L22.4591 1.99551C22.5712 2.10997 22.6237 2.26028 22.6209 2.40763C22.6237 2.55548 22.5712 2.7061 22.4571 2.82075L22.4561 2.82177C22.4369 2.84048 22.417 2.85281 22.403 2.86096C22.3968 2.86458 22.3922 2.86717 22.3886 2.86925C22.3853 2.87108 22.3828 2.87252 22.3804 2.87391L21.1697 4.0847L21.4221 4.3371C21.4243 4.33843 21.4267 4.33979 21.4298 4.34153C21.4335 4.34362 21.4382 4.34625 21.4447 4.34999C21.4587 4.35814 21.4792 4.37075 21.4986 4.39013L21.4988 4.39031C21.6128 4.50493 21.6654 4.65554 21.6625 4.80298C21.6654 4.95083 21.6128 5.10146 21.4988 5.2161L21.4986 5.21628C21.4792 5.23566 21.4587 5.24828 21.4447 5.25642C21.4382 5.26017 21.4335 5.26279 21.4298 5.26488C21.4267 5.26662 21.4243 5.26799 21.4221 5.26932L6.2437 20.4486C6.18087 20.5624 6.0821 20.6614 5.94779 20.7122C5.94762 20.7123 5.94744 20.7123 5.94726 20.7124L1.25772 22.5518C1.22471 22.5688 1.19243 22.5798 1.16368 22.5888L1.16214 22.5895L1.15877 22.5909L1.15874 22.5908C1.14867 22.5946 1.13989 22.5962 1.13412 22.597L21.0731 0.633ZM0.392597 22.0376C0.392596 22.0379 0.392596 22.0383 0.392596 22.0386H0.492596L0.392617 22.0365C0.39261 22.0369 0.392603 22.0372 0.392597 22.0376ZM0.810777 22.5968L0.812853 22.5974L0.810777 22.5968ZM3.0925 18.2805L4.73323 19.9212L2.03353 20.9806L3.0925 18.2805ZM3.68008 17.2618L18.2103 2.7316L20.2821 4.80345L5.75193 19.3336L3.68008 17.2618ZM19.7322 2.6472L20.6061 1.77327L21.2404 2.40761L20.3665 3.28155L19.7322 2.6472Z" fill="#969696" stroke="#969696" stroke-width="0.2" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_2129">
                                                <rect width="23" height="23" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <input className='form-control' name='quote[Subject]' placeholder='Subject' />
                                </div>
                                <div className='custom_input_field custom_input_field_textarea'>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.51869 15.7012H0.5V19.7199L4.51869 15.7012Z" stroke="#969696" />
                                        <path d="M0.5 1.86916C0.5 1.11299 1.11299 0.5 1.86916 0.5H18.1308C18.887 0.5 19.5 1.11299 19.5 1.86916V14.0187C19.5 14.7749 18.887 15.3878 18.1308 15.3878H0.5V1.86916Z" stroke="#969696" />
                                        <rect x="4.5" y="4.8877" width="11" height="1" fill="#969696" />
                                        <rect x="4.5" y="7.3877" width="11" height="1" fill="#969696" />
                                        <rect x="4.5" y="9.8877" width="11" height="1" fill="#969696" />
                                    </svg>
                                    <textarea className='form-control' name='quote[Message]' placeholder='Message' required></textarea>
                                </div>
                                <div className='col-12 contact-button'>
                                    <Button secondary>Send Now!</Button>
                                </div>
                            </form>
                            <img src={contactBg} className='im-fluid contact-bg-image' />
                        </div>
                    </div>
                    <div className='col-12 col-lg-5 mt-lg-5 mt-0 mb-5 mb-lg-0 ps-lg-5 rearrange-order-1'>
                        <div class="conact_content">
                            <h2>Let’s talk now</h2>
                            <p className='mt-3'>We can assist you with everything – whether you need a brand-new website design or want to redesign your existing one to make it more user-friendly. Complete the form below to reinvent the website for your company</p>
                            <img src={contactArrow} className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
