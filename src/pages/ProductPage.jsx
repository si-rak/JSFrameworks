import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../cart/cartState';
import styles from './ProductPage.module.css';
import btnStyles from '../components/Button.module.css';
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(
        `https://v2.api.noroff.dev/online-shop/${id}`
      );
      const json = await response.json();
      setProduct(json.data);
    }

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const discount = product.price - product.discountedPrice;
  const hasDiscount = discount > 0;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{product.title}</h2>
      <img
        src={product.image.url}
        alt={product.image.alt}
        className={styles.image}
      />
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>Price: ${product.discountedPrice}</p>
      {hasDiscount && (
        <p className={styles.discount}>You save ${discount.toFixed(2)}!</p>
      )}

      <button
        onClick={() => addToCart(product)}
        className={btnStyles.greenButton}
      >
        Add to Cart
      </button>

      <h4 className={styles.reviewHeading}>Reviews</h4>

      <ul className={styles.reviewList}>
        {product.reviews?.length > 0 ? (
          product.reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.username}</strong>
              <span>{review.description}</span>
              <div className={styles.rating}>
                <i
                  className="fa-solid fa-star"
                  style={{ color: '#ffc107', marginRight: '4px' }}
                ></i>
                {review.rating}/5
              </div>
            </li>
          ))
        ) : (
          <li>No reviews yet.</li>
        )}
      </ul>
    </div>
  );
}

export default ProductPage;
