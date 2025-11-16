/* toast.js - non-blocking toasts (replaces alert) */
const Toast = (function(){
  const root = document.getElementById('toast-root') || (function(){
    const r = document.createElement('div'); r.id='toast-root'; document.body.appendChild(r); return r;
  })();

  function createNode(message, opts={}){
    const div = document.createElement('div'); div.className='toast';
    const icon = document.createElement('div'); icon.className='icon';
    if(opts.icon){
      icon.innerHTML = `<i class="${opts.icon}"></i>`;
    } else {
      icon.innerHTML = `<i class="fa-solid fa-info"></i>`;
    }
    const txt = document.createElement('div'); txt.className='msg'; txt.textContent = message;
    div.appendChild(icon); div.appendChild(txt);
    return div;
  }

  function show(message, opts={timeout:2500}) {
    const node = createNode(message, opts);
    root.appendChild(node);
    requestAnimationFrame(()=> node.classList.add('show'));
    const t = setTimeout(()=> {
      node.classList.remove('show');
      setTimeout(()=> node.remove(), 350);
    }, opts.timeout || 2500);
    return {dismiss: ()=>{ clearTimeout(t); node.classList.remove('show'); setTimeout(()=>node.remove(), 300); }};
  }

  return { show };
})();
window.Toast = Toast;
