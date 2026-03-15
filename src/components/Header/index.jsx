import styles from './header.module.css'
import places from '../../data/places'

const Header = ({ page, setPage }) => {

    const currentPlace = places.find(place => place.id === page)

    const title = page === "home" ? "Nature of Japan" : (currentPlace ? currentPlace.name : "")
    const subtitle = page === "home" ? "Explore unique flora of Japan" : (currentPlace ? currentPlace.subtitle : "")

    return (
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>{title}</h1>
            <h2 className={styles.headerSubTitle}>{subtitle}</h2>

            <nav className={styles.navigation}>
                <button
                    className={`${styles.navigationButton} 
                    ${page === "home" ? styles.active : ""}`}
                    onClick={() => setPage("home")}
                >
                    Home
                </button>

                {places.map(place => (
                    <button
                        key={place.id}
                        className={`${styles.navigationButton} ${page === place.id ? styles.active : ""}`}
                        onClick={() => setPage(place.id)}
                    >
                        {place.shorthand}
                    </button>
                ))}

            </nav>
        </header>
    )
}

export default Header