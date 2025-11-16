/* add-to-cart.js — global add-to-cart handler */

(function () {

  function setupAddToCart() {
    // Ensure dependencies loaded (Cart, Toast, updateCartBadge)
    if (!window.Cart || !window.Toast || !window.updateCartBadge) {
      return setTimeout(setupAddToCart, 50);
    }

    console.log("Add-to-Cart system initialized.");

    document.addEventListener("click", function (e) {
      const btn = e.target.closest("[data-add-to-cart]");
      if (!btn) return;

      e.preventDefault();

      const comicId = btn.getAttribute("data-id");

      if (!comicId) {
        console.error("Add-to-cart button clicked but data-id missing:", btn);
        Toast.show("Error: Missing comic ID", { icon: "fa-solid fa-xmark" });
        return;
      }

      try {
        Cart.add(String(comicId), 1);
        updateCartBadge();

        Toast.show("Added to cart", { icon: "fa-solid fa-cart-plus" });

        // Button feedback animation
        btn.classList.add("cart-clicked");
        setTimeout(() => btn.classList.remove("cart-clicked"), 250);

      } catch (err) {
        console.error("Cart.add failed:", err);
        Toast.show("Could not add to cart", { icon: "fa-solid fa-triangle-exclamation" });
      }
    });
  }

  // If DOM not ready, wait
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupAddToCart);
  } else {
    setupAddToCart();
  }

})();
