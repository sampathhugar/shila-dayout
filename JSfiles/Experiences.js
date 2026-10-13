
  const packagesData = {
    "Foodie-buddy": {
      heading: "Supply of Food",
      content: `
        <table class="Package-popup-table">
          <thead>
            <tr>
              <th rowspan="2">Packages</th>
              <th colspan="2">Adult</th>
              <th colspan="2">Kids (6 to 12 years)</th>
            </tr>
            <tr>
              <th>Weekday (Mon - Thur)</th>
              <th>Weekend (Fri - Sun)</th>
              <th>Weekday (Mon - Thur)</th>
              <th>Weekend (Fri - Sun)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Welcome drink, Lunch, High Tea & Usage of basic Facilities <br/>Timing : 10:00 AM - 05.30 PM</td>
              <td>1050</td>
              <td>1150</td>
              <td>600</td>
              <td>700</td>
            </tr>
            <tr>
              <td>Welcome drink, Breakfast, Lunch, High Tea & Usage of basic Facilities <br/>Timing : 09:00 AM - 05.30 PM</td>
              <td>1200</td>
              <td>1300</td>
              <td>700</td>
              <td>800</td>
            </tr>
            <tr>
              <td>Welcome drink, Lunch, High Tea, Dinner & Usage of basic Facilities <br/>Timing : 10:00 AM - 10:00 PM</td>
              <td>1500</td>
              <td>1600</td>
              <td>750</td>
              <td>850</td>
            </tr>
            <tr>
              <td>Welcome drink, Breakfast, Lunch, High Tea, Dinner & Usage of basic Facilities <br/>Timing : 09:00 AM - 10:00 PM</td>
              <td>1650</td>
              <td>1750</td>
              <td>850</td>
              <td>950</td>
            </tr>
            <tr>
              <td>Welcome drink, High Tea, Dinner & Usage of basic Facilities <br/>Timing : 04:00 PM - 10:00 PM</td>
              <td>900</td>
              <td>1000</td>
              <td>500</td>
              <td>600</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5" class="packages-popup-table-footer">* Taxes are applicable<br>
                * Weekend rates are applicable for any holiday.<br>
                * It is Complimentary for Children between 0 and 5 years of age.<br/>
                *  Adult charges are considered for Children above 12 years of age.<br/>
                * Basic Facilities include complimentary indoor and outdoor games.
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="Package-Popup-features">
          <div><strong>Package Includes:</strong></div>
          <li>Mist Dance</li>
          <li>Swimming Pool</li>
          <li><b>Indoor games:</b> Table Tennis, Carrom, Chess, Dart, Foosball, Pool Table</li>
          <li><b> Outdoor games:</b> Cricket, Basketball, Football, Throwball, Badminton, Tug of war, Bicycle, Volleyball, Human Foosball</li>
          <li><b> Kid's activiities:</b> Play Area and Swimming Pool</li>
          <button class="package-know-more-btn" onclick="bookDayOut()">Book Now</button>
        </div>`
    },
    "Carnival": {
      heading: "Carnival Package",
      content: `
        <table class="Package-popup-table">
    <thead>
        <tr>
            <th rowspan="2">Packages</th>
            <th colspan="2">Adult</th>
        </tr>
        <tr>
            <th>Weekday (Mon - Thur)</th>
            <th>Weekend (Fri - Sun)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Welcome drink, Lunch, High Tea, <span class="highlight">12 activity coupons per person</span> & Usage of basic Facilities (10AM - 5.30PM)</td>
            <td>1650</td>
            <td>1750</td>
        </tr>
        <tr>
            <td>Welcome drink, Breakfast, Lunch, High Tea, <span class="highlight">12 activity coupons per person</span> & Usage of basic Facilities (9AM - 5.30PM)</td>
            <td>1800</td>
            <td>1900</td>
        </tr>
        <tr>
            <td>Welcome drink, Lunch, High Tea, Dinner, <span class="highlight">12 activity coupons per person</span> & Usage of basic Facilities (10AM - 10PM)</td>
            <td>2100</td>
            <td>2200</td>
        </tr>
        <tr>
            <td>Welcome drink, Breakfast, Lunch, High Tea, Dinner, <span class="highlight">12 activity coupons per person</span> & Usage of basic Facilities (9AM - 10PM)</td>
            <td>2250</td>
            <td>2350</td>
        </tr>
        <tr>
            <td>Welcome drink, High Tea, Dinner, <span class="highlight">8 activity coupons per person</span> & Usage of basic Facilities (4PM - 10PM)</td>
            <td>1300</td>
            <td>1400</td>
        </tr>
    </tbody>
</table>

<table class="Package-popup-table" style="margin-top:2vw;">
    <thead>
        <tr>
            <th rowspan="2">Packages</th>
            <th colspan="2">Kids (6-12 years)</th>
        </tr>
        <tr>
            <th>Weekday (Mon - Thur)</th>
            <th>Weekend (Fri - Sun)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Welcome drink, Lunch, High Tea & Usage of basic Facilities (10AM - 5.30PM)</td>
            <td>600</td>
            <td>700</td>
        </tr>
        <tr>
            <td>Welcome drink, Breakfast, Lunch, High Tea & Usage of basic Facilities (9AM - 5.30PM)</td>
            <td>700</td>
            <td>800</td>
        </tr>
        <tr>
            <td>Welcome drink, Lunch, High Tea, Dinner & Usage of basic Facilities (10AM - 10PM)</td>
            <td>750</td>
            <td>850</td>
        </tr>
        <tr>
            <td>Welcome drink, Breakfast, Lunch, High Tea, Dinner & Usage of basic Facilities (9AM - 10PM)</td>
            <td>850</td>
            <td>950</td>
        </tr>
        <tr>
            <td>Welcome drink, High Tea, Dinner & Usage of basic Facilities (4PM - 10PM)</td>
            <td>500</td>
            <td>600</td>
        </tr>
    </tbody>
</table>

<div class="Package-Popup-features">
    <h3>Things to Note:</h3>
        <li>Taxes are applicable.</li>
        <li>Weekend rates are applicable for any holiday.</li>
        <li>12 Activity coupons are applicable only for Adults.</li>
        <li>It is Complimentary for Children between 0 and 5 years of age.</li>
        <li>Adult charges are considered for Children above 12 years of age.</li>    
        <li>Basic Facilities include complimentary indoor and outdoor games.</li>    
</div>

<div class="Package-Popup-features">
          <div><strong>Package Includes:</strong></div>
          <li>Mist Dance</li>
          <li>Swimming Pool</li>
          <li><b>Indoor games:</b> Table Tennis, Carrom, Chess, Dart, Foosball, Pool Table</li>
          <li><b>Outdoor games:</b> Cricket, Basketball, Football, Throwball, Badminton, Tug of war, Bicycle, Volleyball, Human Foosball</li>
          <li><b>Kid's activities:</b> Play Area and Swimming Pool</li>
          <button class="package-know-more-btn" onclick="bookDayOut()">Book Now</button>
        </div>

<div class="Package-Popup-features">
    <h2>Activities list (Can be played by redeeming Activity coupons):</h2>
</div>

<div class="Package-activites-table-holder">
<table class="Package-popup-table package-activities-pop-table">
        <thead>
            <tr>
                <th>Activities</th>
                <th>Activity Coupons per person</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Giant Swing</td><td>4</td></tr>
            <tr><td>Rocket Ejection</td><td>4</td></tr>
            <tr><td>Bungee Trampoline</td><td>2</td></tr>
            <tr><td>Melt Down</td><td>2</td></tr>
            <tr><td>Bull Ride (3 falls)</td><td>2</td></tr>
            <tr><td>Land Zorbing (1 round)</td><td>3</td></tr>
            <tr><td>Aqua Zorbing</td><td>3</td></tr>
            <tr><td>Water Roller</td><td>2</td></tr>
            <tr><td>Human Gyro</td><td>2</td></tr>
            <tr><td>360 deg Flying Cycle</td><td>2</td></tr>
            <tr><td>Zip Line</td><td>5</td></tr>
            <tr><td>Rope Activity 1 - Earthquake Walk</td><td>1</td></tr>
            <tr><td>Rope Activity 2 - Wave Wood Walk</td><td>1</td></tr>
            <tr><td>Rope Activity 3 - Tyre Walk</td><td>1</td></tr>
            <tr><td>Rope Activity 4 - Burma Bridge</td><td>1</td></tr>
            <tr><td>Rope Activity 5 - Cargo Net</td><td>1</td></tr>
            <tr><td>Paintball Target Shoot (5 balls)</td><td>1</td></tr>
            <tr><td>Archery (4 arrows)</td><td>1</td></tr>
            <tr><td>Fish Spa (15 mins)</td><td>3</td></tr>
            <tr><td>Quad Bike (4 laps)</td><td>4</td></tr>
            <tr><td>Snooker (30 mins)</td><td>2</td></tr>
            <tr><td>Human Foos Ball (15 mins)</td><td>2</td></tr>
            <tr><td>Cricket Bowling machine </td><td>2</td></tr>
        </tbody>
    </table>
    </div>`
    },
    "Extravagant": {
      heading: "Extravagant Package",
      content: `
        <table class="Package-popup-table">
    <thead>
        <tr>
            <th rowspan="2">Packages</th>
            <th colspan="2">Adult</th>
        </tr>
        <tr>
            <th>Weekday (Mon - Thur)</th>
            <th>Weekend (Fri - Sun)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Welcome drink, Lunch, High Tea, <span class="highlight">20 activity coupons per person</span> & Usage of basic Facilities (10AM - 5.30PM)</td>
            <td>2050</td>
            <td>2150</td>
        </tr>
        <tr>
            <td>Welcome drink, Breakfast, Lunch, High Tea, <span class="highlight">20 activity coupons per person</span> & Usage of basic Facilities (9AM - 5.30PM)</td>
            <td>2200</td>
            <td>2300</td>
        </tr>
        <tr>
            <td>Welcome drink, Lunch, High Tea, Dinner, <span class="highlight">20 activity coupons per person</span> & Usage of basic Facilities (10AM - 10PM)</td>
            <td>2500</td>
            <td>2600</td>
        </tr>
        <tr>
            <td>Welcome drink, Breakfast, Lunch, High Tea, Dinner, <span class="highlight">20 activity coupons per person</span> & Usage of basic Facilities (9AM - 10PM)</td>
            <td>2650</td>
            <td>2750</td>
        </tr>
    </tbody>
</table>

<table class="Package-popup-table" style="margin-top:2vw;">
    <thead>
        <tr>
            <th rowspan="2">Packages</th>
            <th colspan="2">Kids (6-12 years)</th>
        </tr>
        <tr>
            <th>Weekday (Mon - Thur)</th>
            <th>Weekend (Fri - Sun)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Welcome drink, Lunch, High Tea & Usage of basic Facilities (10AM - 5.30PM)</td>
            <td>600</td>
            <td>700</td>
        </tr>
        <tr>
            <td>Welcome drink, Breakfast, Lunch, High Tea & Usage of basic Facilities (9AM - 5.30PM)</td>
            <td>700</td>
            <td>800</td>
        </tr>
        <tr>
            <td>Welcome drink, Lunch, High Tea, Dinner & Usage of basic Facilities (10AM - 10PM)</td>
            <td>750</td>
            <td>850</td>
        </tr>
        <tr>
            <td>Welcome drink, Breakfast, Lunch, High Tea, Dinner & Usage of basic Facilities (9AM - 10PM)</td>
            <td>850</td>
            <td>950</td>
        </tr>
    </tbody>
</table>

<div class="Package-Popup-features">
    <h3>Things to Note:</h3>
        <li>Taxes are applicable.</li>
        <li>Weekend rates are applicable for any holiday.</li>
        <li>12 Activity coupons are applicable only for Adults.</li>
        <li>It is Complimentary for Children between 0 and 5 years of age.</li>
        <li>Adult charges are considered for Children above 12 years of age.</li>    
        <li>Basic Facilities include complimentary indoor and outdoor games.</li>    
</div>

<div class="Package-Popup-features">
          <div><strong>Package Includes:</strong></div>
          <li>Mist Dance</li>
          <li>Swimming Pool</li>
          <li><b>Indoor games:</b> Table Tennis, Carrom, Chess, Dart, Foosball, Pool Table</li>
          <li><b>Outdoor games:</b> Cricket, Basketball, Football, Throwball, Badminton, Tug of war, Bicycle, Volleyball, Human Foosball</li>
          <li><b>Kid's activities:</b> Play Area and Swimming Pool</li>
          <button class="package-know-more-btn" onclick="bookDayOut()">Book Now</button>
        </div>

<div class="Package-Popup-features">
    <h2>Activities list (Can be played by redeeming Activity coupons):</h2>
</div>

<div class="Package-activites-table-holder">
<table class="Package-popup-table package-activities-pop-table">
        <thead>
            <tr>
                <th>Activities</th>
                <th>Activity Coupons per person</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Giant Swing</td><td>4</td></tr>
            <tr><td>Rocket Ejection</td><td>4</td></tr>
            <tr><td>Bungee Trampoline</td><td>2</td></tr>
            <tr><td>Melt Down</td><td>2</td></tr>
            <tr><td>Bull Ride (3 falls)</td><td>2</td></tr>
            <tr><td>Land Zorbing (1 round)</td><td>3</td></tr>
            <tr><td>Aqua Zorbing</td><td>3</td></tr>
            <tr><td>Water Roller</td><td>2</td></tr>
            <tr><td>Human Gyro</td><td>2</td></tr>
            <tr><td>360 deg Flying Cycle</td><td>2</td></tr>
            <tr><td>Zip Line</td><td>5</td></tr>
            <tr><td>Rope Activity 1 - Earthquake Walk</td><td>1</td></tr>
            <tr><td>Rope Activity 2 - Wave Wood Walk</td><td>1</td></tr>
            <tr><td>Rope Activity 3 - Tyre Walk</td><td>1</td></tr>
            <tr><td>Rope Activity 4 - Burma Bridge</td><td>1</td></tr>
            <tr><td>Rope Activity 5 - Cargo Net</td><td>1</td></tr>
            <tr><td>Paintball Target Shoot (5 balls)</td><td>1</td></tr>
            <tr><td>Archery (4 arrows)</td><td>1</td></tr>
            <tr><td>Fish Spa (15 mins)</td><td>3</td></tr>
            <tr><td>Quad Bike (4 laps)</td><td>4</td></tr>
            <tr><td>Snooker (30 mins)</td><td>2</td></tr>
            <tr><td>Human Foos Ball (15 mins)</td><td>2</td></tr>
            <tr><td>Cricket Bowling machine </td><td>2</td></tr>
        </tbody>
    </table>
    </div>`
    }
  };

const packageCards = document.querySelectorAll(".experiences-know-more-btn");
const popupContainer = document.createElement("div");
popupContainer.classList.add("popup-overlay");
popupContainer.style.display = "none";
document.body.appendChild(popupContainer);

packageCards.forEach((button, index) => {

  
  button.addEventListener("click", () => {
    const packageId = button.getAttribute("data-popup-id");

   const packageData = packagesData[packageId];
    if (packageData) { 
      popupContainer.innerHTML = `
        <div class="Package-popup-container">
          <div class="Package-popup">
            <button class="Package-close-btn">×</button>
            <div class="PackagePopupContentContainer">
              <h2 class="pricepopup-heading">${packageData.heading}</h2>
              ${packageData.content}
            </div>
          </div>
        </div>
      `;
      popupContainer.style.display = "flex"; // Changed to flex for alignment


      const closeBtn = popupContainer.querySelector(".Package-close-btn");
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          popupContainer.style.display = "none";
        });
      } else {
        console.error("Close button not found in the popup!");
      }
    } else {
      console.error(`No package data found for ID: ${packageId}`);
    }
  });
});

popupContainer.addEventListener("click", (event) => {

  const popupBox = popupContainer.querySelector(".Package-popup");
  if (!popupBox) {
    console.error("Popup box not found!");
    return;
  }

  // ose popup only if the click is outside the popup box
  if (!popupBox.contains(event.target)) {
    popupContainer.style.display = "none";
  } else {
  }
});




  