(function () {
  'use strict';

  // 모바일 메뉴 토글
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-label',
        navLinks.classList.contains('is-open') ? '메뉴 닫기' : '메뉴 열기'
      );
    });

    // 메뉴 링크 클릭 시 메뉴 닫기 (모바일)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
      });
    });
  }

  // 가입 폼 제출 (실제 백엔드 연동 전 예시)
  var joinForm = document.querySelector('.join-form');
  if (joinForm) {
    joinForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var nickname = joinForm.querySelector('input[type="text"]').value;
      var email = joinForm.querySelector('input[type="email"]').value;
      if (nickname && email) {
        alert('가입 신청이 접수되었습니다. 💜\n빠른 시일 내에 연락드리겠습니다.');
        joinForm.reset();
      }
    });
  }

  // 스크롤 시 헤더 배경 강조 (선택)
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(15, 10, 26, 0.95)';
      } else {
        header.style.background = 'rgba(15, 10, 26, 0.85)';
      }
    });
  }
})();
