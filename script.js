console.log("script loaded");

// Mobile nav toggle
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

toggle?.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
});

//Close menu when clicking a link (mobile)
links?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click",() => {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
    });
});

//Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact inquiry autogen text
document.addEventListener("DOMContentLoaded", () => {
  console.log("script loaded");

  // Mobile nav toggle
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  toggle?.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Package buttons -> autofill form
  document.querySelectorAll(".package-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const pkg = btn.dataset.package || "";
      const packageInput = document.getElementById("selectedPackage"); // your <select>
      const messageBox = document.querySelector('textarea[name="message"]');

      // set dropdown
      if (packageInput) packageInput.value = pkg;

      // set message (always)
      if (messageBox) {
        messageBox.value = `Hi! We would like to book the ${pkg} package. Please let us know availability and next steps.`;
      }

      // scroll + focus
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      document.querySelector('input[name="name"]')?.focus();
    });
  });
});

// Dynamic Testimonials from Google Sheets
// Dynamic Testimonials from Google Sheets (Auto-fed by Google Form)
const SHEET_ID = "1psq6fecC5hObQsPdLP1Q3spYWbFPEyybv6AJmeIby5U";
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

async function loadTestimonials() {
    const container = document.getElementById("testimonial-container");
    if (!container) return;

    try {
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        
        // Strip Google's JSON wrapper to parse the pure data
        const json = JSON.parse(text.substring(47).slice(0, -2));
        const rows = json.table.rows;

        container.innerHTML = "";

        // Default Google Form columns:
        // [0] Timestamp | [1] Name | [2] Date | [3] Stars | [4] Review
        rows.forEach(row => {
            const name = row.c[1]?.v || "Happy Client";
            const date = row.c[2]?.v || "";
            const starsCount = parseInt(row.c[3]?.v, 10) || 5;
            const quote = row.c[4]?.v || "";

            if (!quote) return; // Skip empty rows

            const starsHtml = "★".repeat(starsCount);

            const card = document.createElement("article");
            card.className = "card";
            card.innerHTML = `
                <div class="stars" aria-label="${starsCount} out of 5 stars">${starsHtml}</div>
                <p class="quote">“${quote}”</p>
                <div class="who">
                    <strong>${name}</strong>
                    ${date ? `<span class="muted">${date}</span>` : ""}
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Could not load reviews:", error);
        container.innerHTML = "<p class='center muted'>Reviews currently unavailable.</p>";
    }
}

document.addEventListener("DOMContentLoaded", loadTestimonials);
