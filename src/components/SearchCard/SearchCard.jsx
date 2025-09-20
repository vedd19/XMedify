import { TextField, InputAdornment } from '@mui/material'
import Button from '../Button/Button'
import './SearchCard.css'
import SearchIcon from '@mui/icons-material/Search';
import ambulance from '../../assets/searchCard/Ambulance.png'
import drugStore from '../../assets/searchCard/Drugstore.png'
import hospital from '../../assets/searchCard/Hospital.png'
import capsule from '../../assets/searchCard/Capsule.png'
import doctor from '../../assets/searchCard/Doctor.png'




export default function SearchCard() {

    const SelectiveCards = ({ img, name }) => {
        return (
            <div className={name === 'Hospitals' ? 'selective-card-div selected' : 'selective-card-div'}>
                <img style={{ height: '60px', width: '60px' }} src={img} alt="img" />
                <p className='selective-card-name'>{name}</p>
            </div>
        )
    }

    return (
        <div className="searchDiv container">
            <div className='search'>
                <TextField className='input' placeholder='State' variant='outlined'
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
                <TextField className='input' placeholder='City' variant='outlined'
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
                />

                <Button><SearchIcon /> Search</Button>
            </div>

            <p style={{ fontWeight: '500', textAlign: 'center', marginBottom: '1rem' }}>You may be looking for</p>

            <div className='cards d-flex justify-content-around'>
                <SelectiveCards img={doctor} name={"Doctor"} />
                <SelectiveCards img={drugStore} name={"Labs"} />
                <SelectiveCards img={hospital} name={"Hospitals"} />
                <SelectiveCards img={capsule} name={"Medical Store"} />
                <SelectiveCards img={ambulance} name={"Ambulance"} />
            </div>
        </div>
    )
}