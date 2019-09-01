const menu = document.querySelector(".menu")
const ham = document.querySelector(".ham")
const line = document.getElementsByClassName("line")

ham.addEventListener("click", () => {
    if (menu.style.opacity == 0) {
        menu.style.opacity = "1"
        line[0].style.transform = `rotate(45deg) translate(0, 5px)`
        line[1].style.opacity = `0`
        line[2].style.transform = `rotate(-45deg) translate(5px, -10px)`
    } else {
        menu.style.opacity = "0"
        line[0].style.transform = `rotate(0) translate(0, 0)`
        line[1].style.opacity = `1`
        line[2].style.transform = `rotate(0) translate(0, 0)`
    }
l
})