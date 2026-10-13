const ActivitiesUpdatedActivities = [
  { name: "Land Zorbing", imageUrl: "../Resource/Activities/landzorbing.avif", imageAlt: "Land Zorbing Adventure", iconUrl: "../Resource/Activities/Icons/landzorbing.png", iconAlt: "Land Zorbing Icon" },
  { name: "Bungee Trampoline", imageUrl: "../Resource/Activities/BungeeTrampoline.jpeg", imageAlt: "Bungee Trampoline Jump", iconUrl: "../Resource/Activities/Icons/bungeetrampoline.png", iconAlt: "Bungee Trampoline Icon" },
  { name: "Zip Line", imageUrl: "../Resource/Activities/zipline.avif", imageAlt: "Zip Line Experience", iconUrl: "../Resource/Activities/Icons/zipline.png", iconAlt: "Zip Line Icon" },
  { name: "Archery", imageUrl: "../Resource/Activities/archery.webp", imageAlt: "Archery Target Shooting", iconUrl: "../Resource/Activities/Icons/archery.png", iconAlt: "Archery Icon" },
  { name: "Fish Spa", imageUrl: "../Resource/Activities/fishspa.avif", imageAlt: "Relaxing Fish Spa", iconUrl: "../Resource/Activities/Icons/fishspa.png", iconAlt: "Fish Spa Icon" },
  { name: "Paintball Target Shoot", imageUrl: "../Resource/Activities/paintball.jpg", imageAlt: "Paintball Target Shooting", iconUrl: "../Resource/Activities/Icons/paintball.png", iconAlt: "Paintball Icon" },
  { name: "QuadBike", imageUrl: "../Resource/Activities/quadbike.avif", imageAlt: "Quad Bike Adventure", iconUrl: "../Resource/Activities/Icons/quad.png", iconAlt: "Quad Bike Icon" },
  { name: "Pool Table Kit", imageUrl: "../Resource/Activities/billiards.avif", imageAlt: "Pool Table Game", iconUrl: "../Resource/Activities/Icons/pooltable.png", iconAlt: "Pool Table Icon" },
  { name: "Swimming Pool", imageUrl: "../Resource/Activities/SwimmingPool.jpg", imageAlt: "Swimming Pool Area", iconUrl: "../Resource/Activities/Icons/swimmingpool.png", iconAlt: "Swimming Pool Icon" },
  { name: "Indoor Games", imageUrl: "../Resource/Activities/indoorgames.jpg", imageAlt: "Indoor Games Section", iconUrl: "../Resource/Activities/Icons/indoorgames.png", iconAlt: "Indoor Games Icon" },
  { name: "Outdoor Games", imageUrl: "../Resource/Activities/outdoorgames.jpg", imageAlt: "Outdoor Games Area", iconUrl: "../Resource/Activities/Icons/eaerhwalk.png", iconAlt: "Outdoor Games Icon" },
  { name: "Kids Play Area", imageUrl: "../Resource/Activities/KidsPlayArea.jpg", imageAlt: "Kids Play Area", iconUrl: "../Resource/Activities/Icons/kidsplayarea.png", iconAlt: "Kids Play Area Icon" },
  { name: "Mist Dance", imageUrl: "../Resource/Activities/MistDance.jpg", imageAlt: "Mist Dance Party", iconUrl: "../Resource/Activities/Icons/mistdance.png", iconAlt: "Mist Dance Icon" },
  { name: "Earthquake Walk", imageUrl: "../Resource/Activities/EarthquakeWalk.jpg", imageAlt: "Earthquake Walk Challenge", iconUrl: "../Resource/Activities/Icons/ropeactivities.png", iconAlt: "Earthquake Walk Icon" },
  { name: "Net Climbing", imageUrl: "../Resource/Activities/NetClimbing.JPG", imageAlt: "Net Climbing Challenge", iconUrl: "../Resource/Activities/Icons/netclimbing.png", iconAlt: "Net Climbing Icon" },
  { name: "Wave Wood Walk", imageUrl: "../Resource/Activities/WaveWoodWalk.jpg", imageAlt: "Wave Wood Walk Experience", iconUrl: "../Resource/Activities/Icons/wavewalk.png", iconAlt: "Wave Wood Walk Icon" },
  { name: "Tyre Walk", imageUrl: "../Resource/Activities/tyrewalk.jpg", imageAlt: "Tyre Walk Adventure", iconUrl: "../Resource/Activities/Icons/tyre.png", iconAlt: "Tyre Walk Icon" },
  { name: "Burma Bridge", imageUrl: "../Resource/Activities/BurmaBridge.jpg", imageAlt: "Burma Bridge Adventure", iconUrl: "../Resource/Activities/Icons/bridge.png", iconAlt: "Burma Bridge Icon" },
  { name: "Cargo Net", imageUrl: "../Resource/Activities/CargoNet.jpg", imageAlt: "Cargo Net Climbing", iconUrl: "../Resource/Activities/Icons/net.png", iconAlt: "Cargo Net Icon" },
  { name: "Giant Swing", imageUrl: "../Resource/Activities/giantswing.avif", imageAlt: "Giant Swing Adventure", iconUrl: "../Resource/Activities/Icons/giantswing.png", iconAlt: "Giant Swing Icon" },
  { name: "Rocket Ejection", imageUrl: "../Resource/Activities/rocketejection.avif", imageAlt: "Rocket Ejection Ride", iconUrl: "../Resource/Activities/Icons/rocketejection.png", iconAlt: "Rocket Ejection Icon" },
  { name: "Meltdown", imageUrl: "../Resource/Activities/Meltdown.jpg", imageAlt: "Meltdown Challenge", iconUrl: "../Resource/Activities/Icons/meltdown.png", iconAlt: "Meltdown Icon" },
  { name: "Bull Ride", imageUrl: "../Resource/Activities/bullride.jpg", imageAlt: "Mechanical Bull Ride", iconUrl: "../Resource/Activities/Icons/bullride.png", iconAlt: "Bull Ride Icon" },
  { name: "Aqua Zorbing", imageUrl: "../Resource/Activities/aquazorbing.jpg", imageAlt: "Aqua Zorbing Adventure", iconUrl: "../Resource/Activities/Icons/aquazorbing.png", iconAlt: "Aqua Zorbing Icon" },
  { name: "Human Gyro", imageUrl: "../Resource/Activities/humangyro.jpeg", imageAlt: "Human Gyro Ride", iconUrl: "../Resource/Activities/Icons/humangyro.png", iconAlt: "Human Gyro Icon" },
  { name: "Water Roller", imageUrl: "../Resource/Activities/WaterRoller.jpg", imageAlt: "Water Roller Activity", iconUrl: "../Resource/Activities/Icons/waterroller.png", iconAlt: "Water Roller Icon" },
  { name: "360 deg Flying Cycle", imageUrl: "../Resource/Activities/360Cycle.jpg", imageAlt: "360 Degree Flying Cycle", iconUrl: "../Resource/Activities/Icons/flyingcycle.png", iconAlt: "Flying Cycle Icon" },
  { name: "Crazy Roller", imageUrl: "../Resource/Activities/crazyroller.jpg", imageAlt: "Crazy Roller Ride", iconUrl: "../Resource/Activities/Icons/crazyroller.png", iconAlt: "Crazy Roller Icon" }
];

  
  let ActivitiesUpdatedCurrentIndex = 0;
  let ActivitiesUpdatedInterval;
  
  const ActivitiesUpdatedImageElement = document.getElementById("ActivitiesUpdated-image");
  const ActivitiesUpdatedButtonsContainer = document.getElementById("ActivitiesUpdated-buttons");
  
  // Function to update the active activity and image
  function ActivitiesUpdatedUpdateActivity(index) {
    // Update image
    ActivitiesUpdatedImageElement.src = ActivitiesUpdatedActivities[index].imageUrl;
    ActivitiesUpdatedImageElement.alt = ActivitiesUpdatedActivities[index].name;
  
    // Update active button
    document.querySelectorAll(".ActivitiesUpdated-button").forEach((button, idx) => {
        button.classList.toggle("active", idx === index);
    });
  
    // Update index
    ActivitiesUpdatedCurrentIndex = index;
  }
  
  // Function to create buttons dynamically
  function ActivitiesUpdatedCreateButtons() {
    ActivitiesUpdatedActivities.forEach((activity, index) => {
      const buttonContainer = document.createElement("div");
      buttonContainer.className = "ActivitiesUpdated-button-container";
  
      // Add "Coming Soon" span if the activity is marked as such
      if (activity.isComingSoon) {
        const comingSoonSpan = document.createElement("span");
        comingSoonSpan.className = "coming-soon";
        comingSoonSpan.textContent = "Coming Soon !";
        buttonContainer.appendChild(comingSoonSpan);
      }
  
      const button = document.createElement("button");
      button.className = "ActivitiesUpdated-button";
      button.innerHTML = `
        <span>${activity.name}</span>
        <img src="${activity.iconUrl}" class="ActivitiesUpdated-icon" loading="lazy">
      `;
      
      // Only allow button interaction if not "Coming Soon"
      button.onclick = () => {
          clearInterval(ActivitiesUpdatedInterval); // Stop auto-slideshow
          ActivitiesUpdatedUpdateActivity(index);
          ActivitiesUpdatedStartSlideshow(); // Restart the slideshow from the current index
      };
  
      buttonContainer.appendChild(button);
      ActivitiesUpdatedButtonsContainer.appendChild(buttonContainer);
    });
  }
  
  
  
  // Function to start the slideshow
  function ActivitiesUpdatedStartSlideshow() {
    ActivitiesUpdatedInterval = setInterval(() => {
        const nextIndex = (ActivitiesUpdatedCurrentIndex + 1) % ActivitiesUpdatedActivities.length;
        ActivitiesUpdatedUpdateActivity(nextIndex);
    }, 3000);
  }
  
  
  // Initialize the component
  function ActivitiesUpdatedInit() {
    ActivitiesUpdatedCreateButtons();
    ActivitiesUpdatedUpdateActivity(ActivitiesUpdatedCurrentIndex);
    ActivitiesUpdatedStartSlideshow();
  }
  
  // Run the initialization function
  ActivitiesUpdatedInit();