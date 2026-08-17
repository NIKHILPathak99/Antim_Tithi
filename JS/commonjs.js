document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");

    if (!footer) return;

    footer.innerHTML = `
        <div>
            <h1>AntimVidai</h1>
            <p>
                Guidance, pandits and samagri for Hindu after-death rituals,
                performed exactly as the shastras prescribe.
            </p>
        </div>

        <div>
            <h4>Rituals</h4>
            <p>13-Day Journey</p>
            <p>Asthi Visarjan</p>
            <p>Pind Daan</p>
            <p>Pitru Tarpan</p>
        </div>

        <div>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Samagri Kits</p>
            <p>FAQ</p>
            <p>Pitru Tarpan</p>
        </div>

        <div>
            <h4>Helpline</h4>
            <div>
                <a href="tel:+919876543210">
                    +91 98765 43210
                </a>
            </div>
            <p>
                Available 24 hours, all days including festivals.
            </p>
        </div>
    `;
});



const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("show");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        const icon = menuToggle.querySelector("i");

        if (isOpen) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });


    /* Close menu when a link is clicked */

    mainNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("show");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        });

    });


    /* Close menu when clicking outside */

    document.addEventListener("click", (event) => {

        if (
            !mainNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            mainNav.classList.remove("show");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

}