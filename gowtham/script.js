// ===============================
// Typing Animation
// ===============================

const words = [
    "B.Tech IT Student",
    "Java Developer",
    "UI/UX Designer",
    "Web Developer",
    "Canva Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);
    } else {

        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length + 1) {

        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Scroll Reveal Animation
// ===============================

const sections = document.querySelectorAll(".section, .hero");

function revealSections() {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 120) {

            section.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// ===============================
// Active Navbar
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const top = section.offsetTop - 150;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");
        }

    });

});


// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "80px";
        nav.style.right = "20px";
        nav.style.background = "#111";
        nav.style.padding = "20px";
        nav.style.borderRadius = "10px";
        nav.style.gap = "20px";
    }

});


// ===============================
// Smooth Fade-In Cards
// ===============================

const cards = document.querySelectorAll(
".project-card,.skill-card,.timeline-box,.certificate-card,.internship-card,.about-box"
);

function cardAnimation() {

    cards.forEach((card, index) => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition =
                "0.7s ease " + (index * 0.08) + "s";
        }

    });

}

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

});

window.addEventListener("scroll", cardAnimation);
cardAnimation();


// ===============================
// Navbar Shadow
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 8px 30px rgba(255,255,255,.08)";

    } else {

        navbar.style.boxShadow = "none";
    }

});


// ===============================
// Button Hover Ripple
// ===============================

const buttons = document.querySelectorAll(".btn,.btn-outline");

buttons.forEach(button => {

    button.addEventListener("mousemove", e => {

        const x = e.offsetX;
        const y = e.offsetY;

        button.style.backgroundPosition = `${x}px ${y}px`;

    });

});


// ===============================
// Current Year (Optional)
// ===============================

const footer = document.querySelector("footer");

footer.innerHTML =
`<h3>© ${new Date().getFullYear()} Gowthamaraj K • All Rights Reserved</h3>`;