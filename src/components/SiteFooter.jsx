import styles from './SiteFooter.module.css';

function SiteFooter() {
  return (
    <footer className={styles.footer}>
      {/* Social links */}
      <div>
        <a href="https://x.com/MyShop" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Copyright */}
      <div>&copy; 2025 MyShop. All rights reserved.</div>

      {/* Contact links */}
      <div className={styles.footerContact}>
        <a href="mailto:contact@myshop.com">
          <i className="fas fa-envelope" style={{ marginRight: '0.5rem' }}></i>
          contact@myshop.com
        </a>
        <a href="tel:+4712345678">
          <i className="fas fa-phone" style={{ marginRight: '0.5rem' }}></i>
          +47 123 45 678
        </a>
      </div>
    </footer>
  );
}

export default SiteFooter;
