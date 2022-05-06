function mailTo() {
    window.location.href = 'mailto:rita@mchospitalityadvisors.com'
}

function contacts() {
    window.location.href = 'contacts.html'
}

function updateVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

updateVh();

window.addEventListener('resize', (event) => {
    updateVh();
    onScrollMenu(scroller.scroll.instance.scroll.y);
    scrollerMenu();
});


window.addEventListener('load', (event) => {
    document.body.classList.remove("preload");
});

AOS.init();

const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

scroller.on('scroll', (instance) => {
    onScrollMenu(instance.scroll.y);
});

var previousY = 0,
    currentY = 0;

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        currentY = scroller.scroll.instance.scroll.y;
        if (currentY >= previousY) {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        } else if (!entry.isIntersecting) {
            entry.target.classList.remove('aos-animate');
        }
        previousY = currentY;
    });
});

document.querySelectorAll('[data-aos]').forEach(aosElem => {
    observer.observe(aosElem)
});

window.onload = function() {
    scroller.update();
}

function scrollerMenu() {
    if (!menu.classList.contains("active")) {
        scroller.start();
        onScrollMenu(scroller.scroll.instance.scroll.y);
    } else {
        scroller.stop();
        if (nav.classList.contains("scroll")) {
            nav.classList.remove("scroll");
        }
    }
}