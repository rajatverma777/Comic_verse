
document.addEventListener('DOMContentLoaded', () => {
  // 1. Define the HTML for the new layout elements
  const layoutHTML = `
    <button class="hamburger-btn" id="hamburger-btn" aria-label="Open menu" aria-expanded="false">
      <i class="fa-solid fa-bars"></i>
    </button>

    <div class="overlay" id="overlay"></div>

    <aside class="sidebar" id="sidebar" aria-labelledby="hamburger-btn">
      <div class="sidebar-inner">
        <div class="sidebar-logo">
          ComicVerse <span class="accent">Hub</span>
        </div>

        <nav class="sidebar-nav" aria-label="Main navigation">
          <a href="index.html" class="nav-home">
            <i class="fa-solid fa-house"></i> Home
          </a>
          <a href="browse.html" class="nav-browse">
            <i class="fa-solid fa-compass"></i> Browse
          </a>
          <a href="wishlist.html" class="">
          <i class="fa-solid fa-heart"></i>Wishlist
          </a>
          <a href="cart.html" class="nav-cart">
            <i class="fa-solid fa-cart-shopping"></i> Cart 
            <span id="cart-badge" class="badge"></span>
          </a>
        </nav>

        <div class="sidebar-footer">
          <div class="footer-grid">
          <div class="footer-section">
              <h4>Contact</h4>
              <div class="footer-links">
                <a href="#">Support</a>
                <a href="#">Feedback</a>
                <a href="#">Help Center</a>
              </div>
            <div class="footer-section">
              <h4>About ComicVerse</h4>
              <p>ComicVerse Hub is a curated showcase of dynamic comics discover new stories, browse iconic series, and enjoy a vibrant world of heroes, art, and imagination.</p>
            </div>
            </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; <span id="year"></span> ComicVerse Hub</p>
            <div class="social-inline">
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="YouTube">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  `;

  // 2. Inject the HTML into the <body>
  document.body.insertAdjacentHTML('afterbegin', layoutHTML);

  // 3. Get references to the new elements
  const sidebar = document.getElementById('sidebar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const overlay = document.getElementById('overlay');
  const yearSpan = document.getElementById('year');

  // 4. Set footer year
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 5. Create toggle function
  const toggleSidebar = () => {
    const isOpen = sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
    if (isOpen) {
      hamburgerBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
      hamburgerBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  };

  // 6. Add event listeners
  hamburgerBtn.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', toggleSidebar);

  // 7. Highlight the active page link
  try {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage.startsWith('index') || currentPage === '') {
      document.querySelector('.nav-home').classList.add('active');
    } else if (currentPage.startsWith('browse') || currentPage.startsWith('comic-detail')) {
      document.querySelector('.nav-browse').classList.add('active');
    } else if (currentPage.startsWith('cart')) {
      document.querySelector('.nav-cart').classList.add('active');
    }
  } catch (e) {
    console.warn("Could not highlight active page link.", e);
  }

  // 8. Call updateCartBadge (which is in app.js)
  if (typeof updateCartBadge === 'function') {
    updateCartBadge();
  } else {
    console.warn("updateCartBadge() function not found.");
  }
});