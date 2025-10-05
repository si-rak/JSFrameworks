import { useState } from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import { useLocation } from 'react-router-dom';

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // detect homepage
  const isHomePage = location.pathname === '/';

  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main
        style={{
          flex: '1 0 auto',
          paddingTop: '80px',
          paddingBottom: '2rem',
          display: 'flex',
        }}
      >
        {isHomePage ? (
          children
        ) : (
          <div className="pageContainer">{children}</div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

export default Layout;
