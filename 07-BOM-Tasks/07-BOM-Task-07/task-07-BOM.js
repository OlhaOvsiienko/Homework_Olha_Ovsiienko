const countrySelect = document.getElementById('country');
const citiesSelect = document.getElementById('cities');
const selectedCountryDiv = document.getElementById('selectedCountry');
const selectedCityDiv = document.getElementById('selectedCity');

const citiesByCountry = {
    ger: ['Berlin', 'Munich', 'Hamburg'],
    usa: ['New York', 'Los Angeles', 'Chicago'],
    ukr: ['Kyiv', 'Odesa', 'Kharkiv'],
};

function updateCities() {
    const selectedCountry = countrySelect.value;
    const cities = citiesByCountry[selectedCountry] || [];

    citiesSelect.innerHTML = '';

    cities.forEach((city) => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citiesSelect.appendChild(option);
    });
}

countrySelect.addEventListener('change', () => {
    updateCities();
    selectedCountryDiv.textContent = 'Selected country: ' + countrySelect.options[countrySelect.selectedIndex].text;
    selectedCityDiv.textContent = ''; 
});

citiesSelect.addEventListener('change', () => {
    selectedCityDiv.textContent = 'Selected city: ' + citiesSelect.options[citiesSelect.selectedIndex].text;
});

updateCities();