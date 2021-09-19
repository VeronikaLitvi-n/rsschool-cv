
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
const menuBody = document.querySelector('.menu_body');
const iconMenu = document.querySelector('.menu_icon');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        document.body.classList.remove('_active');
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');

        e.preventDefault();
    }
}

if (iconMenu) {

    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

console.log("1.вёрстка валидная +10, вёрстка семантическая +20(присутсвует 10 семантических тегов), 3.для оформления СV используются css-стили +10, 4.контент размещается в блоке, который горизонтально центрируется на странице+10, 5. вёрстка адаптивная +10, 6.есть адаптивное бургер-меню +10, 7. на странице СV присутствует изображение +10, 8.контакты для связи и перечень навыков оформлены в виде списка ul > li +10, 9.CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10, 10. CV содержит пример вашего кода с подсветкой кода +10, 11.CV содержит изображения-ссылки на выполненные вами проекты+10, 12. CV выполнено на английском языке +10, 13.выполнены требования к Pull Request +10, 14. дизайн, оформление, качество выполнения CV не ниже чем в примерах CV +10. Итого: 150")