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