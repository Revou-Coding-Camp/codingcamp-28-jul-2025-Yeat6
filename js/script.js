document.addEventListener("DOMContentLoaded", function() {
    greetUser();
    const form = document.querySelector(".messages form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        if (validateForm()) {
            addMessageToTable();
            form.reset();
        }
    });

    // Infinite auto-slide for portfolio
    const slider = document.querySelector('.portofolio-slider');
    if (slider) {
        // Duplicate images for seamless infinite scroll
        const sliderChildren = Array.from(slider.children);
        sliderChildren.forEach(child => {
            slider.appendChild(child.cloneNode(true));
        });

        let scrollSpeed = 5; // pixels per frame
        let animationFrameId;
        let running = true;

        function autoScroll() {
            if (!running) return;
            slider.scrollLeft += scrollSpeed;
            // When reaching the end of the first set, reset to the start of the original set
            if (slider.scrollLeft >= slider.scrollWidth / 2) {
                slider.scrollLeft -= slider.scrollWidth / 2;
            }
            animationFrameId = requestAnimationFrame(autoScroll);
        }

        // Start auto-scroll
        autoScroll();

        // Pause/resume on tab visibility change
        document.addEventListener("visibilitychange", function() {
            if (document.hidden) {
                running = false;
                cancelAnimationFrame(animationFrameId);
            } else {
                running = true;
                autoScroll();
            }
        });
    }
});

function greetUser() {
    const name = prompt("Please enter your name:");
    if (name) {
        const welcomeMessage = document.getElementById("username");
        welcomeMessage.textContent = name;
    } else {
        alert("Name cannot be empty. Please try again.");
        greetUser(); // Prompt again if name is empty
    }
}

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("message").value;

    if (!name) {
        alert("Name is required.");
        return false;
    }
    if (!email) {
        alert("Email is required.");
        return false;
    }
    // Simple email regex validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
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
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("message").value;

    const table = document.getElementById("message-table").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).outerHTML = `<td data-label="Name">${name}</td>`;
    newRow.insertCell(1).outerHTML = `<td data-label="Email">${email}</td>`;
    newRow.insertCell(2).outerHTML = `<td data-label="Gender">${gender}</td>`;
    newRow.insertCell(3).outerHTML = `<td data-label="Message">${message}</td>`;
}

