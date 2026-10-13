/**
 * Shilhaandara Dedicated Day Out Landing Page Controller
 * Hero carousel, time slot pricing (Weekday 20% / Weekend 15% OFF), activities, and tracking
 */

// 1. Detailed Slot Pricing Data
const PACKAGES_SLOT_DATA = {
  foodie: {
    name: "Supply of Food (Foodie Buddy)",
    tagline: "Relaxation & Unlimited Buffets",
    slots: [
      { id: "f1", time: "10:00 AM - 05:30 PM", meal: "Welcome Drink, Buffet Lunch & High Tea", weekday: 1050, weekend: 1150, kidsWeekday: 600, kidsWeekend: 700 },
      { id: "f2", time: "09:00 AM - 05:30 PM", meal: "Breakfast, Welcome Drink, Lunch & High Tea", weekday: 1200, weekend: 1300, kidsWeekday: 700, kidsWeekend: 800 },
      { id: "f3", time: "10:00 AM - 10:00 PM", meal: "Lunch, High Tea & Grand Dinner", weekday: 1500, weekend: 1600, kidsWeekday: 750, kidsWeekend: 850 },
      { id: "f4", time: "09:00 AM - 10:00 PM", meal: "Breakfast, Lunch, High Tea & Dinner", weekday: 1650, weekend: 1750, kidsWeekday: 850, kidsWeekend: 950 },
      { id: "f5", time: "04:00 PM - 10:00 PM", meal: "Evening Out with High Tea & Dinner", weekday: 900, weekend: 1000, kidsWeekday: 500, kidsWeekend: 600 }
    ],
    inclusions: [
      "Welcome Drink on Arrival",
      "Unlimited Multi-Cuisine Buffet Meals as per selected slot",
      "Evening High Tea with Hot Savories & Cookies",
      "Access to Natural Rock Swimming Pool & Rain Dance",
      "Complimentary Indoor & Outdoor Sports (TT, Carrom, Cricket, Badminton)",
      "Dedicated Children's Play Arena"
    ]
  },
  carnival: {
    name: "Carnival Package",
    tagline: "⭐ Most Popular • Meals + 12 Activity Coupons",
    slots: [
      { id: "c1", time: "10:00 AM - 05:30 PM", meal: "Lunch, High Tea + 12 Coupons", weekday: 1650, weekend: 1750, kidsWeekday: 600, kidsWeekend: 700 },
      { id: "c2", time: "09:00 AM - 05:30 PM", meal: "Breakfast, Lunch, High Tea + 12 Coupons", weekday: 1800, weekend: 1900, kidsWeekday: 700, kidsWeekend: 800 },
      { id: "c3", time: "10:00 AM - 10:00 PM", meal: "Full Day Out with Dinner + 12 Coupons", weekday: 2100, weekend: 2200, kidsWeekday: 750, kidsWeekend: 850 },
      { id: "c4", time: "09:00 AM - 10:00 PM", meal: "Breakfast, Lunch, Dinner + 12 Coupons", weekday: 2250, weekend: 2350, kidsWeekday: 850, kidsWeekend: 950 },
      { id: "c5", time: "04:00 PM - 10:00 PM", meal: "High Tea, Dinner + 8 Coupons", weekday: 1300, weekend: 1400, kidsWeekday: 500, kidsWeekend: 600 }
    ],
    inclusions: [
      "12 Adventure Activity Coupons per adult (Zip Line, Giant Swing, Quad Bike, etc.)",
      "Welcome Drink on Arrival",
      "Unlimited Multi-Cuisine Buffet Meals as per slot",
      "Evening High Tea & Snacks",
      "Swimming Pool & High-Energy Rain Dance with DJ sound",
      "All Complimentary Indoor & Outdoor Sports",
      "Certified Safety Gear & Instructors"
    ]
  },
  extravagant: {
    name: "Extravagant Package",
    tagline: "🌟 Ultimate Thrill • Meals + 20 Activity Coupons",
    slots: [
      { id: "e1", time: "10:00 AM - 05:30 PM", meal: "Lunch, High Tea + 20 Coupons", weekday: 2050, weekend: 2150, kidsWeekday: 600, kidsWeekend: 700 },
      { id: "e2", time: "09:00 AM - 05:30 PM", meal: "Breakfast, Lunch, High Tea + 20 Coupons", weekday: 2200, weekend: 2300, kidsWeekday: 700, kidsWeekend: 800 },
      { id: "e3", time: "10:00 AM - 10:00 PM", meal: "Full Day Out with Dinner + 20 Coupons", weekday: 2500, weekend: 2600, kidsWeekday: 750, kidsWeekend: 850 },
      { id: "e4", time: "09:00 AM - 10:00 PM", meal: "Breakfast, Lunch, Dinner + 20 Coupons", weekday: 2650, weekend: 2750, kidsWeekday: 850, kidsWeekend: 950 }
    ],
    inclusions: [
      "20 Adventure Activity Coupons per adult for maximum action",
      "Unlimited Multi-Cuisine Buffet Meals as per slot",
      "Evening High Tea & Snacks",
      "Swimming Pool, Rain Dance & DJ beats",
      "Complimentary Sports & Games Hub",
      "Full Monolithic Resort Access & Certified Marshals"
    ]
  }
};

// Selected state
let activeRateType = "weekday"; // 'weekday' or 'weekend'
let selectedSlots = {
  foodie: 0,
  carnival: 0,
  extravagant: 0
};

// 2. Activities List (with authentic photos)
const ACTIVITIES_LIST = [
  { name: "Zip Line", category: "thrill", coupons: 5, img: "Resource/zipline-real.jpg", icon: "Resource/Activities/Icons/zipline.png", desc: "Soar over rugged granite terrain with panoramic views of Ramanagara hills." },
  { name: "Rocket Ejection", category: "thrill", coupons: 4, img: "Resource/rocket-ejection-real.jpg", icon: "Resource/Activities/Icons/rocketejection.png", desc: "Catapult into the sky strapped into high-elasticity bungee ejection gear." },
  { name: "Paintball Target Shoot", category: "group", coupons: 1, img: "Resource/paintball-real.jpg", icon: "Resource/Activities/Icons/paintball.png", desc: "Precision bottle range shooting guided by certified RETL instructors." },
  { name: "Kids Play Arena", category: "group", coupons: 0, free: true, img: "Resource/kids-play-real.jpg", icon: "Resource/Activities/Icons/kidsplayarea.png", desc: "Safe, cushioned swings, slides and fun equipment for kids. Complimentary." },
  { name: "Giant Swing", category: "thrill", coupons: 4, img: "Resource/Activities/giantswing.avif", icon: "Resource/Activities/Icons/giantswing.png", desc: "Pendulum swing high above the ground for an exhilarating gravity rush." },
  { name: "Quad Bike (4 Laps)", category: "thrill", coupons: 4, img: "Resource/Activities/quadbike.avif", icon: "Resource/Activities/Icons/quad.png", desc: "Off-road all-terrain vehicle track through rustic dirt trails." },
  { name: "Land Zorbing", category: "thrill", coupons: 3, img: "Resource/Activities/landzorbing.avif", icon: "Resource/Activities/Icons/landzorbing.png", desc: "Roll downhill inside a massive transparent inflatable sphere." },
  { name: "Natural Rock Pool", category: "water", coupons: 0, free: true, img: "Resource/shilhaandara-pool-bougainvillea.jpg", icon: "Resource/Activities/Icons/swimmingpool.png", desc: "Expansive swimming pool framed by bougainvillea flowers and rocks. Complimentary." },
  { name: "Curving Island Pool", category: "water", coupons: 0, free: true, img: "Resource/shilhaandara-curving-pool.jpg", icon: "Resource/Activities/Icons/swimmingpool.png", desc: "Lush shaded pool waterway surrounded by island trees. Complimentary." },
  { name: "Mist & Rain Dance", category: "water", coupons: 0, free: true, img: "Resource/Activities/MistDance.jpg", icon: "Resource/Activities/Icons/mistdance.png", desc: "Cool overhead mist showers synced to DJ sound. Complimentary." },
  { name: "Aqua Zorbing", category: "water", coupons: 3, img: "Resource/Activities/aquazorbing.jpg", icon: "Resource/Activities/Icons/aquazorbing.png", desc: "Walk, tumble and glide across pool water in sealed water zorb balls." },
  { name: "Mechanical Bull Ride", category: "thrill", coupons: 2, img: "Resource/Activities/bullride.jpg", icon: "Resource/Activities/Icons/bullride.png", desc: "Test your grip and balance on the bucking rodeo bull." },
  { name: "Bungee Trampoline", category: "thrill", coupons: 2, img: "Resource/Activities/BungeeTrampoline.jpeg", icon: "Resource/Activities/Icons/bungeetrampoline.png", desc: "Harnessed trampoline for acrobatic flips and high jumps." },
  { name: "Fish Spa (15 mins)", category: "relax", coupons: 3, img: "Resource/Activities/fishspa.avif", icon: "Resource/Activities/Icons/fishspa.png", desc: "Natural therapeutic pedicure spa with Garra Rufa fish." },
  { name: "Archery (4 Arrows)", category: "group", coupons: 1, img: "Resource/Activities/archery.webp", icon: "Resource/Activities/Icons/archery.png", desc: "Traditional recurve bow target shooting under marshal guidance." },
  { name: "Billiards & Pool Table", category: "relax", coupons: 2, img: "Resource/Activities/billiards.avif", icon: "Resource/Activities/Icons/pooltable.png", desc: "Tournament 8-ball and 9-ball pool tables in the clubhouse." },
  { name: "Human Gyro", category: "thrill", coupons: 2, img: "Resource/Activities/humangyro.jpeg", icon: "Resource/Activities/Icons/humangyro.png", desc: "Multi-axis astronaut rotational ride for 360-degree spin." },
  { name: "360° Flying Cycle", category: "thrill", coupons: 2, img: "Resource/Activities/360Cycle.jpg", icon: "Resource/Activities/Icons/flyingcycle.png", desc: "Inverted pedal cycling loop high above the ground." },
  { name: "Earthquake Walk", category: "thrill", coupons: 1, img: "Resource/Activities/EarthquakeWalk.jpg", icon: "Resource/Activities/Icons/ropeactivities.png", desc: "High rope obstacle testing dynamic balance on oscillating planks." },
  { name: "Burma Bridge", category: "thrill", coupons: 1, img: "Resource/Activities/BurmaBridge.jpg", icon: "Resource/Activities/Icons/bridge.png", desc: "Classic Himalayan three-rope suspension traverse." },
  { name: "Indoor Sports Hub", category: "relax", coupons: 0, free: true, img: "Resource/Activities/indoorgames.jpg", icon: "Resource/Activities/Icons/indoorgames.png", desc: "Table Tennis, Carrom, Chess sets & Darts. Complimentary." },
  { name: "Outdoor Sports Arena", category: "group", coupons: 0, free: true, img: "Resource/Activities/outdoorgames.jpg", icon: "Resource/Activities/Icons/eaerhwalk.png", desc: "Volleyball, Cricket pitch, Badminton & Football. Complimentary." }
];

// 3. Campaign & Tracking
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const campaignId = getQueryParam("s") || "69";
const clarityId = Date.now().toString(36) + Math.random().toString(36).substr(2);

function redirectToBookingEngine(packageKey = "carnival") {
  const dateInput = document.getElementById("booking-date-input");
  const selectedDate = (dateInput ? dateInput.value : "") || "";

  if (typeof fbq === "function") {
    fbq("trackCustom", "toBook-dayout-enquiry", { package: packageKey, date: selectedDate });
  }
  if (typeof window.clarity === "function") {
    window.clarity("event", "toBook-dayout");
  }
  if (typeof gtag === "function") {
    gtag("event", "conversion", { send_to: "AW-694875190/KgBLCLH69JQaELboq8sC" });
  }

  let targetUrl = `https://rashiecotourism.com/bookings/?resort=shilhaandara&s=${campaignId}&ccId=${clarityId}`;
  if (selectedDate) {
    targetUrl += `&date=${encodeURIComponent(selectedDate)}`;
  }

  window.open(targetUrl, "_blank");
}

// 4. Hero Carousel
let currentHeroSlide = 0;
let heroInterval = null;

function setupHeroCarousel() {
  const slides = document.querySelectorAll(".dayout-hero-slide");
  const dots = document.querySelectorAll(".dayout-hero-dot");

  if (!slides.length) return;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
    currentHeroSlide = index;
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      clearInterval(heroInterval);
      showSlide(i);
      startHeroAutoPlay();
    });
  });

  function startHeroAutoPlay() {
    heroInterval = setInterval(() => {
      const next = (currentHeroSlide + 1) % slides.length;
      showSlide(next);
    }, 4500);
  }

  startHeroAutoPlay();
}

// 5. Pricing & Slot Render
function renderPackageCard(pkgKey) {
  const pkg = PACKAGES_SLOT_DATA[pkgKey];
  const slotIdx = selectedSlots[pkgKey];
  const slot = pkg.slots[slotIdx];
  const isWd = activeRateType === "weekday";

  const priceEl = document.getElementById(`price-${pkgKey}`);
  const kidsEl = document.getElementById(`kids-${pkgKey}`);
  const slotsContainer = document.getElementById(`slots-${pkgKey}`);

  const adultPrice = isWd ? slot.weekday : slot.weekend;
  const kidsPrice = isWd ? slot.kidsWeekday : slot.kidsWeekend;

  if (priceEl) priceEl.textContent = adultPrice;
  if (kidsEl) kidsEl.textContent = `Kids (6-12 yrs): ₹${kidsPrice} | Under 5 yrs: FREE`;

  if (slotsContainer) {
    slotsContainer.innerHTML = pkg.slots.map((s, idx) => {
      const slotPrice = isWd ? s.weekday : s.weekend;
      const isActive = idx === slotIdx;
      return `
        <button type="button" class="dayout-slot-btn ${isActive ? 'active' : ''}" onclick="selectPackageSlot('${pkgKey}', ${idx})">
          <span>⏰ <strong>${s.time}</strong> (${s.meal})</span>
          <span class="slot-price-badge">₹${slotPrice}</span>
        </button>
      `;
    }).join("");
  }
}

function selectPackageSlot(pkgKey, slotIndex) {
  selectedSlots[pkgKey] = slotIndex;
  renderPackageCard(pkgKey);
}

function renderAllPackages() {
  renderPackageCard("foodie");
  renderPackageCard("carnival");
  renderPackageCard("extravagant");
}

function setupPricingToggle() {
  const weekdayBtn = document.getElementById("toggle-weekday");
  const weekendBtn = document.getElementById("toggle-weekend");

  if (!weekdayBtn || !weekendBtn) return;

  weekdayBtn.addEventListener("click", () => {
    activeRateType = "weekday";
    weekdayBtn.classList.add("active");
    weekendBtn.classList.remove("active");
    renderAllPackages();
  });

  weekendBtn.addEventListener("click", () => {
    activeRateType = "weekend";
    weekendBtn.classList.add("active");
    weekdayBtn.classList.remove("active");
    renderAllPackages();
  });
}

// 6. Guest Stepper
let guests = 2;
function setupGuestStepper() {
  const valEl = document.getElementById("guest-counter-val");
  const decBtn = document.getElementById("guest-dec");
  const incBtn = document.getElementById("guest-inc");
  if (!valEl || !decBtn || !incBtn) return;

  decBtn.addEventListener("click", () => {
    if (guests > 1) {
      guests--;
      valEl.textContent = `${guests} Adult${guests > 1 ? "s" : ""}`;
    }
  });

  incBtn.addEventListener("click", () => {
    guests++;
    valEl.textContent = `${guests} Adults`;
  });
}

// 7. Render Activities with filter
function renderActivities(filter = "all") {
  const container = document.getElementById("activities-grid-container");
  if (!container) return;
  container.innerHTML = "";

  const filtered = filter === "all" ? ACTIVITIES_LIST : ACTIVITIES_LIST.filter(a => a.category === filter);

  filtered.forEach(act => {
    const card = document.createElement("div");
    card.className = "dayout-activity-card";
    card.innerHTML = `
      <div class="dayout-activity-media">
        <img src="${act.img}" alt="${act.name}" class="dayout-activity-img" loading="lazy" />
        <div class="dayout-activity-icon-badge">
          <img src="${act.icon}" alt="${act.name}" loading="lazy" />
        </div>
        <div class="dayout-activity-tag ${act.free ? 'free' : ''}">
          ${act.free ? 'Free / Included' : `${act.coupons} Coupons`}
        </div>
      </div>
      <div class="dayout-activity-info">
        <h3 class="dayout-activity-title">${act.name}</h3>
        <p class="dayout-activity-desc">${act.desc}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function setupActivityFilters() {
  const filterBtns = document.querySelectorAll(".dayout-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderActivities(btn.getAttribute("data-filter"));
    });
  });
}

// 8. Dynamic Phone Numbers
function updateDynamicPhoneNumbers() {
  let phoneNumber = "+919886787039";
  let whatsAppNumber = "+919886787039";

  switch (campaignId) {
    case "3": phoneNumber = "+919035070341"; whatsAppNumber = "+919035070340"; break;
    case "11": phoneNumber = "+919108234265"; whatsAppNumber = "+919035070340"; break;
    case "19": case "72": case "73": case "74":
      phoneNumber = "+919035079544"; whatsAppNumber = "+919035070340"; break;
    case "75": case "81": case "95":
      phoneNumber = "+919035079830"; whatsAppNumber = "+919035070340"; break;
    case "76": phoneNumber = "+919035079095"; whatsAppNumber = "+919035070340"; break;
    case "78": phoneNumber = "+919880478368"; whatsAppNumber = "+919035070340"; break;
    case "97": phoneNumber = "+919035070345"; whatsAppNumber = "+919035070340"; break;
    case "102": phoneNumber = "+919035079096"; whatsAppNumber = "+919035070340"; break;
    default: break;
  }

  document.querySelectorAll(".dayout-phone-link").forEach(link => {
    link.href = `tel:${phoneNumber}`;
    const span = link.querySelector(".phone-display-text");
    if (span) span.textContent = formatPhoneNumber(phoneNumber);
  });

  document.querySelectorAll(".dayout-wa-link").forEach(link => {
    link.href = `https://wa.me/${whatsAppNumber.replace(/\D/g, "")}?text=Hi%2C%20I%20am%20interested%20in%20Shilhaandara%20Day%20Out%20Packages.`;
  });
}

function formatPhoneNumber(num) {
  const clean = num.replace(/\D/g, "");
  if (clean.startsWith("91")) return `+91 ${clean.slice(2, 7)} ${clean.slice(7)}`;
  return num;
}

// 9. FAQ Accordion
function setupFaqAccordion() {
  document.querySelectorAll(".dayout-faq-item").forEach(item => {
    item.querySelector(".dayout-faq-question").addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      document.querySelectorAll(".dayout-faq-item").forEach(i => i.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });
}

// 10. Copy Coupon (Interactive with in-place feedback)
function copyCouponCode(triggerEl, code = "SAVE20NOW") {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(() => {
      showCopyFeedback(triggerEl);
    }).catch(() => {
      fallbackCopy(code, triggerEl);
    });
  } else {
    fallbackCopy(code, triggerEl);
  }
}

function fallbackCopy(code, triggerEl) {
  try {
    const tempInput = document.createElement("input");
    tempInput.value = code;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showCopyFeedback(triggerEl);
  } catch (err) {
    console.error("Failed to copy code: ", err);
  }
}

function showCopyFeedback(triggerEl) {
  if (!triggerEl) return;
  const pill = triggerEl.closest(".dayout-coupon-pill-highlighted, .dayout-ticker-coupon-pill") || triggerEl;
  const label = pill.querySelector(".copy-label");
  const origText = label ? label.textContent : "Copy";

  pill.classList.add("copied");
  if (label) label.textContent = "Copied! ✓";

  setTimeout(() => {
    pill.classList.remove("copied");
    if (label) label.textContent = origText;
  }, 2200);
}

// 11. Modal Detail Popup
function openPackageModal(pkgKey) {
  const pkg = PACKAGES_SLOT_DATA[pkgKey];
  if (!pkg) return;

  const modal = document.getElementById("package-modal");
  const modalTitle = document.getElementById("modal-package-title");
  const modalContent = document.getElementById("modal-package-content");

  if (!modal || !modalTitle || !modalContent) return;

  modalTitle.textContent = pkg.name;

  const slotsList = pkg.slots.map(s => `
    <div style="background:#f9f6f0; padding:12px; border-radius:8px; margin-bottom:8px; border:1px solid #e5dfd2;">
      <div style="display:flex; justify-content:space-between; font-weight:700; color:#303646;">
        <span>⏰ ${s.time}</span>
        <span style="color:#D6A73A;">Weekday: ₹${s.weekday} | Weekend: ₹${s.weekend}</span>
      </div>
      <div style="font-size:0.85rem; color:#6b665c; margin-top:4px;">${s.meal}</div>
      <div style="font-size:0.8rem; color:#8c8269;">Kids (6-12 yrs): Weekday ₹${s.kidsWeekday} | Weekend ₹${s.kidsWeekend}</div>
    </div>
  `).join("");

  const incList = pkg.inclusions.map(i => `
    <li style="margin-bottom:8px; display:flex; gap:8px; font-size:0.9rem;">
      <span style="color:#D6A73A; font-weight:bold;">✔</span>
      <span>${i}</span>
    </li>
  `).join("");

  modalContent.innerHTML = `
    <p style="color:#72664D; font-weight:600; margin-bottom:14px;">${pkg.tagline}</p>
    <div style="background:#fff7ea; border-left:4px solid #D6A73A; padding:8px 12px; margin-bottom:16px; font-size:0.85rem; color:#303646;">
      <strong>Note:</strong> Prices vary based on the selected time slot. Weekday: 20% OFF with code SAVE20NOW. Weekend: 15% OFF applied.
    </div>
    <h4 style="margin-bottom:8px; font-family:'Montserrat',sans-serif; color:#303646;">All Time Slots & Rates:</h4>
    ${slotsList}
    <h4 style="margin:20px 0 8px 0; font-family:'Montserrat',sans-serif; color:#303646;">Included With Package:</h4>
    <ul style="list-style:none; padding-left:0;">${incList}</ul>
    <div style="margin-top:24px;">
      <button class="dayout-submit-btn" style="width:100%;" onclick="redirectToBookingEngine('${pkgKey}')">
        Proceed to Book This Package &rarr;
      </button>
    </div>
  `;

  modal.style.display = "flex";
}

function closePackageModal() {
  const modal = document.getElementById("package-modal");
  if (modal) modal.style.display = "none";
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  setupHeroCarousel();
  setupPricingToggle();
  renderAllPackages();
  setupGuestStepper();
  renderActivities("all");
  setupActivityFilters();
  setupFaqAccordion();
  updateDynamicPhoneNumbers();

  const dateInput = document.getElementById("booking-date-input");
  if (dateInput) {
    const today = new Date();
    dateInput.min = today.toISOString().split("T")[0];
    dateInput.value = today.toISOString().split("T")[0];
  }

  const form = document.getElementById("hero-booking-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const pkgSelect = document.getElementById("booking-package-select");
      redirectToBookingEngine(pkgSelect ? pkgSelect.value : "carnival");
    });
  }

  const modal = document.getElementById("package-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closePackageModal();
    });
  }
});
