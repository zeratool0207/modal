'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for ( let i = 0; i < btnOpenModal.length; i++ ) {
    btnOpenModal[i].addEventListener( 'click',openModal );
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener( 'click',closeModal );
// btnCloseModal.addEventListener('click',function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });
    
overlay.addEventListener( 'click',closeModal );
// overlay.addEventListener('click',function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });