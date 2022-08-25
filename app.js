//scroll magic
let controller;
let revealScene;


 //Custom Cursor
 function customCursor(e){
   let cursor = document.querySelector('.cursor')
   cursor.style.top = e.pageY + 'px';
   cursor.style.left = e.pageX + 'px';
}
window.addEventListener('mousemove', customCursor)

function revealAnimations(){
    //Initialize Controller
    controller = new ScrollMagic.Controller();
    
    const sections = document.querySelectorAll('.section');
    const navigationReveal = document.querySelector('.navigation');
    const headerReveal = document.querySelector('.header-content');

    
    
    const headerTimeline = gsap.timeline({defaults: {duration: 1.4, ease: "power2.out" }});
    headerTimeline.fromTo(navigationReveal, {y: '-100%', opacity: 0, scale: 0}, {y: 0, opacity: 1, scale: 1})
    headerTimeline.fromTo(headerReveal, {y: '-100%', opacity: 0, scale: 0}, {y: 0, opacity: 1, scale: 1})
    

}

    
    revealAnimations();

    