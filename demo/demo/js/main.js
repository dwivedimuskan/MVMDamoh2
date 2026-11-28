var b=document.querySelector('.burger'),n=document.getElementById('nav');
b.onclick=function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)};
if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);
var el=e.target,t=+el.dataset.count,s=performance.now();
(function f(x){var p=Math.min((x-s)/1400,1);el.textContent=Math.round(t*p);if(p<1)requestAnimationFrame(f)})(s)})});
document.querySelectorAll('[data-count]').forEach(function(el){io.observe(el)});
}else{document.querySelectorAll('[data-count]').forEach(function(el){el.textContent=el.dataset.count})}

(function(){var sl=document.querySelector('.slider'),ss=sl.querySelectorAll('.slide'),dots=sl.querySelector('.dots'),i=0,t;
if(ss.length<2){sl.classList.add('single');return}
ss.forEach(function(_,k){var d=document.createElement('button');d.setAttribute('aria-label','Slide '+(k+1));d.onclick=function(){go(k)};dots.appendChild(d)});
var ds=dots.children;
function go(n){ss[i].classList.remove('on');ds[i].classList.remove('on');i=(n+ss.length)%ss.length;ss[i].classList.add('on');ds[i].classList.add('on')}
go(0);
sl.querySelector('.sl-prev').onclick=function(){go(i-1)};
sl.querySelector('.sl-next').onclick=function(){go(i+1)};
function play(){if(!matchMedia('(prefers-reduced-motion: reduce)').matches)t=setInterval(function(){go(i+1)},5000)}
function stop(){clearInterval(t)}
sl.onmouseenter=stop;sl.onmouseleave=play;sl.onfocusin=stop;sl.onfocusout=play;play();
})();

(function(){
var h=document.querySelector('header.main');
function sc(){h.classList.toggle('scrolled',scrollY>20)}sc();addEventListener('scroll',sc,{passive:true});
var map=[['.quick article',''],['.stat',''],['.princ img','l'],['.princ .wrap>div','r'],['.welcome > *',''],['.mv>div',''],['.adm .wrap>div:first-child','l'],['.miles','r'],['.mlinks a',''],['.enroll .sec-h','l'],['.enroll form','r'],['.news .sec-h',''],['.nlist li',''],['.ads h4',''],['.ads a',''],['footer .grid>div','']];
var els=[];
map.forEach(function(m){document.querySelectorAll(m[0]).forEach(function(el,k){el.classList.add('rv');if(m[1])el.classList.add(m[1]);el.style.transitionDelay=(k%5)*90+'ms';els.push(el)})});
if('IntersectionObserver' in window){
var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.15,rootMargin:'0px 0px -40px 0px'});
els.forEach(function(el){o.observe(el);el.addEventListener('transitionend',function f(e){if(e.propertyName!=='opacity'||!el.classList.contains('in'))return;el.classList.remove('rv','l','r','in');el.style.transitionDelay='';el.removeEventListener('transitionend',f)})});
}else{els.forEach(function(el){el.classList.add('in')})}
})();
