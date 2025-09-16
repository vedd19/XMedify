import faqImg from '../../assets/faq.png'
import './FAQ.css'
import { FaRegFaceSmileBeam } from "react-icons/fa6";

export default function FAQ() {
    return (
        <div className="faq py-4">

            <p style={{ color: '#2AA7FF', fontWeight: '600', textAlign: 'center' }}>Get Your Answer</p>
            <h1 style={{ color: '#1B3C74', textAlign: 'center' }}>Frequently Asked Questions</h1>

            <div className="container d-flex justify-content-between py-4">
                <div style={{ position: 'relative' }}>
                    <img src={faqImg} alt="img" />

                    <div className='d-flex justify-content-center align-items-center gap-3 rounded-3' style={{ position: 'absolute', left: '-50px', bottom: '50px', zIndex: '1', backgroundColor: 'white', padding: '0.5rem 1rem' }}>
                        <FaRegFaceSmileBeam style={{ fontSize: 'large' }} />
                        <div><h4 style={{ margin: '0' }}>84k+</h4><p>Happy Patients</p></div>
                    </div>

                </div>

                <div className='d-flex align-items-center'>
                    <ul className='list'>
                        <li><div style={{ padding: '1rem 0.5rem' }}>Why choose our medical for your family? <button>+</button></div></li>
                        <li><div style={{ padding: '1rem 0.5rem' }}>Why we are different from others? <button>+</button></div></li>
                        <li><div style={{ padding: '1rem 0.5rem' }}>Trusted & experience senior care & love <button>+</button></div></li>
                        <li><div style={{ padding: '1rem 0.5rem' }}>How to get appointment for emergency<button>+</button></div></li>
                    </ul>
                </div>

            </div>



        </div>
    )
}