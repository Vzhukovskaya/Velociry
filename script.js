// Tab Section

const tabsBtns = document.querySelectorAll('.tabs__nav button');
// console.log(tabsBtns);
const tabsItems = document.querySelectorAll('.tabs__item');
// console.log(tabsItems);

//Функция скрывает табы и убирает active у кнопок.
function hideTabs() {
    tabsItems.forEach(tab => tab.classList.add('hide'));
    tabsBtns.forEach(btn => btn.classList.remove('active'));
}
// hideTabs();

// Функция показывает переданый номер таба и делает его кнопку актовной.

function showTab(index) {
    tabsItems[index].classList.remove('hide');
    tabsBtns[index].classList.add('active');
}

hideTabs();
showTab(0);

// Вещаем слушатель событий на кнопки.

tabsBtns.forEach((btn, index) => btn.addEventListener('click', () => {
    hideTabs();
    showTab(index);
}));


// Links - плавная навигация по странице.
const links = document.querySelectorAll('.header__nav a');
// console.log(links);

links.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();

        const id = item.getAttribute('href');
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});