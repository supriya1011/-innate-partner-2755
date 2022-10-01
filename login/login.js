import nav from "../navbar/nav.js"

let con = document.getElementById("navbar")
con.innerHTML = nav



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
