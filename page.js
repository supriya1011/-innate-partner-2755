

// let data1 = JSON.parse(localStorage.getItem("bag"))
// if(data1!=""){
// let shopping = document.getElementById("shopping")
// shopping.innerText = `   ${data1.length}`;
// }


const getData = async () => {

    try {
        let res = await fetch(`http://localhost:3000/ssense1`);
        // console.log(res)
        let data = await res.json();
        // console.log(data[0].details)
        // what - data
        // where - posts_div
        appendData(data)
        // console.log(data);


    } catch(error){
        console.log(error);
    }
  };

  getData();

//
const low = async () => {

    try {

        let res = await fetch(`http://localhost:3000/ssense?_sort=price&_order=asc`);

        let data = await res.json()
        //  console.log(data)

        appendData(data)


    } catch (e) {
        console.log(e)

    }
}

document.getElementById("low_to_high").addEventListener("click", function () {
    low()
})




async function High() {

    try {

        let res = await fetch(`http://localhost:3000/ssense?_sort=price&_order=desc`);

        let data = await res.json();
        //  console.log(data);

        appendData(data);


    } catch (e) {
        console.log(e);

    }
}

document.getElementById("high_to_low").addEventListener("click", function () {
    High()
});

//


function appendData(data){
    let data_div=document.getElementById("mid");

    data_div.innerHTML=null;

    data.forEach((el,i) => {
        let div=document.createElement("div");

        let p_name=document.createElement("p");
        p_name.innerHTML=el.details

        let p_rating=document.createElement("p");
        p_rating.innerHTML="₹"+el.price


        let img=document.createElement("img");
        img.src=el.img;

        
        div.addEventListener("click",function(){
                 
            let x=data.splice(i,1)

        

            localStorage.setItem("product",JSON.stringify(x))

            window.location.href="../products/mens.html"
        })

        div.append(img,p_name,p_rating);
        data_div.append(div);
    });
}


