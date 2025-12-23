import styles from './About.module.css';
import aboutImage from '../../assets/aboutImage.jpg';
export default function About() {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutImage}>
                    <img src={aboutImage} alt="Pastry chef decorating cake" />
                </div>

                <div className={styles.aboutContent}>
                    <div className={styles.aboutHeader}>
                        <span className={styles.aboutLabel}>OUR STORY</span>
                        <h2 className={styles.aboutTitle}>
                            A Passion for <span className={styles.aboutTitleAccent}>Perfection</span>
                        </h2>
                    </div>

                    <div className={styles.aboutText}>
                        <p>
                            Founded in 2015, TasteHaus began with a simple belief: that every
                            celebration deserves extraordinary flavors and impeccable presentation.
                            Our journey started in a small kitchen with big dreams, crafting
                            handmade pastries that tell stories through taste.
                        </p>

                        <p>
                            Today, we've grown into a full-service patisserie and catering house, but
                            our commitment remains unchanged. We source the finest ingredients,
                            honor time-tested techniques, and pour love into every creation—from
                            delicate macarons to spectacular wedding cakes.
                        </p>
                    </div>

                    <div className={styles.aboutStats}>
                        <div className={styles.statItem}>
                            <h3 className={styles.statNumber}>8+</h3>
                            <p className={styles.statLabel}>YEARS</p>
                        </div>

                        <div className={styles.statItem}>
                            <h3 className={styles.statNumber}>500+</h3>
                            <p className={styles.statLabel}>EVENTS</p>
                        </div>

                        <div className={styles.statItem}>
                            <h3 className={styles.statNumber}>50+</h3>
                            <p className={styles.statLabel}>RECIPES</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}