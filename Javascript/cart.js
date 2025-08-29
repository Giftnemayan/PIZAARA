const carticon=document.querySelector(".carticon")
const addToCartButtons=document.querySelectorAll(".button")
const cartCounter=document.querySelector(".cartCounter")
const cartContainer=document.querySelector(".cartContainer")
let cartItems=[]
console.log(carticon)
console.log(cartCounter)
console.log(cartContainer)

carticon.addEventListener("click",()=>{
    console.log("helloworld");
    cartContainer.classList.toggle("show-cart")
})
function updateCardContainer(){
    cartContainer.innerHTML=""
    cartItems.map((cartItem)=>{
        const Product=document.createElement('div')
        Product.classList.add("cart-Product")
        Product.innerHTML=`
         <img src=${cartItem.pizzaImg} width="40px">
          <div>${cartItem.pizzaName}</div>
          <div>${cartItem.pizzaPrice}</div>
          <div>
          <button class="decrement">-</button>
          <button>2</button>
          <button class="increment">+</button>
          </div>
          <div>${cartItem.pizzaPrice}</div>
        `
        cartContainer.append(Product)
        console.log(cartContainer)
    })

}
    


addToCartButtons.forEach(button=>{
    button.addEventListener("click",(event)=>{
        const name=event.target.parentElement.children[1].textContent
        console.log(name)
        const img=event.target.parentElement.children[0].src
        console.log(img)
        const price=event.target.parentElement.children[3].textContent.replace("Ksh.","")
        console.log(price)
    if(button.textContent==="Add to Cart"){
        button.textContent="Remove from cart"

        button.style.backgroundColor="red"
        let pizzaItems={
            pizzaName:name,
            pizzaPrice:price,
            pizzaImg:img
        }
        cartItems.push(pizzaItems)
        console.log(cartItems)

        updateCardContainer()

        
    }else{
        button.textContent="Add to cart";
        button.style.backgroundColor="black";
        const indexToRemove=cartItems.findIndex((Element)=>
          Element.pizzaName===name )
        cartItems.splice(indexToRemove,1)
        console.log(cartItems)

        updateCardContainer()


    }
    
})
})

