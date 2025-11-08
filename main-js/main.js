document.addEventListener("DOMContentLoaded", function () {
  (function () {
    const root = document.getElementById("nav-root");
    if (!root) return;

    // Detect base path dynamically (so it works anywhere)
    const pathParts = window.location.pathname.split("/");
    const projectIndex = pathParts.indexOf("DMDINSTALLATIONS");
    const basePath =
      projectIndex !== -1
        ? "/" + pathParts.slice(0, projectIndex + 1).join("/")
        : "";

    const resolvePath = (relative) => `${basePath}${relative}`;

    // --- Create Navbar ---
    const nav = document.createElement("nav");
    nav.className = "navbar";
    nav.setAttribute("aria-label", "Main Navigation");

    // --- Brand Logo ---
    const brand = document.createElement("a");
    brand.className = "brand";
    brand.href = resolvePath("/index.html");

    const img = document.createElement("img");
    img.src = resolvePath("/Images/INSTALLATIONS-2.png");
    img.alt = "DMD INSTALLATIONS";
    img.className = "logo";
    brand.appendChild(img);
    nav.appendChild(brand);

    // --- Service Button ---
    const servicebtn = document.createElement("a");
    servicebtn.className = "service-btn";
    servicebtn.href = resolvePath("/Booking-Page/HTML/Booking-Page.html");
    servicebtn.textContent = "Request Service";
    nav.appendChild(servicebtn);

    // --- Navigation Links ---
    const ul = document.createElement("ul");
    ul.className = "nav-list";

    const items = [
      { text: "Home", href: resolvePath("/index.html") },
      { text: "Services", href: resolvePath("/Services-Page/HTML/Services.html") },
      { text: "About", href: resolvePath("/About-Page/HTML/About.html") },
      { text: "Contact", href: resolvePath("/Booking-Page/HTML/Booking-Page.html") },
    ];

    items.forEach((it) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "nav-link";
      a.href = it.href;
      a.textContent = it.text;
      li.appendChild(a);
      ul.appendChild(li);
    });

    nav.appendChild(ul);
    root.appendChild(nav);

    // --- Highlight current page ---
    const currentFile = window.location.pathname.split("/").pop() || "index.html";
    nav.querySelectorAll(".nav-link").forEach((link) => {
      const linkFile = link.getAttribute("href").split("/").pop();
      if (linkFile === currentFile) {
        link.classList.add("active");
        Object.assign(link.style, {
          pointerEvents: "none",
          cursor: "default",
          boxShadow: "inset 2px 3px 7px #427cafff, inset -3px -3px 7px rgba(0,0,0,0.47)",
          padding: "10px 15px",
          borderRadius: "50px",
          backgroundColor: "transparent",
          color: "#839af6",
        });
      }
    });
  })();

  // --- Hamburger Menu Logic ---
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");
  const mobileOverlay = document.querySelector(".mobile-overlay");
  const body = document.body;

  hamburger?.addEventListener("click", function () {
    this.classList.toggle("active");
    navList.classList.toggle("active");
    mobileOverlay.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  mobileOverlay?.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
    this.classList.remove("active");
    body.classList.remove("menu-open");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navList.classList.remove("active");
      mobileOverlay.classList.remove("active");
      body.classList.remove("menu-open");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hamburger.classList.remove("active");
      navList.classList.remove("active");
      mobileOverlay.classList.remove("active");
      body.classList.remove("menu-open");
    }
  });

  // --- Back to Top Button ---
  const backToTopBtn = document.createElement("button");
  backToTopBtn.id = "backToTop";
  backToTopBtn.className = "back-to-top";
  backToTopBtn.innerHTML = "↑";
  backToTopBtn.setAttribute("aria-label", "Back to top");
  document.body.appendChild(backToTopBtn);

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
