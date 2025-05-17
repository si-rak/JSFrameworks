export function calculateCartTotal(cartItems) {
  return cartItems.reduce((sum, item) => sum + item.discountedPrice, 0);
}
