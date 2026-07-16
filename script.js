/*
  Project SINAG static website
  Edit content here. No framework needed.
  To connect the Facebook button, replace the link below with the official page URL.
*/

const FB_PAGE_URL = "https://www.facebook.com/DILGProjectSINAG";

//https://forms.gle/qcPESn5hdvCLvVTh9

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
  {
    icon: "💼",
    title: "Livelihood & Skills Development",
    text: "Support employability, local livelihood, youth skills, productivity, and safe community-based work opportunities.",
  },
];


/*
  Barangay Gallery / Slideshow
  HOW TO ADD MORE PHOTOS:
  1. Put your image inside assets/gallery/barangay-folder-name/
  2. Add a new photo object inside the correct album's photos array.
  3. For a new barangay, copy one whole album block and change barangay, activity, description, and photos.
*/
const barangayAlbums = [
  {
    barangay: "Barangay Pandan",
    activity: "Bayanihan Clean-Up Drive",
    description:
      "Community members and volunteers working together for a cleaner and more active barangay.",
    photos: [
      {
        src: "assets/gallery/pandan/brgy-pandan.jpg",
        alt: "Project SINAG Bayanihan Clean-Up Drive activity in Barangay Pandan",
        caption: "Clean-up drive and community action",
      },
      {
        src: "assets/gallery/pandan/pandan-02.jpg",
        alt: "Project SINAG Bayanihan Clean-Up Drive activity in Barangay Pandan",
        caption: "Clean-up drive and community action",
      },
      {
        src: "assets/gallery/pandan/pandan-03.jpg",
        alt: "Project SINAG Bayanihan Clean-Up Drive activity in Barangay Pandan",
        caption: "Clean-up drive and community action",
      },
      {
        src: "assets/gallery/pandan/pandan-04.jpg",
        alt: "Project SINAG Bayanihan Clean-Up Drive activity in Barangay Pandan",
        caption: "Clean-up drive and community action",
      },
      {
        src: "assets/gallery/pandan/pandan-05.jpg",
        alt: "Project SINAG Bayanihan Clean-Up Drive activity in Barangay Pandan",
        caption: "Clean-up drive and community action",
      },
      {
        src: "assets/gallery/pandan/pandan-06.jpg",
        alt: "Project SINAG Bayanihan Clean-Up Drive activity in Barangay Pandan",
        caption: "Clean-up drive and community action",
      },
      {
        src: "assets/gallery/pandan/pandan-07.jpg",
        alt: "Project SINAG Bayanihan Clean-Up Drive activity in Barangay Pandan",
        caption: "Clean-up drive and community action",
      },
      {
        src: "assets/gallery/pandan/pandan-08.jpg",
        alt: "Project SINAG Bayanihan Clean-Up Drive activity in Barangay Pandan",
        caption: "Clean-up drive and community action",
      },
      {
        src: "assets/gallery/pandan/pandan-09.jpg",
        alt: "Project SINAG Bayanihan Clean-Up Drive activity in Barangay Pandan",
        caption: "Clean-up drive and community action",
      },
      {
        src: "assets/gallery/pandan/pandan-10.jpg",
        alt: "Project SINAG Bayanihan Clean-Up Drive activity in Barangay Pandan",
        caption: "Clean-up drive and community action",
      },
      {
        src: "assets/gallery/pandan/pandan-11.jpg",
        alt: "Project SINAG Bayanihan Clean-Up Drive activity in Barangay Pandan",
        caption: "Clean-up drive and community action",
      },
      {
        src: "assets/gallery/pandan/pandan-12.jpg",
        alt: "Project SINAG Bayanihan Clean-Up Drive activity in Barangay Pandan",
        caption: "Clean-up drive and community action",
      },
      {
        src: "assets/gallery/pandan/pandan-13.jpg",
        alt: "Project SINAG Bayanihan Clean-Up Drive activity in Barangay Pandan",
        caption: "Clean-up drive and community action",
      },
      {
        src: "assets/gallery/pandan/pandan-14.jpg",
        alt: "Project SINAG Bayanihan Clean-Up Drive activity in Barangay Pandan",
        caption: "Clean-up drive and community action",
      },
    ],
  },
  {
    barangay: "Barangay Malabanias",
    activity: "Bayanihan Clean-Up Drive and Volunteer Engagement",
    description:
      "Residents, partners, and volunteers joining hands to support local community initiatives through Project SINAG.",
    photos: [
      {
        src: "assets/gallery/malabanias/malabanias-01.jpg",
        alt: "Project SINAG group photo with Barangay Malabanias residents and volunteers holding the campaign banner",
        caption: "Community partners and volunteers",
      },
      {
        src: "assets/gallery/malabanias/malabanias-02.jpg",
        alt: "Orientation and briefing during Project SINAG activity in Barangay Malabanias",
        caption: "Activity briefing and orientation",
      },
      {
        src: "assets/gallery/malabanias/malabanias-03.jpg",
        alt: "Community sharing and discussion during Project SINAG in Barangay Malabanias",
        caption: "Community sharing and engagement",
      },
      {
        src: "assets/gallery/malabanias/malabanias-04.jpg",
        alt: "Project SINAG participants and volunteers preparing cleaning tools in Barangay Malabanias",
        caption: "Volunteers preparing for clean-up action",
      },
      {
        src: "assets/gallery/malabanias/malabanias-04.jpg",
        alt: "Project SINAG participants and volunteers preparing cleaning tools in Barangay Malabanias",
        caption: "Volunteers preparing for clean-up action",
      },
      {
        src: "assets/gallery/malabanias/malabanias-05.jpg",
        alt: "Project SINAG participants and volunteers preparing cleaning tools in Barangay Malabanias",
        caption: "Volunteers preparing for clean-up action",
      },
      {
        src: "assets/gallery/malabanias/malabanias-06.jpg",
        alt: "Project SINAG participants and volunteers preparing cleaning tools in Barangay Malabanias",
        caption: "Volunteers preparing for clean-up action",
      },
      {
        src: "assets/gallery/malabanias/malabanias-07.jpg",
        alt: "Project SINAG participants and volunteers preparing cleaning tools in Barangay Malabanias",
        caption: "Volunteers preparing for clean-up action",
      },
      {
        src: "assets/gallery/malabanias/malabanias-08.jpg",
        alt: "Project SINAG participants and volunteers preparing cleaning tools in Barangay Malabanias",
        caption: "Volunteers preparing for clean-up action",
      },
      {
        src: "assets/gallery/malabanias/malabanias-09.jpg",
        alt: "Project SINAG participants and volunteers preparing cleaning tools in Barangay Malabanias",
        caption: "Volunteers preparing for clean-up action",
      },
      {
        src: "assets/gallery/malabanias/malabanias-10.jpg",
        alt: "Project SINAG participants and volunteers preparing cleaning tools in Barangay Malabanias",
        caption: "Volunteers preparing for clean-up action",
      },
      {
        src: "assets/gallery/malabanias/malabanias-11.jpg",
        alt: "Project SINAG participants and volunteers preparing cleaning tools in Barangay Malabanias",
        caption: "Volunteers preparing for clean-up action",
      },
      {
        src: "assets/gallery/malabanias/malabanias-12.jpg",
        alt: "Project SINAG participants and volunteers preparing cleaning tools in Barangay Malabanias",
        caption: "Volunteers preparing for clean-up action",
      },
    ],
  },
  {
    barangay: "Barangay Ninoy Aquino",
    activity: "Community Participation",
    description:
      "Strengthening citizen involvement through simple, visible, and collective action.",
    photos: [
      {
        src: "assets/gallery/ninoy-aquino/brgy-ninoy-aquino.jpg",
        alt: "Project SINAG activity in Barangay Ninoy Aquino",
        caption: "Community participation and bayanihan",
      },
      {
        src: "assets/gallery/ninoy-aquino/ninoy-02.jpg",
        alt: "Project SINAG activity in Barangay Ninoy Aquino",
        caption: "Community participation and bayanihan",
      },
      {
        src: "assets/gallery/ninoy-aquino/ninoy-03.jpg",
        alt: "Project SINAG activity in Barangay Ninoy Aquino",
        caption: "Community participation and bayanihan",
      },
      {
        src: "assets/gallery/ninoy-aquino/ninoy-04.jpg",
        alt: "Project SINAG activity in Barangay Ninoy Aquino",
        caption: "Community participation and bayanihan",
      },
      {
        src: "assets/gallery/ninoy-aquino/ninoy-05.jpg",
        alt: "Project SINAG activity in Barangay Ninoy Aquino",
        caption: "Community participation and bayanihan",
      },
      {
        src: "assets/gallery/ninoy-aquino/ninoy-06.jpg",
        alt: "Project SINAG activity in Barangay Ninoy Aquino",
        caption: "Community participation and bayanihan",
      },
      {
        src: "assets/gallery/ninoy-aquino/ninoy-07.jpg",
        alt: "Project SINAG activity in Barangay Ninoy Aquino",
        caption: "Community participation and bayanihan",
      },
      {
        src: "assets/gallery/ninoy-aquino/ninoy-08.jpg",
        alt: "Project SINAG activity in Barangay Ninoy Aquino",
        caption: "Community participation and bayanihan",
      },
      {
        src: "assets/gallery/ninoy-aquino/ninoy-09.jpg",
        alt: "Project SINAG activity in Barangay Ninoy Aquino",
        caption: "Community participation and bayanihan",
      },
      {
        src: "assets/gallery/ninoy-aquino/ninoy-10.jpg",
        alt: "Project SINAG activity in Barangay Ninoy Aquino",
        caption: "Community participation and bayanihan",
      },
      {
        src: "assets/gallery/ninoy-aquino/ninoy-11.jpg",
        alt: "Project SINAG activity in Barangay Ninoy Aquino",
        caption: "Community participation and bayanihan",
      },
      {
        src: "assets/gallery/ninoy-aquino/ninoy-12.jpg",
        alt: "Project SINAG activity in Barangay Ninoy Aquino",
        caption: "Community participation and bayanihan",
      },
      {
        src: "assets/gallery/ninoy-aquino/ninoy-13.jpg",
        alt: "Project SINAG activity in Barangay Ninoy Aquino",
        caption: "Community participation and bayanihan",
      },
      {
        src: "assets/gallery/ninoy-aquino/ninoy-14.jpg",
        alt: "Project SINAG activity in Barangay Ninoy Aquino",
        caption: "Community participation and bayanihan",
      },
    ],
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
    number: "SDG 8",
    title: "Decent Work and Economic Growth",
    target: "Promote productive employment, decent work, local livelihood, entrepreneurship, and safe opportunities for all.",
    household: [
      "Support family members in learning practical skills such as digital literacy, budgeting, repair, food preparation, or small business basics.",
      "Buy from local vendors and small community businesses when possible.",
      "Practice responsible budgeting, saving, and simple livelihood planning at home.",
      "Encourage youth and adults to join skills training, job fairs, and livelihood seminars.",
      "Promote safe, respectful, and fair work habits in any household or family business.",
    ],
    community: [
      "Organize skills training, livelihood orientation, and entrepreneurship workshops.",
      "Coordinate job-matching, local employment referrals, or career guidance with partner offices and stakeholders.",
      "Support community markets, local products, and micro-enterprise initiatives.",
      "Invite volunteers to assist in digital forms, documentation, registration, and training support.",
      "Promote safe volunteer work, proper task assignment, and recognition of community contributions.",
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
    text: "Understand how food sustainability, waste reduction, disaster preparedness, climate action, gender equality, and livelihood development affect your barangay.",
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
const barangayGallery = document.querySelector("#barangayGallery");
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


function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderBarangayGallery() {
  if (!barangayGallery) return;

  barangayGallery.innerHTML = barangayAlbums
    .map((album, albumIndex) => {
      const photos = album.photos || [];
      const hasMultiplePhotos = photos.length > 1;
      const safeBarangay = escapeHtml(album.barangay);
      const safeActivity = escapeHtml(album.activity);
      const safeDescription = escapeHtml(album.description);

      const slides = photos
        .map((photo, photoIndex) => {
          const safeCaption = escapeHtml(photo.caption || `${album.barangay} photo ${photoIndex + 1}`);
          const safeAlt = escapeHtml(photo.alt || `${album.barangay} Project SINAG activity photo`);
          const safeSrc = escapeHtml(photo.src);

          return `
            <figure class="gallery-slide ${photoIndex === 0 ? "active" : ""}" data-gallery-slide>
              <img src="${safeSrc}" alt="${safeAlt}" loading="${photoIndex === 0 ? "eager" : "lazy"}" />
              <figcaption>${safeCaption}</figcaption>
            </figure>
          `;
        })
        .join("");

      const controls = hasMultiplePhotos
        ? `
          <button class="slide-control slide-control-prev" type="button" data-slide-control="prev" aria-label="Previous ${safeBarangay} photo">‹</button>
          <button class="slide-control slide-control-next" type="button" data-slide-control="next" aria-label="Next ${safeBarangay} photo">›</button>
          <div class="slide-dots" aria-label="${safeBarangay} photo controls">
            ${photos
              .map(
                (_, photoIndex) => `
                  <button
                    class="slide-dot ${photoIndex === 0 ? "active" : ""}"
                    type="button"
                    data-slide-dot="${photoIndex}"
                    aria-label="Show ${safeBarangay} photo ${photoIndex + 1}"
                  ></button>
                `
              )
              .join("")}
          </div>
        `
        : "";

      return `
        <article class="gallery-card barangay-card reveal" data-gallery-card data-album-index="${albumIndex}" data-active-slide="0">
          <div class="barangay-slideshow" aria-label="${safeBarangay} photo slideshow">
            <div class="gallery-slide-track">
              ${slides}
            </div>
            ${controls}
            <span class="album-count">${photos.length} ${photos.length === 1 ? "photo" : "photos"}</span>
          </div>
          <div class="gallery-card-content">
            <span>${safeBarangay}</span>
            <h3>${safeActivity}</h3>
            <p>${safeDescription}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function showBarangaySlide(card, targetIndex) {
  const slides = [...card.querySelectorAll("[data-gallery-slide]")];
  const dots = [...card.querySelectorAll("[data-slide-dot]")];
  if (!slides.length) return;

  const nextIndex = (targetIndex + slides.length) % slides.length;

  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === nextIndex);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === nextIndex);
    dot.setAttribute("aria-current", index === nextIndex ? "true" : "false");
  });

  card.dataset.activeSlide = String(nextIndex);
}

function setupBarangaySlideshows() {
  document.querySelectorAll("[data-gallery-card]").forEach((card) => {
    const slides = [...card.querySelectorAll("[data-gallery-slide]")];
    if (slides.length <= 1) return;

    let autoSlideTimer = null;

    const currentIndex = () => Number(card.dataset.activeSlide || 0);
    const stopAutoSlide = () => {
      if (autoSlideTimer) clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    };
    const startAutoSlide = () => {
      stopAutoSlide();
      autoSlideTimer = setInterval(() => {
        showBarangaySlide(card, currentIndex() + 1);
      }, 5000);
    };

    card.querySelectorAll("[data-slide-control]").forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.dataset.slideControl === "next" ? 1 : -1;
        showBarangaySlide(card, currentIndex() + direction);
        startAutoSlide();
      });
    });

    card.querySelectorAll("[data-slide-dot]").forEach((button) => {
      button.addEventListener("click", () => {
        showBarangaySlide(card, Number(button.dataset.slideDot));
        startAutoSlide();
      });
    });

    card.addEventListener("mouseenter", stopAutoSlide);
    card.addEventListener("mouseleave", startAutoSlide);
    card.addEventListener("focusin", stopAutoSlide);
    card.addEventListener("focusout", startAutoSlide);

    startAutoSlide();
  });
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
  renderBarangayGallery();
  renderSteps();
  renderSdgTabs();
  selectSdg(0);
  setFacebookLinks();
  setupMobileNav();
  setupBackToTop();
  setupQuizFrameResize();
  setupBarangaySlideshows();
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