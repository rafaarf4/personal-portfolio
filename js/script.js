const sections = document.querySelectorAll("section[id], article[id]");
const navLinks = document.querySelectorAll("nav a");
const header = document.querySelector("header");
const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => item.classList.remove("active"));

        link.classList.add("active");

    });

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

const observer = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {

        threshold: 0.15,

        rootMargin: "0px 0px -80px 0px"

    }

);

const hiddenElements = document.querySelectorAll(

    ".hero-content, .hero-image, article, aside, .about-card, .skill-card, .project"

);

hiddenElements.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("show-btn");

    } else {

        scrollBtn.classList.remove("show-btn");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

const counters = document.querySelectorAll(".stat-card h2");

const counterObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = parseInt(counter.innerText);

                let count = 0;

                const speed = target / 50;

                const updateCounter = () => {

                    if (count < target) {

                        count += speed;

                        counter.innerText = Math.ceil(count) + "+";

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText = target + "+";

                    }

                };

                updateCounter();

                observer.unobserve(counter);

            }

        });

    },

    {

        threshold: 1

    }

);

counters.forEach((counter) => {

    counterObserver.observe(counter);

});

const cards = document.querySelectorAll(

    ".about-card, .skill-card, .project"

);

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

    });

});

console.log("%cPortfolio Loaded Successfully 🚀", "color:#6366f1;font-size:14px;font-weight:bold;");