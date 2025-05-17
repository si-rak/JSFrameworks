import { calculateCartTotal } from './calcTotal';

test('calculates total for multiple cart items', () => {
  const cartItems = [
    { title: 'Product 1', discountedPrice: 100 },
    { title: 'Product 2', discountedPrice: 50 },
    { title: 'Product 3', discountedPrice: 25 },
  ];

  const total = calculateCartTotal(cartItems);

  expect(total).toBe(175);
});

test('returns 0 for an empty cart', () => {
  const cartItems = [];
  const total = calculateCartTotal(cartItems);

  expect(total).toBe(0);
});
