import './Home.css'
import { createContext, useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import { useOutletContext } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import SearchCard from '../components/SearchCard/SearchCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import pagImg from '../assets/paginationImg.png'
import docImg from '../assets/docImg.png'
import caring1 from '../assets/caring1.png'
import caring2 from '../assets/caring2.png'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { LuHospital } from "react-icons/lu";
import Button from '../components/Button/Button';
import { MdCall } from "react-icons/md";
import listicon from '../assets/listIcon.png'
import newsImg from '../assets/newsImg.png'
import { IoMdPerson } from "react-icons/io";
import icon1 from '../assets/familyCard/span.elementor-icon.png'
import icon2 from '../assets/familyCard/span.elementor-icon (1).png'
import icon3 from '../assets/familyCard/svg.h2d-2dcead65.png'
import icon4 from '../assets/familyCard/svg.h2d-af745bd1.png'
import { FaQ } from 'react-icons/fa6';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';






export const isHomeContext = createContext();

export default function Home() {
    const { setIsHome } = useOutletContext();

    const [caraouselImg, setCaraouselImg] = useState([{ img: pagImg }, { img: pagImg }, { img: pagImg }, { img: pagImg }, { img: pagImg }, { img: pagImg }, { img: pagImg }, { img: pagImg }, { img: pagImg },])

    const [docCaraouselImg, setDocCaraouselImg] = useState([{ img: docImg }, { img: docImg }, { img: docImg }, { img: docImg }, { img: docImg }])

    // useEffect(() => {

    setIsHome(true);
    // }, [setIsHome])


    const CarouselCard = ({ img }) => {
        return (
            <div style={{ height: "8rem", width: '15rem' }}>
                <img style={{ height: "100%", borderRadius: '1rem' }} src={img} alt="card" />
            </div>
        )

    }

    const DoctorCarouselCard = ({ img }) => {
        return (
            <div style={{ height: "20rem", width: '15rem' }}>
                <div className='docImgDiv d-flex justify-content-center align-items-end' style={{ height: '80%' }}>
                    <img style={{ height: "90%", borderRadius: '1rem' }} src={img} alt="card" />
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <span>Dr. Ankur Sharma</span>
                    <span>Medicine</span>
                </div>
            </div>
        )
    }

    const NewsCard = ({ img }) => {
        return (
            <div className='newsCard' style={{ height: '30rem', width: "25rem", borderRadius: "1rem", overflow: 'hidden' }}>
                <div style={{ height: '70%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', objectFit: 'cover' }}>
                    <img src={img} style={{ height: '100%' }} alt="" />
                </div>
                <div>
                    <p style={{ color: "#77829D" }}>Medical    March 31,2022</p>
                    <p style={{ color: '#1B3C74' }}>6 Tips To Protect Your Mental Health When You’re Sick</p>
                    <div className='d-flex gap-2 align-items-center justify-content-start'>
                        <IoMdPerson />
                        <p style={{ margin: '0' }}>Rebbaca Lee</p>
                    </div>
                </div>

            </div>
        )
    }
    return (

        <div className='home'>
            <div className='navAndHero'>
                <Navbar />
                <Hero />

            </div>

            <div className='searchCardDiv'>
                {/* <div className='inner container'>
                    <SearchCard />
                </div> */}

            </div>

            <div className='carouselDiv py-3'>

                <div className='container'>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={3}
                        // navigation
                        pagination={{
                            clickable: true,
                            el: '.customPagDiv'
                        }}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        loop={true}
                    >
                        {caraouselImg.map((ele) => <SwiperSlide><CarouselCard img={pagImg} /></SwiperSlide>)}
                    </Swiper>

                    <div className='customPagDiv d-flex justify-content-center align-items-center mt-3'></div>
                </div>

            </div>


            <div className='findBySpecialisationDiv py-3 container-fluid'>

                <h1 className='specialHeading text-center'>Find By Specialisation</h1>

                <div className='specialisationCards d-flex justify-content-center'>
                    <div className='gridCont'>
                        <div className='  cardCont d-flex flex-column justify-content-center align-items-center  '>
                            <div>
                                <LuHospital className='text-primary' />
                            </div>
                            <div>
                                <p className='text text-body-secondary text'>Dentistry</p>
                            </div>
                        </div>

                        <div className='  cardCont d-flex flex-column justify-content-center align-items-center  '>
                            <div>
                                <LuHospital className='text-primary' />
                            </div>
                            <div>
                                <p className='text text-body-secondary text'>Dentistry</p>
                            </div>
                        </div>

                        <div className='  cardCont d-flex flex-column justify-content-center align-items-center  '>
                            <div>
                                <LuHospital className='text-primary' />
                            </div>
                            <div>
                                <p className='text text-body-secondary text'>Dentistry</p>
                            </div>
                        </div>

                        <div className='  cardCont d-flex flex-column justify-content-center align-items-center  '>
                            <div>
                                <LuHospital className='text-primary' />
                            </div>
                            <div>
                                <p className='text text-body-secondary text'>Dentistry</p>
                            </div>
                        </div>

                        <div className='  cardCont d-flex flex-column justify-content-center align-items-center  '>
                            <div>
                                <LuHospital className='text-primary' />
                            </div>
                            <div>
                                <p className='text text-body-secondary text'>Dentistry</p>
                            </div>
                        </div>

                        <div className='  cardCont d-flex flex-column justify-content-center align-items-center  '>
                            <div>
                                <LuHospital className='text-primary' />
                            </div>
                            <div>
                                <p className='text text-body-secondary text'>Dentistry</p>
                            </div>
                        </div>

                        <div className='  cardCont d-flex flex-column justify-content-center align-items-center  '>
                            <div>
                                <LuHospital className='text-primary' />
                            </div>
                            <div>
                                <p className='text text-body-secondary text'>Dentistry</p>
                            </div>
                        </div>

                        <div className='  cardCont d-flex flex-column justify-content-center align-items-center  '>
                            <div>
                                <LuHospital className='text-primary' />
                            </div>
                            <div>
                                <p className='text text-body-secondary text'>Dentistry</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='d-flex justify-content-center align-items-center mt-2 py-3'>
                    <Button>View All</Button>
                </div>

            </div>

            <div className='OurMedicalSpecial container-fluid py-3'>

                <h1 className='specialHeading text-center'>Our Medical Specialist</h1>

                <div className='container-fluid'>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={5}
                        // navigation
                        pagination={{
                            clickable: true,
                            el: '.customPagiDiv'
                        }}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        loop={true}
                    >
                        {docCaraouselImg.map((ele) => <SwiperSlide><DoctorCarouselCard img={docImg} /></SwiperSlide>)}
                    </Swiper>

                    <div className='customPagiDiv d-flex justify-content-center align-items-center py-3'></div>
                </div>

            </div>

            <div className="patientCaringMain">
                <div className='patientCaring container'>

                    <div className="left">
                        <div className='caringImgDiv'>
                            <img src={caring1} alt="" />
                        </div>
                        <div className='caringImgDiv2'>
                            <img src={caring2} alt="" />
                        </div>

                        <div className="call">
                            <div className='d-flex gap-1 align-items-center justify-content-start'>

                                <Button><MdCall className='text-light' /></Button> <span className='fw-medium'>Free Consultation</span>
                            </div>
                            <span>Consult with the best</span>
                        </div>
                    </div>


                    <div className="right">

                        <p style={{ color: '#2AA7FF', fontWeight: '600' }}>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
                        <h2 style={{ color: '#1B3C74' }}>Patient <span className='text-primary'>Caring</span></h2>

                        <p style={{ fontWeight: '500', color: '#77829D' }}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>

                        <ul>
                            <li><img src={listicon} />Stay Updated About Your Health</li>
                            <li> <img src={listicon} />Check Your Results Online</li>
                            <li> <img src={listicon} />Manage Your Appointments</li>
                        </ul>

                    </div>



                </div>
            </div>



            <div className="blog container-fluid py-4">
                <div className="container">
                    <h6 style={{ color: '#2AA7FF', textAlign: 'center' }}>Blogs & News</h6>
                    <h1 style={{ color: '#1B3C74', textAlign: 'center' }}>Read Our Latest News</h1>

                    <div className="news d-flex gap-2">
                        <NewsCard img={newsImg} />
                        <NewsCard img={newsImg} />
                        <NewsCard img={newsImg} />
                    </div>
                </div>


            </div >


            <div className='OurFamily'>
                <div className="lft d-flex align-items-center px-4">
                    <div className='container'>
                        <p style={{ color: '#2AA7FF', fontWeight: '600' }}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
                        <h1 style={{ color: '#1B3C74' }}>Our Families</h1>
                        <p style={{ color: '#77829D' }}>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
                    </div>
                </div>

                <div className="rgt px-4">

                    <div className='d-flex align-items-start'>
                        <div className='fcard d-flex flex-column align-items-center gap-1 justify-content-center' >
                            <div style={{ height: '100px', width: '100px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={icon1} style={{ height: '80%', width: '80%' }} alt="" />
                            </div>

                            <h2>200+</h2>
                            <p>Hospitals</p>
                        </div>
                    </div>


                    <div className='d-flex justify-content-start'>
                        <div className='fcard d-flex flex-column align-items-center gap-1 justify-content-center'>
                            <div style={{ height: '100px', width: '100px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={icon2} style={{ height: '80%', width: '80%' }} alt="" />
                            </div>

                            <h2>1000+</h2>
                            <p>Laboratories</p>
                        </div>
                    </div>


                    <div className='d-flex justify-content-end'>
                        <div className='fcard d-flex flex-column align-items-center gap-1 justify-content-center'>
                            <div style={{ height: '100px', width: '100px', backgroundColor: '#EBFAF1', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={icon3} style={{ height: '80%', width: '80%' }} alt="" />
                            </div>

                            <h2>700+</h2>
                            <p>Expert Doctors</p>
                        </div>
                    </div>



                    <div className='d-flex justify-content-end'>
                        <div className='fcard d-flex flex-column align-items-center gap-1 justify-content-center'>
                            <div style={{ height: '100px', width: '100px', backgroundColor: '#EBF7FF', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={icon4} style={{ height: '80%', width: '80%' }} alt="" />
                            </div>

                            <h2>5000+</h2>
                            <p>Happy Patients</p>
                        </div>
                    </div>


                </div>

            </div>

            <div className='FAQ'>
                <FAQ />
            </div>

            <div className="footer">
                <Footer />
            </div>


        </div >
    )
}