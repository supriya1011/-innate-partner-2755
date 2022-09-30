
let data1 = JSON.parse(localStorage.getItem("bag")) 
let data = JSON.parse(localStorage.getItem("total")) 
let ids = document.getElementById("Subtotal")
ids.innerHTML = data
let ids2 = document.getElementById("total")
ids2.innerHTML =data
let summary = document.getElementById("summary")
summary.innerHTML = `ORDER SUMMARY - ${data1.length} ITEM`
let shopping = document.getElementById("shopping")
shopping.innerHTML = data1.length
function fun(){
   let input=document.getElementById("country").value
   console.log(input)
}

let order = document.getElementById("place")
order.addEventListener("click" , ()=>{
   place()
})
const place = ()=>{
   let Cardnumber = document.getElementById("Cardnumber").value
   let name =document.getElementById("FirstName").value
   let last =document.getElementById("LastName").value
   if(Cardnumber==="123456789012" && name!="" && last!=""){
       alert("order placed succesfully")
       window.location.href = "../homepage/homepage.html"
   }else{
       alert("wrong credentials")
       
   }
   
}
