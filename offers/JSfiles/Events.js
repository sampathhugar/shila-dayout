const EventsActivities = [
    { 
        name: "Destination Wedding", 
        imageUrl: "../Resource/Events/wedding.jpg", 
        iconUrl: "../Resource/Events/Icons/wedding.png", 
        description: "Plan the perfect destination wedding at an exotic location with all the best amenities."
    },
    { 
        name: "Reception", 
        imageUrl: "../Resource/Events/reception.avif", 
        iconUrl: "../Resource/Events/Icons/reception.png", 
        description: "Host a grand reception event with fun activities like archery and more."
    },
    { 
        name: "Engagement", 
        imageUrl: "../Resource/Events/engagement.jpg", 
        iconUrl: "../Resource/Events/Icons/engagement.png", 
        description: "Celebrate your engagement with a unique fish spa experience."
    },
    { 
        name: "Proposals", 
        imageUrl: "../Resource/Events/proposals.jpg", 
        iconUrl: "../Resource/Events/Icons/proposal.png", 
        description: "Plan the perfect proposal with romantic ideas and activities."
    },
    { 
        name: "Baraat", 
        imageUrl: "../Resource/Events/baraat.jpg", 
        iconUrl: "../Resource/Events/Icons/baraat.png", 
        description: "Celebrate your wedding Baraat in style with quad biking adventures."
    },
    { 
        name: "Pre-Wedding Shoots", 
        imageUrl: "../Resource/Events/prewedding.jpg", 
        iconUrl: "../Resource/Events/Icons/prewedding.png", 
        description: "Capture beautiful moments before the wedding with a stunning pre-wedding shoot."
    },
    { 
        name: "Birthdays", 
        imageUrl: "../Resource/Events/birthday.avif", 
        iconUrl: "../Resource/Events/Icons/birthday.png", 
        description: "Celebrate birthdays with exciting indoor games and fun-filled activities."
    },
    { 
        name: "Bachelorette Party", 
        imageUrl: "../Resource/Events/bachelorparty.jpg", 
        iconUrl: "../Resource/Events/Icons/bachelorparty.png", 
        description: "Throw the ultimate bachelorette party with outdoor games and thrilling experiences."
    },
    { 
        name: "Candlelight Dinners", 
        imageUrl: "../Resource/Events/candlelight.avif", 
        iconUrl: "../Resource/Events/Icons/candlelightdinner.png", 
        description: "Enjoy a romantic candlelight dinner with a touch of adventure like earthquake walk."
    },
    { 
        name: "Anniversary Celebrations", 
        imageUrl: "../Resource/Events/anniversary.avif", 
        iconUrl: "../Resource/Events/Icons/anniversary.png", 
        description: "Celebrate anniversaries with heartwarming moments and fun activities."
    },
    { 
        name: "Baby Showers", 
        imageUrl: "../Resource/Events/babyshower.jpg", 
        iconUrl: "../Resource/Events/Icons/babyshower.png", 
        description: "Host a memorable baby shower with unique mist dance activities."
    },
    { 
        name: "Haldi-Sangeet-Mehandi", 
        imageUrl: "../Resource/Events/haldi.jpg", 
        iconUrl: "../Resource/Events/Icons/haldi.png", 
        description: "Get ready for the wedding with fun Haldi, Sangeet, and Mehandi ceremonies!"
    },
    { 
        name: "Resedential Conferences", 
        imageUrl: "../Resource/Events/conference.jpg", 
        iconUrl: "../Resource/Events/Icons/conference.png", 
        description: "Host corporate or residential conferences in serene locations with team-building activities."
    },
    { 
        name: "Corporate Team Outings", 
        imageUrl: "../Resource/Events/teamouting.jpg", 
        iconUrl: "../Resource/Events/Icons/team.png", 
        description: "Organize exciting corporate team outings with adventure activities like tyre walking."
    }
];

let EventsCurrentIndex = 0;
let EventsInterval;

const EventsImageElement = document.getElementById("Event-image");
const EventsButtonsContainer = document.getElementById("Event-buttons");
const EventHeadingElement = document.querySelector(".Event-headings");
// const EventDescriptionElement = document.querySelector(".Event-description");

// Function to update the active event and image
// Function to update the active event and image
function EventsUpdateActivity(index) {
    // Update image with lazy loading
    EventsImageElement.src = EventsActivities[index].imageUrl;
    EventsImageElement.alt = EventsActivities[index].name;
    EventsImageElement.loading = "lazy"; // Ensure lazy loading for the active image

    // Update heading and description
    EventHeadingElement.textContent = EventsActivities[index].name;
    // EventDescriptionElement.textContent = EventsActivities[index].description;

    // Update active button
    document.querySelectorAll(".Event-button").forEach((button, idx) => {
        button.classList.toggle("active", idx === index);
    });

    // Update index
    EventsCurrentIndex = index;
}

// Function to create buttons dynamically
function EventsCreateButtons() {
    EventsActivities.forEach((event, index) => {
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "Event-button-container";

        // Add "Coming Soon" span if the event is marked as such
        if (event.isComingSoon) {
            const comingSoonSpan = document.createElement("span");
            comingSoonSpan.className = "coming-soon";
            comingSoonSpan.textContent = "Coming Soon!";
            buttonContainer.appendChild(comingSoonSpan);
        }

        const button = document.createElement("button");
        button.className = "Event-button";
        button.innerHTML = `
            <span>${event.name}</span>
            <img src="${event.iconUrl}" class="Event-icon" loading="lazy">
        `; // Lazy loading added here

        // Only allow button interaction if not "Coming Soon"
        button.onclick = () => {
            clearInterval(EventsInterval); // Stop auto-slideshow
            EventsUpdateActivity(index);
            EventsStartSlideshow(); // Restart the slideshow from the current index
        };

        buttonContainer.appendChild(button);
        EventsButtonsContainer.appendChild(buttonContainer);
    });
}


// Function to start the slideshow
function EventsStartSlideshow() {
    EventsInterval = setInterval(() => {
        const nextIndex = (EventsCurrentIndex + 1) % EventsActivities.length;
        EventsUpdateActivity(nextIndex);
    }, 3000);
}

// Initialize the component
function EventsInit() {
    EventsCreateButtons();
    EventsUpdateActivity(EventsCurrentIndex);
    EventsStartSlideshow();
}

// Run the initialization function
EventsInit();

// Add an event listener to the "Enquire" button
const eventsEnquireBtn = document.getElementById("events-enquire-btn");

eventsEnquireBtn.addEventListener("click", () => {
    // Select the dropdown (subject) element
    const subjectSelect = document.getElementById("subject");
    
    // Set the dropdown value to "events"
    subjectSelect.value = "events";
    
    // Navigate to the contact section
    window.location.href = "#contact";
});
