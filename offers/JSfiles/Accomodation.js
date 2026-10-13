let swiperCards = new Swiper(".acc-card__content", {
  loop: true,
  spaceBetween: 10,
  grabCursor: true,

  autoplay: {
    delay: 2000, // 2 seconds
    disableOnInteraction: false,
  },

  breakpoints: {
    800: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 2.5,
    },
    1150: {
      slidesPerView: 3,
    },
  },
});

const prevButton = document.querySelector(".acc-left-click-button");
const nextButton = document.querySelector(".acc-right-click-button");

if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => {
    swiperCards.slidePrev();
  });

  nextButton.addEventListener("click", () => {
    swiperCards.slideNext();
  });
} else {
  console.error("Navigation buttons not found!");
}


  const popupWrapper = document.querySelector('.PopUpContainer-wrapper');
  const popupContent = document.querySelector('.PopUpContainer-Content');
  const closeButton = document.querySelector('.close-button');
  const collage = document.querySelector('.PopUpContainer-Collage');

  // Room data
  const roomDetails = {
      bugfix:{},
      soumithre: {
          title: "Soumithre Pool",
          description: "Take a dip and never come out. Each of our tastefully designed and luxurious pool rooms has access to a private pool and a cozy sit-out. Merge the past with the present as you bathe under the shadow of rustling trees, with majestic granite hills serving as the perfect backdrop. Complete privacy is a hallmark of all our pool rooms, making them ideal for private honeymooners, families, and larger groups looking for relaxation.",
          features: [
              "Private Pool", "Welcome Drink", "High-Speed Internet",
              "Television", "Air-conditioner", "Minibar",
              "Meal Package Options", 
              "Complimentary Games",
              "Work Desk", "Tea & Coffee Maker","Electronic Safe"
          ],
          images: [
              "../Resource/Soumithre/sowmithre1.avif", "../Resource/Soumithre/soumithre6.avif",
              "../Resource/Soumithre/sowmithre3.avif", "../Resource/Soumithre/sowmithre4.avif",
              "../Resource/Soumithre/sowmithre5.avif", "../Resource/Soumithre/soumithre7.avif",
              "../Resource/Soumithre/sowmithre2.avif"
          ],
          // icons: ["../Resource/jacuzzi.avif", "../Resource/tv.png" , "../Resource/wifi.png"]
          icons: []
      },
      sowgandhikaexecutive: {
          title: "Sougandhika Executive",
          description: "Get ready to share a moment of pure bliss in our rooms which blend the finest in luxury and comfort. Enjoy the comforts of a king-size bed, the luxuriously appointed décor, and an ultra-modern bathroom for the ultimate relaxation. ",
          features: [
              "Welcome Drink", "High-Speed Internet",
              "Television", "Air-conditioner", "Minibar",
              "Meal Package Options", "Complimentary Games",
              "Work Desk", "Tea & Coffee Maker","Electronic Safe"
          ],
          images: [
              "../Resource/SougandhikaExecutive/sougandhikaExecutive1.jpg","../Resource/SougandhikaExecutive/sougandhikaExecutive2.jpg",
              "../Resource/SougandhikaExecutive/sougandhikaExecutive3.jpg","../Resource/SougandhikaExecutive/sougandhikaExecutive4.jpg",
              "../Resource/SougandhikaExecutive/sougandhikaExecutive1.jpg","../Resource/SougandhikaExecutive/sougandhikaExecutive2.jpg",
              "../Resource/SougandhikaExecutive/sougandhikaExecutive3.jpg"
          ],
          // icons: ["../Resource/jacuzzi.avif", "../Resource/tv.png" , "../Resource/wifi.png"]
          icons: []
      },
      sowgandhika: {
          title: "Sougandhika",
          description: "Get ready to share a moment of pure bliss in our Jacuzzi rooms which blend the finest in luxury and comfort. Enjoy the comforts of a king-size bed, the luxuriously appointed décor, and an ultra-modern bathroom with a private heated jacuzzi for the ultimate relaxation. ",
          features: [
              "Private Jacuzzi", "Welcome Drink", "High-Speed Internet",
              "Television", "Air-conditioner", "Minibar",
              "Meal Package Options", "Complimentary Games",
              "Work Desk", "Tea & Coffee Maker","Electronic Safe"
          ],
          images: [
              "../Resource/Sowgandhika/sowgandhika1.avif", "../Resource/Sowgandhika/sowgandhika2.avif",
              "../Resource/Sowgandhika/sowgandhika3.avif", "../Resource/Sowgandhika/sowgandhika4.avif",
              "../Resource/Sowgandhika/sowgandhika5.avif", "../Resource/Sowgandhika/sowgandhika6.avif",
              "../Resource/Sowgandhika/sowgandhika7.avif"
          ],
          // icons: ["../Resource/jacuzzi.avif", "../Resource/tv.png" , "../Resource/wifi.png"]
          icons: []
      },
      tentstay: {
        title: "Tent Stay",
        description: "Get away from your daily hustle and spend a night under a sky full of stars. Soak in the heavenly view as the gentle murmur of the night and the whistling granite hills lull you into a peaceful sleep. Our tent stays are the best way to embrace the great outdoors and spend some quality time with your loved ones which remain etched in memory forever. **Please note that all reservations for our tent stay are taken through calls.**",
        features: [
            "Private Tent","Welcome Drink",
            "Complimentary Games", "Meal Package Options",
        ],
        images: [
            "../Resource/Tentstay/Tent.jpg", "../Resource/Tentstay/Tent1.jpg",
            "../Resource/Tentstay/Tent2.jpg", "../Resource/Tentstay/Tent3.jpg",
            "../Resource/Tentstay/Tent4.jpg", "../Resource/Tentstay/Tent6.webp", 
            "../Resource/Tentstay/tentstay4.avif"
        ],
        // icons: ["../Resource/tent.png"]
        icons: []
    },
    luxurysuite: {
      title: "Soumithre Standard",
      description: "Our Standard rooms are luxurious, spacious, and stunning. Make the most of your day at Shilhaandara by enjoying the activities we have in store, and then kick off and relax while looking out at the wilderness.",
      features: [
            "King-Size Bed", "Welcome Drink", "High-Speed Internet",
            "Television", "Air-conditioner", "Minibar","Meal Package Options", 
            "Complimentary Games",
            "Work Desk", "Tea & Coffee Maker","Electronic Safe"
      ],
      images: [
          "../Resource/Luxurysuite/luxury1.avif", "../Resource/Luxurysuite/luxury2.avif",
          "../Resource/Luxurysuite/luxury3.avif", "../Resource/Luxurysuite/luxury4.avif",
          "../Resource/Luxurysuite/luxury5.avif", "../Resource/Luxurysuite/luxury6.avif",
          "../Resource/Luxurysuite/luxury3.avif"
      ],
      // icons: ["../Resource/tv.png" , "../Resource/wifi.png", "../Resource/fridge.png"]
      icons: []
  },
  caravan: {
    title: "Caravan",
    description: "Our Caravan will escort you from your door-step and park at the camp-site at Shilhaandara resort. A day full of adventure awaits you which includes thrill-inducing activities such as adventurous Zipline, Quad Bike among others. Stay back at the Caravan and enjoy the thrill of camping in the middle of rocks. Our Caravan will safely drop you back to your adobe after relishing a tasty breakfast at the resort.",
    features: [
          "Caravan Occupancy: 4 Adults + 2 Kids (6-11yrs) or 4 Adults + 1 Adult.",
          "Resort check-in and check-out timings are as follows: 12pm on the start date upto 12pm on the end date.",
          "ONE complimentary Breakfast included in the package. Guests are welcome to carry their own food or cook in the vehicle kitchenette. Lunch, Hi-Tea & Dinner can be availed at the resort at the additional cost.",
          "Guests are entitled to all complimentary indoor & outdoor games at Shilhaandara resort. Other adventure activities can be availed at extra cost. Swimming attire i.e. Nylon clothes are mandatory for the usage of swimming pool.",
          "If the Guest wishes to explore any places around Ramanagara, extra fuel charges will be computed at 20 INR per KM."
    ],
    images: [
        "../Resource/Caravan/caravan1.avif", "../Resource/Caravan/caravan2.avif",
        "../Resource/Caravan/caravan3.avif", "../Resource/Caravan/caravan4.avif",
        "../Resource/Caravan/caravan5.avif", "../Resource/Caravan/caravan3.avif",
        "../Resource/Caravan/caravan6.avif"
    ],
    // icons: ["../Resource/caravan.png","../Resource/breakfast.png","../Resource/game.png"]
    icons: []
},
  chariot: {
    title: "Chariot",
    description: "It is a cozy room that looks like a Hampi Chariot from the outside, suitable for a family of three or a couple's stay. It is intricately designed to fit in a queen-sized bed, a bunk bed for a kid, a study area, and a bathroom.",
    features: [
          "Queen-Size Bed", "Welcome Drink",
          "Television" , "Minibar", "Meal Package Options", 
          "Complimentary Games",
          "Work Desk", "Tea & Coffee Maker", "Air-conditioner",
          "Electronic Safe"
    ],
    images: [
        "../Resource/chariot/chariot1.avif", "../Resource/chariot/chariot2.avif",
        "../Resource/chariot/chariot3.avif", "../Resource/chariot/chariot4.avif",
        "../Resource/chariot/chariot5.avif", "../Resource/chariot/chariot6.avif",
        "../Resource/chariot/chariot7.avif"
    ],
    // icons: ["../Resource/chariot.png","../Resource/game.png","../Resource/wifi.png"]
    icons: []
},
dormitory: {
  title: "Dormitory",
  description: "Our dormitory is ideal for visitors who are arriving in a large group and want a clean, fresh place with all the necessities available.** Please note that all reservations for our Dormitory stay are taken through calls. Contact us for more information. **",
  features: [
        "15 pax capacity", "Welcome Drink", "High-Speed Internet",
        "Television", "Air-conditioner", "Complimentary Games",
        "Meal Package Options","Electronic Safe"
  ],
  images: [
      "../Resource/dormitory/dormitory1.avif", "../Resource/dormitory/dormitory2.avif",
      "../Resource/dormitory/dormitory3.avif", "../Resource/dormitory/dormitory4.avif",
      "../Resource/dormitory/dormitory5.avif", "../Resource/dormitory/dormitory6.avif",
      "../Resource/dormitory/dormitory7.avif"
  ],
  // icons: ["../Resource/tv.png" , "../Resource/wifi.png", "../Resource/welcome-drink.png"]
  icons: []
},
  honeymoon: {
    title: "Honey Moon Package",
    description: "Take a dip and never come out. Each of our tastefully-designed and luxurious pool rooms have access to a private pool along with a cosy sit out. Merge the past with the present as you bathe under the shadow of rustling trees with majestic granite hills serving as the perfect backdrop. Complete privacy is a hallmark of all our pool rooms, making them ideal for private honeymooners, families, and larger groups looking for relaxation.",
    features: [
        "Deluxe Rooms", "Free Wi-Fi", "24/7 Room Service",
        "Spacious Interiors", "Flat-screen TV", "Minibar",
        "Room Service", "Access to Gym", 
        "Complimentary Breakfast", "Exclusive Chef’s Menu",
    ],
    images: [
        "../Resource/Tentstay/tentstay1.avif", "../Resource/Tentstay/tentstay2.avif",
        "../Resource/Tentstay/tentstay3.avif", "../Resource/Tentstay/tentstay4.avif",
        "../Resource/Tentstay/tentstay5.avif", "../Resource/Tentstay/tentstay6.avif", "../Resource/Tentstay/tentstay7.avif"
    ],
    // icons: ["../Resource/jacuzzi.avif", "../Resource/jacuzzi.avif"]
    icons: []
},
family: {
  title: "Family",
  description: "Take a dip and never come out. Each of our tastefully-designed and luxurious pool rooms have access to a private pool along with a cosy sit out. Merge the past with the present as you bathe under the shadow of rustling trees with majestic granite hills serving as the perfect backdrop. Complete privacy is a hallmark of all our pool rooms, making them ideal for private honeymooners, families, and larger groups looking for relaxation.",
  features: [
      "Deluxe Rooms", "Free Wi-Fi", "24/7 Room Service",
      "Spacious Interiors", "Flat-screen TV", "Minibar",
      "Room Service", "Access to Gym", 
      "Complimentary Breakfast", "Exclusive Chef’s Menu",
      "Meeting Room Access", "Electronic Safe"
  ],
  images: [
      "../Resource/Tentstay/tentstay1.avif", "../Resource/Tentstay/tentstay2.avif",
      "../Resource/Tentstay/tentstay3.avif", "../Resource/Tentstay/tentstay4.avif",
      "../Resource/Tentstay/tentstay5.avif", "../Resource/Tentstay/tentstay6.avif", "../Resource/Tentstay/tentstay7.avif"
  ],
  // icons: ["../Resource/jacuzzi.avif", "../Resource/jacuzzi.avif", "../Resource/jacuzzi.avif"]
  icons: []
},
friends: {
  title: "Friends",
  description: "Take a dip and never come out. Each of our tastefully-designed and luxurious pool rooms have access to a private pool along with a cosy sit out. Merge the past with the present as you bathe under the shadow of rustling trees with majestic granite hills serving as the perfect backdrop. Complete privacy is a hallmark of all our pool rooms, making them ideal for private honeymooners, families, and larger groups looking for relaxation.",
  features: [
      "Deluxe Rooms", "Free Wi-Fi", "24/7 Room Service",
      "Spacious Interiors", "Flat-screen TV", "Minibar",
      "Room Service", "Access to Gym", 
      "Complimentary Breakfast", "Exclusive Chef’s Menu",
      "Meeting Room Access", "Electronic Safe"
  ],
  images: [
      "../Resource/Tentstay/tentstay1.avif", "../Resource/Tentstay/tentstay2.avif",
      "../Resource/Tentstay/tentstay3.avif", "../Resource/Tentstay/tentstay4.avif",
      "../Resource/Tentstay/tentstay5.avif", "../Resource/Tentstay/tentstay6.avif", "../Resource/Tentstay/tentstay7.avif"
  ],
  // icons: ["../Resource/jacuzzi.avif", "../Resource/jacuzzi.avif", "../Resource/jacuzzi.avif"]
  icons: []
},
  };

  // Global flag to track reservation text addition
let isReservationTextAdded = false;
  
  const showPopup = (roomType) => {
    const room = roomDetails[roomType];
    if (!room) {
        console.error(`Room type "${roomType}" not found!`);
        return;
    }

    const { title, description, features, images, icons } = room;

    const popupContainer = document.querySelector('.PopUpContainer-container');
    if (popupContainer) {
        popupContainer.scrollTop = 0;  // This ensures the popup is scrolled to the top
    }

    // Update title and description
    popupContent.querySelector('.PopUpContainer-Content-h1').textContent = title;
    popupContent.querySelector('.PopUpContainer-Content-p').textContent = description;

    // Update features
    const featureLists = popupContent.querySelectorAll('.features-list ul');
    featureLists[0].innerHTML = features.slice(0, 6).map(f => `<li>${f}</li>`).join('');
    featureLists[1].innerHTML = features.slice(6).map(f => `<li>${f}</li>`).join('');

    // Update icons
    const logosContainer = popupContent.querySelector('.PopUpContainer-logos');
    logosContainer.innerHTML = ''; // Clear existing icons
    if (icons && icons.length > 0) {
        icons.forEach(icon => {
            const logoDiv = document.createElement('div');
            logoDiv.className = 'PopUpContainer-logo';
            logoDiv.style.backgroundImage = `url(${icon})`;
            logosContainer.appendChild(logoDiv);
        });
    }

    // Update collage images
    const collageImages = collage.querySelectorAll('[class*="img"]');
    collageImages.forEach((imgElement, index) => {
        imgElement.style.backgroundImage = images[index] ? `url(${images[index]})` : '';
    });

    // Update Swiper images dynamically
    const swiperWrapper = document.querySelector('.swiper-wrapper.pop-wrapper');
    swiperWrapper.innerHTML = ''; // Clear existing slides

    images.forEach(image => {
        const slide = document.createElement('article');
        slide.className = 'swiper-slide pop-slide';
        slide.innerHTML = `
            <div class="acc-card__data pop-swiper-img" 
                 style="background-image: url('${image}'); 
                        background-size: cover; 
                        background-position: center; 
                        background-repeat: no-repeat;"
                        onclick="enlargeImage(this)">
            </div>
        `;
        swiperWrapper.appendChild(slide);
    });

    // Reinitialize Swiper
    setTimeout(() => {
        if (window.popSwiper) {
            window.popSwiper.destroy(true, true); // Destroy previous swiper instance
        }
        window.popSwiper = new Swiper('.pop-card__content', {
            loop: true,
            spaceBetween: 10,
            grabCursor: true,
            autoplay: {
                delay: 2000, // 2 seconds
            },
            slidesPerView: 1
        });
    }, 1000); // Wait a moment for the layout to settle


    if (roomType === 'caravan' || roomType === 'dormitory' || roomType === 'tentstay') {  
      // Ensure popupContent is defined
      if (!popupContent) {
          console.error('popupContent is not defined or does not contain any elements.');
          return;
      }
  
      // Locate the button with the class 'Book-your-day-ou-btn pop-up-button'
      const bookButton = popupContent.querySelector('.Book-your-day-ou-btn.pop-up-button');
      if (bookButton) {
          console.log('Book Your Stay button found. Removing it.');
          bookButton.remove();
      } else {
          console.warn('Book Your Stay button not found. Verify the selector.');
      }
  
      // Check if reservation text has already been added
      if (!isReservationTextAdded) {
          const reservationText = document.createElement('p');
          reservationText.id = 'caravanreservationtext'; // Assign an ID for targeted removal
          reservationText.textContent = "Contact +91 8494949186 | 9886787039 for Reservations";
  
          // Apply the specified styles
          reservationText.style.fontWeight = 'bold';
          reservationText.style.fontSize = 'large'; // Text size: large
          reservationText.style.fontFamily = 'Montserrat'; // Font family: inherit
          reservationText.style.marginTop = '10px'; // Optional: Margin top for spacing
          reservationText.style.textAlign = 'center';
  
          // Append the reservation text to the popupContent
          // popupContent.appendChild(reservationText);
          console.log('Reservation text added to the popup content.');
  
          // Set the flag to true
          isReservationTextAdded = true;
      }
  } else if (isReservationTextAdded) {
      // If not caravan and reservation text has been added, remove it
      const reservationText = document.getElementById('caravanreservationtext'); // Use the ID to find the text
      if (reservationText) {
          console.log('Removing reservation text.');
          reservationText.remove();
      }
  
      // Re-add the "Book Your Stay" button if it was removed
      if (!popupContent.querySelector('.Book-your-day-ou-btn.pop-up-button')) {
          const bookButton = document.createElement('button');
          bookButton.className = 'Book-your-day-ou-btn pop-up-button';
          bookButton.textContent = 'Book Your Stay';
  
          // Optionally add event listeners to the button if needed
          bookButton.addEventListener('click', () => {
              console.log('Book Your Stay button clicked.');
              // Add your button click logic here
          });
  
          // Append the button to the popupContent
          popupContent.appendChild(bookButton);
          console.log('Book Your Stay button re-added to the popup content.');
      }
  
      // Reset the flag
      isReservationTextAdded = false;
  }
  
  

  
    // Show the popup
    popupWrapper.style.display = 'flex';
    popupWrapper.classList.remove('exit'); // Remove exit animation class
};

  
  // Function to close the popup with animation
  const closePopup = () => {
    popupWrapper.classList.add('exit'); // Add the exit class for animation

    // Hide the popup after the animation completes
    const popupContainer = document.querySelector('.PopUpContainer-container');
    if (popupContainer) {
        popupContainer.scrollTop = 0;  // This ensures the popup is scrolled to the top
    }

    setTimeout(() => {
        popupWrapper.style.display = 'none';
        popupContent.scrollTop = 0; // Reset scroll position on close
    }, 600); // Match CSS animation duration
};

  
  // Add click listeners to buttons
  document.querySelectorAll('.know-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const roomType = button.getAttribute('data-room');
  
        showPopup(roomType);
    });
  });
  document.querySelectorAll('.experiences-know-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const roomType = button.getAttribute('data-room');
  
        showPopup(roomType);
    });
  });
  
  // Lightbox functionality
  const enlargeImage = (element) => {
    const imgUrl = window.getComputedStyle(element).backgroundImage;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
  
    if (lightbox && lightboxImg) {
        lightboxImg.src = imgUrl.replace('url("', '').replace('")', '');
        lightbox.style.display = 'flex';
  
    }
  };
  
  const closeLightbox = () => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.style.display = 'none';
  };
  
  // Add event listener to close the popup when clicked outside
  popupWrapper.addEventListener('click', (event) => {
    // Check if the click target is the popupWrapper itself (outside the content area)
    if (event.target === popupWrapper) {
      closePopup();

    }
  });
  
  // Close popup on button click
  closeButton.addEventListener('click', closePopup);
  
  // Show the popup
  function showPricePopup() {
    const popup = document.getElementById('price-popup');
    popup.classList.remove('hidden');
  
  
    // Add a timeout before attaching the outside click listener
    setTimeout(() => {
      document.addEventListener('click', outsideClickHandler);
    
    }, 100); // Adjust this to match your animation duration
  }
  
  // Hide the popup
  function hidePricePopup() {
    const pricepopupContainerscroller = document.querySelector('.pricepopup-content');
    if (pricepopupContainerscroller) {
        pricepopupContainerscroller.scrollTop = 0;  // This ensures the popup is scrolled to the top
    }
    
    const popup = document.getElementById('price-popup');
    popup.classList.add('hidden');
  
  
    // Remove click listener for outside click
    document.removeEventListener('click', outsideClickHandler);
  }
  
  // Outside click handler
  function outsideClickHandler(event) {
    const popup = document.getElementById('price-popup');
    const popupContent = popup.querySelector('.pricepopup-content');
  
    if (!popupContent.contains(event.target)) {
      hidePricePopup();
    }
  }
  