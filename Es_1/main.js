

console.dir(document);

let p = document.querySelectorAll(".p")

let btn1 = document.querySelector(".btn1")

let btn2 = document.querySelector(".btn2")

let btn3 = document.querySelector(".btn3")

// ! Primo bottone
btn1.addEventListener("click", () => {
    p.forEach(paragrafo => {
        let r = Math.floor(Math.random() * (255 - 0 + 1) + 0)
        let g = Math.floor(Math.random() * (255 - 0 + 1) + 0)
        let f = Math.floor(Math.random() * (255 - 0 + 1) + 0)
        paragrafo.style.color = `rgb(${r}, ${g}, ${f})`
    })
});

// ! Secondo bottone
btn2.addEventListener("click", () => {
    p.forEach(paragrafo => {
        paragrafo.classList.toggle("bold")
    })
});
// ! Terzo bottone
btn3.addEventListener("click", () => {
    p.forEach(paragrafo => {
        paragrafo.classList.toggle("none")
    })
});