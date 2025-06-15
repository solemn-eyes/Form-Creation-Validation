document.addEventListener('DOMContentLoaded', function() {
    // Select the form and feedback div
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Stop form from submitting to the server

        // Retrieval and trimming input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validation flags and messages
        let isValid = true;
        const messages = [];

        // Username validation
        if (username.length < 3 || username.length > 20) {
            isValid = false;
            messages.push("Username must be between 3 and 20 characters.");
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Displaying feedback
        if (isValid) {
            feedbackDiv.style.display = "block";
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; 
        }else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; 
        }
}
);
