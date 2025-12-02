// js/script.js

(function () {
  // This will run after HTML is parsed because we used `defer`

  // 1. Footer handling
  var footer = document.querySelector('footer');

  if (footer) {
    var currentYear = new Date().getFullYear();
    var copyrightText = '&copy; ' + currentYear + ' ';

    footer.insertAdjacentHTML('afterbegin', copyrightText);
  } else {
    console.warn('Footer element not found in the DOM');
  }

  // 2. Black Friday banner handling
  var nav = document.querySelector('header nav');

  if (nav) {
    var bannerHTML = `
      <div class="black-friday-banner">
        🔥 BLACK FRIDAY SALE! Get 50% OFF with code 
        <strong>BLACKFRIDAY50</strong> 🔥
      </div>
    `;

    nav.insertAdjacentHTML('beforebegin', bannerHTML);
    console.log('Black Friday banner inserted above nav');
  } else {
    console.warn('Header nav not found in the DOM');
  }
})();
