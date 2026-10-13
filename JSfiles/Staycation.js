document.getElementById("Staycation-enquire-button").addEventListener("click", function () {
    // Set the value of the dropdown
    const subjectDropdown = document.getElementById("subject");
    subjectDropdown.value = "staycation"; // Set the value to "staycation"

    // Scroll to the contact section
    const contactSection = document.querySelector(".Contact-input-container"); // Update with the correct section selector
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
});
