import styles from './Menu.module.css';
import menu1 from "../../assets/menu-macarons.jpg"
import menu2 from "../../assets/menu-cake.jpg"
import menu3 from "../../assets/menu-chocolates.jpg"
import menu4 from "../../assets/menu-pastries.jpg"

export default function Menu() {
    return (
        <section className={styles.menuSection}>
            <div className={styles.menuContainer}>
                <div className={styles.menuHeader}>
                    <h2 className={styles.menuTitle}>Our Creations</h2>
                    <p className={styles.menuSubtitle}>
                        Each piece is crafted with precision, passion, and the finest ingredients sourced from artisan producers around the world.
                    </p>
                </div>

                <div className={styles.menuGrid}>
                    <div className={styles.menuCard}>
                        <div className={styles.menuCardImage}>
                            <img src={menu1} alt="French Macarons" />
                            <span className={styles.menuCardLabel}>PETITS FOURS</span>
                        </div>
                        <div className={styles.menuCardContent}>
                            <h3 className={styles.menuCardTitle}>French Macarons</h3>
                            <p className={styles.menuCardDescription}>
                                Delicate almond meringue shells with silky ganache fillings in seasonal flavors.
                            </p>
                        </div>
                    </div>

                    <div className={styles.menuCard}>
                        <div className={styles.menuCardImage}>
                            <img src={menu2} alt="Celebration Cakes" />
                            <span className={styles.menuCardLabel}>SIGNATURE</span>
                        </div>
                        <div className={styles.menuCardContent}>
                            <h3 className={styles.menuCardTitle}>Celebration Cakes</h3>
                            <p className={styles.menuCardDescription}>
                                Custom-designed tiered cakes for weddings, birthdays, and special occasions.
                            </p>
                        </div>
                    </div>

                    <div className={styles.menuCard}>
                        <div className={styles.menuCardImage}>
                            <img src={menu3} alt="Artisan Chocolates" />
                            <span className={styles.menuCardLabel}>CONFECTIONS</span>
                        </div>
                        <div className={styles.menuCardContent}>
                            <h3 className={styles.menuCardTitle}>Artisan Chocolates</h3>
                            <p className={styles.menuCardDescription}>
                                Hand-crafted truffles and bonbons with premium Belgian chocolate.
                            </p>
                        </div>
                    </div>

                    <div className={styles.menuCard}>
                        <div className={styles.menuCardImage}>
                            <img src={menu4} alt="Viennoiserie" />
                            <span className={styles.menuCardLabel}>DAILY BAKES</span>
                        </div>
                        <div className={styles.menuCardContent}>
                            <h3 className={styles.menuCardTitle}>Viennoiserie</h3>
                            <p className={styles.menuCardDescription}>
                                Buttery croissants, pain au chocolat, and morning pastries baked fresh daily.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.menuFooter}>
                    <a href="#menu" className={styles.menuLink}>
                        VIEW FULL MENU <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}