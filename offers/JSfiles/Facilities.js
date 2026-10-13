const facilityBoxes = document.querySelectorAll('.Facilities-Container-box');
const facilityRightContainer = document.querySelector('.Facilities-Container');
const facilityHeading = document.getElementById('Facilities-Container-heading');
const facilityDescription = document.getElementById('Facilities-Container-description');
const facilityCloseButton = document.getElementById('facilities-popup-close');

const facilityContents = [
  {
    title: 'Serenity Heaven',
    description: 'Escape to a tranquil oasis where compassion meets expertise. Our retreat offers a sanctuary for individuals seeking balance, healing, and growth.',
    background: '../Resource/Facilities/serenityhaven.jpg',
  },
  {
    title: 'Ayurvedic Spa',
    description: ' Relieve your stress with our rejuvenating massages and indulge your body and senses with an unparalleled spa experience.',
    background: '../Resource/Facilities/spa.jpg',
  },
  {
    title: 'Conference & Events',
    description: 'Our fully-equipped spacious conference halls are marvels of architecture, imbibing the spirit of the granite monoliths.',
    background: '../Resource/Facilities/conference.jpg',
  },
  {
    title: 'Wedding',
    description: 'Host your special day amidst serene beauty and elegant venues. Shilhaandara offers stunning backdrops, spacious banquet facilities, and tailored services for an unforgettable wedding experience.',
    background: '../Resource/Facilities/Wedding.avif',
  }
];

let facilityCurrentIndex = 0;
let facilityInterval;

function facilityUpdateContent(index) {
  // Update the active class for the selected box
  facilityBoxes.forEach((box, i) => {
    box.classList.toggle('active', i === index);
  });

  // Update the heading and description
  facilityHeading.textContent = facilityContents[index].title;
  facilityDescription.textContent = facilityContents[index].description;

  // Remove existing buttons if any
  const existingButtons = document.querySelector('.facility-action-buttons');
  if (existingButtons) {
    existingButtons.remove();
  }

  // Create a container for the buttons
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('facility-action-buttons');

  // Create "Learn More" button
  const learnMoreBtn = document.createElement('button');
  learnMoreBtn.textContent = 'Learn More';
  learnMoreBtn.classList.add('experiences-know-more-btn');
  learnMoreBtn.classList.add('learnmore-button-highlighter');
  learnMoreBtn.addEventListener('click', () => {
  // Pass the content and index to the popup function
  const content = index === 0 
          ? ` 
              <h2>Shilhaandara Serenity Heaven</h2>
              <h3>A Holistic Wellness Retreat</h3>
              <p>Welcome to Serenity Heaven</p>
              <p>Escape to a tranquil oasis where compassion meets expertise. Our retreat offers a sanctuary for individuals seeking balance, healing, and growth.</p>

              <br/>

              <p><strong>Counseling Services:</strong></p>
              <ul>
                  <li>Stress Management</li>
                  <li>Depression Counseling</li>
                  <li>Anxiety Relief</li>
                  <li>PTSD Support</li>
                  <li>Anger Management</li>
                  <li>Couple Counseling</li>
                  <li>Philosophical Discourse</li>
                  <li>Spiritual Guidance</li>
                  <li>Psychological Counseling</li>
              </ul>

              <br/>

              <p><strong>Programs & Activities:</strong></p>
              <ul>
                  <li>Daily Morning Taoist Yoga & Mindful Meditation</li>
                  <li>Personal Counseling</li>
                  <li>Group Counseling</li>
                  <li>Support Groups</li>
                  <li>Cognitive Therapy</li>
                  <li>Specialized Psychology & Psychiatry Services (Day/Residential)</li>
                  <li>Motivational Interviewing (MI)</li>
              </ul>

              <br/>

              <p><strong>Accommodation:</strong></p>
              <ul>
                  <li>Comfortable rooms tailored to individual needs</li>
                  <li>Nutritious meals and refreshments</li>
              </ul>

              <br/>

              <p><strong>Community Events:</strong></p>
              <ul>
                  <li>Literary & Cultural Activities (2nd & 4th Sundays)</li>
                  <li>Symposiums and Workshops</li>
                  <li>Adolescent Guidance (Better Learning, Self-Management, Distraction Avoidance)</li>
              </ul>

              <br/>

              <p><strong>Expert Team:</strong></p>
              <ul>
                  <li>Experienced Psychologists</li>
                  <li>Specialized Psychiatrists</li>
                  <li>Compassionate Counselors</li>
              </ul>

              <br/>

              <p><strong>Packages:</strong></p>
              <ul>
                  <li>Day Programs</li>
                  <li>Weekend Retreats</li>
                  <li>Customized Stay Packages</li>
              </ul>

              <br/>

              <p><strong>Confidentiality Assurance:</strong></p>
              <p>At Serenity Heaven, we respect your trust. All counseling and therapy sessions are strictly confidential.</p>

              <br/>

              <p><strong>Contact Us:</strong></p>
              <ul>
                <li class="serenity-heaven-phone"></li>
              </ul>

              <br/>

              <p><strong>Join the Journey !!!</strong></p>
              <p>Discover serenity, healing, and growth at Shilhaandara Serenity Heaven.</p>
          `
          : index === 1
          ? `
              <h2>Ayurvedic Spa</h2>
              <h3>Rejuvenating Spa Experience</h3>
              <p>From the moment you enter the majestic stone-monolith walkway of Shilhaandara, you can hear the call of adventure beckoning you. Your body and soul are enveloped with the warm embrace of nature, and a day full of adventure activities requires a reinvigorating spa treatment that is on offer in our premises.</p>
              <p>Relieve your stress with our rejuvenating massages and indulge your body and senses with an unparalleled spa experience. Whether it is our deeply nurturing massages or the calming nature of our hot stone treatments, a whole host of indulgences await you in our exclusive spa. Our treatments are suitable for individuals, couples, and even large groups.</p>

              <table class="spa-responsive-table">
    <thead>
    <tr>
        <th style="text-align: left;">Procedure</th>
        <th style="text-align: left;">Duration</th>
        <th style="text-align: left;">Price</th>
    </tr>
</thead>
    <tbody>
        <tr>
            <td>Abhyanga + Sweda</td>
            <td>60 min</td>
            <td>1350/-</td>
        </tr>
        <tr>
            <td>Shirodhara</td>
            <td>45 min</td>
            <td>1100/-</td>
        </tr>
        <tr>
            <td>Padabhyanga</td>
            <td>30 min</td>
            <td>650/-</td>
        </tr>
        <tr>
            <td>Shiroabhyanga</td>
            <td>30 min</td>
            <td>650/-</td>
        </tr>
        <tr>
            <td>Back, Neck and Shoulders</td>
            <td>30 min</td>
            <td>800/-</td>
        </tr>
        <tr>
            <td>Deep Tissue Massage</td>
            <td>75 min</td>
            <td>1550/-</td>
        </tr>
        <tr>
            <td>Navarakizhi (SSPS)</td>
            <td>90 min</td>
            <td>2000/-</td>
        </tr>
        <tr>
            <td>Patra Pottali Pinda Sweda</td>
            <td>90 min</td>
            <td>2000/-</td>
        </tr>
        <tr>
            <td>Pizhichil</td>
            <td>90 min</td>
            <td>3000/-</td>
        </tr>
        <tr>
            <td>Udvartana</td>
            <td>60 min</td>
            <td>1500/-</td>
        </tr>
        <tr>
            <td>Padagatha</td>
            <td>60 min</td>
            <td>1500/-</td>
        </tr>
        <tr>
            <td>Netra Tarpana</td>
            <td>40 min</td>
            <td>600/-</td>
        </tr>
        <tr>
            <td>Netradhara</td>
            <td>20 min</td>
            <td>500/-</td>
        </tr>
        <tr>
            <td>Basthis</td>
            <td>40 min</td>
            <td>600/-</td>
        </tr>
        <tr>
            <td>Nasapana</td>
            <td>30 min</td>
            <td>500/-</td>
        </tr>
        <tr>
            <td>Sauna</td>
            <td>20 min</td>
            <td>350/-</td>
        </tr>
        <tr>
            <td>Steam</td>
            <td>20 min</td>
            <td>350/-</td>
        </tr>
        <tr style="background-color:#dcc084">
            <td colspan="3"><b>Beauty Therapies:</b></td>
        </tr>
        <tr>
            <td>Manicure</td>
            <td>20 min</td>
            <td>300/-</td>
        </tr>
        <tr>
            <td>Herbal Manicure</td>
            <td>40 min</td>
            <td>750/-</td>
        </tr>
        <tr>
            <td>Pedicure</td>
            <td>45 min</td>
            <td>750/-</td>
        </tr>
        <tr>
            <td>Herbal Pedicure</td>
            <td>60 min</td>
            <td>1200/-</td>
        </tr>
        <tr>
            <td>Herbal Facial</td>
            <td>40 min</td>
            <td>800/-</td>
        </tr>
        <tr>
            <td>Fruit Facial</td>
            <td>60 min</td>
            <td>1050/-</td>
        </tr>
        <tr>
            <td>Neem Facial</td>
            <td>60 min</td>
            <td>1050/-</td>
        </tr>
        <tr>
            <td>Saffron Facial</td>
            <td>75 min</td>
            <td>1500/-</td>
        </tr>
        <tr>
            <td>Almond Facial</td>
            <td>75 min</td>
            <td>1500/-</td>
        </tr>
        <tr>
            <td>Agastya Kuteera Special Herbal Facial</td>
            <td>75 min</td>
            <td>1500/-</td>
        </tr>
        <tr style="background-color:#dcc084">
            <td colspan="3"><b>Hair Care:</b></td>
        </tr>
        <tr>
            <td>Hair Enrichment Pack</td>
            <td>60 min</td>
            <td>1000/-</td>
        </tr>
        <tr>
            <td>Anti Dandruff Pack</td>
            <td>60 min</td>
            <td>1000/-</td>
        </tr>
        <tr>
            <td>Henna Pack</td>
            <td>60 min</td>
            <td>1000/-</td>
        </tr>
        <tr style="background-color:#dcc084">
            <td colspan="3"><b>Panchakarma Treatments:</b></td>
        </tr>
        <tr>
            <td>Vamana</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Virechana</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Basthi</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Nasya</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Raktamookshana (Leech Therapy)</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td colspan="3">
            * Taxes are applicable.<br>
            * Prior appointment to be taken to avail spa services.
            </td>
        </tr>
    </tbody>
</table>
          `
          : index === 2
          ? `
              <h2>Conference & Events</h2>
              <h3>State-of-the-Art Conference Halls</h3>
              <p>Shilhaandara houses two spacious Conference Halls with a capacity of 150-200 pax and is an ideal venue for holding corporate retreats, meetings, weddings, conferences, and private parties. Our spacious halls are marvels of architecture, imbibing the spirit of the granite monoliths while remaining equipped with state-of-the-art audio-visual equipment and high-speed broadband.</p>
          `
          : `
              <h2>Wedding</h2>
              <h3>Your Dream Wedding at Shilhaandara</h3>
              <p>Host your special day amidst serene beauty and elegant venues. Shilhaandara offers stunning backdrops, spacious banquet facilities, and tailored services for an unforgettable wedding experience. Our dedicated team ensures every detail is taken care of, from the grand ceremony to the smallest of personalized touches.</p>
          `;

          facilitiesShowPopup(content, index);
});


  // Create "Enquire" button
  const enquireBtn = document.createElement('button');
  enquireBtn.textContent = 'Enquire';
  enquireBtn.classList.add('experiences-know-more-btn');
  enquireBtn.classList.add('facilities-button-highlighter');
  enquireBtn.addEventListener('click', () => {
    const subjectSelect = document.getElementById("subject");
    
    // Determine the selected option based on the value of index
    let selectedOptionValue;
    if (index === 0) {
        selectedOptionValue = 'serenity-heaven';
    } else if (index === 1) {
        selectedOptionValue = 'spa';
    } else if (index === 2) {
        selectedOptionValue = 'conference';
    } else {
        selectedOptionValue = 'wedding';
    }

    // Set the dropdown value to the selected option
    subjectSelect.value = selectedOptionValue;
    
    // Navigate to the contact section
    window.location.href = "#contact";
});




  // Append buttons to the button container
  buttonContainer.appendChild(learnMoreBtn);
  buttonContainer.appendChild(enquireBtn);

  // Append the button container below the description
  facilityDescription.parentElement.appendChild(buttonContainer);

  // Lazy load the background image
  const selectedBox = facilityBoxes[index];
  const bgUrl = selectedBox.getAttribute('data-bg');
  if (bgUrl) {
    facilityRightContainer.style.backgroundImage = `url(${bgUrl})`;
  }
}


function facilityStartAutoCycle() {
  facilityInterval = setInterval(() => {
    facilityCurrentIndex = (facilityCurrentIndex + 1) % facilityContents.length;
    facilityUpdateContent(facilityCurrentIndex);
  }, 3000);
}

// Lazy load facility images
const lazyLoadBackgroundMain = (element) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bgUrl = entry.target.getAttribute('data-bg');
        if (bgUrl) {
          entry.target.style.backgroundImage = `url(${bgUrl})`;
          observer.unobserve(entry.target); // Stop observing after the image is loaded
        }
      }
    });
  }, {
    rootMargin: '0px 0px 50px 0px', // Load slightly before entering the viewport
  });

  observer.observe(element);
};

// Apply lazy loading to facility boxes
facilityBoxes.forEach((box, index) => {
  box.setAttribute('data-bg', facilityContents[index].background); // Add the data-bg attribute
  lazyLoadBackgroundMain(box);

  box.addEventListener('click', () => {
    clearInterval(facilityInterval);
    facilityCurrentIndex = index;
    facilityUpdateContent(index);
    facilityStartAutoCycle();
  });
});

// Initialize
facilityUpdateContent(facilityCurrentIndex);
facilityStartAutoCycle();

const boxes = document.querySelectorAll('.Facilities-Container-box');
const lazyLoadBackground = (element) => {
      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const imgUrl = entry.target.getAttribute('data-bg');
                  if (imgUrl) {
                      entry.target.style.backgroundImage = `url(${imgUrl})`;
                      observer.unobserve(entry.target); // Stop observing after loading
                  } else {
                      console.warn("No data-bg attribute found for element:", entry.target);
                  }
              }
          });
      }, {
          rootMargin: '0px 0px 50px 0px', // Trigger loading slightly before entering the viewport
      });
      observer.observe(element);
  };

  boxes.forEach(box => lazyLoadBackground(box));

  const facilitiesPopupOverlay = document.getElementById('facilities-popup-overlay');
  const facilitiesPopup = document.getElementById('facilities-popup');
  const facilitiesPopupClose = document.getElementById('facilities-popup-close');
  const facilitiesPopupContent = document.getElementById('facilities-popup-content');
  
  // Function to show the popup with specific content
  function facilitiesShowPopup(content, index) {
    const popup = document.querySelector('.facilities-popup');
    const overlay = document.querySelector('.facilities-popup-overlay');

    // Add the close button to the content
    const closeButton = '<span class="Package-close-btn" id="facilities-popup-close">&times;</span>';

    // Clear previous content and add the close button
    popup.innerHTML = closeButton + content;

    // Apply a class to adjust the height based on content type
    if (index === 0 || index === 1){
        popup.classList.remove('popup-spa', 'popup-conference', 'popup-wedding');
    }
     else if (index === 2) {
        popup.classList.add('popup-conference');
        popup.classList.remove('popup-spa', 'popup-wedding');
    } else {
        popup.classList.add('popup-wedding');
        popup.classList.remove('popup-spa', 'popup-conference');
    }

    overlay.style.display = 'flex';
}


  
  // Function to close the popup
function facilitiesClosePopup() {
  facilitiesPopup.scrollTop = 0; // Reset scroll to the top
  facilitiesPopupOverlay.style.display = 'none'; // Hide the overlay
}

// Close popup when clicking the close button
facilityCloseButton.addEventListener('click', facilitiesClosePopup);

// Dynamically handle the close button inside the popup
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('Package-close-btn')) {
      facilitiesClosePopup();
  }
});

// Close popup when clicking outside of it (overlay)
facilitiesPopupOverlay.addEventListener('click', (e) => {
  if (e.target === facilitiesPopupOverlay) {
      facilitiesClosePopup();
  }
});