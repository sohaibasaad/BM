import './Footer.css'
import { NavLink } from "react-router-dom";
import footerLogo from '../../assets/images/logo.png'

function Footer() {
    return (
        <div className='footer-bg'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-12 col-lg-4'>
                        <div className='image-content'>
                            <img src={footerLogo} className='img-fluid' />
                            <p>We are a team of creative thinkers and problem solvers dedicated to expanding the limits of what is possible by helping brands achieve their goals</p>
                        </div>
                        <div className='footer_social_links'>
                            <h2>Social Links</h2>
                            <ul>
                                <li>
                                    <NavLink to={"/home"}>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1_1985)">
                                                <path d="M11.8121 20.0498V11.2563H14.7382L15.1772 7.82824H11.8121V5.63995C11.8121 4.64777 12.0842 3.97161 13.4969 3.97161L15.2956 3.97086V0.904721C14.9845 0.86396 13.9168 0.770508 12.674 0.770508C10.0788 0.770508 8.30212 2.36777 8.30212 5.30044V7.82824H5.36719V11.2563H8.30212V20.0498H11.8121Z" fill="#393939" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_1985">
                                                    <rect width="19.12" height="19.2793" fill="white" transform="translate(0.773438 0.770508)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/home"}>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1_1990)">
                                                <path d="M19.8934 4.43255C19.1824 4.74705 18.4248 4.95551 17.6349 5.05672C18.4475 4.56751 19.0677 3.79875 19.3592 2.87213C18.6016 3.32761 17.7651 3.64933 16.8737 3.82887C16.1543 3.05649 15.129 2.57812 14.0104 2.57812C11.8403 2.57812 10.0932 4.35423 10.0932 6.53159C10.0932 6.84488 10.1195 7.14612 10.1841 7.4329C6.92529 7.27264 4.04176 5.69776 2.10467 3.29869C1.76648 3.89032 1.56811 4.56751 1.56811 5.29651C1.56811 6.66534 2.26719 7.87873 3.30922 8.58122C2.67946 8.56917 2.06165 8.38481 1.53824 8.09442C1.53824 8.10647 1.53824 8.12213 1.53824 8.1378C1.53824 10.0585 2.89695 11.6539 4.67869 12.0214C4.35963 12.1093 4.01188 12.1515 3.65099 12.1515C3.40004 12.1515 3.1467 12.1371 2.9089 12.084C3.41677 13.6493 4.85794 14.8 6.57157 14.8374C5.23795 15.8893 3.54464 16.5231 1.71151 16.5231C1.39006 16.5231 1.08175 16.5086 0.773438 16.4689C2.50977 17.5979 4.56756 18.2426 6.78667 18.2426C13.9997 18.2426 17.9432 12.2178 17.9432 6.9955C17.9432 6.82078 17.9372 6.65209 17.9288 6.4846C18.7068 5.92791 19.3604 5.23265 19.8934 4.43255Z" fill="#393939" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_1990">
                                                    <rect width="19.12" height="19.2793" fill="white" transform="translate(0.773438 0.770508)" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/home"}>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.64534 6.09863H1.37595C1.23085 6.09863 1.11328 6.21626 1.11328 6.36131V16.8644C1.11328 17.0095 1.23085 17.1271 1.37595 17.1271H4.64534C4.79044 17.1271 4.90801 17.0095 4.90801 16.8644V6.36131C4.90801 6.21626 4.79044 6.09863 4.64534 6.09863Z" fill="#393939" />
                                            <path d="M3.01285 0.876953C1.82326 0.876953 0.855469 1.84369 0.855469 3.03197C0.855469 4.22078 1.82326 5.18789 3.01285 5.18789C4.2015 5.18789 5.1685 4.22072 5.1685 3.03197C5.16856 1.84369 4.2015 0.876953 3.01285 0.876953Z" fill="#393939" />
                                            <path d="M12.9625 5.83691C11.6494 5.83691 10.6788 6.4014 10.09 7.04279V6.36063C10.09 6.21558 9.97244 6.09796 9.82734 6.09796H6.69633C6.55123 6.09796 6.43365 6.21558 6.43365 6.36063V16.8638C6.43365 17.0089 6.55123 17.1264 6.69633 17.1264H9.95857C10.1037 17.1264 10.2212 17.0089 10.2212 16.8638V11.6672C10.2212 9.91601 10.6969 9.2338 11.9176 9.2338C13.247 9.2338 13.3527 10.3275 13.3527 11.7572V16.8638C13.3527 17.0089 13.4702 17.1265 13.6153 17.1265H16.8788C17.0239 17.1265 17.1415 17.0089 17.1415 16.8638V11.1027C17.1415 8.49879 16.645 5.83691 12.9625 5.83691Z" fill="#393939" />
                                        </svg>

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/home"}>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1_2001)">
                                                <path d="M0.773438 10.4102C0.773438 5.09486 5.06205 0.770508 10.3334 0.770508C12.4624 0.770508 14.4775 1.46117 16.1608 2.76784L13.9393 5.67774C12.8984 4.86984 11.6515 4.44276 10.3334 4.44276C7.07019 4.44276 4.41534 7.11974 4.41534 10.4102C4.41534 13.7006 7.07019 16.3776 10.3334 16.3776C12.9617 16.3776 15.1952 14.6412 15.9649 12.2463H10.3334V8.57404H19.8934V10.4102C19.8934 15.7255 15.6048 20.0498 10.3334 20.0498C5.06205 20.0498 0.773438 15.7255 0.773438 10.4102Z" fill="#393939" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_2001">
                                                    <rect width="19.12" height="19.2793" fill="white" transform="translate(0.773438 0.770508)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-lg-2 mt-4 mt-lg-0'>
                        <div className='footer_content'>
                            <h2>Quick Links</h2>
                            <ul>
                                <li><NavLink to={"/home"}>home</NavLink></li>
                                <li><NavLink to={"/about-us"}>about</NavLink></li>
                                <li><NavLink to={"/services"}>services</NavLink></li>
                                <li><NavLink to={"/contact-us"}>contact us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-lg-2 mt-4 mt-lg-0'>
                        <div className='footer_content'>
                            <h2>Legal & Info</h2>
                            <ul>
                                <li><NavLink to={"/home"}>terms & conditions</NavLink></li>
                                <li><NavLink to={"/home"}>privacy policy</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 mt-4 mt-lg-0'>
                        <div className='footer_content footer_content_contact'>
                            <h2>Contact</h2>
                            <ul>
                                {/* <li>
                                    <a>
                                        <i class="fas fa-map-marker-alt"></i>
                                        Lorem ipsum street 000 epis eluite du  Consuciter dummy USA
                                    </a>
                                </li> */}
                                <li>
                                    <a href="mailto:contact@bytesmaster.com">
                                        <i class="fas fa-envelope"></i>
                                        contact@bytesmaster.com
                                    </a>
                                </li>
                                {/* <li>
                                    <a>
                                        <i class="fas fa-phone-alt"></i>
                                        111-222-333
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright_text text-center'>
                <p>Copyright © 2023 Bytes Master. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
