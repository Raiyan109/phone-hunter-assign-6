// Spinner Function
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle
}

// Search button
const searchBtn = () => {
    const searchBox = document.getElementById('search-box')
    const search = searchBox.value.toUpperCase()

    // show spinner
    toggleSpinner('block')
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showPhoneDetails(data.data.slice(0, 20)))


}
const showPhoneDetails = (phones) => {
    console.log(phones)
    const main = document.getElementById('phone-container')
    main.textContent = ''
    if (phones.length === 0) {
        console.log('no result found')
        const p = document.createElement('p')
        p.classList.add('text-center')
        p.classList.add('fs-1')
        p.classList.add('fw-bold')
        p.classList.add('fst-italic')
        p.classList.add('font-monospace')
        p.innerText = 'No Phone Found'
        main.appendChild(p)
    }
    phones?.forEach(phone => {
        console.log(phone.brand)
        const div = document.createElement('div')
        div.classList.add('col-md-4')
        div.innerHTML = `
          <div class="card h-100 mb-5">
              <img class="ms-3 mt-3" style="width: 10rem;" src="${phone.image}" class="card-img-top" alt="...">
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

    const detailsMain = document.getElementById('details-container')
    detailsMain.textContent = ''
    const detailsDiv = document.createElement('div')
    detailsDiv.innerHTML = `
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
        <h5>Release Date : ${info?.releaseDate ? info.releaseDate : 'No Release Date Found'}</h5>
        <ul>Others : 
            <li>Bluetooth : ${info?.others?.Bluetooth ? info.others.Bluetooth : 'Nothing Found'}</li>
            <li>GPS : ${info?.others?.GPS ? info.others.GPS : 'Nothing Found'}</li>
            <li>NFC : ${info?.others?.NFC ? info.others.NFC : 'Nothing Found'}</li>
            <li>Radio : ${info?.others?.Radio ? info.others.Radio : 'Nothing Found'}</li>
            <li>USB : ${info?.others?.USB ? info.others.USB : 'Nothing Found'}</li>
            <li>WLAN : ${info?.others?.WLAN ? info.others.WLAN : 'Nothing Found'}</li>
        </ul>
    
    
    </div>
    `
    detailsMain.appendChild(detailsDiv)
    window.scrollTo(0, 300)

}
