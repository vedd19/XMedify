import { useContext, useEffect, useRef, useState } from 'react'
import { context } from '../../Context'
import './SearchResults.css'
// import Button from '../../components/Button/Button';
import { Box, Button, InputAdornment, MenuItem, Select, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, ButtonBase, TextField } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import hospitalIcon from '../../assets/searchResults/hospitalIcon.png'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import banner from '../../assets/searchResults/searchResultBanner.png'
import FAQ from '../../components/FAQ/FAQ';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { enqueueSnackbar } from 'notistack';
import { useOutletContext, useSearchParams } from 'react-router-dom';







export const HospitalCard = ({ name, city, state, rating, type, isBooking, bookedData, setBookedData, id, time, date }) => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [dateArray, setDateArray] = useState([]);
    const [weekDays, setWeekDays] = useState(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
    const [months, setMonths] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
    const [isBookFreeVisitClicked, setIsBookFreeVisitClicked] = useState(false);


    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const timeRef = useRef(null);


    useEffect(() => {
        function getDates() {
            const today = new Date();
            const dateArr = [];
            const formattedTodayDate = today.toISOString().split('T')[0];
            for (let i = 0; i < 5; i++) {
                const dt = new Date(today);
                dt.setDate(today.getDate() + i);
                const formattedDate2 = dt.toISOString().split('T')[0];
                dateArr.push(formattedDate2);

            }
            setDateArray(dateArr);
        }

        getDates();
    }, [])


    useEffect(() => {

        if (selectedTime === null) {
            return;
        }

        console.log(selectedDate, "selectedDate");
        console.log(selectedTime, "selectedTime");

        const newBooking = [...bookedData, { "Hospital Name": name, "City": city, "State": state, "Hospital Type": type, "Hospital overall rating": rating, "bookingDate": selectedDate, "bookingTime": selectedTime }];
        setBookedData(newBooking);
        localStorage.setItem('bookings', JSON.stringify(newBooking));
        console.log(bookedData, "bookedData");

        enqueueSnackbar(`Appointment booked on ${selectedDate} at ${selectedTime} in ${name}, visit my-bookings to check`, { variant: 'success' });



    }, [selectedTime])

    const handleTimeClick = (e) => {
        setSelectedTime(e.target.innerText);
        // await setSelectedHospital(name);
        e.target.style.backgroundColor = '#2AA7FF';
        e.target.style.color = 'white';



        // console.log(key, selectedDate, selectedTime, e.target.value);
        // console.log(selectedHospital, selectedDate, selectedTime);

    }



    return (
        <div className='hospital-card-div'>
            <div className='hospital-card row'>

                <div className="hospital-desc col-md-8">

                    <div className="hospitalIcon">
                        <img style={{ width: '100%' }} src={hospitalIcon} alt="img" />
                    </div>

                    <div className="hospitalInfo">
                        <h3 style={{ color: '#14BEF0', fontWeight: '600' }}>{name}</h3>
                        <p style={{ fontWeight: '700', color: '#414146' }}>{city}, {state}</p>
                        <p>{type}</p>
                        <p>more</p>
                        <div className='d-flex gap-2 align-items-center'>
                            <p style={{ fontWeight: '700', color: '#02A401' }}>FREE</p>
                            <p style={{ color: '#787887', textDecoration: 'line-through' }}>₹500</p>
                            <p style={{ color: '#414146' }}>Consultation fee at clinic</p>
                        </div>

                        <div className='like-div'>
                            <ThumbUpIcon /> <p>{typeof (rating) === 'number' ? rating : 0}</p>
                        </div>

                    </div>

                </div>

                {isBooking ?
                    (
                        <div className='booked col-md-3'>
                            <div className='py-4'>
                                <Button size='small' sx={{ margin: '0.3rem', borderColor: '#2AA7FF', fontWeight: '400', color: '#2AA7FF' }} variant='outlined'>{time}</Button>
                                <Button size='small' sx={{ margin: '0.3rem', borderColor: '#00A500', fontWeight: '700', color: '#007100' }} variant='outlined'>{date}</Button>
                            </div>


                        </div>
                    ) : (
                        <div className="book col-md-3">

                            <p style={{ fontWeight: '500', color: '#01A400' }}>Available Today</p>
                            <Button onClick={() => setIsBookFreeVisitClicked(!isBookFreeVisitClicked)} variant='contained'>Book FREE Center Visit</Button>

                        </div>
                    )
                }





                <div className={`calender ${isBookFreeVisitClicked ? 'd-block' : 'd-none'}`} >

                    <div className="date-carousel d-flex justify-content-between gap-3 align-items-center">


                        <div ref={prevRef} className="custom-prev"><ArrowBackIosIcon color='primary' /></div>

                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={3}
                            spaceBetween={20}
                            navigation={{
                                nextEl: nextRef.current,
                                prevEl: prevRef.current,
                            }}
                            // pagination={{ clickable: true }}
                            loop={false}

                        >

                            {dateArray.map((date, index) => (
                                <SwiperSlide>
                                    <div onClick={async () => {
                                        await setSelectedIndex(index);
                                        await setSelectedDate(dateArray[index]);
                                    }}

                                        className={`date-card ${selectedIndex === index ? 'active-date' : ''} text-center`}>
                                        <p>{index === 0 ? "Today" : index === 1 ? "Tomorrow" : `${weekDays[new Date(date).getDay()]}, ${new Date(date).getDate()} ${months[new Date(date).getMonth()]}`}</p>

                                        <p style={{ color: '#01A400' }}>19 Slots Available</p>

                                    </div>
                                </SwiperSlide>
                            ))}

                            {/* horizontal-line */}
                            <div className='horizontal-line'></div>

                        </Swiper>


                        <div ref={nextRef} className="custom-next"><ArrowForwardIosIcon color='primary' /></div>

                    </div>

                    <div className='time-slots'>

                        <div className="timediv morning">
                            <div style={{ minWidth: '80px' }}>
                                <p style={{ width: "100%" }}>Morning</p>
                            </div>
                            <div className='w-100 d-flex'>
                                <div className='time-capsules'>
                                    <Button ref={timeRef} onClick={(e) => handleTimeClick(e)} variant='outlined'>11:30 AM</Button>
                                </div>
                            </div>

                        </div>
                        <div className=" timediv afternoon">
                            <div style={{ minWidth: '80px' }}>
                                <p style={{ width: "100%" }}>Afternoon</p>
                            </div>
                            <div className='w-100 d-flex'>
                                <div className='time-capsules'>
                                    <Button ref={timeRef} onClick={(e) => handleTimeClick(e)} variant='outlined'>12:00 PM</Button>
                                    <Button ref={timeRef} onClick={(e) => handleTimeClick(e)} variant='outlined'>12:30 PM</Button>
                                    <Button ref={timeRef} onClick={(e) => handleTimeClick(e)} variant='outlined'>01:30 PM</Button>
                                    <Button ref={timeRef} onClick={(e) => handleTimeClick(e)} variant='outlined'>02:00 PM</Button>
                                    <Button ref={timeRef} onClick={(e) => handleTimeClick(e)} variant='outlined'>02:30 PM</Button>
                                </div>
                            </div>
                        </div>
                        <div className="timediv evening">
                            <div style={{ minWidth: '80px' }}>
                                <p style={{ width: "100%" }}>Evening</p>
                            </div>
                            <div className="w-100 d-flex">
                                <div className='time-capsules'>
                                    <Button ref={timeRef} onClick={(e) => handleTimeClick(e)} variant='outlined'>06:00 PM</Button>
                                    <Button ref={timeRef} onClick={(e) => handleTimeClick(e)} variant='outlined'>06:30 PM</Button>
                                    <Button ref={timeRef} onClick={(e) => handleTimeClick(e)} variant='outlined'>07:30 PM</Button>
                                    <Button ref={timeRef} onClick={(e) => handleTimeClick(e)} variant='outlined'>07:30 PM</Button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div >


        </div >
    )
}





export default function SearchResults() {

    const { setIsSearch, endpoint, setEndpoint, hospitals, states, setStates, cities, setCities, selectedData, setSelectedData, handleChange, handleSearch, isBooking, setIsBooking, bookedData, setBookedData, setIsHome, setIsFindDoctor, setHospitals, getHospitals } = useContext(context);
    const [hospitalCount, setHospitalCount] = useState(0);
    const [storedHospitals, setStoredHospitals] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams()
    const [state, setState] = useState(searchParams.get('state'))
    const [city, setCity] = useState(searchParams.get('city'))


    const [isModal, setIsModal] = useState(false)
    const [bookingDetails, setBookingDetails] = useState({})
    const [showBookingSuccess, setShowBookingSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (state && city) {
            getHospitals()
        }
    }, [state, city]);

    useEffect(() => {
        setState(searchParams.get('state'))
        setCity(searchParams.get('city'));
    }, [searchParams])

    useEffect(() => {
        setIsHome(false);
        setIsFindDoctor(true);
        setIsSearch(true);
        setEndpoint(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
    }, []);

    // useEffect(() => {
    //     const storedHos = JSON.parse(localStorage.getItem('hospitals')) || [];
    //     setStoredHospitals(storedHos);
    //     setHospitalCount(storedHos.length);
    // }, [hospitals]);


    // const handleBookingModal = (details) => {
    //     setBookingDetails(details)
    //     setIsModal(true)
    // }





    return (
        <div className='searchResultsMainDiv'>
            <div className='blueDiv'>

            </div>

            <div className='searchDivresults container'>
                <Box
                    component='form'
                    onSubmit={handleSearch}
                    sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}
                    justifyContent='space-between'
                >

                    <Select
                        displayEmpty
                        id='state'
                        name='state'
                        value={selectedData.state}
                        onChange={handleChange}
                        startAdornment={
                            <InputAdornment position='start'>
                                <SearchIcon /></InputAdornment>
                        }
                        required
                        sx={{ minWidth: 200, width: '100%' }}

                    >

                        <MenuItem disabled value="" selected>
                            State
                        </MenuItem>
                        {states.map((state) => {
                            return (
                                <MenuItem key={state} value={state}>
                                    {state}
                                </MenuItem>
                            )
                        })}

                    </Select>


                    <Select
                        displayEmpty
                        id='city'
                        name='city'
                        value={selectedData.city}
                        onChange={handleChange}
                        startAdornment={
                            <InputAdornment position='start'>
                                <SearchIcon /></InputAdornment>
                        }
                        required
                        sx={{ minWidth: 200, width: '100%' }}

                    >

                        <MenuItem disabled value="" selected>
                            City
                        </MenuItem>
                        {cities.map((city) => {
                            return (
                                <MenuItem key={city} value={city}>
                                    {city}
                                </MenuItem>
                            )
                        })}

                    </Select>


                    <Button
                        id='searchBtn'
                        variant='contained'
                        type='submit'
                        size='large'
                        startIcon={<SearchIcon />}
                        sx={{ py: '15px', px: 8, flexShrink: 0 }}
                        disableElevation

                    >

                        Search


                    </Button>

                </Box>
            </div>




            {hospitals.length > 0 && (
                <div className='details container'>
                    <h1>{hospitals.length} medical centers available in {state.toLowerCase()}</h1>
                    <p style={{ color: 'gray', fontWeight: 400 }}> <span><CheckCircleOutlinedIcon /></span>Book appointments with minimum wait-time & verified doctor details</p>
                </div>
            )}


            {/* <Stack alignItems='flex-start' direction={{md:'row'}}>
    <Stack
    mb={{xs:4, md:0}}
    spacing={3}
    width={{xs:1,md:'calc(100% - 384px)*'}}
    mr='24px'
    >
        {hospitals.length > 0 && hospitals.map((hospital) => {

        })}
    </Stack>
</Stack> */}


            <div className="hospital-list container">
                <div className='row'>
                    <div className='col-md-8'>
                        {/* <HospitalCard /> */}
                        {console.log(hospitals, "hospitals in search results")}
                        {hospitals.length > 0 && (hospitals.map((hospital) => <HospitalCard

                            key={hospital["Provider ID"]}
                            id={hospital["Provider ID"]}
                            name={hospital["Hospital Name"].toLowerCase()}
                            type={hospital["Hospital Type"]}
                            city={hospital.City}
                            state={hospital.State}
                            rating={hospital["Hospital overall rating"]}
                            isBooking={isBooking}
                            bookedData={bookedData}
                            setBookedData={setBookedData}

                        />))}
                    </div>

                    <div className='right-banner col-md-3'>
                        <img style={{ width: '100%', borderRadius: '15px' }} src={banner} alt="img" />
                    </div>
                </div>

            </div>
            <div className='faqsec'>
                <FAQ />
            </div>
        </div>
    )
}