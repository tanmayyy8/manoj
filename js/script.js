document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");
});
document.addEventListener("DOMContentLoaded", function () {
    let backToTop = document.createElement("button");
    backToTop.innerHTML = "↑";
    backToTop.id = "backToTop";
    document.body.appendChild(backToTop);

    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.backgroundColor = "#ffc107";
    backToTop.style.color = "#212529";
    backToTop.style.border = "none";
    backToTop.style.padding = "10px 15px";
    backToTop.style.fontSize = "18px";
    backToTop.style.borderRadius = "5px";
    backToTop.style.cursor = "pointer";
    backToTop.style.display = "none";

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop(); // Get current page name
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Add active class
        }
    });
});
// Smooth Scrolling for internal links
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50, // Adjust offset if needed
                    behavior: "smooth"
                });
            }
        });
    });
});
// Navbar Scroll Effect
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Reveal Sections on Scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".reveal");
    const fadeElements = document.querySelectorAll(".fade-in");

    function revealOnScroll() {
        sections.forEach((section) => {
            if (section.getBoundingClientRect().top < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });

        fadeElements.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger on load
});
