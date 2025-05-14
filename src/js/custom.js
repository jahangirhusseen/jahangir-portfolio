const stickyTop = document.getElementById('stickyTop');
const scrollToTop = document.querySelector(".scrollTop");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu-item li a");

/******* sticky Header *******/ 

window.addEventListener('scroll',  () => {
  ( scrollY > 500 ? stickyTop.classList.add('header--fixed') : stickyTop.classList.remove('header--fixed'))
  (scrollY  > 100 ? scrollToTop.classList.add('scrollActive') : scrollToTop.classList.remove('scrollActive'))
})

/******* Highlight on Scroll *******/ 
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-menu");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active-menu");
    }
  });
});

/******* Highlight on Click *******/ 
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(item => item.classList.remove("active-menu"));
    link.classList.add("active-menu");
  });
});

/******* get last Year *******/
document.getElementById("year").textContent = new Date().getFullYear();

/******* typing effect text *******/
const text = "Web Designer & WordPress Developer";
    const el = document.getElementById("type");
    let i = 0, forward = true;

    function typeEffect() {
      el.textContent = forward ? text.slice(0, ++i) : text.slice(0, --i);
      if (i === text.length || i === 0) forward = !forward;
      setTimeout(typeEffect, forward ? 100 : 50);
    }
    typeEffect();

/******* AOS js integeted *******/
AOS.init();