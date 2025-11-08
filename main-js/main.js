document.addEventListener("DOMContentLoaded", function () {
  (function () {
    const root = document.getElementById("nav-root");
    if (!root) return;

    const getRelativePath = (targetPath) => {
      const currentPage = window.location.pathname;
      if (currentPage === "/" || currentPage.endsWith("/index.html")) {
        return targetPath.startsWith("/") ? targetPath.substring(1) : targetPath;
      }
      const depth = currentPage.split("/").length - 2;
      if (depth === 0) {
        return targetPath.startsWith("/") ? targetPath.substring(1) : targetPath;
      } else {
        return "../".repeat(depth) + (targetPath.startsWith("/") ? targetPath.substring(1) : targetPath);
      }
    };

    const nav = document.createElement("nav");
    nav.className = "navbar";
    nav.setAttribute("aria-label", "Main Navigation");

    const brand = document.createElement("a");
    brand.className = "brand";
    brand.href = getRelativePath("index.html");

    const img = document.createElement("img");
    img.src = getRelativePath("Images/INSTALLATIONS-2.png");
    img.alt = "DMD INSTALLATIONS";
    img.className = "logo";
    brand.appendChild(img);
    nav.appendChild(brand);

    const servicebtn = document.createElement("a");
    servicebtn.className = "service-btn";
    servicebtn.href = getRelativePath("Booking-Page/HTML/Booking-Page.html");
    servicebtn.textContent = "Request Service";
    nav.appendChild(servicebtn);

    const ul = document.createElement("ul");
    ul.className = "nav-list";

    const items = [
      { text: "Home", href: getRelativePath("index.html") },
      { text: "Services", href: getRelativePath("Services-Page/HTML/Services.html") },
      { text: "About", href: getRelativePath("About-Page/HTML/About.html") },
      { text: "Contact", href: getRelativePath("Booking-Page/HTML/Booking-Page.html") },
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

    const currentFile = window.location.pathname.split("/").pop() || "index.html";
    nav.querySelectorAll(".nav-link").forEach((link) => {
      const linkFile = link.getAttribute("href").split("/").pop();
      if (linkFile === currentFile) {
        link.classList.add("active");
        link.style.pointerEvents = "none";
        link.style.cursor = "default";
        link.style.boxShadow = "inset 2px 3px 7px #427cafff, inset -3px -3px 7px rgba(0, 0, 0, 0.47)";
        link.style.padding = "10px 15px";
        link.style.borderRadius = "50px";
        link.style.backgroundColor = "transparent";
        link.style.color = "#839af6";
      }
    });
  })();

  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");
  const mobileOverlay = document.querySelector(".mobile-overlay");
  const body = document.body;

  if (hamburger && navList && mobileOverlay) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      navList.classList.toggle("active");
      mobileOverlay.classList.toggle("active");
      body.classList.toggle("menu-open");
    });

    mobileOverlay.addEventListener("click", function () {
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
  }

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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  backToTopBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
});
