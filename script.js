// ===================================
// ELVIS ELECTRONIC GADGETS
// WEBSITE INTERACTIONS
// ===================================

// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
const isOpen = navMenu.classList.toggle("open");

menuToggle.setAttribute("aria-expanded", String(isOpen));
menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close the mobile menu after clicking a link.

navMenu.querySelectorAll("a").forEach(link => {
link.addEventListener("click", () => {
navMenu.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
});

});

// 2. PRODUCT BUTTONS

const productButtons = document.querySelectorAll(".product-button");

productButtons.forEach(button => {
button.addEventListener("click", () => {
const product = button.dataset.product;

    alert(
        "Welcome to ELVIS ELECTRONIC GADGETS!\n\n" +
        "You selected: " + product +
        "\n\nOur full product catalogue will be added in the next stage."
    );
});

});

// 3. WHATSAPP CONTACT
// Replace this example number with your own.
// Use your international country code without + or spaces.
// For Nigeria, the country code is 234.

const WHATSAPP_NUMBER = "2349060701958";

const whatsappButton = document.getElementById("whatsappButton");

whatsappButton.addEventListener("click", event => {
event.preventDefault();

if (!/^234\d{10}$/.test(WHATSAPP_NUMBER)) {
    alert(
        "Please configure your WhatsApp number in script.js first."
    );

    return;
}

const message =
    "Hello ELVIS ELECTRONIC GADGETS! " +
    "I would like to enquire about your gadgets.";

const whatsappURL =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

window.open(whatsappURL, "_blank", "noopener,noreferrer");

});

// 4. AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
new Date().getFullYear();

// 5. WELCOME MESSAGE IN THE CONSOLE

console.log(
"Welcome to ELVIS ELECTRONIC GADGETS. " +
"Power your world. Experience the future."
);
