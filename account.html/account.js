import nav from "../navbar/nav.js"

let con = document.getElementById("navbar")
con.innerHTML = nav





 let container = document.getElementById("main")
 let detail = JSON.parse(localStorage.getItem("details"))

 if(detail){
   let personal = document.createElement("h2")
   personal.innerText = "ACCOUNT  DETAILS"
    let email = document.createElement("h4")
     email.innerHTML = ` ${"EMAIL :"}  ${detail.email}` ;
    let password = document.createElement("h4")
   password.innerHTML = ` ${"PASSWORD :"}  ${detail.password} `;
    let subscription = document.createElement("h4")
   subscription.innerHTML = ` ${"SUBSCRIPTION :"}  ${detail.gender} `;

   container.append(personal,email,password,subscription)
 }else{
    let personal = document.createElement("h2")
    personal.innerText = "SIGN UP FIRST"
    container.append(personal)
 }
