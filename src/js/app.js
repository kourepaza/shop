import { getProducts } from "./getProducts.js";
import renderProducts from "./renderProducts.js";

const productContainer = document.getElementById("productsContainer");

const data = await getProducts()
renderProducts(data,productContainer);