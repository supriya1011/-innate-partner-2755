
let data1 = JSON.parse(localStorage.getItem("bag")) 
let data = localStorage.getItem("total")
let ids = document.getElementById("Subtotal")
ids.innerHTML = "₹"+data
let ids2 = document.getElementById("total")
ids2.innerHTML = "₹"+data
let summary = document.getElementById("summary")
summary.innerHTML = `ORDER SUMMARY - ${data1.length} ITEM`

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
       let neww = []
       localStorage.setItem("bag" , JSON.stringify(neww))
       window.location.href = "../index.html"

   }else{
       alert("wrong credentials")
       
   }
   
}



// if(detail){
//    wishlist()
//    }else{
//        alert("signup first")
//        window.location.href = "../login/login.html"
//    }

