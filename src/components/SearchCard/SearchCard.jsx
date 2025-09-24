import { TextField, InputAdornment, Autocomplete, Box, Select, MenuItem, Button } from '@mui/material'

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





    const { hospitals, setHospitals, states, setStates, cities, setCities, selectedData, setSelectedData, handleChange, handleSearch, setIsHome } = useContext(context)



    useEffect(() => { setIsHome(false) }, []);






    return (


        // { console.log(hospitals, "hospitals in search card") }
        < div className="searchDiv container" >
            {/* <div className='search container'> */}
            <Box
                component='form'
                onSubmit={handleSearch}
                sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}
                justifyContent='space-between'
            >





                {/* <Autocomplete
                    value={selectedData.state || null}
                    onChange={(e, newValue) => handleStateChange(e, newValue)}
                    freeSolo
                    options={states.map((option) => option)}
                    slotProps={{
                        listbox: { id: "state" }
                    }}
                    id='state'
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
                /> */}

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