import styles from './place-page.module.css'

const PlacePage = ({ place, setPage }) => {

    const handleClick = () => {
        setPage("home")
    }

    return (
        <main className={styles.main}>
            <section className={styles.card}>
                <h2 className={styles.cardName}>{place.name}</h2>

                <img className={styles.cardImage} src={place.image} />

                <p className={styles.cardIntro}>{place.intro}</p>

                <ul className={styles.factsList}>
                    {place.facts.map((fact, index) => (
                        <li className={styles.factItem} key={index}>
                            {fact}
                        </li>
                    ))}
                </ul>

                <button className={styles.backButton} onClick={handleClick}>
                    Back to Home
                </button>
            </section>
        </main>
    )
}

export default PlacePage