let cl = console.log;

var countryFlagDiv = document.getElementById('countryFlag')
let result = " ";

countries.forEach((country)=>{
    result += `
    <div class="col">
        <div class="card">
            <div class="img-container">
                <img src=${country.flag} alt="">
            </div>
            <h4 class="country-name"> ${country.name}</h4>
            <p class="capital">Capital: <span>${country.capital}</span></p>
            <p class="languages truncateLongTexts">Languages: <span>${country.languages}</span></p>
            <p class="population">Population: <span>${country.population.toLocaleString()}</span></p>
        </div>
    </div>
    `
})
cl(result)
countryFlagDiv.innerHTML = result;

