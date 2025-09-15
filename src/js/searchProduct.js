export function searchProduct(product,keyword){
    const filteredProducts =product.filter((item)=>
    item.title.toLowerCase().includes(keyword.toLowerCase())
);
return filteredProducts;
}