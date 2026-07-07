/*
  Project SINAG static website
  Edit content here. No framework needed.
  To connect the Facebook button, replace the link below with the official page URL.
*/

const FB_PAGE_URL = "https://forms.gle/qcPESn5hdvCLvVTh9";

const values = [
  {
    icon: "☀️",
    title: "Active Citizenry",
    text: "Encourages residents to participate in local programs, community action, and shared problem-solving.",
  },
  {
    icon: "🤝",
    title: "Bayanihan Spirit",
    text: "Strengthens cooperation among families, barangays, volunteers, and local partners.",
  },
  {
    icon: "🇵🇭",
    title: "Citizenship & Values Formation",
    text: "Promotes responsible governance, patriotism, discipline, and nation-building.",
  },
];

const focusAreas = [
  {
    icon: "🥬",
    title: "Food Sustainability",
    text: "Support household food planning, nutrition education, food sharing, and community gardens.",
  },
  {
    icon: "♻️",
    title: "Solid Waste Management",
    text: "Reduce waste through prevention, recycling, composting, reuse, and community clean-up drives.",
  },
  {
    icon: "🛡️",
    title: "Disaster Preparedness",
    text: "Prepare families and barangays through emergency kits, evacuation plans, and early warning systems.",
  },
  {
    icon: "🌱",
    title: "Climate Action",
    text: "Promote awareness, energy conservation, environmental clubs, green spaces, and climate workshops.",
  },
];

const sdgData = [
  {
    number: "SDG 2",
    title: "Zero Hunger",
    target: "End hunger and ensure access to safe, nutritious, and sufficient food all year round.",
    household: [
      "Plan meals, make a grocery list, and stick to it.",
      "Store food properly to extend shelf life.",
      "Cook at home using fresh ingredients.",
      "Share meals with family, friends, and neighbors.",
      "Support breastfeeding mothers and proper infant nutrition.",
    ],
    community: [
      "Create or participate in a community garden.",
      "Organize food sharing programs for those in need.",
      "Support or create food banks for vulnerable groups.",
      "Conduct nutrition education workshops or seminars.",
      "Support growth monitoring programs for children under five.",
    ],
  },
  {
    number: "SDG 5",
    title: "Gender Equality",
    target: "End all forms of discrimination against women and girls everywhere.",
    household: [
      "Practice respect, fairness, and shared responsibility at home.",
      "Encourage equal opportunities for girls and boys.",
      "Speak up against harmful jokes, stereotypes, and discrimination.",
      "Listen to and support family members who need help.",
    ],
    community: [
      "Organize gender sensitivity training.",
      "Establish mentorship programs for girls and young women.",
      "Facilitate dialogues on gender equality and women’s empowerment.",
      "Create safe spaces for women and girls.",
      "Support survivors and coordinate with local authorities and hotlines.",
    ],
  },
  {
    number: "SDG 11",
    title: "Sustainable Cities and Communities",
    target: "Reduce disaster impacts and help build safer, inclusive, resilient, and sustainable communities.",
    household: [
      "Prepare an emergency kit with food, water, medicine, flashlight, and first aid supplies.",
      "Create an evacuation plan with family members.",
      "Create a vertical garden or small green space at home.",
      "Participate in community garden projects.",
    ],
    community: [
      "Organize disaster risk reduction and management training.",
      "Establish early warning systems for floods, typhoons, and other hazards.",
      "Join park and community clean-up drives.",
      "Coordinate inclusive and accessible park designs with local authorities.",
    ],
  },
  {
    number: "SDG 12",
    title: "Responsible Consumption and Production",
    target: "Substantially reduce waste generation through prevention, reduction, recycling, and reuse.",
    household: [
      "Refuse single-use plastics like straws, bags, and cutlery.",
      "Set up recycling and composting at home.",
      "Reuse and repurpose items before throwing them away.",
      "Buy only what is needed and avoid food waste.",
    ],
    community: [
      "Organize community clean-up drives and events.",
      "Establish recycling programs for paper, plastic, glass, and metal.",
      "Encourage waste segregation in barangays and public spaces.",
      "Promote responsible consumption campaigns.",
    ],
  },
  {
    number: "SDG 13",
    title: "Climate Action",
    target: "Strengthen awareness, mitigation, and adaptation efforts against climate change.",
    household: [
      "Educate family members on climate change causes and impacts.",
      "Save energy by turning off unused lights and electronics.",
      "Use water wisely and avoid unnecessary consumption.",
      "Plant trees or maintain home greenery where possible.",
    ],
    community: [
      "Organize workshops on climate change mitigation and adaptation.",
      "Create environmental clubs or volunteer groups.",
      "Conduct tree planting and clean-up activities.",
      "Promote climate-safe and disaster-ready barangays.",
    ],
  },
];

const steps = [
  {
    title: "Learn the priority areas",
    text: "Understand how food sustainability, waste reduction, disaster preparedness, climate action, and gender equality affect your barangay.",
  },
  {
    title: "Start with household habits",
    text: "Practice small daily actions such as meal planning, waste segregation, energy saving, and emergency preparedness.",
  },
  {
    title: "Join community activities",
    text: "Participate in clean-up drives, workshops, community gardens, recycling programs, and barangay preparedness activities.",
  },
  {
    title: "Coordinate and ask questions",
    text: "Use the Facebook page for announcements, inquiries, event coordination, and other Project SINAG updates.",
  },
];

const valuesList = document.querySelector("#values-list");
const focusGrid = document.querySelector("#focus-grid");
const sdgTabs = document.querySelector("#sdg-tabs");
const sdgPanel = document.querySelector("#sdg-panel");
const stepsList = document.querySelector("#steps-list");
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const topButton = document.querySelector(".back-to-top");

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function renderValues() {
  valuesList.innerHTML = values
    .map(
      (item) => `
        <div class="value-item reveal">
          <span class="value-icon" aria-hidden="true">${item.icon}</span>
          <div>
            <strong>${item.title}</strong>
            <p>${item.text}</p>
          </div>
        </div>
      `
    )
    .join("");
}

function renderFocusAreas() {
  focusGrid.innerHTML = focusAreas
    .map(
      (item) => `
        <article class="focus-card reveal">
          <span class="focus-icon" aria-hidden="true">${item.icon}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderSteps() {
  stepsList.innerHTML = steps
    .map(
      (step, index) => `
        <article class="step-card reveal">
          <span class="step-number">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>${step.title}</h3>
            <p>${step.text}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderSdgTabs() {
  sdgTabs.innerHTML = "";

  sdgData.forEach((goal, index) => {
    const button = createElement("button", "sdg-tab", `${goal.number}: ${goal.title}`);
    button.type = "button";
    button.role = "tab";
    button.setAttribute("aria-selected", index === 0 ? "true" : "false");
    button.addEventListener("click", () => selectSdg(index));
    sdgTabs.appendChild(button);
  });
}

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function selectSdg(index) {
  const goal = sdgData[index];
  const tabs = [...document.querySelectorAll(".sdg-tab")];

  tabs.forEach((tab, tabIndex) => {
    tab.setAttribute("aria-selected", tabIndex === index ? "true" : "false");
  });

  sdgPanel.innerHTML = `
    <div class="sdg-header">
      <span class="sdg-number">${goal.number}</span>
      <h3>${goal.title}</h3>
      <p>${goal.target}</p>
    </div>
    <div class="activity-grid">
      <section class="activity-card">
        <h4>Household activities</h4>
        <ul class="activity-list">${listItems(goal.household)}</ul>
      </section>
      <section class="activity-card">
        <h4>Community activities</h4>
        <ul class="activity-list">${listItems(goal.community)}</ul>
      </section>
    </div>
  `;
}

function setFacebookLinks() {
  document.querySelectorAll(".fb-link").forEach((button) => {
    button.addEventListener("click", () => {
      if (FB_PAGE_URL.includes("REPLACE_WITH")) {
        alert("Please replace FB_PAGE_URL in script.js with the official Facebook page link.");
        return;
      }

      window.open(FB_PAGE_URL, "_blank", "noopener,noreferrer");
    });
  });
}

function setupMobileNav() {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a, button").forEach((item) => {
    item.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupBackToTop() {
  window.addEventListener("scroll", () => {
    topButton.classList.toggle("show", window.scrollY > 500);
  });

  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


function setupQuizFrameResize() {
  const quizFrame = document.querySelector("#sinagQuizFrame");
  if (!quizFrame) return;

  const MIN_HEIGHT = 560;
  const MAX_HEIGHT = 2200;
  const EXTRA_SPACE = 2;
  const CHANGE_LIMIT = 8;

  let lastHeight = 0;
  let pendingFrame = null;

  window.addEventListener("message", (event) => {
    if (event.source !== quizFrame.contentWindow) return;
    if (!event.data || event.data.type !== "sinagQuizHeight") return;

    const rawHeight = Number(event.data.height);
    if (!Number.isFinite(rawHeight) || rawHeight <= 0) return;

    const newHeight = Math.max(
      MIN_HEIGHT,
      Math.min(Math.ceil(rawHeight + EXTRA_SPACE), MAX_HEIGHT)
    );

    if (Math.abs(newHeight - lastHeight) < CHANGE_LIMIT) return;
    lastHeight = newHeight;

    if (pendingFrame) cancelAnimationFrame(pendingFrame);
    pendingFrame = requestAnimationFrame(() => {
      quizFrame.style.height = `${newHeight}px`;
    });
  });
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function init() {
  renderValues();
  renderFocusAreas();
  renderSteps();
  renderSdgTabs();
  selectSdg(0);
  setFacebookLinks();
  setupMobileNav();
  setupBackToTop();
  setupQuizFrameResize();
  setupRevealAnimation();
}

document.addEventListener("DOMContentLoaded", init);


// testimonies
const testimonies = [
  {
    name: "Juan Dela Cruz",
    role: "Resident Volunteer",
    photo: "assets/project-sinag-logo.png",
    message:
      "Project SINAG encouraged our community to work together and take part in keeping our surroundings clean, safe, and sustainable."
  },
  {
    name: "Maria Santos",
    role: "Community Member",
    photo: "assets/project-sinag-logo.png",
    message:
      "Through the clean-up drive and community activities, we learned that small actions can create a big impact when everyone participates."
  },
  
  {
    name: "Barangay Volunteer",
    role: "Project SINAG Participant",
    photo: "assets/project-sinag-logo.png",
    message:
      "The program helped promote discipline, bayanihan, and responsibility among residents, especially in caring for the environment."
  }
];

const testimonialsGrid = document.getElementById("testimonialsGrid");

if (testimonialsGrid) {
  testimonies.forEach(function (testimony) {
    const card = document.createElement("article");

    card.className = "testimony-card";

    card.innerHTML = `
      <img 
        src="${testimony.photo}" 
        alt="Photo of ${testimony.name}" 
        class="testimony-photo"
      >

      <p class="testimony-text">
        “${testimony.message}”
      </p>

      <div class="testimony-name">
        ${testimony.name}
      </div>

      <div class="testimony-role">
        ${testimony.role}
      </div>
    `;

    testimonialsGrid.appendChild(card);
  });
}