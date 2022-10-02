// navbar sections
const menu = document.querySelector(".toggle-menu");
closeMenu = document.querySelector(".close");
list = document.querySelector("ul");
menu.onclick = () => {
    menu.style.transform = menu.style.transform == "rotateZ(90deg)" ? "rotateZ(0deg)" : "rotateZ(90deg)";
    menu.style.opacity = menu.style.opacity == "0" ? "1" : "0";
    closeMenu.style.transform = closeMenu.style.transform == "rotateZ(90deg)" ? "rotateZ(0deg)" : "rotateZ(90deg)";
    closeMenu.style.opacity = closeMenu.style.opacity == "1" ? "0" : "1";
    list.classList.toggle("full-list");
}

// search icon
const navbar = document.querySelector("div.navbar");
form = document.querySelector("div.form");
search = document.querySelector("i.fa-search");
input = document.querySelector("input[type=\"search\"]");
search.onclick = () => {
    navbar.classList.toggle("none");
    search.classList.toggle("search-icon");
    input.classList.toggle("search-input");
    form.classList.toggle("form-stretch");
}

// landing section slider
let images = ["landing-01.webp", "landing-02.webp", "landing-03.webp"];
const arrow = document.querySelectorAll(".arrow");
landing = document.querySelector(".landing");
bullets = document.querySelectorAll(".bullets li");
let i = 0, n = images.length;
arrow[0].onclick = () => {
    i = (i - 1) % n;
    i = i < 0 ? n - 1 : i;
    landing.style.backgroundImage = `url(./images/${images[i < 0 ? -i : i]})`;
    change(bullets);
}
arrow[1].onclick = () => {
    i = (i + 1) % n;
    landing.style.backgroundImage = `url(./images/${images[i]})`;
    change(bullets);
}
for (let idx = 0; idx < bullets.length; idx++) {
    bullets[idx].onclick = () => {
        i = idx;
        landing.style.backgroundImage = `url(./images/${images[idx]})`;
        change(bullets);
    }
}
function change(bullets) {
    bullets.forEach((bullet) => {
        bullet.classList.remove("active-bullet");
    });
    bullets[i].classList.add("active-bullet");
}

// dots of temtimonials
dots = document.querySelectorAll(".dots li");
for (let idx = 0; idx < dots.length; idx++) {
    dots[idx].onclick = () => {
        dots.forEach((dot) => {
            dot.classList.remove("active-dot");
        });
        dots[idx].classList.add("active-dot");
    }
}

// placeholder of input
const formInput = document.querySelectorAll(".main-input")
const placeholder = document.querySelectorAll(".placeholder")

var placeholder_movement = (el, holder) => {
    el.onfocus = () => holder.classList.add("has-data");
    el.onblur = () => {
        if (el.value === "")
            holder.classList.remove("has-data");
    }
}

placeholder_movement(formInput[0], placeholder[0]);
placeholder_movement(formInput[1], placeholder[1]);

placeholder[0].onclick = () => { formInput[0].onfocus() }
placeholder[1].onclick = () => { formInput[1].onfocus() }
