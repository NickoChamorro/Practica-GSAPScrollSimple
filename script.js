gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ease:'none', duration: 2});

const tl = gsap.timeline();

tl.from('.contenedor__seccion--2', {xPercent:-100});
tl.from('.contenedor__seccion--3', {xPercent:100});
tl.from('.contenedor__seccion--4', {yPercent:-100});

ScrollTrigger.create({
    animation: tl,
    trigger: '.contenedor',
    /* markers: true, */
    start: 'top top',
    end: '+=4000',
    pin: true,
    scrub: true
})