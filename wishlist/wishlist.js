
//  let arr = [{"image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222875M175000_1/vince-black-insulated-bomber-jacket.jpg","brand":"VINCE","price":500},{"image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222875M175000_1/vince-black-insulated-bomber-jacket.jpg","brand":"VINCE","price":500},{"image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222875M175000_1/vince-black-insulated-bomber-jacket.jpg","brand":"VINCE","price":600},{"image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222875M175000_1/vince-black-insulated-bomber-jacket.jpg","brand":"VINCE","price":500},{"image":"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222875M175000_1/vince-black-insulated-bomber-jacket.jpg","brand":"VINCE","price":500}]
// localStorage.setItem("wishlist" , JSON.stringify(arr)) ;



let data = JSON.parse(localStorage.getItem("wishlist")) 
console.log(data) // wishlist will be the key for add to wishlist button
let detail = JSON.parse(localStorage.getItem("details"))



const wishlist = ()=>{
    
    let container = document.getElementById("data")
    container.innerHTML = null ;

   // if data is empty we show 3 buttons on dom .
   
   if(data==""){
    container.style.display = "block"
    let p = document.createElement("p")
    p.innerHTML = "WISHLIST IS EMPTY"
    let div = document.createElement("div")
    div.id = "empty"
    let btn = document.createElement("button")
    btn.innerText = "SHOP MENSWEAR" 
    btn.className = "but3"
    btn.addEventListener("click" , ()=>{
        window.location.href = "../menswear/menswear.html"
    })
    // window.location.href = ""
    let btn2 = document.createElement("button")
    btn2.innerText = "SHOP WOMENSWEAR" 
    btn2.className = "but3"
    btn2.addEventListener("click" , ()=>{
        window.location.href = "../woman/womens.html"

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
    container.append(p,div) 

}
else{

// when data is not empty appending data on dom
// container.innerHTML = null ;
    data.forEach((el,ind) => {
        
        let div = document.createElement("div")
        div.id = "full" ;
        let img = document.createElement("img")
        img.src = el.img
       console.log(el.img)
        let p = document.createElement("p")
        p.innerHTML = el.details
        let p1 = document.createElement("p")
        p1.innerHTML = "₹"+el.price
        let btn = document.createElement("button")
        btn.innerText = " ADD TO BAG" 
        btn.className = "buttton"
        btn.id = "topbtn"
        btn.addEventListener("click" , ()=>{  // add function 
         add(el,ind)
        })
        let btn1 = document.createElement("button")
        btn1.innerText = " X REMOVE"
        btn1.className = "buttton"
        btn1.addEventListener("click" , ()=>{    // remove function 
            remove(el,ind)
           })
        div.append(img,p,p1,btn,btn1)
        container.append(div)
    });
}
}
if(detail){
wishlist()
}else{
    alert("signup first")
    window.location.href = "../login/login.html"
}


// wishlist()


// add functionality adding to bag 
let arr1 = JSON.parse(localStorage.getItem("bag")) || [] ;  // storing added products to local storage using  "bag" .     
const add = (el,ind)=>{
    data.splice(ind,1)
    arr1.push(el)
    
    localStorage.setItem("bag" , JSON.stringify(arr1))
    localStorage.setItem("wishlist" , JSON.stringify(data))  // upgrading wishlist data in local storage .
    wishlist()
}




// remove functionality

const remove = (el,ind)=>{
  data.splice(ind,1)
  localStorage.setItem("wishlist" , JSON.stringify(data))  // upgrading wishlist data in local storage .
  wishlist()
}