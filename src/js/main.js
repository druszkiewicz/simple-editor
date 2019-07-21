"use strict";

// service worker registration - remove if you're not going to use it

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }

// place your code below


// console.log(`Hello world!`);
// localStorage.setItem('edytor','treść');
// const person = {
//     name: 'maciek',
//     age: 31
// };
// //console.log(JSON.stringify(person));
// const jsonPerson = JSON.stringify(person);
// localStorage.setItem('osoba',jsonPerson);

// const personStringify = localStorage.getItem('osoba');
// const personRead = JSON.parse(personStringify);

// console.log(personRead.name);

//to do lekcji

// const inputField = document.querySelector('.inputField--js');
// if (localStorage.getItem('inputField')) {
//     inputField.value=localStorage.getItem('inputField');
// };
// inputField.addEventListener('keyup', (e) => {
//     //console.log(e.target.value);
//     localStorage.setItem('inputField',e.target.value);
// });

const inputArea = document.querySelector('.form__message--js');
const counter = document.querySelector('.form__counter--js');
const saveKey = document.querySelector('.form__button--saveJs');
const loadKey = document.querySelector('.form__button--loadJs');

function countCharacters (text) {
    counter.innerHTML = 'znaki: ' + text.length;
    return text.length;  
};


const writeToTextArea = function () {
    inputArea.value = localStorage.getItem('edytor');
    countCharacters(inputArea.value);
};


if (localStorage.getItem('edytor')) {
    writeToTextArea();
}
else {
    countCharacters(inputArea.value); 
}

saveKey.addEventListener('click', (e) => {
    e.preventDefault();   //blokada wysyłania strony
    localStorage.setItem('edytor', inputArea.value);
});

// loadKey.addEventListener('click', writeToTextArea);

loadKey.addEventListener('click', (e) => {
    e.preventDefault();
    writeToTextArea();
});

inputArea.addEventListener('keyup', (e) => {
    countCharacters(inputArea.value)
});

