gsap.from(".logo", { 
    duration: 2,
    x: -50,
    opacity: 20,
    });
gsap.from(".btn", { 
   duration: 2,
   x: 50,
   opacity: 20,
 });
// gsap.from(".h4", { 
//    duration: 2,
//    x: -80,
//    opacity: 20,
//    stagger:0.6
// });
gsap.from(".video", { 
        duration: 2,
        x: 0,
        rotation: 360, 
     });
let li = document.querySelectorAll(".list li");
gsap.from(li, {
  duration: 2,
  y:-100,
  stagger:0.4
});
gsap.from(".accordion .accordion-item", {
    opacity:0,
    duration: 2,
    y: -200,
    stagger: 0.8  

});
gsap.from(".v-one ,.v2-one" ,{
   duration:2,
   x:-50,
});
gsap.from(".v-middle ,.v2-middle",{
    duration:2,
    y:-50,
 });
 gsap.from(".v-last , .v2-last",{
    duration:2,
    x:50,
 });
 gsap.from(".v2-bottom",{
    duration:2,
    y:50,
 });

 gsap.from(".main-log .welcome", { 
    duration: 2,
    y: 10,
    opacity: 0, // Corrected opacity value
    stagger: 0.6
});
gsap.from(".butt",{
    duration:2,
    y:50,
 });

const accordionItems = document.querySelectorAll('.accordion-item');

// Add click event listener to each accordion item
accordionItems.forEach(item => {
const header = item.querySelector('.accordion-header');
const content = item.querySelector('.accordion-content');

header.addEventListener('click', function() {
    // Close all accordion items
    accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.accordion-content').classList.remove('active');
        }
    });

    // Toggle active class on this item
    item.classList.toggle('active');

    // Toggle active class on content
    content.classList.toggle('active');
});
});
