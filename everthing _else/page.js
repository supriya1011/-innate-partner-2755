

// let data1 = JSON.parse(localStorage.getItem("bag"))
// if(data1!=""){
// let shopping = document.getElementById("shopping")
// shopping.innerText = `   ${data1.length}`;
// }


const getData = async () => {

    try {
        let res = await fetch(`https://mocki.io/v1/33e045c5-2c05-4fb9-b0fe-0d67471db563`);
        // console.log(res)
        let data = await res.json();
        //console.log(data)
        // what - data
        // where - posts_div
        appendData(data)
        // console.log(data);


    } catch(error){
        console.log(error);
    }
  };

  getData();

function appendData(data){
    let data_div=document.getElementById("mid");

    data_div.innerHTML=null;

    data.forEach((el,i) => {
        let div=document.createElement("div");

        let p_name=document.createElement("h4");
        p_name.innerHTML=el.details

        let p_rating=document.createElement("h4");
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


