import nav from '../navbar/nav.js';
console.log(nav);
let nav1=document.getElementById("navbar");
nav1.innerHTML=nav;


import footer from '../footer/footer.js';
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

let act_data = undefined


const getData = async () => {

    try {

        let res = await fetch(`https://mocki.io/v1/1d9b78fd-f1b7-4748-9ce5-612565c74c98`);

        let data = await res.json()
        //  console.log(data)
        act_data = data.womanWear
        displayTable(act_data)
        fil = act_data


    } catch (e) {
        console.log(e)

    }
}


getData()

document.getElementById("Low").addEventListener("click", function () {

    act_data.sort(function (a, b) {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;

    })

    displayTable(act_data);
    console.log(womensData);

})





document.getElementById("HightoLow").addEventListener("click", function () {



    act_data.sort(function (a, b) {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
        return 0;

    })

    displayTable(act_data);
    console.log(womensData);

})



document.getElementById("latest-arrivals").addEventListener("click", function () {

    act_data.sort(function (a, b) {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;

    })

    displayTable(act_data);
    //console.log(womensData);
})







document.getElementById("Trending").addEventListener("click", function () {

    act_data.sort(function (a, b) {
        if (a.trnding > b.trnding) return -1;
        if (a.trnding < b.trnding) return 1;
        return 0;

    })

    displayTable(act_data);
    console.log(womensData);


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