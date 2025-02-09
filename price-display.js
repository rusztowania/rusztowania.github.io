// price-display.js

import { getProductPriceById } from './products.js';

async function displayProductPrice(productId, targetElementId) {
  try {
    const price = await getProductPriceById(productId);
    const targetElement = document.getElementById(targetElementId);

    if (targetElement) {
      if (price !== null) {
        targetElement.textContent = `Cena: ${price}`;
          console.log(`Price for product ID ${productId}: ${price}`);
      } else {
        targetElement.textContent = `Produkt z ID "${productId}" nie znaleziony.`;
        console.log(`Product with ID ${productId} not found`);
      }
    } else {
      console.error(`Element with ID "${targetElementId}" not found`);
    }
  } catch (error) {
      console.error('Error while displaying price:', error);
  }
}

// Export the function
export { displayProductPrice };