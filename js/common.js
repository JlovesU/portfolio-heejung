(function () {
  AOS.init({
    duration: 800,
    once: true,
  });
});

/* ── 햄버거 드로어 ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const drawerDim  = document.getElementById('drawerDim');

function openDrawer() {
  hamburger.classList.add('open');
  mobileMenu.classList.add('open');
  drawerDim.classList.add('open');
  document.body.style.overflow = 'hidden';
  hamburger.setAttribute("aria-expanded", "true");
}
function closeDrawer() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  drawerDim.classList.remove('open');
  document.body.style.overflow = '';
  hamburger.setAttribute("aria-expanded", "false");
}

hamburger.addEventListener('click', () => {
  hamburger.classList.contains('open') ? closeDrawer() : openDrawer();
});
drawerDim.addEventListener('click', closeDrawer);
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

/* ── 부드러운 스크롤 ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 66, behavior: 'smooth' });
  });
});

/* ── 스크롤 fade-up ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      setTimeout(() => en.target.classList.add('visible'), +(en.target.dataset.d||0) * 120);
      obs.unobserve(en.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach((el, i) => { el.dataset.d = i % 5; obs.observe(el); });

/* ── 현재 섹션 하이라이트 ── */
// const navAs = document.querySelectorAll('nav a');
// // nav 링크에 대응하는 섹션 ID만 추출
// const navSecs = Array.from(navAs)
//   .map(a => document.querySelector(a.getAttribute('href')))
//   .filter(Boolean);

// function updateActive() {
//   let cur = '';
//   navSecs.forEach(s => {
//     if (scrollY >= s.offsetTop - 90) cur = s.id;
//   });
//   navAs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
// }

// 페이지 로드 시 초기 활성화
updateActive();

/* ── Go to Top 버튼 ── */
const gotoTop = document.getElementById('gotoTop');
window.addEventListener('scroll', () => {
  updateActive();
  gotoTop.classList.toggle('visible', scrollY > 400);
});
gotoTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

//모바일 새창 띄우기
function openMobile(e){
  e.preventDefault();
  window.open(
    e.currentTarget.href,
    "mobile",
    "width=375,height=812,resizable=yes,scrollbars=yes"
  );
}