const selectButton=document.querySelector(".add")
console.log(selectButton)

selectButton.addEventListener("click",(event)=>{
    console.log(event)
    const name=event.target.parentElement.children[1].children[0].textContent
    console.log(name)
    const price=event.target.parentElement.children[1].children[1].textContent.replace("ksh.","")
    console.log(price)
    const img=event.target.parentElement.children[0].src
    console.log(img)
    
})