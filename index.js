
const getData = async () => {

    try {

        let res = await fetch(`http://localhost:3000/ssense`);

        let data = await res.json()
        //  console.log(data)

        displayTable(data)


    } catch (e) {
        console.log(e)

    }
}



getData()

displayTable = (data) => {

    data.forEach(el => {

        let box = document.createElement("div")
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