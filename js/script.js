// Toggle class active navbar
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = (e) => {
    e.preventDefault();
    navbarNav.classList.toggle('active');
};

// Toggle class active search
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
document.querySelector('#search-button').onclick = (e) => {
    e.preventDefault()
    searchForm.classList.toggle('active');
    searchBox.focus();
}

// Toggle class active shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    e.preventDefault()
    shoppingCart.classList.toggle('active');
}

// Klik diluar sidebar untuk menghilangkannya
const sb = document.querySelector('#search-button');
const scb = document.querySelector('#shopping-cart-button');
const hm = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if (!scb.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
})

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');
itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        e.preventDefault();
        itemDetailModal.style.display = 'flex';
    }
})

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
    e.preventDefault();
    itemDetailModal.style.display = 'none';
}
// klik diluar modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
}