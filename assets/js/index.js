const sectionHero = document.querySelector(".section-hero");
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect();
const btnScrollTo = document.querySelector(".btn--learn-more");

const firstSection = document.querySelector(".section-exhibition");

const navBotton = document.querySelector(".btn--mobile-nav");

const obsCallback = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(obsCallback, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight.height}px`,
});

headerObserver.observe(sectionHero);

btnScrollTo.addEventListener("click", (e) => {
  e.preventDefault();
  const sec = firstSection.getBoundingClientRect();
  console.log(sec);
  // window.scrollTo({
  // 	left:sec.left+window.pageXOffset,
  // 	top:sec.top+window.pageYOffset,
  // 	behavior:"smooth"
  // })

  firstSection.scrollIntoView({ behavior: "smooth" });
});


navBotton.addEventListener("click",()=>{
	header.classList.toggle("nav-open")
})


const accordion = document.querySelectorAll(".item");

accordion.forEach((elemt) => {
  elemt.addEventListener("click", (e) => {
    e.target.classList.toggle("open");
  });
});


