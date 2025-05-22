const els = document.querySelectorAll(".ukiyo");
els.forEach((el) => {
    const parallax = new Ukiyo(el);
});

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);