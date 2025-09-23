import { TextField, InputAdornment, Autocomplete, Box } from '@mui/material'
import Button from '../Button/Button'
import './SearchCard.css'
import SearchIcon from '@mui/icons-material/Search';
import ambulance from '../../assets/searchCard/Ambulance.png'
import drugStore from '../../assets/searchCard/Drugstore.png'
import hospital from '../../assets/searchCard/Hospital.png'
import capsule from '../../assets/searchCard/Capsule.png'
import doctor from '../../assets/searchCard/Doctor.png'
import { useContext, useEffect, useState } from 'react';
import { enqueueSnackbar, useSnackbar } from 'notistack';
import { Link, useOutletContext } from 'react-router-dom';
import { context } from '../../Context';






export default function SearchCard() {

    const SelectiveCards = ({ img, name }) => {
        return (
            <div className={name === 'Hospitals' ? 'selective-card-div selected' : 'selective-card-div'}>
                <img style={{ height: '60px', width: '60px' }} src={img} alt="img" />
                <p className='selective-card-name'>{name}</p>
            </div>
        )
    }

    // const { setIsHome } = useOutletContext();





    const { hospitals, setHospitals, states, setStates, cities, setCities, selectedData, setSelectedData, handleStateChange, handleCityChange, handleSearch, setIsHome } = useContext(context)



    useEffect(() => { setIsHome(false) }, []);

















    return (


        // { console.log(hospitals, "hospitals in search card") }
        < div className="searchDiv container" >
            <div className='search'>



                <Autocomplete
                    value={selectedData.state || null}
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
                                    <SearchIcon style={{ color: 'gray' }} />
                                    {params.InputProps.startAdornment}
                                </>
                            )
                        }}
                    />
                    }
                />


                <Autocomplete
                    value={selectedData.city || null}
                    onChange={(e, newValue) => handleCityChange(e, newValue)}
                    freeSolo
                    disabled={!selectedData.state}
                    options={cities.map((option) => option)}
                    slotProps={{
                        listbox: { id: "city" }
                    }}
                    renderInput={(params) => <TextField fullWidth {...params} placeholder='City'
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <>
                                    <SearchIcon style={{ color: 'gray' }} />
                                    {params.InputProps.startAdornment}
                                </>
                            )
                        }}
                    />
                    }
                />


                <Link to={'/search-results'}><Button type={'submit'} onClick={handleSearch} id={'searchBtn'}><SearchIcon /> Search</Button></Link>
            </div>

            <p style={{ fontWeight: '500', textAlign: 'center', marginBottom: '1rem' }}>You may be looking for</p>

            <div className='cards d-flex justify-content-around'>
                <SelectiveCards img={doctor} name={"Doctor"} />
                <SelectiveCards img={drugStore} name={"Labs"} />
                <SelectiveCards img={hospital} name={"Hospitals"} />
                <SelectiveCards img={capsule} name={"Medical Store"} />
                <SelectiveCards img={ambulance} name={"Ambulance"} />
            </div>
        </div >

    )
}