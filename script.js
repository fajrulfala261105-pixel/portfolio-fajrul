console.log("Portfolio Fajrul loaded successfully!");

// ==========================================
// NAVBAR ACTIVE SECTION
// ==========================================

const navLinks = document.querySelectorAll(".nav-menu a");
const sections = document.querySelectorAll("section[id]");

function setActiveLink(id) {
    navLinks.forEach(link => {
        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${id}`) {
            link.classList.add("active");
        }
    });
}


// Detect section when scrolling
const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
    }
);


// Observe every section
sections.forEach(section => {
    observer.observe(section);
});


// Handle navbar click
navLinks.forEach(link => {

    link.addEventListener("click", function () {

        const href = this.getAttribute("href");

        // Only for links inside index.html
        if (href && href.startsWith("#")) {

            const targetId = href.substring(1);

            setActiveLink(targetId);

        }

    });

});

// ==========================================
// NAVBAR CLICK
// ==========================================

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(nav => {
            nav.classList.remove("active");
        });

        this.classList.add("active");

    });

});

// ==========================================
// PROJECT FILTER
// ==========================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active to clicked button
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        projectCards.forEach(card => {

            const categories = card.getAttribute("data-category");

            if (filter === "all" || categories.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});