import { addToCart } from "./addToCart.js";

function renderProducts(list, container){

    container.addEventListener("click",(e)=>{
        if(e.target.classList.contains("addToCart")){
            addToCart(e.target.parentElement.id , list);
        }

    })
    container.innerHTML = "";
    
    list.forEach((product)=>{
        const card = document.createElement("div");
        card.classList.add("card","w-2/7","min-h-[450px]");

        card.innerHTML=`         <div class="card w-2/7 h-[340px]   ">
                        <div class="image-box w-[250px] bg-cover h-4/5 " style="background-image:url('${product.image}') ;"></div>
                        <div class="row flex gap-2">
                            <h5 class="text-[22px] font-medium text-black/60 truncate">
                                ${product.title}
                            </h5>
                            <input type="checkbox" class="ml-5"><label class="mt-[4px]" for="">+5</label>
                        </div>
                        <div class="row flex justify-between items-center">
                            <h4 class="font-medium text-[20px] truncate">${product.description}</h4>
                            <span class="font-medium text-[20px] ">$199</span>
                        </div>
                    </div>
                    <button class="w-30 h-15 bg-black text-white border-1 border-black flex justify-center items-center rounded-full addToCart">Add to cart</button>`;

        container.appendChild(card)
    })
}

export default renderProducts;