AOS.init({
  startEvent: 'DOMContentLoaded',
  easing: 'ease-out-cubic',
  duration: 800,
  once: true,
  offset: 120,
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

/* ── 현재 섹션 하이라이트 ── */
const navAs = document.querySelectorAll('nav a');
// nav 링크에 대응하는 섹션 ID만 추출
const navSecs = Array.from(navAs)
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

function updateActive() {
  // 페이지 최하단 도달 시 마지막 섹션 활성화
  const isBottom = window.innerHeight + scrollY >= document.body.scrollHeight - 5;
  
  if (isBottom) {
    const lastSec = navSecs[navSecs.length - 1];
    navAs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + lastSec.id));
    return;
  }

  let cur = '';
  navSecs.forEach(s => {
    if (scrollY >= s.offsetTop - 90) cur = s.id;
  });
  navAs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}

//페이지 로드 시 초기 활성화
updateActive();
window.addEventListener('scroll', updateActive);

/* ── 메인 날짜 ── */
const dateEl = document.querySelector('.date-text');

const now = new Date();
dateEl.textContent = now.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

/* ── Go to Top 버튼 ── */
const gotoTop = document.getElementById('gotoTop');
window.addEventListener('scroll', () => {
  // updateActive();
  gotoTop.classList.toggle('visible', scrollY > 400);
});
gotoTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── 모바일 새창 띄우기 ── */
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

/* ── 포트폴리오 스와이퍼 ── */
// var swiper = new Swiper(".works-wrap2", {
//   slidesPerView: 1.5,
//   spaceBetween: 20,
//   freeMode: true,
//   scrollbar: {
//     el: ".swiper-scrollbar",
//     draggable: true,
//     // hide: true,
//   },
//   // mousewheel: {
//   //   enabled: true,
//   //   releaseOnEdges: true,
//   // },
//   breakpoints: {
//     320: {
//       slidesPerView: 2.1,
//       spaceBetween: 15,
//     },
//     768: {
//       slidesPerView: 3.5,
//       spaceBetween: 15,
//     },
//     1024: {
//       slidesPerView: 4.5,
//       spaceBetween: 20,
//     },
//   }
// });

/* ── 그 밖의 작업 스와이퍼 ── */
//디자인 팝업 슬라이더 데이터
const designSlides = [
  { src: 'work/design/img_popup2.webp', alt: '팝업 디자인 2' },
  { src: 'work/design/img_popup3.webp', alt: '팝업 디자인 3' },
  { src: 'work/design/img_popup7.webp', alt: '팝업 디자인 7' },
  { src: 'work/design/img_popup8.webp', alt: '팝업 디자인 8' },
  { src: 'work/design/img_popup1.webp', alt: '팝업 디자인 1' },
  { src: 'work/design/img_popup4.webp', alt: '팝업 디자인 4' },
  { src: 'work/design/img_popup5.webp', alt: '팝업 디자인 5' },
  { src: 'work/design/img_popup6.webp', alt: '팝업 디자인 6' },
  { src: 'work/design/img_popup9.webp', alt: '팝업 디자인 9' },
];

//디자인 뉴스레터 슬라이더 데이터
const letterSlides = [
  // { src: 'work/design/img_mail1.webp', alt: '뉴스레터 디자인 1' },
  { src: 'work/design/img_mail2.webp', alt: '뉴스레터 디자인 2' },
  { src: 'work/design/img_mail3.webp', alt: '뉴스레터 디자인 3' },
  { src: 'work/design/img_mail4.webp', alt: '뉴스레터 디자인 4' },
  { src: 'work/design/img_mail5.webp', alt: '뉴스레터 디자인 5' },
  { src: 'work/design/img_mail6.webp', alt: '뉴스레터 디자인 6' },
  { src: 'work/design/img_mail7.webp', alt: '뉴스레터 디자인 7' }, 
];

//수채화 슬라이더 데이터
const paintingSlides = [
  { src: 'work/painting/img_painting1.webp', alt: '수채화 1' },
  { src: 'work/painting/img_painting2.webp', alt: '수채화 2' },
  { src: 'work/painting/img_painting3.webp', alt: '수채화 3' },
  { src: 'work/painting/img_painting4.webp', alt: '수채화 4' },
  { src: 'work/painting/img_painting5.webp', alt: '수채화 5' },
  { src: 'work/painting/img_painting6.webp', alt: '수채화 6' },
  { src: 'work/painting/img_painting7.webp', alt: '수채화 7' },
  { src: 'work/painting/img_painting8.webp', alt: '수채화 8' },
  { src: 'work/painting/img_painting9.webp', alt: '수채화 9' },
  { src: 'work/painting/img_painting10.webp', alt: '수채화 10' },
  { src: 'work/painting/img_painting11.webp', alt: '수채화 11' },
  { src: 'work/painting/img_painting12.webp', alt: '수채화 12' },
  { src: 'work/painting/img_painting13.webp', alt: '수채화 13' },
  { src: 'work/painting/img_painting14.webp', alt: '수채화 14' },
  { src: 'work/painting/img_painting15.webp', alt: '수채화 15' },
  { src: 'work/painting/img_painting16.webp', alt: '수채화 16' },
  { src: 'work/painting/img_painting17.webp', alt: '수채화 17' },
  { src: 'work/painting/img_painting18.webp', alt: '수채화 18' },
  { src: 'work/painting/img_painting19.webp', alt: '수채화 19' },
  { src: 'work/painting/img_painting20.webp', alt: '수채화 20' },
  // { src: 'work/painting/img_painting21.webp', alt: '수채화 21' },
  { src: 'work/painting/img_painting22.webp', alt: '수채화 22' },
  { src: 'work/painting/img_painting23.webp', alt: '수채화 23' },
  { src: 'work/painting/img_painting24.webp', alt: '수채화 24' },
  { src: 'work/painting/img_painting25.webp', alt: '수채화 25' },
  { src: 'work/painting/img_painting26.webp', alt: '수채화 26' },
  { src: 'work/painting/img_painting27.webp', alt: '수채화 27' },
  { src: 'work/painting/img_painting28.webp', alt: '수채화 28' },
  { src: 'work/painting/img_painting29.webp', alt: '수채화 29' },
  { src: 'work/painting/img_painting30.webp', alt: '수채화 30' },
  { src: 'work/painting/img_painting31.webp', alt: '수채화 31' },
  { src: 'work/painting/img_painting32.webp', alt: '수채화 32' },
  { src: 'work/painting/img_painting33.webp', alt: '수채화 33' },
];


document.querySelectorAll('.works-other').forEach(el => {
  new Swiper(el, {
    slidesPerView: 2.5,
    spaceBetween: 30,
    freeMode: true,
    scrollbar: {
      el: el.querySelector('.swiper-scrollbar'),
      draggable: true,
    },
    a11y: false,
    // mousewheel: {
    //   enabled: true,
    //   releaseOnEdges: true,
    // },
    breakpoints: {
      320: {
        slidesPerView: 2.1,
        spaceBetween: 15,
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

/* ── 슬라이드 클릭 → 팝업 열기 ── */ 
const overlay = document.getElementById('popupOverlay');
const popupBox = document.getElementById('popupBox');
const popupClose = document.getElementById('popupClose');
const body = document.querySelector('body');

let lastFocusedEl = null;
let popupSwiper = null;

// 슬라이드 클릭 → 팝업
const initSlider = (wrapperId, slides, popupClass) => {
  const wrapper = document.getElementById(wrapperId);

  wrapper.innerHTML = slides.map((item, index) => `
    <div class="swiper-slide" role="group" aria-label="${index + 1} / ${slides.length}">
      <button type="button" class="popup-trigger" aria-label="${item.alt} 팝업으로 크게 보기">
        <img src="${item.src}" alt="${item.alt}" loading="lazy">
      </button>
    </div>
  `).join('');

  wrapper.querySelectorAll('.popup-trigger').forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      lastFocusedEl = btn;

      popupBox.className = 'popup-box'; // 초기화
      if (popupClass) {
        popupBox.classList.add(popupClass); // 전달받은 클래스 추가 (예: 'is-design')
      }

      // 팝업 스와이퍼 슬라이드 생성
      const swiperWrapper = document.getElementById('popup-swiper-wrapper');
      swiperWrapper.innerHTML = slides.map(item => `
        <div class="swiper-slide">
          <img src="${item.src}" alt="${item.alt}">
        </div>
      `).join('');

      // 기존 스와이퍼 destroy 후 재초기화
      if (popupSwiper) {
        popupSwiper.destroy(true, true);
        popupSwiper = null;
      }

      popupSwiper = new Swiper('.other-popup-swiper', {
        initialSlide: index,  // 클릭한 이미지부터 시작
        // autoHeight: true,
        loop: true,
        centeredSlides: true, 
        // pagination: {
        //   el: '.popup-box .swiper-pagination',
        // },
        navigation: {
          nextEl: '.popup-box .swiper-button-next',
          prevEl: '.popup-box .swiper-button-prev',
        },
        keyboard: { enabled: true },
      });

      overlay.classList.add('active');
      // body.classList.add('scroll-hidden');
      popupClose.focus();

    });
  });
};

// 각각 호출만 하면 끝
initSlider('designSlider', designSlides, 'is-design');
initSlider('letterSlider', letterSlides, 'is-letter');
initSlider('paintingSlider', paintingSlides, 'is-painting');

// 닫기 공통 함수
const closePopup = () => {
  overlay.classList.remove('active');
  popupBox.className = 'popup-box';
  // body.classList.remove('scroll-hidden');
  if (lastFocusedEl) lastFocusedEl.focus();
};
// 딤드 클릭 닫기
overlay.addEventListener('click', e => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
    popupBox.className = 'popup-box';
    // body.classList.remove('scroll-hidden');
    if (lastFocusedEl) lastFocusedEl.focus();
  }
});
overlay.addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const focusable = popupBox.querySelectorAll('button, a, input, textarea');
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  } else {
    if (document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});
// X버튼 또는 이미지 클릭시 닫기
popupClose.addEventListener('click', closePopup);

// esc키로 닫기
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && overlay.classList.contains('active')) {
    closePopup();
  }
});

/* ── 이메일 보내기 ── */ 
emailjs.init('velH76jflZaYXkST1'); //Public Key

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const btn = document.getElementById('submitBtn');
  const msg = document.getElementById('formMsg');

  btn.textContent = '전송 중...';
  btn.disabled = true;

  emailjs.send('service_4abgkoe', 'template_lq0phts', {
    from_email: document.getElementById('fromEmail').value,
    message: document.getElementById('message').value,
  })
  .then(() => {
    msg.textContent = '메시지가 전송됐어요!';
    // msg.style.color = 'green';
    btn.textContent = '보내기';
    btn.disabled = false;
    document.getElementById('contactForm').reset();
  })
  .catch(() => {
    msg.textContent = '전송에 실패했어요. 다시 시도해주세요.';
    // msg.style.color = 'red';
    btn.textContent = '보내기';
    btn.disabled = false;
  });
});