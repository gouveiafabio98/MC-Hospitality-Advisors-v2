var scrollAlertEl = document.getElementById("scroll-alert");

var scrollAlert = setTimeout(function() {
    scrollAlertEl.classList.add("active");
}, 2500);

scrollAlertEl.status = true;

scroller.on('scroll', (instance) => {
    if (scrollAlertEl.status && instance.scroll.y != 0) {
        scrollAlertEl.status = false;
        clearTimeout(scrollAlert);
        if (scrollAlertEl.classList.contains("active"))
            scrollAlertEl.classList.remove("active");
    }
});