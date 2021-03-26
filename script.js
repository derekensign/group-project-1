let addWineForm = document.getElementById('addWine')


addWineForm.addEventListener('submit', (event) => {

    let addWineSubmit = []

    for(let i = 0; i < (addWineForm.length - 1); i++) {
        addWineSubmit.push(addWineForm[i].value)
    }

    let wineInfo = document.querySelector('.wineinfo')
    while(wineInfo.firstChild !== null) {
        wineInfo.removeChild(wineInfo.lastChild)
    }

    addWine(addWineSubmit)
    //clear form
    document.getElementById('addWine').reset()
    event.preventDefault()
})

console.log(addWineForm)


document.querySelector('.allwines').addEventListener('click', () => {
    let wineInfo = document.querySelector('.wineinfo')
    while(wineInfo.firstChild !== null) {
        wineInfo.removeChild(wineInfo.lastChild)
    }
    getWines()
})

// Function to require an input if they are adding wine
const required = varName => {
    throw new Error(`${varName} is required. `);
}

const getWines = async () => {
    let response = await fetch('http://myapi-profstream.herokuapp.com/api/21a11f/wines')
    let data = await response.json()
    console.log(data)
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
        wineDivs[i].addEventListener('click', (e) => {
            // Get the modal
            let modal = document.getElementById("myModal");
            // Get the <span> element that closes the modal
            let span = document.getElementsByClassName("close")[0];
            
            //Modal elements and information
            const wineTitleModal = document.querySelector('.winetitlemodal')
            const wineImageModal = document.querySelector('.wineimagemodal')
            const wineYearModal = document.querySelector('.wineyearmodal')
            const wineGrapesmodal = document.querySelector('.grapesmodal')
            const wineCountryModal = document.querySelector('.countrymodal')
            const wineRegionModal = document.querySelector('.regionmodal')
            const wineDescModal = document.querySelector('.descriptionmodal')
            const winePriceModal = document.querySelector('.pricemodal')
            const deleteButton = document.querySelector('.deletewine')
            const editButton = document.querySelector('.editwine')
            const backButton = document.querySelector('.backtodetails')
            const modalDetails = document.querySelector('.detail-content')
            const modalForm = document.querySelector('.modal-form-container')
            wineTitleModal.innerText = data[i].name
            wineImageModal.src = data[i].picture
            wineYearModal.innerText = 'Year: ' + data[i].year
            wineGrapesmodal.innerText = 'Grapes: ' + data[i].grapes
            wineCountryModal.innerText = 'Country: ' + data[i].country
            wineRegionModal.innerText = 'Region: ' + data[i].region
            wineDescModal.innerText = 'Description: ' + data[i].description
            winePriceModal.innerText = 'Price: $' + data[i].price
            modal.style.display = "block";
            // When the user clicks on <span> (x), close the modal
            span.onclick = () => {
                modal.style.display = "none";
            }
            deleteButton.onclick = () => {
                deleteWineById(data[i].id)
            }
            editButton.onclick = () => {
                modalDetails.classList.add('hidden')
                modalForm.classList.remove('hidden')
                editWineById(data[i].id)
            }
            // backButton.onclick = () => {
            //     modalDetails.classList.remove('hidden')
            //     modalForm.classList.add('hidden')
            // }
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = event => {
            if (event.target == modal) {
                modal.style.display = "none";
                }
            }
        })
    }
}


const addWine = async ([name, year, grapes, country, region, description, picture, price]) => {
    let arr = [name, year, grapes, country, region, description, picture, price]
    let errorStatus = false
    for(let i of arr) {
        if(i === '') {
            alert('All fields must have input to add a new wine!')
            errorStatus = true
            break
        }
    }
    if(!errorStatus) {
    try {
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
    } catch (error) {
        console.log(error.message)
        }
    }
getWines()
}
//}

const deleteWineById = async id => {
    let response = await fetch(`http://myapi-profstream.herokuapp.com/api/21a11f/wines/${id}`, {
        method: 'DELETE'
    })
    location.reload()
}

const editWineById = async id => {
    let response = await fetch(`http://myapi-profstream.herokuapp.com/api/21a11f/wines/${id}`)
    let data = await response.json()

    console.log(data)

    let formElements = document.getElementsByClassName('editforminput')

    console.log(formElements)

    for(let i = 0; i < data.length; i++) {
        formElements[i].value = data[i].
        console.log(formElements[i].value)
    // location.reload()
    }
}

getWines()
