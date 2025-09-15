import { filterProductsFunc } from "./filterProducts.js";
import { getProducts } from "./getProducts.js";
import renderProducts from "./renderProducts.js";
import { searchProduct } from "./searchProduct.js";



const searchInput =document.querySelector(".searchInput")
const productContainer = document.getElementById("productsContainer");
const filterProducts =document.querySelectorAll(".filterProducts");




const data = await getProducts()
renderProducts(data,productContainer);


searchInput.addEventListener("input",(e)=>{
    const search=searchProduct(data, e.target.value)
    renderProducts(search,productContainer)
})
filterProducts.forEach((item)=>{
    item.addEventListener("click" , (e)=>{
        if (e.target.textContent==="All")
            {renderProducts(data,productContainer);}
        else{
            const newFilterList=filterProductsFunc(data,e.target.textContent);
            renderProducts(newFilterList,productContainer)
        }
    });
});