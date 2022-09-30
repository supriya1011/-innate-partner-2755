import nav from "../navbar/nav.js"

let con = document.getElementById("navbar")
con.innerHTML = nav



let data22 = JSON.parse(localStorage.getItem("bag"))
if(data22 !=  undefined){
let shopping = document.getElementById("shopping")
shopping.innerText = `  ${data22.length}`;
}



let next = document.getElementById("continue")
next.addEventListener("click" , ()=>{
    login()
})

const login = ()=>{
    
 //let arr = JSON.parse(localStorage.getItem("login")) || []
    let email = document.getElementById("email").value 
   // arr.push(email)
    console.log(email)
   localStorage.setItem("login" , email)
  window.location.href = "../signup/signup.html"
  
}
