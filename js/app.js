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
}