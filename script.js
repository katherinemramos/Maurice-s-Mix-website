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

// Package buttons / auto contact form
document.querySelectorAll(".package-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const pkg = btn.dataset.package || "";
        const packageInput = document.getElementById("selectedPackage");
        const messageBox = document.querySelector('textarea[name="message"]');

        if (packageInput) packageInput.value = pkg;

        if (messageBox && !messageBox.value.trim()) {
            messageBox.value = `Hi! We are interested in the ${pkg} package.`;
        }

        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

        document.querySelector('input[name="name"]')?.focus();
    });
});

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