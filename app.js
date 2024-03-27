const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');


window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=1')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');
  
    TL.play();
})
// bouton
// const b1 =document.querySelector("#btn-first b1");

// b1.addEventListener("click",() => {
//     console.log("Click !");
// });
//scroll event
const nav = document.querySelector("nav");
window.addEventListener("scroll", () =>{
console.log(window.scrollY);

if(window.scrollY>500){
    nav.style.top = 0 ;
} else {
    nav.style.top ="-80px"
}   
});
const footer = document.querySelector("footer-page");
window.addEventListener("scroll", () =>{
console.log(window.scrollY);

if(window.scrollY>500){
    nav.style.top = 0 ;
} else {
    nav.style.top ="-80px"
}   
});
