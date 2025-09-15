export function filterProductsFunc(product,title){
    const newList=product.filter(item=>
        item.category.includes(title)
    );
    return newList;
}