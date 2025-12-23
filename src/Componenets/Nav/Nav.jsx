import { useState, useEffect } from 'react';
import styles from './Nav.module.css';
import Logo from '../../assets/Logo.png';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const heroSection = document.querySelector('.heoSection');

        const observer = new IntersectionObserver(
            ([entry]) => {
                // When hero is NOT intersecting (not visible), nav is scrolled
                setIsScrolled(!entry.isIntersecting);
            },
            {
                threshold: 0,
                rootMargin: '-80px 0px 0px 0px' // Account for nav height
            }
        );

        if (heroSection) {
            observer.observe(heroSection);
        }

        return () => {
            if (heroSection) {
                observer.unobserve(heroSection);
            }
        };
    }, []);

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navLogo}>
                <img src={Logo} alt="TasteHaus Logo" />
                <h1>TasteHaus</h1>
            </div>

            <button
                className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
                <a href="#about">ABOUT</a>
                <a href="#menu">MENU</a>
                <a href="#services">SERVICES</a>
                <a href="#gallery">GALLERY</a>
                <a href="#contact">CONTACT</a>
                <button className={styles.orderButton}>Order Now</button>
            </div>
        </nav>
    );
}