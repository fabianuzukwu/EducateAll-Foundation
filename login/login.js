const modal = document.querySelector(".modal")
const loginModal = document.querySelector(".login-modal")
const closeBtn = document.querySelector(".close-btn")

closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
})
