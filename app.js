const edu = document.querySelector(".edu-btn");
const edu_scr = document.querySelector(".main3");
const proj = document.querySelector(".proj-btn");
const proj_scr = document.querySelector(".main4");
const int_scr = document.querySelector(".interest");
const int = document.querySelector(".int-btn");
const cont = document.querySelector(".cont-btn");
const cont_scr = document.querySelector("footer");
ScrollReveal().reveal(".greet", { delay: 500 });
ScrollReveal().reveal(".abt", { delay: 700 });
ScrollReveal().reveal(".edu-top", { delay: 500 });
ScrollReveal().reveal(".edu-ul", { delay: 700 });
ScrollReveal().reveal(".main4-h2", { delay: 500 });
ScrollReveal().reveal(".main4-content", { delay: 700 });

edu.addEventListener("click", () => {
  edu_scr.scrollIntoView();
});
int.addEventListener("click", () => {
  int_scr.scrollIntoView();
});
proj.addEventListener("click", () => {
  proj_scr.scrollIntoView();
});
cont.addEventListener("click", () => {
  cont_scr.scrollIntoView();
});
