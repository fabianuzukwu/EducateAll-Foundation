const country = document.querySelector("#country")
function countryJson() {

    const xhttp = new XMLHttpRequest()

    let url = "frontend.json"

    xhttp.open("GET", url, true)

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let a = JSON.parse(this.responseText)
            for (let i in a) {
                msg = a[i]
                let option = document.createElement("option")
                option.value = msg
                option.innerText = msg
                country.appendChild(option)
                // console.log(a[i])
                console.log(msg)
            }
        }
    }

    xhttp.send()
}
countryJson()

function closeModal() {
    const modal = document.querySelector(".modal")
    const closeBtn = document.querySelector(".close-btn")

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none"
    })
}
closeModal()

