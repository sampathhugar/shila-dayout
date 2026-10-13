const heroVideo = document.getElementById('heroVideo');
const videoPlaceholder = document.querySelector('.video-placeholder');
const loaderWrapper = document.getElementById('loaderWrapper');
// Ensure body scrolling is disabled while loader and placeholder are displayed
document.body.style.overflow = 'hidden';

// Event snippet for Book Stay Button conversion page
// In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button.
function gtag_roomEnquiry_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-694875190/Wx8UCMii6ZQaELboq8sC',
      'event_callback': callback
  });
  return false;
}

// Event snippet for Book Day Out Button conversion page
// In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button.

function gtag_dayoutEnquiry_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-694875190/KgBLCLH69JQaELboq8sC',
      'event_callback': callback
  });
  return false;
}


// Function to check if the video is already buffered
function isVideoBufferedBeyondThreshold(video, threshold) {
  const buffered = video.buffered;

  if (buffered.length > 0) {
      const bufferedEnd = buffered.end(buffered.length - 1);
      const duration = video.duration;

      return bufferedEnd / duration >= threshold; // Check if the buffered part meets the threshold
  }
  return false;
}

// Function to load and play the video
function loadVideo() {
  console.log('Starting to load the video.');

  // Dynamically add the video source
  const videoSource = document.createElement('source');
  videoSource.src = '../Resource/ResortHeroVedio.mp4';
  videoSource.type = 'video/mp4';

  heroVideo.appendChild(videoSource);
  heroVideo.style.display = 'block'; // Display the video

  heroVideo.load();
  console.log('Video source added. Waiting for threshold buffering.');

  // Monitor video buffering
  heroVideo.addEventListener('progress', function onProgress() {
      const buffered = heroVideo.buffered;

      if (buffered.length > 0) {
          const bufferedEnd = buffered.end(buffered.length - 1);
          const duration = heroVideo.duration;

          if (bufferedEnd / duration >= 0.2) { // Check if 20% is buffered
              console.log('20% of the video is buffered. Starting playback.');
              heroVideo.play(); // Play the video
              videoPlaceholder.style.display = 'none'; // Hide the placeholder
              heroVideo.removeEventListener('progress', onProgress); // Remove the event listener
          }
      }
  });

  // Re-enable body scrolling once the video starts playing
heroVideo.onplay = () => {
      document.body.style.overflow = '';
  };
}

// Function to handle the display sequence
function handleDisplaySequence() {
  console.log('Checking if the video is already buffered.');

  // Check if the video is already buffered beyond 20%
  if (isVideoBufferedBeyondThreshold(heroVideo, 0.2)) {
      console.log('Video is already buffered beyond 20%. Skipping loader and placeholder.');
      heroVideo.play(); // Start playback immediately
      videoPlaceholder.style.display = 'none'; // Hide the placeholder
      document.body.style.overflow = ''; // Re-enable body scrolling
  } else {
      console.log('Loader is visible for 3 seconds.');

      // Display the loader for 3 seconds
      setTimeout(() => {
          loaderWrapper.classList.add('hidden'); // Hide loader with fade-out animation
          console.log('Loader hidden. Placeholder is now visible.');

          // Display the video placeholder for 2 seconds
          videoPlaceholder.style.display = 'block';

          setTimeout(() => {
              console.log('Placeholder will remain visible until 20% of the video is buffered.');
              loadVideo(); // Start loading the video
          }, 5000); // 2.5 seconds for placeholder
      }, 0); // 5.5 seconds for loader
  }
}

// Start the display sequence
handleDisplaySequence();

toBook = 'dayout';

// Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click', () => {
  const menu = document.getElementById('menu');
  menu.classList.toggle('open');
});

// Toggle Enquiry Sections
function toggleEnquirySections() {
  document.querySelectorAll('.hero-enquiry-sub1, .hero-enquiry-sub2, .hero-enquiry-sub3').forEach(section => {
    section.classList.toggle('show');
  });
}

// Counter Functionality
const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const peopleInput = document.getElementById('people');

decrementBtn.addEventListener('click', () => {
  let value = parseInt(peopleInput.value, 10);
  if (value > 1) {
    peopleInput.value = value - 1;
  }
});

incrementBtn.addEventListener('click', () => {
  let value = parseInt(peopleInput.value, 10);
  peopleInput.value = value + 1;
});

// Toggle Day-Out Functionality
const toggleInput = document.getElementById('day-out-toggle');
toggleInput.checked = false;
toggleInput.addEventListener('change', () => {

});

// Navbar Links Smooth Scroll
document.querySelectorAll('#menu a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Alternating Animation
const textElement = document.getElementById('resortName');
const imageElement = document.getElementById('logoImg');
const heroLogoImage = document.querySelector('.Logo-Img-HEro:not(#logoImg)');
const heroSection = document.querySelector('.Hero-container');

let isTextVisible = true;
const intervalTime = 3000;
let isBelow480 = false;
let intervalId = null;
let isHeroVisible = true;
let isLogoHeroVisible = false;

function toggleVisibility() {
  if (window.innerWidth > 480 && isHeroVisible) {
    if (isTextVisible) {
      textElement.style.opacity = '0';
      setTimeout(() => {
        imageElement.style.display = 'block';
        setTimeout(() => {
          imageElement.style.opacity = '1';
        }, 50);
      }, 500);
    } else {
      imageElement.style.opacity = '0';
      setTimeout(() => {
        textElement.style.opacity = '1';
        imageElement.style.display = 'none';
      }, 300);
    }
    isTextVisible = !isTextVisible;
  } else if (window.innerWidth <= 480) {
    textElement.style.display = 'none';
    if (isLogoHeroVisible) {
      heroLogoImage.style.opacity = '0';
      setTimeout(() => {
        heroLogoImage.style.display = 'none';
        imageElement.style.display = 'block';
        setTimeout(() => {
          imageElement.style.opacity = '1';
        }, 50);
      }, 300);
    } else {
      imageElement.style.opacity = '0';
      setTimeout(() => {
        imageElement.style.display = 'none';
        heroLogoImage.style.display = 'block';
        setTimeout(() => {
          heroLogoImage.style.opacity = '1';
        }, 50);
      }, 300);
    }
    isLogoHeroVisible = !isLogoHeroVisible;
  }
}

// Function to initialize visibility
function initializeVisibility() {
  if (window.innerWidth <= 480) {
    textElement.style.display = 'none';
    imageElement.style.display = 'block';
    imageElement.style.opacity = '1';
    heroLogoImage.style.display = 'none';
    heroLogoImage.style.opacity = '0';
    isBelow480 = true;
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    intervalId = setInterval(toggleVisibility, intervalTime); 
  } else {
    textElement.style.display = 'block';
    imageElement.style.display = 'none';
    imageElement.style.opacity = '0';
    heroLogoImage.style.display = 'block'; 
    heroLogoImage.style.opacity = '1';
    if (isBelow480) {
      textElement.style.opacity = '0';
      setTimeout(() => {
        textElement.style.opacity = '1';
      }, 300);
      isBelow480 = false;
    }
    if (!intervalId && isHeroVisible) {
      intervalId = setInterval(toggleVisibility, intervalTime);
    }
  }
}

function handleHeroVisibility(entries) {
  entries.forEach(entry => {
    if (entry.target === heroSection) {
      if (entry.isIntersecting) {
        isHeroVisible = true;
        if (!intervalId) {
          intervalId = setInterval(toggleVisibility, intervalTime);
        }
      } else {
        isHeroVisible = false;
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
        textElement.style.opacity = '0';
        imageElement.style.opacity = '1';
        imageElement.style.display = 'block';
        if (isLogoHeroVisible) {
          heroLogoImage.style.display = 'block';
          heroLogoImage.style.opacity = '1';
        }
      }
    }
  });
}

if (!window.HeroSwiperCards) {
  window.HeroSwiperCards = new Swiper(".hero-card__content", {
    loop: true,
    spaceBetween: 10,
    grabCursor: true,

    autoplay: {
      delay: 2000, // 2 seconds
      disableOnInteraction: false,
    },

    breakpoints: {
      600: {
        slidesPerView: 1,
      },
      968: {
        slidesPerView: 1,
      },
    },
  });
}

const observer = new IntersectionObserver(handleHeroVisibility, {
  threshold: 0.1
});
observer.observe(heroSection);

initializeVisibility();
window.addEventListener('resize', () => {
  initializeVisibility();
});

function getQueryParam(paramName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
}
const campId = getQueryParam("s");
console.log("source=="+campId)

let bookingUrl = "https://rashiecotourism.com/bookings/?resort=shilhaandara&ccId=" +ccId + "&s="+campId;

// Function to update the URL based on the checkbox state
function updateBookingUrl() {
    const checkbox = document.getElementById("day-out-toggle");
    if (checkbox.checked) {
        bookingUrl = "https://www.secure-booking-engine.com/accounts/q_LZwywOSu8NhIiOn65JAA/properties/bo4wQMRhdj27mNn4Jkplhg/booking-engine/web/source/4wsctBw6Oq6j-g9XuxeRzQ/cart/AyQkrEsYJ_opvqcNHWLjSw/#/search";
        toBook = 'room';
    } else {
        bookingUrl = "https://rashiecotourism.com/bookings/?resort=shilhaandara&ccId=" + ccId + "&s="+campId;
        toBook = 'dayout';
    }
}

function heroBookFunction(){
 clarity('set', 'toBook', toBook);
 window.clarity('event', 'toBook-'+toBook);
  // dayout converison codes
  //SHIL Book Stay Button
  fbq('trackCustom', toBook+'-enquiry');
  const heroUrl=bookingUrl;
  window.open(heroUrl, "_blank");
  if(toBook=='dayout'){
    gtag_dayoutEnquiry_conversion();
  }else{
    gtag_roomEnquiry_conversion();
  }

}

// Event snippet for Book Stay Button conversion page
//In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. 


function rashitriggerfunction(){
  const rashiUrl="https://rashiecotourism.com/";
  window.open(rashiUrl, "_blank");
}

document.getElementById("staycation-slide").addEventListener("click", function () {
  const staycationContainer = document.getElementById("staycation-container");
  if (staycationContainer) {
      staycationContainer.scrollIntoView({ behavior: "smooth" });
  }
});


// ----------------cookiePopup
// Select the cookie consent box and buttons
const cookieConsent = document.querySelector('.cookie-consent');
const denyButton = document.querySelector('#denyCookies');
const allowButton = document.querySelector('#allowCookies');

cookieConsent.style.display = 'none';

function checkConsent() { // returns 1 if true, 0 if false
  var cookie = document.cookie.split(';');
  var consent = 0;
  for(var i = 0; i < cookie.length; i++) {
      console.log("cookie-"+i+": "+cookie[i]);
      if(cookie[i] == ' cookie_consent=accept') {
          console.log("consent obtained");
          consent = 1;
      }
  }
  if(consent == 1) {
      return true;
  }else{
      return false;
  }
}

function setConsent() {
  document.cookie = "cookie_consent = accept";
}

// Make it appear after 3 seconds
setTimeout(() => {
  if(checkConsent() == false){
    cookieConsent.style.display = 'flex';
  }
}, 1000);

// Event listener for the deny button
denyButton.addEventListener('click', function () {
    cookieConsent.style.display = 'none'; // Hide the cookie consent box
});

// Optional: Event listener for the allow button (for demonstration)
allowButton.addEventListener('click', function () {
    setConsent();
    cookieConsent.style.display = 'none'; // Hide the cookie consent box
});

//  // Show popup after page load
//   window.addEventListener('load', function() {
//     setTimeout(() => {
//       document.getElementById('spamPopup').style.display = 'flex';
//     }, 500); // show after 0.5s
//   });

//   // Close popup on X click
//   document.getElementById('closePopup').addEventListener('click', function() {
//     document.getElementById('spamPopup').style.display = 'none';
//   });

//   // Close popup if clicking outside the popup box
//   document.getElementById('spamPopup').addEventListener('click', function(e) {
//     if(e.target === this) this.style.display = 'none';
//   });

// function closePopup() {
//   document.getElementById('weekday-popup').classList.remove('active');
// }

// // Open popup after 1 second
// setTimeout(() => {
//   document.getElementById('weekday-popup').classList.add('active');
// }, 1000);


// function redirectToCard() {
//   const params = new URLSearchParams(window.location.search);
//   const sValue = params.get('s') || '69';
//   window.location.href = `https://rashiecostaycation.com/Rashi-Card/card.php?s=${sValue}`;
// }

 

    function getUrlParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
  }

  function closep() {
    document.getElementById("offer-popup").style.display = "none";
  }

  function redirectToDayout() {
    window.location.href = "https://rashiecotourism.com/bookings/?resort=shilhaandara&s="+getUrlParam("s");
  }

  function redirectToRooms() {
    window.location.href = "https://www.secure-booking-engine.com/accounts/q_LZwywOSu8NhIiOn65JAA/properties/bo4wQMRhdj27mNn4Jkplhg/booking-engine/web/source/4wsctBw6Oq6j-g9XuxeRzQ/cart/AyQkrEsYJ_opvqcNHWLjSw/#/search";
  }

  window.onload = function () {
    const sValue = getUrlParam("s");

    if (sValue === "93"||sValue === "76"||sValue === "75"||sValue === "81") {
      document.getElementById("offer-popup").style.display = "flex";
    }
  };

   function copyCoupon() {
    const code = document.getElementById("couponCode").innerText;
    navigator.clipboard.writeText(code);

    const msg = document.getElementById("copyMsg");
    msg.innerText = "Copied!";
    msg.style.color = "green";
  }
