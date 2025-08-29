const selectTabs=document.querySelectorAll(".select")
const pizzaCategories=document.querySelectorAll(".pizza-items")
console.log(selectTabs)
console.log(pizzaCategories)

for(let tab of selectTabs){
    if (tab.textContent.toLocaleLowerCase()==="chicken pizza"){
        tab.classList.add("active")
    }
}

for(let category of pizzaCategories){
    if(category.classList.contains("chicken")){
        category.style.display="flex"
    } else{
        category.style.display="none"
    }
}

for(let tab of selectTabs){
    tab.addEventListener("click",()=>{
        for(let tab of selectTabs){
            if(tab.classList.contains("active")){
                tab.classList.remove("active")
            }
        }
        tab.classList.add("active")

        const tabName=tab.textContent.toLowerCase()
        console.log(tabName)
        if(tabName==="chicken pizza"){
            for(let category of pizzaCategories){
                if(category.classList.contains("chicken")){
                    category.style.display="flex"
                } else{
                    category.style.display="none"
                } 
            }
        }
        else if(tabName==="pepperoni"){
            for(let category of pizzaCategories){
                if(category.classList.contains("pepperoni")){
                    category.style.display="flex"
                } else{
                    category.style.display="none"
                }
            }
        }
        else if(tabName==="margherita"){
            for(let category of pizzaCategories){
                if(category.classList.contains("Margherita")){
                    category.style.display="flex"
                }else{
                    category.style.display="none"
                }
            }
        }
        else if(tabName==="hawaiian"){
            for(let category of pizzaCategories){
                if(category.classList.contains("hawaiian")){
                    category.style.display="flex"
                }else{
                    category.style.display="none"
                }
            }
        }
        else if(tabName==="meat lover’s pizza"){
            
            for(let category of pizzaCategories){
                if(category.classList.contains("meat-lover")){
                    category.style.display="flex"
                }else{
                    category.style.display="none"
                }
            }
        }

    }
    )
}