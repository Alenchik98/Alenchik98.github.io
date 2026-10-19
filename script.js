let number = 42
let number2 = 36
let numberThree = 24
console.log(number);

let title = document.querySelector('h1')
title.textContent = "Приветствую"

let searchClass = document.querySelector('.open')
searchClass.style.color = "pink"

let main = document.querySelector('body')
main.innerHTML += "<h3>Новый заголовок</h3>"

let button = document.querySelector('.btn')
button.addEventListener('click', function(){
    alert('Вы покидаете эту страницу')
})

let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.nav')
burger.addEventListener('click', function(){
    burger.classList.toggle('active')
    nav.classList.toggle('active')
})