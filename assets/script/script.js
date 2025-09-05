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

// Lógica para as abas da página de produtos
const tabButtons = document.querySelectorAll(".tab-button[role='tab']");
const tabPanels = document.querySelectorAll(".tab-panel[role='tabpanel']");

// Executa o código apenas se os botões de aba existirem na página atual
if (tabButtons.length > 0 && tabPanels.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Pega o painel alvo
            const targetPanelId = button.getAttribute("aria-controls");
            const targetPanel = document.getElementById(targetPanelId);

            // Remove a classe 'active' e 'aria-selected' de todos
            tabButtons.forEach(btn => {
                btn.classList.remove("active");
                btn.setAttribute("aria-selected", "false");
            });
            tabPanels.forEach(panel => {
                panel.classList.remove("active");
            });

            // Adiciona a classe 'active' e 'aria-selected' ao item clicado
            button.classList.add("active");
            button.setAttribute("aria-selected", "true");
            targetPanel.classList.add("active");
        });
    });
}