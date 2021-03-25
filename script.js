document.querySelector('.allwines').addEventListener('click', () => {
    getWines()
})


const required = varName => {
    throw new Error(`${varName} is required. `);
}

const getWines = async () => {
    let response = await fetch('http://myapi-profstream.herokuapp.com/api/21a11f/wines')
    let data = await response.json()

    for(let i = 0; i < data.length; i++) {
        let newDiv = document.createElement('div')
        let newName = document.createElement('h5')//.innerHTML = data[i].name
        let newImage = document.createElement('img')//.src = data[i].picture
        let newYear = document.createElement('p')//.textContent = data[i].year
        let newGrapes = document.createElement('p')//.textContent = data[i].grapes
        let newCountry = document.createElement('p')//.textContent = data[i].country
        let newRegion = document.createElement('p')//.textContent = data[i].region
        let newDesc = document.createElement('p')//.textContent = data[i].description
        let price = document.createElement('p')//.textContent = data[i].price
        let elementArr = [newName,newImage,newYear,newGrapes,newCountry,newRegion,newDesc,price]
        for (let element of elementArr) {
            newDiv.appendChild(element)
        }
        newName.innerText = data[i].name
        newImage.src = data[i].picture
        newYear.innerText = data[i].year
        newGrapes.innerText = data[i].grapes
        newCountry.innerText = data[i].country
        newRegion.innerText = data[i].rergion
        newDesc.innerText = data[i].description
        price.innerText = data[i].price
        newDiv.classList.add("winediv")
        document.querySelector('.wineinfo').appendChild(newDiv)
    }
}

const getWineById = async id => {
    let response = await fetch(`http://myapi-profstream.herokuapp.com/api/21a11f/wines/${id}`)
    let data = await response.json()
}

const addWine = async (name=required('name'), year=0, grapes='N/A',country='N/A', region='N/A', description='N/A', picture='N/A', price=0) => {
    let response = await fetch('http://myapi-profstream.herokuapp.com/api/21a11f/wines', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name,
            "year": year,
            "grapes": grapes,
            "country": country,
            "region": region,
            "description": description,
            "picture": picture,
            "price": price
        })
    })
}

const deleteWineById = async id => {
    let response = await fetch(`http://myapi-profstream.herokuapp.com/api/21a11f/wines/${id}`, {
        method: 'DELETE'
    })
}


console.log('hello')
