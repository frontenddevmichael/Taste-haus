import styles from './Hero.module.css';
import heroImage from '../../assets/Hero-page.jpg';

export default function Hero() {
    return (
        <>
            <section className={styles.heoSection} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.Container}>
                    <div className={styles.introText}>
                        <div className={styles.divider}></div>
                        <span>
                            Artisan Patisserie & Catering
                        </span>
                        <div className={styles.divider}></div>
                    </div>
                    <div className={styles.TextContent}>
                        <h1 className={styles.Heading}>Where Taste Meets <span>Elegance</span></h1>
                        <p className={styles.Paragraph}>Crafting exquisite desserts and bespoke catering <br />experiences for life's most memorable moments.</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button>Order now</button>
                        <button>View Menu</button>
                    </div>
                    {/* Scroll animations goes here */}
                </div>
            </section>
        </>
    )
}