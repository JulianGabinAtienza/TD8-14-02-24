// for (let i = 1; i < 501; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " est pair");
//     } else {
//         console.error(i + " est impair");
//     }
// }

// function maFonction() {
//     console.log("Hello, World!");
// }

// maFonction()

// function sayHello(name) {
//     console.log(`Bonjour ${name}!`);
// }

// sayHello('John')

const list = document.createElement('ul');
const item = document.createElement('li');
const item2 = document.createElement('li');

list.appendChild(item);
list.appendChild(item2);

item.textContent = 'Je suis un item de la liste';
item2.textContent = 'Je suis un autre item de la liste';

document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    body.appendChild(list);
});

console.log(list);

// Exercice suivant

function Hello() {
    alerte('Hello !');
}

function showAlert(argument) {
    alert(argument);
}


function showMessage(message) {
    if (message.length <= 20) {
        alert('Ton message est bien passé !');
    } else {
        alert('Votre message est trop long');
    }
}

const carré = document.createElement('div');
carré.classList.add('square');

carré.style.width = '100px';
carré.style.height = '100px';
carré.style.backgroundColor = 'green';

carré.addEventListener('click', () => {
    if (carré.style.backgroundColor === 'green') {
        carré.style.backgroundColor = 'blue';
    } else {
        carré.style.backgroundColor = 'green';
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    body.appendChild(carré);
});