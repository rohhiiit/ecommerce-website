const productList = document.getElementById('product-list');
const categoryTitle = document.getElementById('category-title');

// All products data
const products = {
  watches: [
    { name: "Titan", price: "₹3,999", img: "assets/products/watch-titan.jpg" },
    { name: "Rolex", price: "₹99,999", img: "assets/products/watch-rolex.jpg" },
    { name: "Noise", price: "₹2,499", img: "assets/products/watch-noise.jpg" },
    { name: "Samsung Galaxy Watch", price: "₹12,999", img: "assets/products/watch-samsung.jpg" },
    { name: "Apple Watch SE", price: "₹25,999", img: "assets/products/watch-apple.jpg" },
  ],
  men: [
    { name: "Denim Shirt", price: "₹1,299", img: "assets/products/men-shirt.jpg" },
    { name: "Leather Jacket", price: "₹4,499", img: "assets/products/men-jacket.jpg" },
  ],
  shoes: [
    { name: "Nike Air Max", price: "₹6,799", img: "assets/products/shoes-nike.jpg" },
  ]
  // Add other categories as needed
};

// Get category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get('category');

// Check if category exists in our products data
if (category && products[category]) {
  categoryTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Collection`;

  // Render each product under the selected category
  products[category].forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
    `;
    productList.appendChild(card);
  });
} else {
  categoryTitle.textContent = "No category selected or invalid category.";
}
