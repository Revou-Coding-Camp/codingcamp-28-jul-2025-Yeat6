document.addEventListener("DOMContentLoaded", function() {
    greetUser();
});

function greetUser() {
    const popup = prompt("Please enter your name:");
    if (popup) {
        const welcomeMessage = document.getElementById("username");
        welcomeMessage.textContent = popup;
    } else {
        const welcomeMessage = document.getElementById("username");
        welcomeMessage.textContent = "Guest";
    }
}