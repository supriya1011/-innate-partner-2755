import nav from './component/nav.js';
console.log(nav);
let nav1=document.getElementById("navbar");
nav1.innerHTML=nav;


import footer from './component/footer.js';
console.log(footer);
let footer1=document.getElementById("foot");
footer1.innerHTML=footer;



import { apple } from "./component/accessories.js";



document.getElementById("acc").addEventListener("click", function () {

    let tri = document.getElementById("accc")

    tri.innerHTML = apple()




    if (tri.style.display !== 'none') {
        tri.style.display = 'none';
    }
    else {
        tri.style.display = 'block';
    }



})


let fil = undefined;

const getData = async () => {

    try {

        let res = await fetch(`http://localhost:3000/womanWear`);

        let data = await res.json()
        //  console.log(data)
        fil = data
        displayTable(data)


    } catch (e) {
        console.log(e)

    }
}



getData()


const low = async () => {

    try {

        let res = await fetch(`http://localhost:3000/womanWear?_sort=price&_order=asc`);

        let data = await res.json()
        console.log(data)

        displayTable(data)


    } catch (e) {
        console.log(e)

    }
}

document.getElementById("Low").addEventListener("click", function () {
    low()
})




async function High() {

    try {

        let res = await fetch(`http://localhost:3000/womanWear?_sort=price&_order=desc`);

        let data = await res.json();
        console.log(data);

        displayTable(data);


    } catch (e) {
        console.log(e);

    }
}

document.getElementById("HightoLow").addEventListener("click", function () {
    High()
})



async function latestarrivals() {

    try {

        let res = await fetch(`http://localhost:3000/womanWear?_sort=id&_order=desc`);

        let data = await res.json();
        console.log(data);

        displayTable(data);


    } catch (e) {
        console.log(e);

    }
}

document.getElementById("latest-arrivals").addEventListener("click", function () {
    latestarrivals()
})




async function trends() {

    try {

        let res = await fetch(`http://localhost:3000/womanWear?_sort=trnding&_order=desc`);

        let data = await res.json();
        //  console.log(data);

        displayTable(data);


    } catch (e) {
        console.log(e);

    }
}

document.getElementById("Trending").addEventListener("click", function () {
    trends()
})


document.getElementById("black").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Black") {
            bag.push(elem)
        }
    })

    console.log(bag)
    displayTable(bag)



})



document.getElementById("blue").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Blue") {
            bag.push(elem)
        }
    })

    console.log(bag)
    displayTable(bag)



})






document.getElementById("brown").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Brown") {
            bag.push(elem)
        }
    })

    console.log(bag)
    displayTable(bag)



})



document.getElementById("grey").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Grey") {
            bag.push(elem)
        }
    })

    console.log(bag)
    displayTable(bag)



})





document.getElementById("orange").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Orange") {
            bag.push(elem)
        }
    })

    console.log(bag)
    displayTable(bag)



})



document.getElementById("pink").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Pink") {
            bag.push(elem)
        }
    })

    console.log(bag)
    displayTable(bag)



})




document.getElementById("purple").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "purple") {
            bag.push(elem)
        }
    })

    console.log(bag)
    displayTable(bag)



})




document.getElementById("red").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Red") {
            bag.push(elem)
        }
    })

    console.log(bag)
    displayTable(bag)



})


document.getElementById("orange").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Orange") {
            bag.push(elem)
        }
    })

    console.log(bag)
    displayTable(bag)



})



document.getElementById("White").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "White") {
            bag.push(elem)
        }
    })

    console.log(bag)
    displayTable(bag)



})



document.getElementById("navy").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Navy") {
            bag.push(elem)
        }
    })

    console.log(bag)
    displayTable(bag)



})








const displayTable = (data) => {
    document.getElementById("womans").innerHTML = null

    data.forEach((el, i) => {

        let box = document.createElement("div")
        box.id = "box"
        let img = document.createElement("img")
        img.src = el.img
        let brand = document.createElement("p")
        brand.innerText = el.title

        let details = document.createElement("p")
        details.innerText = el.details

        let price = document.createElement("p")
        price.innerText = `$ ${el.price}`

        box.addEventListener("click",function(){
                 
            let x=data.splice(i,1)

        

            localStorage.setItem("product",JSON.stringify(x))

            window.location.href="../products/mens.html"
        })

        box.append(img, brand, details, price)

        document.getElementById("womans").append(box)

    });

}