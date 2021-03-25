document.querySelector('.allwines').addEventListener('click', () => {
    getWines()
})

// Function to require an input if they are adding wine
const required = varName => {
    throw new Error(`${varName} is required. `);
}

const getWines = async () => {
    let response = await fetch('http://myapi-profstream.herokuapp.com/api/21a11f/wines')
    let data = await response.json()
    
    for(let i = 0; i < data.length; i++) {
        let newDiv = document.createElement('div')
        let newName = document.createElement('h5')
        let newImage = document.createElement('img')
        let newCountry = document.createElement('p')
        newDiv.appendChild(newImage)
        newDiv.appendChild(newName)
        newDiv.appendChild(newCountry)
        newName.innerText = data[i].name
        newImage.src = data[i].picture
        newCountry.innerText = data[i].country
        
        newDiv.classList.add("winediv")
        document.querySelector('.wineinfo').appendChild(newDiv)
    }
    
    // Event listener for each div
    let wineDivs = document.querySelectorAll('.winediv')
    for(let i = 0; i < wineDivs.length; i++) {
        wineDivs[i].addEventListener('click', () => {
            console.log('hi')
        })
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

getWines()
