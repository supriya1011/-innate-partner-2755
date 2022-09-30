



// const getData = async () => {

//     try {
//         let res = await fetch(`http://localhost:3000/posts`);
//         let data = await res.json();

//         // what - data
//         // where - posts_div
//         appendData(data)
//         // console.log(data);


//     } catch(error){
//         console.log(error);
//     }
//   };

// getData();

function appendMovies(data){
    let data_div=document.getElementById("mid");

    data_div.innerHTML=null;
    // data_div.id="movies";

    data.forEach((el) => {
        let div=document.createElement("div");

        let p_name=document.createElement("p");
        p_name.innerHTML=`Name: ${el.name}`

        let p_rating=document.createElement("p");
        p_rating.innerHTML=`Year: ${el.rating}`


        let img=document.createElement("img");
        // img.id="img"
        img.src=el.img;

        div.append(img,p_name,p_rating);
        data_div.append(div);
    });
}
appendMovies(movies);