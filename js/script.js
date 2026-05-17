const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const modal = document.querySelector(".modal");
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.modal_close');
const openBtn = document.querySelector('.promo__button');

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");

});

function openModal() {
    overlay.classList.remove('hidden');
}
function closeModal() {
    overlay.classList.add('hidden');
}
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeModal();
    }
});


