import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../cart/cartState';
import styles from './ProductPage.module.css';
import btnStyles from '../../components/Button.module.css';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/online-shop/${id}`
        );
        const json = await response.json();
        setProduct(json.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className={`pageContainer ${styles.container}`}>
      <img src={product.image?.url} alt={product.image?.alt || product.title} />
      <div className={styles.details}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className={styles.price}>Price: ${product.discountedPrice}</p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button
            className={`${btnStyles.button} ${btnStyles.greenButton}`}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

          {/* Back to Products - less prominent */}
          <Link
            to="/"
            className={`${btnStyles.button} ${btnStyles.outlineButton}`}
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
