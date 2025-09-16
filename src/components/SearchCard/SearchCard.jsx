import Button from '../Button/Button'
import './SearchCard.css'
export default function SearchCard() {

    return (
        <div className="searchDiv">
            <div>
                <input type="text" />
                <input type="text" />
                <Button>Search</Button>
            </div>
        </div>
    )
}