import { cart } from "./app.js";
export function addToCart(data,id){
    const result = data.filter((item)=>item.id==id)[0];
    
    cart.push(result);
}
