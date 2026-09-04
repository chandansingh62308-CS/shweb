// =====================================
// SANJAY HARDWARE
// Website JavaScript
// =====================================


// =====================================
// WHATSAPP NUMBER
// =====================================

// IMPORTANT:
// Replace this number with your real WhatsApp number.
//
// India example:
// 919876543210
//
// Do NOT use:
// +91 9876543210
// spaces
// brackets
// dashes

const whatsappNumber = "9413518252";


// =====================================
// PRODUCT WHATSAPP ENQUIRY
// =====================================

function enquireProduct(productName) {

    const message =
        "Hello Sanjay Hardware!%0A%0A" +
        "I want to enquire about:%0A" +
        productName +
        "%0A%0APlease share the price and availability.";

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message;

    window.open(whatsappURL, "_blank");
}


// =====================================
// GENERAL WHATSAPP BUTTON
// =====================================

document
    .getElementById("whatsappButton")
    .addEventListener("click", function(event) {

        event.preventDefault();

        const message =
            "Hello Sanjay Hardware!%0A%0A" +
            "I would like to enquire about your paints and hardware products.%0A%0A" +
            "Please share the price and availability.";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            message;

        window.open(whatsappURL, "_blank");

    });


// =====================================
// CALL BUTTON
// =====================================

document
    .getElementById("callButton")
    .addEventListener("click", function(event) {

        event.preventDefault();

        alert("We will connect your business phone number here.");

    }
);

// Customer Enquiry Form

document
    .getElementById("enquiryForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("customerName").value;

        const product =
            document.getElementById("productRequirement").value;

        const message =
            document.getElementById("customerMessage").value;

        const whatsappMessage =
            "Hello Sanjay Hardware!%0A%0A" +
            "Name: " + encodeURIComponent(name) + "%0A" +
            "Product: " + encodeURIComponent(product) + "%0A" +
            "Message: " + encodeURIComponent(message);

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            whatsappMessage;

        window.open(whatsappURL, "_blank");
    });

    function openWhatsApp() {
    const message =
        "Hello Sanjay Hardware!%0A%0A" +
        "I would like to know more about your products.";

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message;

    window.open(whatsappURL, "_blank");
}