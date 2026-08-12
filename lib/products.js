export function getProducts() {
    return fetch("https://dummyjson.com/products");
}

// lib/ isn't a magical folder for "database stuff."

// It's commonly used for reusable application/library logic.

// For example:

// lib/
// ├── db.js          → MongoDB connection
// ├── product.js     → product API-fetching logic
// ├── auth.js        → potentially auth utilities
// └── utils.js       → reusable utilities