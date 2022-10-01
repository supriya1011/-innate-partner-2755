
 // checkout page event listener
 let checkout = document.getElementById("checkout")
 checkout.addEventListener("click" , ()=>{
   window.location.href ="../checkout/checkout.html"
 })



 let count = document.getElementById("shopping")
let cont = document.getElementById("container")
let email = document.getElementById("email")
email.innerHTML ="abhijeetkale@gmail.com"
let container = document.getElementById("product")
let total = document.getElementById("TOTAL")
let ordertotal = document.getElementById("OrderTotal")

let data = JSON.parse(localStorage.getItem("bag")) 


const append = ()=>{
 let sum = 0 ;
 container.innerHTML = null ;

 if(data==""){
   cont.innerHTML = null
   cont.style.display = "block"
   let p = document.createElement("p")
   p.innerHTML = "Your shopping bag is empty"
   let div = document.createElement("div")
   div.id = "empty"
   let btn = document.createElement("button")
   btn.innerText = "SHOP MENSWEAR" 
   btn.className = "but3"
   btn.addEventListener("click" , ()=>{
    window.location.href = "../menswear/index.html"
   })
   // window.location.href = ""
   let btn2 = document.createElement("button")
   btn2.innerText = "SHOP WOMENSWEAR" 
   btn2.className = "but3"
   btn2.addEventListener("click" , ()=>{
    window.location.href = "../woman/index.html"
   })
   // window.location.href = ""
   let btn3 = document.createElement("button")
   btn3.innerText = "SHOP EVERYTHING ELSE" 
   btn3.className = "but3"
   btn3.addEventListener("click" , ()=>{
    window.location.href = "../everthing _else/page.html"
   })
   // window.location.href = ""
   div.append(btn,btn2,btn3)
   cont.append(p,div) 
 
 }else{
 

data.forEach((el,ind)=>{
let div = document.createElement("div")
div.id = "main"
let div1 = document.createElement("div")
div1.id = "main2"
let image = document.createElement("img")
image.src = el.img
let p1 = document.createElement("span")
p1.innerHTML = el.details
let br = document.createElement("br")
let p = document.createElement("span")
p.innerHTML = el.price
let del = document.createElement("span")
del.innerHTML = "remove"
del.id = "delete"
del.addEventListener("click",()=>{
 remove(el,ind)
})
let add = document.createElement("span")
add.innerHTML = "Move to Wishlist"
add.id = "add"
add.addEventListener("click",()=>{
   adds(el,ind)
})
sum+= el.price
p.style.float = "right"
add.style.float = "right"
div.append(image)
div1.append(p1,p,br,del,add)
container.append(div,div1)
total.innerHTML = sum ; 
ordertotal.innerHTML = sum ;
localStorage.setItem("total",sum)
})
 }
}
append()

const remove = (el,ind)=>{
   data.splice(ind,1)
   localStorage.setItem("bag",JSON.stringify(data))
   let data1 = JSON.parse(localStorage.getItem("bag")) 
 
  append()
}

//adding product to wishlist 

let arr = JSON.parse(localStorage.getItem("wishlist")) || []
const adds = (el,ind)=>{
 data.splice(ind,1)
 arr.push(el)
 localStorage.setItem("wishlist",JSON.stringify(arr))
 localStorage.setItem("bag",JSON.stringify(data))
 append()
}