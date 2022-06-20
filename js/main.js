const header = document.querySelector(".header__park")
const burger = document.querySelector(".burger")
const nav = document.querySelector(".adaptive__head")
const body = document.querySelector("body")


const trackHeader = () => {
    if (window.scrollY > 124) {
        header.classList.add("header__park-active")
    } else {
        header.classList.remove("header__park-active")
    }
}

window.addEventListener("scroll", trackHeader)


burger.addEventListener("click", () => {
    nav.classList.toggle("active__nav")
    burger.classList.toggle("burger__close")
    body.classList.toggle("lock-scroll")
})

