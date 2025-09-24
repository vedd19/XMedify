
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { context } from './Context'
import { enqueueSnackbar } from 'notistack';


function App() {

  const [isHome, setIsHome] = useState(false);
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [selectedData, setSelectedData] = useState({
    state: "",
    city: "",
  })

  const [isBooking, setIsBooking] = useState(false);
  const [bookedData, setBookedData] = useState(JSON.parse(localStorage.getItem('bookings')) || []);
  const [isFindDoctor, setIsFindDoctor] = useState(false)
  const [hospitals, setHospitals] = useState([])
  const [isSearch, setIsSearch] = useState(false);
  const [endpoint, setEndpoint] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    async function getStates() {

      try {
        const response = await fetch('https://meddata-backend.onrender.com/states');
        const data = await response.json();
        // console.log(data)
        setStates(data)
      }
      catch (err) {
        console.log(err);
      }
    }

    getStates()
  }, [])

  useEffect(() => {
    async function getCities() {

      if (!selectedData.state) {
        return null;
      }



      try {
        const response = await fetch(`https://meddata-backend.onrender.com/cities/${selectedData.state}`);
        const data = await response.json();
        // console.log(data)
        setCities(data)
      }
      catch (err) {
        console.log(err);
      }
    }

    getCities();
  }, [selectedData.state])

  // useEffect(() => {

  //   async function getMedicalCenters() {
  //     if (!selectedData.city || !selectedData.state) {
  //       console.log('state or city is empty')
  //       return;
  //     }

  //     try {
  //       const response = await fetch(`https://meddata-backend.onrender.com/data?state=${selectedData.state}&city=${selectedData.city}`);
  //       const data = await response.json();
  //       setHospitals(data);
  //       localStorage.setItem('hospitals', JSON.stringify(data));
  //       console.log(data);
  //     }
  //     catch (err) {
  //       console.log(err, 'err while fetching hospitals')
  //     }
  //   }

  //   getMedicalCenters();

  // }, [selectedData.city]);


  const getHospitals = async () => {
    setHospitals([])
    // setIsLoading(true)
    try {

      if (!isSearch) {
        setEndpoint(`https://meddata-backend.onrender.com/data?state=${selectedData.state}&city=${selectedData.city}`)
      }
      const response = await fetch(endpoint);
      const data = await response.json();
      setHospitals(data);
      // setIsLoading(false)

      // localStorage.setItem('hospitals', JSON.stringify(data));
      console.log(data);
    }
    catch (err) {
      // setIsLoading(false)
      console.log(err, 'err while fetching hospitals')
    }
  }


  const handleChange = (e) => {
    const { name, value } = e.target
    setSelectedData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSearch = (e) => {

    e.preventDefault()


    if (selectedData.state && selectedData.city) {
      getHospitals();
      navigate(`/search?state=${selectedData.state}&city=${selectedData.city}`);
    }



    // localStorage.setItem('state', selectedData.state);
    // localStorage.setItem('city', selectedData.city);





    console.log(selectedData, "selectedData");
  }


  return (

    <>
      <context.Provider value={{ endpoint, setIsSearch, getHospitals, setEndpoint, hospitals, setHospitals, states, setStates, cities, setCities, selectedData, setSelectedData, handleChange, handleSearch, isBooking, setIsBooking, bookedData, setBookedData, isHome, setIsHome, setIsFindDoctor, isFindDoctor }}>
        {/* {console.log(isHome, "isHome")} */}
        {!isHome && <Navbar />}
        <Outlet />
        <Footer />
      </context.Provider >
    </>

  );
}

export default App;
