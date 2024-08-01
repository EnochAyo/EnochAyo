'use strict';
const modal = document.querySelector(`.modal`);

const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);

const btnsShowModal = document.querySelectorAll(`.show-modal`)
const bookNow = document.querySelectorAll(`.btn-white`);

console.log(btnsShowModal);
const closeModal = function () {
    modal.classList.add(`hidden`)
    modal.classList.remove(`modal-flex`)
    overlay.classList.add(`hidden`)

};
const openModal = function () {
    console.log(`Button Clicked`)
    modal.classList.remove(`hidden`);
    modal.classList.add(`modal-flex`)
    overlay.classList.remove(`hidden`);
};

for (let i = 0; i < btnsShowModal.length; i++)
    btnsShowModal[i].addEventListener(`click`, openModal);

for (let i = 0; i < bookNow.length; i++)
    bookNow[i].addEventListener(`click`, openModal);

btnCloseModal.addEventListener(`click`, closeModal);

overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
    console.log(e.key);

    if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {

        closeModal();

    }
}); 