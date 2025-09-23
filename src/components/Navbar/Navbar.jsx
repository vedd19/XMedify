import './Navbar.css'
import logo from '../../assets/logo.png'
import Button from '../Button/Button';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../Context';
export default function Navbar({ isHome }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const { isFindDoctor } = useContext(context)
    return (
        <div className='navbar container-fluid'>

            <div className='banner'>
                <p> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
            </div>

            <div className={'nav container'}>
                <div className='logo d-flex align-items-center justify-content-center'>
                    <img src={logo} style={{ height: '23px', width: '23px' }} alt="logo" />
                    <span style={{ fontWeight: '700', letterSpacing: '2%', fontSize: "18px", width: '65px', height: '100%', color: '#2AA8FF' }}>Medify</span>

                </div>

                <div
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>


                <ul className={menuOpen ? 'navList active' : 'navList'}>
                    <li id={isFindDoctor ? 'mark' : 'not-mark'}><Link to="/search-results" style={{ textDecoration: 'none', color: isFindDoctor ? '#2AA7FF' : '#102851' }}>Find Doctors</Link></li>
                    <li>Hospitals</li>
                    <li>Medicines</li>
                    <li>Surgeries</li>
                    <li>Software For Provider</li>
                    <li>Facilities</li>
                    <li><Link to="/my-bookings"><Button className='myBookingBtn'>My Bookings</Button></Link></li>
                </ul>

            </div>

        </div >
    );
}