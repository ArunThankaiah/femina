const allYear = new Date().getFullYear();
        document.getElementById('year').textContent = allYear;

        // menu
        // Toggle the navlist when the menu icon is clicked
document.getElementById("menu-icon").addEventListener("click", function() {
    const navlist = document.getElementById("navlist");
    navlist.classList.toggle("active"); // Toggle the active class
});

// Close the navlist when clicking outside of it or on an anchor tag
document.addEventListener("click", function(event) {
    const navlist = document.getElementById("navlist");
    const menuIcon = document.getElementById("menu-icon");
    const anchorTags = navlist.getElementsByTagName('a'); // Get all anchor tags

    // Check if the click is outside the navlist and menu icon
    if (!navlist.contains(event.target) && !menuIcon.contains(event.target)) {
        navlist.classList.remove("active");
    }

    // Close the navlist when clicking on an anchor tag
    for (let anchor of anchorTags) {
        anchor.addEventListener('click', function() {
            navlist.classList.remove("active");
        });
    }
});

// Form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate form inputs
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const phone = this.phone.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !phone || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // If validation passes, send email
    sendEmail(name, email, phone, message);
});

function sendEmail(name, email, phone, message) {
    // Create an email object
    const emailData = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    // Send a request to your server-side script to send the email
    fetch("send-email.php", { // Replace with your server-side script
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(emailData)
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset(); // Reset form after sending
        } else {
            alert("Failed to send message.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while sending the message.");
    });
}
