
// CURSOR
const cur=document.getElementById('cur'),cur2=document.getElementById('cur2');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=(mx-4)+'px';cur.style.top=(my-4)+'px'});
(function a(){rx+=(mx-rx-15)*.1;ry+=(my-ry-15)*.1;cur2.style.left=rx+'px';cur2.style.top=ry+'px';requestAnimationFrame(a)})();
document.querySelectorAll('a,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.transform='scale(2.5)';cur2.style.transform='scale(1.5)';cur2.style.opacity='.25'});
  el.addEventListener('mouseleave',()=>{cur.style.transform='scale(1)';cur2.style.transform='scale(1)';cur2.style.opacity='.6'});
});

// TYPING
const roles=['MERN Stack Developer','Full Stack Developer','React.js Developer','Node.js Developer','WordPress Developer','Web Developer'];
let ri=0,ci=0,del=false;
const et=document.getElementById('typ');
function type(){
  const c=roles[ri];
  if(!del){et.textContent=c.slice(0,++ci);if(ci===c.length){del=true;setTimeout(type,1900);return}}
  else{et.textContent=c.slice(0,--ci);if(ci===0){del=false;ri=(ri+1)%roles.length}}
  setTimeout(type,del?55:88);
}
type();

// REVEAL
const obs=new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add('on'),i*80)})},{threshold:.1});
document.querySelectorAll('.rv,.rvl,.rvr').forEach(el=>obs.observe(el));

// SKILL BARS — animate when in view
const barObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.sbar-fill').forEach((bar,i)=>{
        setTimeout(()=>{
          const w=bar.style.getPropertyValue('--w');
          bar.style.transform='scaleX('+w+')';
          bar.classList.add('on');
        },i*150);
      });
      barObs.unobserve(e.target);
    }
  });
},{threshold:.3});
const sb=document.getElementById('skillBars');
if(sb)barObs.observe(sb);

// MOBILE MENU
const mob=document.getElementById('mob');
document.getElementById('hb').onclick=()=>mob.classList.add('open');
document.getElementById('mc').onclick=()=>mob.classList.remove('open');
function cm(){mob.classList.remove('open')}

// NAV ACTIVE
const secs=document.querySelectorAll('section[id]');
const nls=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let cu='';
  secs.forEach(s=>{if(window.scrollY>=s.offsetTop-130)cu=s.id});
  nls.forEach(a=>{a.style.color=a.getAttribute('href')==='#'+cu?'var(--pl)':''});
});
