const themeButton = document.getElementById("themeButton");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formMessage.textContent = "Thank you, " + name + "! Your message has been received for this demo.";
    contactForm.reset();
});
