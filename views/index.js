const navSlide = () => {
    const svg = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle Nav
    svg.addEventListener('click', () => {
    nav.classList.toggle('nav-active')

    //Animate Nav-links
    navLinks.forEach((link, index) =>{

    })
});
}

const app = ()=>{
    navSlide();

}

const tl = gsap.timeline({defaults: {ease: "power1.out"}})

tl.to(".hide-text", {y: "0%", duration: 1, stagger: 0.25});
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".intro", {y: "-100%", duration: 1} , "-=1");
tl.fromTo(".nav" , {opacity: 0}, {opacity: 1 , duration: 1});
tl.fromTo(".heading" , {opacity: 0}, {opacity: 1 , duration: 1}, "-=1");
