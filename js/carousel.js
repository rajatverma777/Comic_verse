

function initCarousel(container, options={interval:1000}) {
  if(!container) return;
  const slides = Array.from(container.children);
  let idx = 0, t;
  slides.forEach((s,i)=> {
    s.classList.add('slide');
    if(i===0) s.classList.add('active');
    else s.classList.remove('active');
    s.style.position = 'absolute';
    s.style.inset = '0';
  });
  function show(i){
    slides.forEach((s,si)=>{
      s.classList.toggle('active', si===i);
      s.style.zIndex = si===i?2:1;
    });
  }
  function start(){ t = setInterval(()=>{ idx=(idx+1)%slides.length; show(idx); }, options.interval); }
  function stop(){ clearInterval(t); }
  container.addEventListener('mouseenter', stop);
  container.addEventListener('mouseleave', start);
  start();
  window.initCarousel = initCarousel;
  return {start,stop,show};
}
