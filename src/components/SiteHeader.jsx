import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import CartIcon from './CartIcon';
import styles from './SiteHeader.module.css';

function SiteHeader({ menuOpen, setMenuOpen, toggleTheme, theme }) {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="MyShop Logo" className="site-logo" />
      </Link>

      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title="Toggle light/dark mode"
        className={styles.themeToggle}
      >
        <div className={styles.themeSwitch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${styles.icon} ${styles.sunIcon}`}
          >
            <path d="M12 4.5V2m0 20v-2.5M4.5 12H2m20 0h-2.5M5.64 5.64l-1.78-1.78M18.36 18.36l-1.78-1.78M18.36 5.64l1.78-1.78M5.64 18.36l1.78-1.78" />
            <circle cx="12" cy="12" r="5" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${styles.icon} ${styles.moonIcon}`}
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>
          <div
            className={`${styles.toggleCircle} ${
              theme === 'dark' ? styles.moveRight : ''
            }`}
          ></div>
        </div>
      </button>

      {/* Hamburger button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={styles.hamburgerBtn}
      >
        ☰
      </button>

      {/* Nav links */}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <Link to="/" className={styles.link}>
          Products
        </Link>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
      </nav>

      {/* Cart */}
      <div className={styles.cartWrapper}>
        <CartIcon />
      </div>
    </header>
  );
}

export default SiteHeader;
