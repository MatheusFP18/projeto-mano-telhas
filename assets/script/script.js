const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

const tabButtons = document.querySelectorAll(".tab-button[role='tab']");
const tabPanels = document.querySelectorAll(".tab-panel[role='tabpanel']");

if (tabButtons.length > 0 && tabPanels.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Pega o painel alvo
            const targetPanelId = button.getAttribute("aria-controls");
            const targetPanel = document.getElementById(targetPanelId);

            tabButtons.forEach(btn => {
                btn.classList.remove("active");
                btn.setAttribute("aria-selected", "false");
            });
            tabPanels.forEach(panel => {
                panel.classList.remove("active");
            });

            button.classList.add("active");
            button.setAttribute("aria-selected", "true");
            targetPanel.classList.add("active");
        });
    });
}