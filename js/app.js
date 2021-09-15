const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    toggle(".menu__toggle", ".menu__list", ".list__link");
});

function toggle(btn, nav__list, nav__link) {
    d.addEventListener("click", (e) => {
        if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
            d.querySelector(nav__list).classList.toggle("active");
            d.querySelector(btn).classList.toggle("active");
        }
        if (e.target.matches(nav__link)) {
            d.querySelector(nav__list).classList.remove("active");
            d.querySelector(btn).classList.remove("active");
        }

    })
}