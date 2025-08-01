function greetUser() {
    const name = prompt("Please enter your name:");
    if (name) {
        const welcomeMessage = document.getElementById("username");
        welcomeMessage.textContent = userName;
    } else {
        alert("Name cannot be empty. Please try again.");
        greetUser(); // Prompt again if name is empty
    }
}

function validateForm() {
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message").value;

    if (!name) {
        alert("Name is required.");
        return false;
    }
    if (!dob) {
        alert("Date of Birth is required.");
        return false;
    }
    if (!gender) {
        alert("Gender is required.");
        return false;
    }
    if (!message) {
        alert("Message is required.");
        return false;
    }
    return true;
}

function addMessageToTable() {
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('gender').value;
    const message = document.getElementById("message").value;

    const table = document.getElementById("messages-table");
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = dob; 
    newRow.insertCell(2).textContent = gender;
    newRow.insertCell(3).textContent = message;

}