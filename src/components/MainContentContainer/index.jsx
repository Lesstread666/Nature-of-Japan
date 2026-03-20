import places from '../../data/places'
import HomePage from '../HomePage'
import PlacePage from '../PlacePage'

const MainContent = ({ page, setPage }) => {

    if (page === "home") {
        return <HomePage places={places} setPage={setPage}/>
    }

    const place = places.find(place => place.id === page)

    if (!place) return null 

    return <PlacePage place={place} setPage={setPage} />


}

export default MainContent