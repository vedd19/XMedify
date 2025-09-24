import { Button, TextField } from '@mui/material'
import './Bookings.css'
import { FaSearch } from 'react-icons/fa'
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useEffect, useState } from 'react';
import { HospitalCard } from '../SearchResults/SearchResults';
import { context } from '../../Context';
import banner from '../../assets/searchResults/searchResultBanner.png'

export default function Bookings() {

    const { setIsHome, setIsFindDoctor } = useContext(context)

    const [bookingData, setBookingData] = useState([]);
    const [filtered, setFiltered] = useState([]);


    useEffect(() => {
        setIsHome(false);
        setIsFindDoctor(false);
    }, []);

    useEffect(() => {
        const storedBookings = localStorage.getItem('bookings');
        const x = storedBookings ? JSON.parse(storedBookings) : [];
        setBookingData(x);
        setFiltered(x);
    }, []);


    const handleHospitalChange = (e) => {
        const fl = bookingData.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFiltered(fl);
    }

    const handleHospitalSearch = () => {
        return filtered
    }



    return (
        <div className='booking-main-div'>
            <div className='blueDiv myBookingBlueDiv'>

                <h1 className='container'>My Bookings</h1>

            </div>

            <div className='hospitalSearch'>
                <TextField onChange={(e) => handleHospitalChange(e)} sx={{ width: '100%' }} variant='outlined' placeholder='Search By Hospital' />
                <Button onClick={handleHospitalSearch} id='searchBtn' type='submit' variant='contained' sx={{ backgroundColor: '#2AA7FF' }} ><SearchIcon /> Search</Button>
            </div>


            <div className="bookedHospitalCards container">

                <div className='row'>
                    <div className='col-md-8'>

                        {filtered.length > 0 ? (filtered.map((booking) => {
                            return (
                                <HospitalCard name={booking['Hospital Name']} city={booking['City']} state={booking['State']} rating={booking['Hospital overall rating']} type={'Hospital Type'} key={booking.id} isBooking={true} date={booking['bookingDate']} time={booking['bookingTime']} />
                            )
                        })) : (<div>
                            <h1> No Bookings found</h1>
                        </div>)}

                    </div>
                    {/* {console.log(bookingData)} */}

                    <div className='right-banner col-md-3'>
                        <img style={{ width: '100%', borderRadius: '15px' }} src={banner} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}