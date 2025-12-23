import styles from './Services.module.css';

export default function Services() {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.servicesContainer}>
                <div className={styles.servicesHeader}>
                    <span className={styles.servicesLabel}>WHAT WE OFFER</span>
                    <h2 className={styles.servicesTitle}>Catering Services</h2>
                    <p className={styles.servicesSubtitle}>
                        From intimate gatherings to grand celebrations, we bring culinary excellence to every occasion.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </div>
                        <h3 className={styles.serviceTitle}>Weddings</h3>
                        <p className={styles.serviceDescription}>
                            Bespoke wedding cakes and dessert tables designed to complement your perfect day.
                        </p>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M3 3h18v18H3V3z M8 3v18 M16 3v18 M3 8h18 M3 16h18" />
                            </svg>
                        </div>
                        <h3 className={styles.serviceTitle}>Corporate Events</h3>
                        <p className={styles.serviceDescription}>
                            Elegant catering solutions for meetings, conferences, and corporate celebrations.
                        </p>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 8v8 M16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4 M20 7H4 M18 5l-1 2H7L6 5h12z" />
                            </svg>
                        </div>
                        <h3 className={styles.serviceTitle}>Birthdays & Celebrations</h3>
                        <p className={styles.serviceDescription}>
                            Custom cakes and party platters that make every birthday unforgettable.
                        </p>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                        <h3 className={styles.serviceTitle}>Private Dining</h3>
                        <p className={styles.serviceDescription}>
                            Intimate dessert experiences and private chef services for exclusive gatherings.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}