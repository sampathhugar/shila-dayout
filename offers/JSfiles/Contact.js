document.getElementById("submitButton").addEventListener("click", () => {

    gtag_leadForm_conversion(); // Google Ads Lead Conversion
    
    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    window.clarity('event', 'form-'+subject); // Clarity event

    // Validate that all fields are filled
    if (!name || !email || !number || !subject || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Validate phone number (must be exactly 10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(number)) {
        alert("The phone number must be exactly 10 digits.");
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Extract the `id` parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("s") || 69;

    // Create JSON object
    const contactData = {
        name: name,
        email: email,
        number: number,
        subject: subject,
        message: message,
        source: id,
    };

    // Send JSON to the specified link
    fetch("https://console.retl.in/website/web_ep.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
    })
        .then((data) => {
            alert("Your message has been sent successfully!");
            // Optionally, reset the form fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("number").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
        })
        .catch((error) => {
            console.error("An error occurred:", error);
            alert(`An error occurred: ${error.message}`);
        });
});
