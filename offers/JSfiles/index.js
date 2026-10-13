 function bookStay() {
    clarity('set', 'toBook', 'room');
    const stayUrl = "https://www.secure-booking-engine.com/accounts/q_LZwywOSu8NhIiOn65JAA/properties/bo4wQMRhdj27mNn4Jkplhg/booking-engine/web/source/4wsctBw6Oq6j-g9XuxeRzQ/cart/AyQkrEsYJ_opvqcNHWLjSw/#/search";
    window.open(stayUrl, "_blank"); // Redirect to the stay booking URL
}
  
  // Function to redirect to the booking URL for day out
function bookDayOut() {
    clarity('set', 'toBook', 'dayout');
    const dayOutUrl = "https://rashiecotourism.com/bookings/?resort=shilhaandara";
    
    window.open(dayOutUrl, "_blank"); // Redirect to the day out booking URL
}

// Function to get query parameter value by name
function getQueryParam(paramName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
}

// Function to update phone numbers dynamically
function updatePhoneNumbers() {
  const id = getQueryParam("s");

  // Default phone numbers
  let phoneNumber1 = "+919886787039";
  let whatsAppNumber = "+919886787039";
  // Update phone numbers based on the 'id' parameter
  switch (id) {
          case "3":
          phoneNumber1 = "+919035070341";
          whatsAppNumber = "+919035070340";
          break;
          case "11":
          phoneNumber1 = "+919108234265";
          whatsAppNumber = "+919035070340";
          break;
          case "19":
          phoneNumber1 = "+919035079544";
          whatsAppNumber = "+919035070340";
          break;
          case "72":
          phoneNumber1 = "+919035079544";
          whatsAppNumber = "+919035070340";
          break;
          case "73":
          phoneNumber1 = "+919035079544";
          whatsAppNumber = "+919035070340";
          break; 
          case "74":
          phoneNumber1 = "+919035079544";
          whatsAppNumber = "+919035070340";
          break;
          case "75":
          phoneNumber1 = "+919035079830";
          whatsAppNumber = "+919035070340";
          break;
          case "76":
          phoneNumber1 = "+919035079095";
          whatsAppNumber = "+919035070340";
          break;
          case "78":
          phoneNumber1 = "+919880478368";
          whatsAppNumber = "+919035070340";
          break;
          case "81":
          phoneNumber1 = "+919035079830";
          whatsAppNumber = "+919035070340";
          break; 
          case "93":
            phoneNumber1 = "+919035079544";
            whatsappNumber = "+919035070340";
            break;
          case "95":
            phoneNumber1 = "+919035079830";
            whatsappNumber = "+919035070340";
            break;   
          case "97":
            phoneNumber1 = "+919035070345";
            whatsappNumber = "+919035070340";
            break;      
          default:
          // Keep default phone numbers if no match
          break;
  }

  // Update Contact.html elements
  const contactLinks = document.querySelectorAll(".Contact-details-1 a");

  if (contactLinks.length >= 1) {
      contactLinks[0].setAttribute("href", `tel:${phoneNumber1}`);
      contactLinks[0].textContent = formatPhoneNumber(phoneNumber1);
  }

  // Update Hero.html telephone link
  const heroTelephoneLink = document.querySelector(".hero-enquiry-sub1 a");

  if (heroTelephoneLink) {
      heroTelephoneLink.setAttribute("href", `tel:${phoneNumber1}`);
  }

  // Update Hero.html WhatsApp link
  const heroWhatsappLink = document.querySelector(".hero-enquiry-sub2 a");

  if (heroWhatsappLink) {
      heroWhatsappLink.setAttribute(
          "href",
          `https://wa.me/${whatsAppNumber.replace(/\D/g, "")}?text=Hi%20Iam%20contacting%20from%20Shilhaandra%20website.`
      );
  }

  // Update Events-contact-Us elements
  const eventsContactLinks = document.querySelectorAll(".Events-contact-Us a");

  if (eventsContactLinks.length >= 1) {
      eventsContactLinks[0].setAttribute("href", `tel:${phoneNumber1}`);
      eventsContactLinks[0].textContent = formatPhoneNumber(phoneNumber1);
  }

  document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('learnmore-button-highlighter')) {
  
      setTimeout(() => {
        const serenityPhoneElement = document.querySelector(".serenity-heaven-phone");  
        if (serenityPhoneElement && typeof phoneNumber1 !== "undefined") {
          serenityPhoneElement.textContent = `Phone: ${formatPhoneNumber(phoneNumber1)}`;
        }
      }, 50);
    }
  });  

  // Update Footer-reservation-section phone links
  const footerPhoneLinks = document.querySelectorAll(".Footer-reservation-section .Footer-phone");

  if (footerPhoneLinks.length >= 1) {
      footerPhoneLinks[0].setAttribute("href", `tel:${phoneNumber1}`);
      footerPhoneLinks[0].textContent = formatPhoneNumber(phoneNumber1);
  }

  const heroPhoneNumberElement = document.querySelector(".hero-phone-number a");
  if (heroPhoneNumberElement) {
    heroPhoneNumberElement.setAttribute("href", `tel:${phoneNumber1}`);
    
    const phoneNumberSpan = heroPhoneNumberElement.querySelector(".hero-phone-number-span");
    if (phoneNumberSpan) {
      phoneNumberSpan.textContent = formatPhoneNumber(phoneNumber1);
    }
  }

  const observer2 = new MutationObserver((mutationsList, observer) => {
    const activePopup = document.querySelector(".PopUpContainer-wrapper");
  
    if (activePopup) {
        const computedStyle = window.getComputedStyle(activePopup);
        
        if (computedStyle.display === "flex") {
            observer.disconnect(); // ❌ Stop infinite loop
            updateReservationText(phoneNumber1); // 🔄 Use correct phone number dynamically
            observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["style", "class"] });
        }
    }
  });
  
  // Start observing changes in the document
  observer2.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["style", "class"] });

}

function updateReservationText(phoneNumber1) {
  const activePopup = document.querySelector(".PopUpContainer-wrapper");

  if (!activePopup) {
      console.error("No active popup found.");
      return;
  }

  const popupHeader = activePopup.querySelector(".PopUpContainer-Content-h1");

  if (!popupHeader) {
      console.error("Popup header not found inside the active popup.");
      return;
  }

  const popupHeaderText = popupHeader.textContent.trim();
  console.log("Popup Header Text:", popupHeaderText);

  const allowedCategories = ["Tent Stay", "Dormitory", "Caravan"];

  if (!allowedCategories.includes(popupHeaderText)) {
      console.log("Reservation text not displayed for:", popupHeaderText);
      return;
  }

  let reservationTextElement = activePopup.querySelector("#caravanreservationtext");

  if (!reservationTextElement) {
      reservationTextElement = document.createElement("p");
      reservationTextElement.id = "caravanreservationtext";
      reservationTextElement.style.fontWeight = "bold";
      reservationTextElement.style.fontSize = "large";
      reservationTextElement.style.fontFamily = "Montserrat";
      reservationTextElement.style.marginTop = "10px";
      reservationTextElement.style.textAlign = "center";

      const popupContent = activePopup.querySelector(".PopUpContainer-Content");
      if (popupContent) {
          popupContent.appendChild(reservationTextElement);
      }
  }

  reservationTextElement.textContent = `Contact ${formatPhoneNumber(phoneNumber1)} for Reservations`;
  console.log("Reservation text updated:", reservationTextElement.textContent);
}

// Function to format phone numbers (optional, for readability)
function formatPhoneNumber(number) {
  const cleanNumber = number.replace(/\D/g, "");
  if (cleanNumber.startsWith("91")) {
      return `${cleanNumber.slice(2, 7)} ${cleanNumber.slice(7)}`;
  }
  return number;
}

 // Make function globally accessible

// Ensure DOM is loaded before executing
document.addEventListener("DOMContentLoaded", () => {
  window.updateReservationText = updateReservationText;
  setTimeout(updatePhoneNumbers, 1000);
});
