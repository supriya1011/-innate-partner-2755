
const getData = async () => {

    try {

        let res = await fetch(`http://localhost:3000/ssense`);

        let data = await res.json()
        console.log(data)


    } catch (e) {
        console.log(e)

    }
}



getData()