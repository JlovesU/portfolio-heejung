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
// updateActive();

/* ── Go to Top 버튼 ── */
const gotoTop = document.getElementById('gotoTop');
window.addEventListener('scroll', () => {
  // updateActive();
  gotoTop.classList.toggle('visible', scrollY > 400);
});
gotoTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

//모바일 새창 띄우기
function openMobile(e){
  e.preventDefault();
  var width = 375;
  var height = 650;

  var left = (screen.availWidth - width) / 2;
  var top = (screen.availHeight - height) / 2;

  window.open(
    e.currentTarget.href,
    "mobile",
    "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + ",resizable=yes,scrollbars=yes"
  );
}

//포트폴리오 type2
// gsap.registerPlugin(ScrollSmoother);

// const smoother = ScrollSmoother.create({
//   wrapper: "#smooth-wrapper",
//   content: "#smooth-content",
//   smooth: 2,
//   normalizeScroll: true,
//   ignoreMobileResize: true,
//   preventDefault: true
// });

var swiper = new Swiper(".works-wrap2", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    // hide: true,
  },
  // mousewheel: {
  //   enabled: true,
  //   releaseOnEdges: true,
  // },
  breakpoints: {
    320: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
  }
});
document.querySelectorAll('.works-other').forEach(el => {
  new Swiper(el, {
    slidesPerView: 2.5,
    spaceBetween: 20,
    freeMode: true,
    scrollbar: {
      el: el.querySelector('.swiper-scrollbar'),
      draggable: true,
    },
    // mousewheel: {
    //   enabled: true,
    //   releaseOnEdges: true,
    // },
    breakpoints: {
      320: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3.5,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 4.5,
        spaceBetween: 20,
      },
    }
  });
});

// 슬라이드 클릭 → 팝업 열기
const overlay = document.getElementById('popupOverlay');
const popupView = document.querySelector('.popup-view');
const popupImg = document.getElementById('popupImg');
const body = document.querySelector('body');

// 슬라이드 클릭 → 팝업
document.querySelectorAll('.works-other .swiper-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', e => {
    const slide = e.target.closest('.works-other .swiper-slide');
    if (!slide) return;

    popupImg.classList.remove('loaded');
    popupImg.src = '';

    popupImg.onload = () => {
      popupImg.classList.add('loaded');
    };

    popupImg.src = slide.querySelector('img').src;
    overlay.classList.add('active');
    body.classList.add('scroll-hidden');
    popupView.scrollTop = 0;
  });
});

// 닫기 공통 함수
const closePopup = () => {
  overlay.classList.remove('active');
  body.classList.remove('scroll-hidden');
};
// 딤드 클릭 닫기
overlay.addEventListener('click', e => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
    body.classList.remove('scroll-hidden');
  }
});
// X버튼 또는 이미지 클릭시 닫기
document.getElementById('popupClose').addEventListener('click', closePopup);
popupView.addEventListener('click', closePopup);