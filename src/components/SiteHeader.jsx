import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import CartIcon from './CartIcon';
import styles from './SiteHeader.module.css';

function SiteHeader({ menuOpen, setMenuOpen }) {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Logo" className="site-logo" />
      </Link>

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
