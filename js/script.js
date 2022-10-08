const nav = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");

nav.addEventListener("click", () => {
  headerEL.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      headerEL.classList.toggle("nav-open");
    }
  });
});

////////////////////////////////////////////////////////////////////
//////Sticky nav

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    // console.log(ent)
    if(ent.isIntersecting === false) {
      document.body.classList.add('sticky')
    }else {
      document.body.classList.remove('sticky')
    }
  },
  {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px'
  }
);
observer.observe(sectionHeroEl);
