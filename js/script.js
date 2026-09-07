const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const backTop = document.querySelector(".back-top");
const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav-links a")];
const projectList = document.querySelector(".project-list");
const rideInShade = document.querySelector(".project-ride");

projectList.prepend(rideInShade);
document.querySelector(".project-ride .project-number").textContent =
  "01 / GEO + SOLAR";
document.querySelector(".project-asl .project-number").textContent =
  "02 / AI + COMPUTER VISION";
document.querySelector(".project-planit .project-number").textContent =
  "03 / FULL-STACK";
document.querySelector(".problem-solving strong").textContent = "100+";
document.querySelector(".problem-solving p:last-child").textContent =
  "I regularly practice algorithmic problem solving and have completed 100+ LeetCode problems.";

function updateChrome() {
  const scrolled = window.scrollY > 24;
  header.classList.toggle("scrolled", scrolled);
  backTop.classList.toggle("visible", window.scrollY > 500);
  const current = sections.reduce((active, section) => {
    if (window.scrollY + 180 >= section.offsetTop) return section.id;
    return active;
  }, "home");
  links.forEach((link) =>
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`,
    ),
  );
}

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
});

links.forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }),
);

backTop.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo(0, 0);
  window.location.hash = "top";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".reveal")
  .forEach((element) => observer.observe(element));
window.addEventListener("scroll", updateChrome, { passive: true });
updateChrome();
