// script.js
import { getProducts } from './products.js';

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    const urlParams = new URLSearchParams(window.location.search);
    const activeCategory = urlParams.get('category');

    // Funkcja do tworzenia elementu produktu 
    function createProductElement(product) {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.classList.add(product.category);
        productElement.id = product.name.toLowerCase().replace(/\s+/g, '-');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <a href="${product.learnMoreLink}" class="learn-more-link">Dowiedz się więcej</a>
        `;
        return productElement;
    }

    function displayProducts(products) {
      productsContainer.innerHTML = '';
      products.forEach(product => {
        productsContainer.appendChild(createProductElement(product));
    });
    }
      
    getProducts()
    .then(products => {
        let filteredProducts = products;

        if (activeCategory) {
            filteredProducts = products.filter(product => product.category === activeCategory);
        }
        displayProducts(filteredProducts);
        })
        .catch(error => {
          console.error('Błąd podczas pobierania produktów:', error);
        });
});