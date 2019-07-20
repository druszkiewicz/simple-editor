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

const inputField = document.querySelector('.inputField--js');
if (localStorage.getItem('inputField')) {
    inputField.value=localStorage.getItem('inputField');
};
inputField.addEventListener('keyup', (e) => {
    //console.log(e.target.value);
    localStorage.setItem('inputField',e.target.value);
});

const inputArea = document.querySelector('.edit--js');
const saveKey = document.querySelector('.saveBtn--js');
const loadKey = document.querySelector('.loadBtn--js');

const writeToTextArea = function () {
    inputArea.value = localStorage.getItem('edytor');
};

if (localStorage.getItem('edytor')) {
    console.log('cos');
    writeToTextArea();
}

saveKey.addEventListener('click', (e) => {
    localStorage.setItem('edytor', inputArea.value);
});

loadKey.addEventListener('click', writeToTextArea);



