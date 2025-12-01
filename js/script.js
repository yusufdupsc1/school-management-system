// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the footer element
    var footer = document.querySelector('footer');
    
    // Get the current year
    var currentYear = new Date().getFullYear();
    
    // Create the copyright text
    var copyrightText = '&copy; ' + currentYear + ' ';
    
    // Add the copyright to the footer using insertAdjacentHTML
    footer.insertAdjacentHTML('afterbegin', copyrightText);

    // Create Black Friday banner
    var header = document.querySelector('header');
    var nav = document.querySelector('header nav');
    
    // Create the banner using template literal
    var bannerHTML = `<div class="black-friday-banner">🔥 BLACK FRIDAY SALE! Get 50% OFF with code <strong>BLACKFRIDAY50</strong> 🔥</div>`;
    
    // Insert banner before nav using insertAdjacentHTML
    nav.insertAdjacentHTML('beforebegin', bannerHTML);
});
