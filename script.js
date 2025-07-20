// Smooth scroll (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

//skill animation
const skillSection = document.getElementById("skills");
const skills = document.querySelectorAll(".progress");

function animateSkills() {
  const rect = skillSection.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    skills.forEach(skill => {
      skill.style.width = skill.textContent;
    });
    window.removeEventListener("scroll", animateSkills);
  }
}

window.addEventListener("scroll", animateSkills);
//animation system
// const educationSection = document.getElementById("education");

// function animateEducation() {
//   const rect = educationSection.getBoundingClientRect();
//   if (rect.top < window.innerHeight - 100) {
//     educationSection.classList.add("show");
//     window.removeEventListener("scroll", animateEducation); // animate once
//   }
// }

// window.addEventListener("scroll", animateEducation);

// Handle form submission (example)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});
//cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

const links = document.querySelectorAll("a, button");

links.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});

