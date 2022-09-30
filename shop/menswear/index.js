
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

        let res = await fetch(`http://localhost:3000/ssense`);

        let data = await res.json()
        //  console.log(data)
        //   color(data)
        displayTable(data)
        fil = data


    } catch (e) {
        console.log(e)

    }
}



getData()


const low = async () => {

    try {

        let res = await fetch(`http://localhost:3000/ssense?_sort=price&_order=asc`);

        let data = await res.json()
        //  console.log(data)

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

        let res = await fetch(`http://localhost:3000/ssense?_sort=price&_order=desc`);

        let data = await res.json();
        //  console.log(data);

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

        let res = await fetch(`http://localhost:3000/ssense?_sort=id&_order=desc`);

        let data = await res.json();
        //  console.log(data);

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

        let res = await fetch(`http://localhost:3000/ssense?_sort=trnding&_order=desc`);

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

        if (elem.color === "Balck") {
            bag.push(elem)
        }
    })

    // console.log(bag)
    displayTable(bag)



})



document.getElementById("blue").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Blue") {
            bag.push(elem)
        }
    })

    // console.log(bag)
    displayTable(bag)



})




document.getElementById("brown").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Brown") {
            bag.push(elem)
        }
    })

    //console.log(bag)
    displayTable(bag)



})


// docuent.getElementById("color").addEventListener("click", function () {


//     displayTable(fil)

// })m


document.getElementById("grey").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Grey") {
            bag.push(elem)
        }
    })

    //  console.log(bag)
    displayTable(bag)



})




document.getElementById("orange").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Orange") {
            bag.push(elem)
        }
    })

    //  console.log(bag)
    displayTable(bag)



})



document.getElementById("pink").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Pink") {
            bag.push(elem)
        }
    })

    //  console.log(bag)
    displayTable(bag)



})




document.getElementById("purple").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "purple") {
            bag.push(elem)
        }
    })

    //  console.log(bag)
    displayTable(bag)



})





document.getElementById("red").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Red") {
            bag.push(elem)
        }
    })

    //  console.log(bag)
    displayTable(bag)



})



document.getElementById("orange").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Orange") {
            bag.push(elem)
        }
    })

    //  console.log(bag)
    displayTable(bag)



})




document.getElementById("White").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "White") {
            bag.push(elem)
        }
    })

    //  console.log(bag)
    displayTable(bag)



})





document.getElementById("navy").addEventListener("click", function () {
    let bag = []
    fil.forEach(elem => {

        if (elem.color === "Navy") {
            bag.push(elem)
        }
    })

    // console.log(bag)
    displayTable(bag)



})





const displayTable = (data) => {
    document.getElementById("Mens").innerHTML = null

    data.forEach(el => {

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

        box.append(img, brand, details, price)

        document.getElementById("Mens").append(box)

    });

}


const inp = async (input) => {

    try {

        let res = await fetch(`http://localhost:3000/ssense?q=${input}`);

        let data = await res.json()
        //    console.log(data)

        //displayTable(data)
        result(data)


    } catch (e) {
        console.log(e)

    }
}

let button = document.getElementById("debounce");
const debounce = (func, delay) => {
    let debounceTimer
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
}








button.addEventListener("keyup", debounce(function () {
    let input = document.getElementById("debounce").value;

    inp(input)
    //  console.log(input)


}, 1000))



function result(data) {

    data.forEach(el => {

        //  document.querySelector("#result").innerHTML = null

        let ul = document.createElement("ul")
        let title = document.createElement("li")
        title.innerText = el.title
        console.log(el.title)
        ul.append(title)


        document.getElementById("result").append(ul)
    });


}


