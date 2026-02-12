(function () {
  'use strict';

  // ===== 부드러운 스크롤 함수 =====
  function smoothScrollTo(target) {
    var element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) {
      var headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      var targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  // ===== 로고 클릭 시 상단으로 이동 =====
  var logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', function (e) {
      e.preventDefault();
      smoothScrollTo('#top');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== 스크롤 인디케이터 클릭 기능 =====
  var heroScroll = document.querySelector('.hero-scroll');
  if (heroScroll) {
    heroScroll.style.cursor = 'pointer';
    heroScroll.addEventListener('click', function () {
      smoothScrollTo('#about');
    });
  }

  // ===== 모바일 메뉴 토글 =====
  var navToggle = document.querySelector('.nav-toggle');
  var navLinksMobile = document.querySelector('.nav-links-mobile');

  if (navToggle && navLinksMobile) {
    navToggle.addEventListener('click', function () {
      navLinksMobile.classList.toggle('is-open');
      navToggle.setAttribute('aria-label',
        navLinksMobile.classList.contains('is-open') ? '메뉴 닫기' : '메뉴 열기'
      );
      // 햄버거 아이콘 애니메이션
      var spans = navToggle.querySelectorAll('span');
      if (navLinksMobile.classList.contains('is-open')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      }
    });

    // 메뉴 링크 클릭 시 부드럽게 스크롤 및 메뉴 닫기
    navLinksMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          smoothScrollTo(targetId);
        }
        navLinksMobile.classList.remove('is-open');
        // 햄버거 아이콘 리셋
        var spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      });
    });
  }

  // ===== 히어로 섹션 버튼 클릭 시 스크롤 =====
  var heroButton = document.querySelector('.hero .btn-primary');
  if (heroButton && heroButton.getAttribute('href')) {
    heroButton.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      if (targetId) {
        smoothScrollTo(targetId);
      }
    });
  }

  // ===== 스크롤 애니메이션 (Intersection Observer) =====
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  // 관찰할 요소들에 애니메이션 추가
  var animateElements = document.querySelectorAll('.about-card, .community-item, .event-card, .section');
  animateElements.forEach(function (el) {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // ===== 활성 섹션 하이라이트 =====
  var sections = document.querySelectorAll('section[id]');
  var navLinksArray = document.querySelectorAll('.nav-links a');

  function highlightActiveSection() {
    var scrollPosition = window.pageYOffset + 150;

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      var sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinksArray.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightActiveSection);
  highlightActiveSection(); // 초기 실행

  // ===== 가입 폼 제출 및 유효성 검사 개선 =====
  var joinForm = document.querySelector('.join-form');
  if (joinForm) {
    var nicknameInput = joinForm.querySelector('input[type="text"]');
    var emailInput = joinForm.querySelector('input[type="email"]');
    var textarea = joinForm.querySelector('textarea');
    var submitButton = joinForm.querySelector('button[type="submit"]');

    // 실시간 유효성 검사
    function validateForm() {
      var isValid = true;
      
      // 닉네임 검사
      if (nicknameInput.value.trim().length < 2) {
        nicknameInput.classList.add('error');
        isValid = false;
      } else {
        nicknameInput.classList.remove('error');
      }

      // 이메일 검사
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
        emailInput.classList.add('error');
        isValid = false;
      } else {
        emailInput.classList.remove('error');
      }

      return isValid;
    }

    nicknameInput.addEventListener('blur', validateForm);
    emailInput.addEventListener('blur', validateForm);
    nicknameInput.addEventListener('input', function () {
      if (this.value.trim().length >= 2) {
        this.classList.remove('error');
      }
    });
    emailInput.addEventListener('input', function () {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailPattern.test(this.value)) {
        this.classList.remove('error');
      }
    });

    joinForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      if (!validateForm()) {
        alert('입력 정보를 확인해주세요.\n- 닉네임은 2자 이상 입력해주세요.\n- 올바른 이메일 주소를 입력해주세요.');
        return;
      }

      // 제출 버튼 비활성화 및 로딩 상태
      submitButton.disabled = true;
      submitButton.textContent = '처리 중...';

      // 실제 백엔드 연동 전 시뮬레이션
      setTimeout(function () {
        alert('가입 신청이 접수되었습니다. 💜\n빠른 시일 내에 연락드리겠습니다.');
        joinForm.reset();
        submitButton.disabled = false;
        submitButton.textContent = '가입 신청하기';
        nicknameInput.classList.remove('error');
        emailInput.classList.remove('error');
      }, 1000);
    });
  }

  // ===== 스크롤 시 헤더 배경 강조 =====
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
        header.style.background = 'rgba(15, 10, 26, 0.95)';
      } else {
        header.classList.remove('scrolled');
        header.style.background = 'rgba(15, 10, 26, 0.85)';
      }
    });
  }

  // ===== 페이지 로드 애니메이션 =====
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });

  // ===== 키보드 접근성 개선 =====
  document.addEventListener('keydown', function (e) {
    // ESC 키로 모바일 메뉴 닫기
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('is-open')) {
      navLinks.classList.remove('is-open');
    }
  });
})();
