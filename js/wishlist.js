/* wishlist.js - client-side wishlist using localStorage */
const Wishlist = {
  key: 'comicverse_wishlist_v1',
  load(){
    try{ return JSON.parse(localStorage.getItem(this.key) || '[]'); } catch(e){ return []; }
  },
  save(arr){ localStorage.setItem(this.key, JSON.stringify(arr)); },
  toggle(id){
    const arr = this.load();
    const idx = arr.indexOf(id);
    if(idx===-1) arr.push(id); else arr.splice(idx,1);
    this.save(arr);
    // animate heart if on page
    const btn = document.querySelector(`[data-id="${id}"]`);
    if(btn){
      const icon = btn.querySelector('.fa-heart');
      if(icon){ icon.classList.add('animated'); setTimeout(()=>icon.classList.remove('animated'),300); }
    }
    return arr;
  },
  has(id){ return this.load().includes(id); },
  all(){ return this.load(); }
};
window.Wishlist = Wishlist;
