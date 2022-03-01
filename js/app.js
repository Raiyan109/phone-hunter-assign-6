const searchBtn = () => {
    const searchBox = document.getElementById('search-box').value
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchBox}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showPhoneDetails(data.data))
}
const showPhoneDetails = (phones) => {
    console.log(phones)
    const main = document.getElementById('phone-container')
    for (const phone of phones) {
        console.log(phone.image)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      
    </div>
  </div>
</div>
        `
        main.appendChild(div)
    }
}