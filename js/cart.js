/* cart.js — minimal, stable cart system */
const Cart = {
  key: "comicverse_cart_v1",

  load() {
    try {
      const raw = localStorage.getItem(this.key);
      const parsed = raw ? JSON.parse(raw) : { items: [] };

      if (!Array.isArray(parsed.items)) return { items: [] };
      return parsed;

    } catch (e) {
      console.error("Cart load error:", e);
      return { items: [] };
    }
  },

  save(state) {
    localStorage.setItem(this.key, JSON.stringify(state));
  },

  add(id) {
    let state = this.load();
    const existing = state.items.find(i => i.id === id);

    if (existing) existing.qty++;
    else state.items.push({ id, qty: 1 });

    this.save(state);
  },

  update(id, qty) {
    let state = this.load();
    state.items = state.items.map(i =>
      i.id === id ? { ...i, qty: Math.max(1, qty) } : i
    );
    this.save(state);
  },

  remove(id) {
    let state = this.load();
    state.items = state.items.filter(i => i.id !== id);
    this.save(state);
  },

  clear() {
    localStorage.removeItem(this.key);
  }
};

window.Cart = Cart;

/* Update cart badge in navbar */
function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;

  const state = Cart.load();
  const total = state.items.reduce((sum, i) => sum + i.qty, 0);

  badge.textContent = total > 0 ? total : "";
}
window.updateCartBadge = updateCartBadge;
