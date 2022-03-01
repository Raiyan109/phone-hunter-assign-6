const searchBtn = () => {
    const searchBox = document.getElementById('search-box').value
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchBox}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showPhoneDetails(data.data.slice(0, 20)))
}
const showPhoneDetails = (phones) => {
    console.log(phones)
    const main = document.getElementById('phone-container')
    for (const phone of phones) {
        console.log(phone.brand)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100">
                    <img style="width: 10rem;" src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h2 class="card-title"> Name : ${phone.phone_name}</h2>
                        <p class="card-text">Brand : ${phone.brand}</p>
                         <button onclick="seeDetails('${phone.slug}')" class="btn btn-success">Explore</button>
                    </div>
      
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img style="width: 10rem;" src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                         <h2 class="card-title"> Name : ${phone.phone_name}</h2>
                         <p class="card-text">Brand : ${phone.brand}</p>
                        <button onclick="seeDetails('${phone.slug}')" class="btn btn-success">Explore</button>
                    </div>
      
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img style="width: 10rem;" src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h2 class="card-title"> Name : ${phone.phone_name}</h2>
                        <p class="card-text">Brand : ${phone.brand}</p>
                         <button onclick="seeDetails('${phone.slug}')" class="btn btn-success">Explore</button>
                    </div>
      
                </div>
            </div>
        </div>
        `
        main.appendChild(div)
    }
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
    document.getElementById('details-container').innerHTML = `
    <div>
    
    <img src="${info.image}">
    <h2>Name : ${info.name}</h2>
    <h4>Main Features : ${info.mainFeatures.storage}, Display Size : ${info.mainFeatures.displaySize} , Chipset : ${info.mainFeatures.chipSet}, Memory : ${info.mainFeatures.memory}</h4>
    </div>
    `
    console.log(info)
}