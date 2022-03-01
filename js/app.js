const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle
}

const searchBtn = () => {
    const searchBox = document.getElementById('search-box')
    const search = searchBox.value.toUpperCase()
    const error = document.getElementById('error')
    // show spinner
    toggleSpinner('block')
    if (search.length === 0) {
        console.log('array is empty')
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${search}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => showPhoneDetails(data.data.slice(0, 20)))
    }

}
const showPhoneDetails = (phones) => {
    console.log(phones)
    const main = document.getElementById('phone-container')
    main.textContent = ''
    phones.forEach(phone => {
        console.log(phone.brand)
        const div = document.createElement('div')
        div.innerHTML = `
          <div class="card h-100 mb-5">
              <img style="width: 10rem;" src="${phone.image}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h2 class="card-title"> Name : ${phone.phone_name}</h2>
                  <p class="card-text">Brand : ${phone.brand}</p>
                   <button onclick="seeDetails('${phone.slug}')" class="btn btn-success">Explore</button>
              </div>
          </div>
        `
        main.appendChild(div)
    })
    toggleSpinner('none')
}

// -------------------------------Explore button-------------------------
const seeDetails = (info) => {

    const url = `https://openapi.programming-hero.com/api/phone/${info}`
    fetch(url)
        .then(res => res.json())
        .then(data => Details(data.data))
    console.log(info)
}

const Details = (info) => {
    console.log(info)
    document.getElementById('details-container').innerHTML = `
    <div class="container border border-dark border-3 rounded">
    
        <img src="${info.image}">
        <h2>Name : ${info.name}</h2>
        <ul>Main Features : 
            <li>Storage : ${info.mainFeatures.storage}</li>
            <li>Display Size : ${info.mainFeatures.displaySize}</li>
            <li>Chipset : ${info.mainFeatures.chipSet}</li>
            <li>Memory : ${info.mainFeatures.memory}</li>
        </ul>
        <h5>Sensors : ${info.mainFeatures.sensors}</h5>
        <h5>Release Date : ${info.releaseDate}</h5>
        <ul>Others : 
            <li>Bluetooth : ${info.others.Bluetooth}</li>
            <li>GPS : ${info.others.GPS}</li>
            <li>NFC : ${info.others.NFC}</li>
            <li>Radio : ${info.others.Radio}</li>
            <li>USB : ${info.others.USB}</li>
            <li>WLAN : ${info.others.WLAN}</li>
        </ul>
    
    
    </div>
    `

}