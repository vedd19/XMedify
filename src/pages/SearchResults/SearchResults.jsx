import { useContext, useEffect, useRef, useState } from 'react'
import { context } from '../../Context'
import './SearchResults.css'
// import Button from '../../components/Button/Button';
import { Button } from '@mui/material';
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







export const HospitalCard = ({ name, city, state, rating, address, isBooking, bookedData, setBookedData, id }) => {
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

        const newBooking = [...bookedData, { hospital: id, date: selectedDate, time: selectedTime }];
        setBookedData(newBooking);
        localStorage.setItem('bookedData', JSON.stringify(newBooking));
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
                        <p>{address}</p>
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
                    (<div>
                        <div className='booked col-md-3'>

                            <Button variant='outlined'>time</Button>
                            <Button variant='outlined'>date</Button>

                        </div>
                    </div>) : (
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

    const { hospitals, states, setStates, cities, setCities, selectedData, setSelectedData, handleStateChange, handleCityChange, handleSearch, isBooking, setIsBooking, bookedData, setBookedData } = useContext(context);
    const [hospitalCount, setHospitalCount] = useState(0);
    const [storedHospitals, setStoredHospitals] = useState([]);

    useEffect(() => {
        const storedHos = JSON.parse(localStorage.getItem('hospitals')) || [];
        setStoredHospitals(storedHos);
        setHospitalCount(storedHos.length);
    }, [hospitals]);





    return (
        <div className='searchResultsMainDiv'>
            <div className='blueDiv'>

            </div>

            <div className='searchDivresults container'>
                <div className='search'>

                    <Autocomplete
                        value={localStorage.getItem('state') || null}
                        onChange={(e, newValue) => handleStateChange(e, newValue)}
                        freeSolo
                        options={states.map((option) => option)}
                        slotProps={{
                            listbox: { id: "state" }
                        }}
                        renderInput={(params) => <TextField fullWidth {...params} placeholder='State'
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                    <>
                                        <PlaceOutlinedIcon style={{ color: 'lightgray' }} />
                                        {params.InputProps.startAdornment}
                                    </>
                                )
                            }}
                        />
                        }
                    />


                    <Autocomplete
                        value={localStorage.getItem('city') || null}
                        onChange={(e, newValue) => handleCityChange(e, newValue)}
                        freeSolo
                        // disabled={!selectedData.state}
                        options={cities.map((option) => option)}
                        slotProps={{
                            listbox: { id: "city" }
                        }}
                        renderInput={(params) => <TextField fullWidth {...params} placeholder='City'
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                    <>
                                        <PlaceOutlinedIcon style={{ color: 'lightgray' }} />
                                        {params.InputProps.startAdornment}
                                    </>
                                )
                            }}
                        />
                        }
                    />


                    <Button type={'submit'} onClick={handleSearch} id={'searchBtn'}><SearchIcon /> Search</Button>
                </div>
            </div>


            <div className='details container'>
                <h1>{storedHospitals.length} medical centers available in {storedHospitals[0]?.State}</h1>
                <p style={{ color: 'gray', fontWeight: 400 }}> <span><CheckCircleOutlinedIcon /></span>Book appointments with minimum wait-time & verified doctor details</p>
            </div>

            <div className="hospital-list container">
                <div className='row'>
                    <div className='col-md-8'>
                        {/* <HospitalCard /> */}
                        {console.log(hospitals, "hospitals in search results")}
                        {storedHospitals && hospitalCount > 0 && (storedHospitals.map((hospital) => <HospitalCard

                            key={hospital["Provider ID"]}
                            id={hospital["Provider ID"]}
                            name={hospital["Hospital Name"]}
                            city={hospital.City}
                            state={hospital.State}
                            rating={hospital["Hospital overall rating"]}
                            address={hospital.Address}
                            isBooking={isBooking}
                            bookedData={bookedData}
                            setBookedData={setBookedData}
                        // selectedIndex={selectedIndex}
                        // setSelectedIndex={setSelectedIndex}
                        // dateArray={dateArray}
                        // weekDays={weekDays}
                        // months={months}

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