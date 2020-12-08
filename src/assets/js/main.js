const menuItems = document.querySelector('.side-nav');
const menuSpan = document.querySelector('.menu-span');
const menuBtn = document.querySelector('.menu-btn');
const menuItem = document.querySelectorAll('.menu-item');

menuBtn.addEventListener('click', () => {
    toggle();
});

menuItem.forEach((item) => {
    item.addEventListener('click', () => {
        if(menuBtn.classList.contains('open')) {
            toggle();
        }
    });
});

function toggle() {
    menuSpan.classList.toggle("open");
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
}