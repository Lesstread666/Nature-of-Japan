import styles from './home-page.module.css'

const HomePage = ({ places, setPage }) => {
    return (
        <main>
            <h1 className={styles.title}>Nature of Japan</h1>
            <h2 className={styles.subTitle}>Discover beautiful nature places in Japan</h2>

            <div className={styles.cardsContainer}>
                {places.map((place) => (
                    <section className={styles.card} key={place.id}>
                        <h2 className={styles.cardName}>{place.name}</h2>
                        <img className={styles.cardImage} src={place.image} />
                        <p className={styles.cardSubTitle}>{place.subtitle}</p>
                        <button className={styles.backButton} onClick={() => setPage(place.id)}>Read More</button>
                    </section>
                ))}
            </div>
        </main>
    )
}

export default HomePage 