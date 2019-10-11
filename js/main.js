document.addEventListener("DOMContentLoaded", () => {
    let bars = document.querySelector(".burg");
    let nav = document.querySelector(".top-menu nav");
    let menu = document.querySelector(".top-menu");
    const nav_position = menu.offsetTop;
    bars.addEventListener("click", function(e) {
        bars.classList.toggle("clicked");
        if (bars.classList.contains("clicked")) {
            nav.style.right = "0px";
        } else {
            nav.style.right = "-105%";
        }
    });

    document.addEventListener("scroll", () => {
        if (window.scrollY > nav_position) {
            menu.classList.add("fixed-menu");
        } else {
            menu.classList.remove("fixed-menu");
        }
    });
});
