import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.footerTitle}>Nature of Japan</h2>
            <p className={styles.footerCopy}>&copy; 2026 Nature of Japan.</p>
        </footer>
    )
}

export default Footer