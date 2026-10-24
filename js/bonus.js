const answers = document.querySelector(".answers");
const yes = document.getElementById("yes");
const maybe = document.getElementById("maybe");
const hired = document.querySelector(".hired");

function escape() {
    const area = answers.getBoundingClientRect();
    const button = maybe.getBoundingClientRect();

    const x = Math.random() * (area.width - button.width);
    const y = Math.random() * (area.height - button.height);

    maybe.style.position = "absolute";
    maybe.style.left = x + "px";
    maybe.style.top = y + "px";
}

maybe.addEventListener("mouseenter", escape);

maybe.addEventListener("touchstart", event => {
    event.preventDefault();
    escape();
}, { passive: false });

// Por si alguien consigue pulsarlo con el teclado
maybe.addEventListener("click", () => {
    maybe.textContent = "Casi";
    escape();
});

yes.addEventListener("click", () => {
    answers.hidden = true;
    hired.hidden = false;
});