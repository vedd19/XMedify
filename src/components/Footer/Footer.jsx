import phn from '../../assets/phone.png'
import phninside from '../../assets/phnInside.png'
import Button from '../Button/Button'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io";

export default function Footer() {
    return (
        <div className='upperPart py-4 ' style={{ position: 'relative' }}>
            <div className='row'>
                <div className=' container d-flex col-6' style={{ paddingLeft: '5rem' }}>
                    <div className='phone d-flex' style={{ overflow: 'hidden', transform: 'scale(0.8)', position: 'relative' }}>
                        <div style={{ height: '306px', width: '144px', background: `url(${phninside}) no-repeat center`, backgroundSize: 'cover', }}>
                            <img src={phn} alt="img" style={{ overflow: 'hidden', height: '100%', width: '100%' }} />
                            {/* <img src={phninside} alt="img" style={{ position: 'absolute', zIndex: "1", overflow: 'hidden', top: '0', left: '0' }} /> */}
                        </div>
                    </div>
                    <div className='phone d-flex' style={{ overflow: 'hidden', position: 'absolute', left: '10rem' }}>
                        <div style={{ height: '306px', width: '144px', background: `url(${phninside}) no-repeat center`, backgroundSize: 'cover', }}>
                            <img src={phn} alt="img" style={{ overflow: 'hidden', height: '100%', width: '100%' }} />
                            {/* <img src={phninside} alt="img" style={{ position: 'absolute', zIndex: "1", overflow: 'hidden', top: '0', left: '0' }} /> */}
                        </div>
                    </div>

                </div>
                <div className='content container d-flex flex-column gap-3 col-6'>

                    <h1 style={{ color: '#1B3C74' }}>Download the <span style={{ color: '#2AA7FF' }}>Medify</span> App</h1>

                    <p style={{ fontWeight: '700' }}>Get the link to download the app</p>

                    <div className='d-flex gap-2 align-items-center' style={{ height: '2rem' }}>
                        <div style={{ backgroundColor: "white", padding: '2px', textAlign: 'center', fontWeight: '700' }}>+91</div>
                        <input style={{ border: 'none' }} type="text" />
                        <Button>Send SMS</Button>
                    </div>

                    <div className='downloadBtn d-flex gap-3 mt-3'>
                        <Button>Google Play</Button>
                        <Button >App Store</Button>
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
                    <div className="col-8 d-flex container py-4 justify-content-evenly">

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
                        <div className='list'>
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