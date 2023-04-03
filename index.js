// Задание №1

// Используя API со странами выведите список со всеми странами:
// API: https://restcountries.com/v3.1/all

let url = 'https://restcountries.com/v3.1/all'
let list = document.querySelector('#list')
fetch(url).then(res => res.json()).then(data => {
  data.forEach((elem) => {
    list.innerHTML += `<li>${elem.name.common}</li>`
  })
})

// Задание №2

// Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
// Используйте fetch. Отобразите на странице имена персонажей из
// Рика и Морти в list.

let listRick = document.querySelector('.list')
let rickMorty = 'https://rickandmortyapi.com/api/character'

fetch(rickMorty).then(res => res.json()).then(data => {
  data.results.forEach((elem) => {
    listRick.innerHTML += `
    <li>
    <img src="${elem.image}">
    <p>${elem.name}</p>
    </li>
    `
  })
})

// Задание №3

// Рядом с именами отобразите все изображения
// которые вы получили со второго задания
