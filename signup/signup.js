import nav from "../navbar/nav.js"

let con = document.getElementById("navbar")
con.innerHTML = nav



//mens radio button 
 let mens  = document.getElementById("men")
 mens.addEventListener("click",()=>{
    click()
 })
let fun = 0 ;
 const click = ()=>{
    fun = 1 ;
 }


 //womens radio button 
 let womens  = document.getElementById("women")
 womens.addEventListener("click",()=>{
    clickWOmen()
 })
let funs = 0 ;
 const  clickWOmen = ()=>{
    funs = 1 ;
 }


 
let button = document.getElementById("continue")
button.addEventListener("click" , ()=>{
    signup()
})


// signup function 
let count = 0 ;    // count for accessing wishlist , stored in local storage
let email = document.getElementById("email") 
email.value = localStorage.getItem("login")
const signup = ()=>{
 //let email = document.getElementById("email").value
 let password = document.getElementById("password").value
//  let passlength = document.getElementById("password").minlength
//  console.log(passlength)
 let obj={
   email: email.value,
     password,
 }
  if(fun===1){
 let men  = document.getElementById("men").defaultValue
// console.log(men)
obj.gender = men
  }
  else if(funs===1){
    let womens  = document.getElementById("women").defaultValue
    obj.gender = womens
     }
    console.log(obj)
    
     //condition for password and email 

 if(email!=="" && password.length>6){
     if(obj.gender === "men"){
        count++;
        localStorage.setItem("count",count)
        window.location.href = "../menswear/index.html"
        alert("signup succesfull welcome to mens page").break
         
     }else if(obj.gender === "women"){
        count++;
        localStorage.setItem("count",count)
       window.location.href = "../woman/index.html"
        alert("signup succesfull welcome to women page").break
          
     }else{
        count++;
        localStorage.setItem("count",count)
      window.location.href = "../everthing _else/page.html"
        alert("signup succesfull welcome to Else page").break
     }
    }alert("password should be minimum of 6 characters").break
 }
