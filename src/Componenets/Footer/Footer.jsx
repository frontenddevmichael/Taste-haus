import styles from './Footer.module.css';
import logo from '../../assets/Logo.png'
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <hr />
            <div className={styles.footerMain}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerBrand}>
                        <div className={styles.footerLogo}>
                            <img src={logo} alt="TasteHaus Logo" />
                            <h3>TasteHaus</h3>
                        </div>
                        <p className={styles.footerDescription}>
                            Crafting exquisite desserts and bespoke catering experiences for life's most memorable moments.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" aria-label="Instagram" className={styles.socialLink}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Facebook" className={styles.socialLink}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter" className={styles.socialLink}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className={styles.footerLinks}>
                        <h4 className={styles.footerLinksTitle}>Explore</h4>
                        <ul className={styles.footerLinksList}>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#about">About Us</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerLinks}>
                        <h4 className={styles.footerLinksTitle}>Services</h4>
                        <ul className={styles.footerLinksList}>
                            <li><a href="#weddings">Weddings</a></li>
                            <li><a href="#corporate">Corporate Events</a></li>
                            <li><a href="#private">Private Dining</a></li>
                            <li><a href="#custom">Custom Orders</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerNewsletter}>
                        <h4 className={styles.footerLinksTitle}>Newsletter</h4>
                        <p className={styles.newsletterDescription}>
                            Subscribe for updates on seasonal menus and exclusive offers.
                        </p>
                        <form className={styles.newsletterForm}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className={styles.newsletterInput}
                            />
                            <button type="submit" className={styles.newsletterButton}>
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.footerBottomContainer}>
                    <p className={styles.copyright}>© 2025 TasteHaus. All rights reserved.</p>
                    <div>
                        <p>developed by Omale Michael</p>
                    </div>
                    <div className={styles.legalLinks}>
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}