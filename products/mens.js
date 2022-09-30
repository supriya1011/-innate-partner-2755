let data=JSON.parse(localStorage.getItem("product"))
data.forEach((el)=>{
    let arr=JSON.parse(localStorage.getItem("bag"))|| [];

document.getElementById("bag").addEventListener("click",function(){

    

    arr.push(el)
alert("product added to bag")
localStorage.setItem("bag",JSON.stringify(arr))

})
let arr2=JSON.parse(localStorage.getItem("wishlist"))|| [];
document.getElementById("wishlist").addEventListener("click",function(){



    arr2.push(el)
    alert("product added to wishlist")
localStorage.setItem("wishlist",JSON.stringify(arr2))


})
})





// let arr=JSON.parse(localStorage.getItem("bag"))|| [];
// document.getElementById("bag").addEventListener("click",function(){

    

//     arr.push(data)

// localStorage.setItem("bag",JSON.stringify(arr))


// })
// let arr2=JSON.parse(localStorage.getItem("wishlist"))|| [];
// document.getElementById("wishlist").addEventListener("click",function(){



//     arr2.push(data)

// localStorage.setItem("wishlist",JSON.stringify(arr2))


// })






function appendData(data){
    let data_div=document.getElementById("mid");

    data_div.innerHTML=null;

    data.forEach((el) => {
        let div=document.createElement("div");

        let p_name=document.createElement("p");
        p_name.innerHTML=el.details

        let p_rating=document.createElement("p");
        p_rating.innerHTML="₹"+el.price


        let img=document.createElement("img");
        img.src=el.img;

        div.append(img,p_name,p_rating);
        data_div.append(div);
    });
}


appendData(data)