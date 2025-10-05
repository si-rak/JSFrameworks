import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';
import styles from './CheckoutSuccessPage.module.css';
import btnStyles from '../../components/Button.module.css';

function CheckoutSuccessPage() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`pageContainer ${styles.container}`}>
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={500}
      />

      <div className={styles.title}>🎉 Order Successful!</div>
      <p className={styles.message}>Your order has been placed. Thank you!</p>
      <Link to="/" className={`${btnStyles.button} ${btnStyles.blueButton}`}>
        Back to Store
      </Link>
    </div>
  );
}

export default CheckoutSuccessPage;
