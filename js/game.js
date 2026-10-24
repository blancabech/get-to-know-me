document.querySelectorAll(".question").forEach(question => {
    const options = question.querySelectorAll(".option");
    const lie = question.querySelector("[data-lie]");
    const correctSolution = question.querySelector(".correctSolution");
    const incorrectSolution = question.querySelector(".incorrectSolution");

    options.forEach(option => {
        option.addEventListener("click", () => {
            if (option === lie) {
                option.classList.add("correct");
                correctSolution.classList.add("visible");
            } else {
                option.classList.add("wrong");
                lie.classList.add("correct");
                incorrectSolution.classList.add("visible");
            }

            options.forEach(o => o.disabled = true);   // solo un intento
        });
    });
});