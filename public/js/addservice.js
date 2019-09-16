// скрипт для вывода выбранного города используется на странице view/addservice.hbs
const cityCurrent = document.querySelector('#city-current') // div для вывода рез-та
const selectCity = document.querySelector('select') // список select
selectCity.addEventListener('click', function() {
   let text = this.options[this.selectedIndex].text; // получаем текстовое значение выбранного элемента
   cityCurrent.innerHTML = text;
})