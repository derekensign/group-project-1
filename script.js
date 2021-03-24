const getWines = async () => {
    let response = await fetch('http://myapi-profstream.herokuapp.com/api/21a11f/wines')
    let data = await response.json()
    console.log(data)
}

const addWine = async (name='', year=0, grapes='',country='', region='', description='', picture='', price=0) => {
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