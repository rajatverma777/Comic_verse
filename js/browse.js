// Browse Page — Only Title Search + Grid Render
(function () {
  if (!window.COMICS) return;

  const grid = document.getElementById('catalogGrid');
  const searchInput = document.getElementById('searchInput');

  let current = [...window.COMICS];

  // Title-only search
  function applyFilters(list) {
    let filtered = [...list];

    const query = searchInput.value.trim().toLowerCase();
    if (query !== "") {
      filtered = filtered.filter(c =>
        c.title.toLowerCase().includes(query)
      );
    }

    return filtered;
  }

  // Render comics
  function render() {
    current = applyFilters([...window.COMICS]);

    grid.innerHTML = current.map(c => cardHTML(c)).join('');

    if (window.observeEntrance) {
      window.observeEntrance('#catalogGrid .card');
    }
  }

  // Card template
function cardHTML(c) {
  return `
    <article class="card">
      <img loading="lazy" src="${c.img}" alt="${c.title}" class="card-img">
      <div>

        <div class="title-row">
          <h4>${c.title}</h4>
        </div>

        <div class="muted">${c.publisher}</div>

        <div style="margin-top:.5rem"><strong>₹${c.price.toFixed(2)}</strong></div>

        <!-- Add this button -->
        <button class="btn btn-view-full" data-add-to-cart data-id="${c.id}">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart
        </button>

        <!-- View button -->
        <a class="btn btn-outline btn-view-full" href="comic-detail.html?id=${c.id}">
          View
        </a>

      </div>
    </article>
  `;
}



  // Event listener
  searchInput.addEventListener("input", render);

  // Initial load
  render();

})();
