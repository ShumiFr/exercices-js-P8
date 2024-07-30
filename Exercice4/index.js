const button = document.getElementById("myButton");
const text = document.getElementById("myText");

button.addEventListener("click", () => {
    text.textContent = "Bonjour, vous avez cliqué sur le bouton !";
});