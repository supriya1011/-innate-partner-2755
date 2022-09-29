
 // checkout page event listener
 let checkout = document.getElementById("checkout")
 checkout.addEventListener("click" , ()=>{
   window.location.href = "checkout.html"
 })

 

// let arr1 = [{"image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222875M175000_1/vince-black-insulated-bomber-jacket.jpg","brand":"VINCE","price":500},{"image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222875M175000_1/vince-black-insulated-bomber-jacket.jpg","brand":"VINCE","price":500},{"image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222875M175000_1/vince-black-insulated-bomber-jacket.jpg","brand":"VINCE","price":600}]
// localStorage.setItem("bag",JSON.stringify(arr1))

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
       console.log(1)
   })
   // window.location.href = ""
   let btn2 = document.createElement("button")
   btn2.innerText = "SHOP WOMENSWEAR" 
   btn2.className = "but3"
   btn2.addEventListener("click" , ()=>{
       console.log(1)
   })
   // window.location.href = ""
   let btn3 = document.createElement("button")
   btn3.innerText = "SHOP EVERYTHING ELSE" 
   btn3.className = "but3"
   btn3.addEventListener("click" , ()=>{
       console.log(1)
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
image.src = el.image
let p1 = document.createElement("span")
p1.innerHTML = el.brand
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