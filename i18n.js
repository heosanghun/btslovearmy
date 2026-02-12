// 다국어 및 테마 관리
const I18n = {
  currentLang: localStorage.getItem('btslovearmy_lang') || 'ko',
  currentTheme: localStorage.getItem('btslovearmy_theme') || 'dark',

  // 언어 변경
  setLanguage: function(lang) {
    this.currentLang = lang;
    localStorage.setItem('btslovearmy_lang', lang);
    document.documentElement.lang = lang;
    this.updatePage();
  },

  // 테마 변경
  setTheme: function(theme) {
    this.currentTheme = theme;
    localStorage.setItem('btslovearmy_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    this.updateThemeIcon();
  },

  // 테마 아이콘 업데이트
  updateThemeIcon: function() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', 
        this.currentTheme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'
      );
    }
  },

  // 번역 가져오기
  t: function(key) {
    const keys = key.split('.');
    let value = translations[this.currentLang];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // 번역이 없으면 키 반환
      }
    }
    return value;
  },

  // 페이지 업데이트
  updatePage: function() {
    // data-i18n 속성이 있는 모든 요소 업데이트
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);
      
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation;
      } else {
        el.textContent = translation;
      }
    });

    // title 업데이트
    const titleKey = document.querySelector('[data-i18n-title]');
    if (titleKey) {
      document.title = this.t(titleKey.getAttribute('data-i18n-title'));
    }
  },

  // 초기화
  init: function() {
    // 언어 설정
    const savedLang = localStorage.getItem('btslovearmy_lang') || 'ko';
    this.setLanguage(savedLang);

    // 테마 설정
    const savedTheme = localStorage.getItem('btslovearmy_theme') || 'dark';
    this.setTheme(savedTheme);

    // 언어 세그먼트 컨트롤 이벤트
    document.querySelectorAll('.lang-segment-btn').forEach(btn => {
      const lang = btn.getAttribute('data-lang');
      
      // 초기 활성 상태 설정
      if (lang === this.currentLang) {
        btn.classList.add('active');
      }
      
      btn.addEventListener('click', () => {
        if (lang !== this.currentLang) {
          this.setLanguage(lang);
          // 모든 언어 버튼 업데이트
          document.querySelectorAll('.lang-segment-btn').forEach(b => {
            if (b.getAttribute('data-lang') === lang) {
              b.classList.add('active');
            } else {
              b.classList.remove('active');
            }
          });
        }
      });
    });

    // 테마 전환 버튼 이벤트
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
      });
    });
  }
};

// 페이지 로드 시 초기화
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => I18n.init());
} else {
  I18n.init();
}
