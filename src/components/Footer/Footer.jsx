import phn from '../../assets/phone.png'
import phninside from '../../assets/phnInside.png'
import Button from '../Button/Button'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io";
import footerImg from "../../assets/footerphn.png"
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='py-4 w-100' style={{ position: 'relative' }}>

            <div className='upperPart d-flex gap-3 py-3 justify-content-evenly w-100'>
                <div style={{}}>
                    <img className='mobImg' src={footerImg} alt="" />
                </div>

                <div className='d-flex gap-2 flex-column align-items-start'>
                    <h2 style={{ color: '#1B3C74' }}>Download the <span style={{ color: '#2AA7FF' }}>Medify</span> App </h2>
                    <p style={{ color: '#414146' }}>Get the link to download teh app</p>

                    <div className='sms d-none d-md-flex gap-2 flex-md-wrap' style={{ height: '2.5rem' }}>
                        <div style={{ padding: '0.5rem', borderRadius: '0.3rem', backgroundColor: 'white', fontWeight: '600', display: "flex", justifyContent: 'center', alignItems: 'center' }}>+91</div>


                        <input style={{ height: "100%", border: 'none', borderRadius: '0.3rem', }} type="text" placeholder='Enter phone number' />

                        <Button>Send SMS</Button>
                    </div>

                    <div className='downloadBtn d-none d-md-flex gap-2 mt-5'>
                        <Button><FaGooglePlay />Google Play</Button>
                        <Button><FaApple />App Store</Button>
                    </div>
                    <div className='downloadBtn d-flex d-md-none gap-2 mt-5'>
                        <Button><FaGooglePlay /></Button>
                        <Button><FaApple /></Button>
                    </div>





                </div>

            </div>




            <div className='lowerPart' style={{ position: 'absolute', bottom: '-200px', width: '100%' }}>

                <div className="row">
                    <div className="col-4 d-flex flex-column gap-5 px-5 py-5">

                        <div className='logo d-flex align-items-center justify-content-center'>
                            <img src={logo} style={{ height: '23px', width: '23px' }} alt="logo" />
                            <span style={{ fontWeight: '700', letterSpacing: '2%', fontSize: "18px", width: '65px', height: '100%', color: '#2AA8FF' }}>Medify</span>

                        </div>

                        <div className='d-flex align-items-center gap-3'>
                            <div style={{ color: 'white' }}>
                                <FaFacebook />
                            </div>

                            <div style={{ color: 'white' }}>
                                <AiFillTwitterCircle />
                            </div>

                            <div style={{ color: 'white' }}>
                                <ImYoutube />
                            </div>

                            <div style={{ color: 'white' }}>
                                <IoLogoLinkedin />
                            </div>
                        </div>

                    </div>
                    <div className="listDiv col-8 d-flex container py-4 justify-content-evenly ">

                        <div className='list'>
                            <ul>
                                <li>About us</li>
                                <li>Our Pricing</li>
                                <li>Our Galery</li>
                                <li>Appointment</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className='list'>
                            <ul>
                                <li>About us</li>
                                <li>Our Pricing</li>
                                <li>Our Galery</li>
                                <li>Appointment</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className='list d-none d-md-block'>
                            <ul>
                                <li>About us</li>
                                <li>Our Pricing</li>
                                <li>Our Galery</li>
                                <li>Appointment</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}