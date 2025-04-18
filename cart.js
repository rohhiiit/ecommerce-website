// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add "Add to Cart" functionality to each button
document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = {
      id: btn.getAttribute("data-id"),
      name: btn.getAttribute("data-name"),
      price: parseInt(btn.getAttribute("data-price")),
    };

    // Add the item to the cart
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount(); // Update the cart count in the navbar
    alert(`${item.name} added to cart!`);
  });
});

// Update cart count in the navbar
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
}

// Initialize cart count when the page loads
if (document.getElementById("cart-count")) {
  updateCartCount();
}
