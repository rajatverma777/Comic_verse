// app.js - minimal glue
import { createCarousel } from './carousel.js';
// If you can't use modules on static host, copy carousel code here instead of import


function qs(sel, root=document){ return root.querySelector(sel); }
function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }


// Render homepage carousel and feature sections
function renderHome(){
const hero = qs('.hero .carousel');
if(!hero) return;
// build slides from top 4 comics
const slides = window.COMICS.slice(0,4).map(c=>{
const el = document.createElement('div'); el.className='slide';
el.innerHTML = `<img src="${c.img}" alt="${c.title}" style="width:100%;height:100%;object-fit:cover">`;
return el;
});
slides.forEach(s=>hero.appendChild(s));
// init carousel (copy code if not using modules)
// createCarousel(hero);
}


// Browse page: render grid, filter, sort
function renderBrowse(){
const grid = qs('#comics-grid');
if(!grid) return;
function renderList(list){ grid.innerHTML = '';
list.forEach(c=>{
const card = document.createElement('article'); card.className='card';
card.innerHTML = `
<img loading="lazy" src="${c.img}" alt="${c.title}">
<div class="meta">
<h4>${c.title}</h4>
<div class="muted">${c.publisher} • ${new Date(c.release_date).getFullYear()}</div>
<div style="margin-top:.5rem"><strong>$${c.price.toFixed(2)}</strong></div>
<div style="margin-top:.5rem"><a href="comic-detail.html?id=${c.id}">View</a></div>
</div>`;
grid.appendChild(card);
});
}
let current = [...window.COMICS];
renderList(current);
// filtering
qs('#filter-publisher').addEventListener('change', e=>{
const val = e.target.value;
current = val === 'all' ? [...COMICS] : COMICS.filter(c=>c.publisher===val);
renderList(current);
});
qs('#sort-select').addEventListener('change', e=>{
const val = e.target.value;
const copy = [...current];
if(val==='price-asc') copy.sort((a,b)=>a.price-b.price);
if(val==='price-desc') copy.sort((a,b)=>b.price-a.price);
if(val==='title-az') copy.sort((a,b)=>a.title.localeCompare(b.title));
if(val==='date-new') copy.sort((a,b)=> new Date(b.release_date) - new Date(a.release_date));
renderList(copy);
});
}

