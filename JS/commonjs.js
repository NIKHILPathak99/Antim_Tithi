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