
document.addEventListener('DOMContentLoaded', () => {
  const accordionBtn = document.querySelector(".accordion-btn");
  const accordionPanel = document.querySelector(".accordion-panel");

  if (accordionBtn && accordionPanel) {
    accordionBtn.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true";
      // Toggle state
      this.setAttribute("aria-expanded", !isExpanded);
      accordionPanel.hidden = isExpanded;

    });
  }
});
const workToggles = document.querySelectorAll(".work-toggle");

workToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const expanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!expanded));
    details.hidden = expanded;
  });
});