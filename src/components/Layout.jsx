import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: '#e0e0e0',
          padding: '0.5rem 1rem',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: '100%',
            rowGap: '0.5rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flex: 1,
            }}
          >
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '1rem',
              }}
            >
              <img src={logo} alt="Logo" className="site-logo" />
            </Link>

            <nav style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/" style={linkStyle}>
                Products
              </Link>
              <Link to="/contact" style={linkStyle}>
                Contact
              </Link>
            </nav>
          </div>

          <div className="cart-wrapper">
            <CartIcon />
          </div>
        </div>
      </header>

      <main
        style={{
          flexGrow: 1,
          paddingTop: '100px',
          paddingBottom: '2.5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        {children}
      </main>
      <footer
        style={{
          background: '#1e1e2f',
          color: '#ccc',
          padding: '1.5rem 0',
          fontSize: '0.75rem',
          width: '100%',
          boxSizing: 'border-box',
          borderTop: '1px solid #333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#ccc', fontSize: '1rem' }}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#ccc', fontSize: '1rem' }}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#ccc', fontSize: '1rem' }}
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div style={{ textAlign: 'center', flex: 1 }}>
          &copy; 2025 MyShop. All rights reserved.
        </div>

        <div style={{ textAlign: 'right', display: 'flex', gap: '1rem' }}>
          <span>
            <i
              className="fas fa-envelope"
              style={{ marginRight: '0.5rem' }}
            ></i>
            contact@myshop.com
          </span>
          <span>
            <i className="fas fa-phone" style={{ marginRight: '0.5rem' }}></i>
            +47 123 45 678
          </span>
        </div>
      </footer>
    </div>
  );
}

const linkStyle = {
  color: '#333',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
  position: 'relative',
};

export default Layout;
