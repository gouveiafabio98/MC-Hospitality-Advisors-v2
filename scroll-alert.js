var scrollAlertEl = document.getElementById("scroll-alert");

var scrollAlert = setTimeout(function() {
    scrollAlertEl.classList.add("active");
}, 2500);

scrollAlert.status = true;

scroller.on('scroll', (instance) => {
    if (scrollAlert.status) {
        scrollAlert = false;
        clearTimeout(scrollAlert);
    } else {
        scrollAlertEl.classList.remove("active");
    }
});