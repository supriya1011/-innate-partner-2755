 
let button = document.getElementById("continue")
button.addEventListener("click" , ()=>{
    signup()
})

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

// signup function 
let count = 0 ;
let email = document.getElementById("email") 
email.value = localStorage.getItem("login")
const signup = ()=>{
 //let email = document.getElementById("email").value
 let password = document.getElementById("password").value
 let passlength = document.getElementById("password").minlength
 console.log(passlength)
 let obj={
    email,
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
     }else{

     }
    
     //condition for paswoord and email 

 if(email!=="" && password.length>6){
     if(obj.gender === "men"){
        count++;
        localStorage.setItem("count",count)
        alert("signup succesfull welcome to mens page").break
         
     }else if(obj.gender === "women"){
        count++;
        localStorage.setItem("count",count)
        alert("signup succesfull welcome to women page").break
     }else{
        count++;
        localStorage.setItem("count",count)
        alert("signup succesfull welcome to home page").break
     }
    }alert("password should be minimum of 6 characters")
 }
