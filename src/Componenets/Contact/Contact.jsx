import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <div className={styles.contactHeader}>
                    <span className={styles.contactLabel}>LET'S CONNECT</span>
                    <h2 className={styles.contactTitle}>
                        Let's Create Your Next <span className={styles.contactTitleAccent}>Event Together</span>
                    </h2>
                    <p className={styles.contactSubtitle}>
                        Ready to bring your vision to life? Get in touch with our team to discuss your next celebration.
                    </p>
                </div>

                <div className={styles.contactButtons}>
                    <button className={styles.primaryButton}>GET IN TOUCH</button>
                    <button className={styles.secondaryButton}>CALL US</button>
                </div>

                <div className={styles.contactInfo}>
                    <div className={styles.contactInfoItem}>
                        <span className={styles.contactInfoLabel}>EMAIL</span>
                        <p className={styles.contactInfoValue}>omalemcmails@mgial.com</p>
                    </div>

                    <div className={styles.contactInfoItem}>
                        <span className={styles.contactInfoLabel}>PHONE</span>
                        <p className={styles.contactInfoValue}>+234 (090) 6171-2509</p>
                    </div>

                    <div className={styles.contactInfoItem}>
                        <span className={styles.contactInfoLabel}>LOCATION</span>
                        <p className={styles.contactInfoValue}>Lagos, Nigeria</p>
                    </div>
                </div>
            </div>
        </section>
    );
}