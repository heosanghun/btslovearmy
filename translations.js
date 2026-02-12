// 다국어 번역 데이터
const translations = {
  ko: {
    // 네비게이션
    nav: {
      intro: '소개',
      community: '커뮤니티',
      events: '이벤트',
      join: '참여하기',
      login: '로그인',
      signup: '회원가입',
      logout: '로그아웃',
      profile: '프로필'
    },
    // 히어로 섹션
    hero: {
      tag: 'Adorable Representative M.C. for Youth',
      title: 'BTS Love Army',
      desc: '방탄소년단과 함께하는 글로벌 아미 커뮤니티에 오신 것을 환영합니다. 음악, 소식, 팬아트를 나누고 함께 성장해요.',
      cta: '커뮤니티 참여하기'
    },
    // 소개 섹션
    about: {
      title: '우리는 아미예요',
      lead: 'BTS Love Army는 전 세계 아미들이 모여 음악과 메시지를 나누는 공간입니다.',
      card1: {
        title: '함께하는 응원',
        desc: '멤버들의 활동을 함께 응원하고, 소식과 콘텐츠를 실시간으로 공유해요.'
      },
      card2: {
        title: '음악과 메시지',
        desc: 'BTS의 음악과 가사 속 메시지를 나누고, 서로의 이야기를 들어줍니다.'
      },
      card3: {
        title: '글로벌 커뮤니티',
        desc: '한국어, 영어 등 다양한 언어로 소통하며 전 세계 아미와 친구가 되어요.'
      }
    },
    // 커뮤니티 섹션
    community: {
      title: '커뮤니티 활동',
      item1: {
        title: '공지 & 소식',
        desc: '공식 소식, 콘서트, 앨범 발매 등 최신 정보를 한곳에서 확인하세요.'
      },
      item2: {
        title: '팬아트 & 팬픽',
        desc: '아미들이 만든 팬아트, 팬픽, 영상 편집을 감상하고 공유해요.'
      },
      item3: {
        title: '자유 게시판',
        desc: '일상, 취미, 고민까지 편하게 나눌 수 있는 공간입니다.'
      }
    },
    // 이벤트 섹션
    events: {
      title: '이벤트 & 모임',
      lead: '오프라인/온라인 팬미팅, 스트리밍 파티, 기념 이벤트에 함께해요.',
      card1: {
        time: '매주',
        title: '스트리밍 파티',
        desc: '음악·뮤비 스트리밍을 함께하며 기록을 세워요.'
      },
      card2: {
        time: '정기',
        title: '팬미팅 & 시청회',
        desc: '지역별 오프라인 모임과 온라인 시청회를 진행해요.'
      },
      card3: {
        time: '특별',
        title: '기념 이벤트',
        desc: '데뷔일, 생일, 앨범 발매 등 특별한 날을 함께 축하해요.'
      }
    },
    // 참여 섹션
    join: {
      title: '지금 참여하세요',
      lead: 'BTS Love Army와 함께해요. 가입은 무료이며, 누구나 환영합니다.',
      nickname: '닉네임',
      email: '이메일',
      intro: '자기소개 또는 하고 싶은 말 (선택)',
      submit: '가입 신청하기',
      note: '가입 후 관리자 승인 시 커뮤니티에 참여할 수 있습니다.'
    },
    // 로그인
    login: {
      title: '로그인',
      subtitle: 'BTS Love Army 커뮤니티에 오신 것을 환영합니다',
      email: '이메일',
      password: '비밀번호',
      remember: '로그인 상태 유지',
      submit: '로그인',
      forgot: '비밀번호를 잊으셨나요?',
      noAccount: '계정이 없으신가요?',
      signup: '회원가입',
      success: '로그인되었습니다! 💜'
    },
    // 회원가입
    signup: {
      title: '회원가입',
      subtitle: 'BTS Love Army 커뮤니티에 가입하세요',
      nickname: '닉네임',
      email: '이메일',
      password: '비밀번호',
      confirmPassword: '비밀번호 확인',
      intro: '자기소개 (선택)',
      submit: '회원가입',
      hasAccount: '이미 계정이 있으신가요?',
      login: '로그인',
      success: '회원가입이 완료되었습니다! 💜'
    },
    // 푸터
    footer: {
      disclaimer: 'This is a fan-made community. We are not affiliated with BTS or Big Hit Music.',
      copyright: '© 2025 BTS Love Army. Made with 💜 by ARMY.'
    },
    // 법적 고지
    legal: {
      title: '⚠️ 법적 고지 (Legal Disclaimer)',
      content: [
        '이 웹사이트는 K-pop 팬이 운영하는 독립적인 팬 라이프스타일 플랫폼입니다. 특정 아티스트, 엔터테인먼트 소속사와 제휴·후원·승인 관계가 없습니다.',
        '「보라해(Borahae)」는 한국 특허청(KIPO)에서 상표등록이 거절되어 등록 상표가 아니며, 팬 문화에서 자연발생적으로 사용되는 표현입니다 (특허법원 2023허10361, 2023.10.27 확정).',
        '본 플랫폼에서 언급·사용되는 BTS, 방탄소년단, ARMY, HYBE, Big Hit Music 등 모든 아티스트명·그룹명·회사명·로고·이미지·영상 및 관련 지식재산권은 해당 권리자에게 귀속됩니다. 본 사이트는 해당 권리에 대한 권리를 주장하지 않으며, 모든 콘텐츠는 비상업적·팬 활동 및 정보 공유 목적으로만 제공됩니다.',
        '본 사이트는 「있는 그대로(as is)」 제공되며, 상품성·특정 목적에의 적합성 등에 관하여 명시적 또는 묵시적 보증을 하지 않습니다. 이용으로 인한 어떠한 직접·간접·부수적 손해에 대해서도 책임을 지지 않습니다.',
        '회원·방문자가 게시한 콘텐츠(글, 이미지, 링크 등)에 대한 책임은 해당 게시자에게 있으며, 본 플랫폼 운영자는 이를 사전 검열하지 않으며 해당 콘텐츠로 인한 제3자 권리 침해 등에 대해 법적 책임을 부담하지 않습니다. 권리자로부터 적법한 삭제·수정 요청이 있을 경우 해당 콘텐츠를 조치할 수 있습니다.'
      ]
    }
  },
  en: {
    nav: {
      intro: 'About',
      community: 'Community',
      events: 'Events',
      join: 'Join',
      login: 'Login',
      signup: 'Sign Up',
      logout: 'Logout',
      profile: 'Profile'
    },
    hero: {
      tag: 'Adorable Representative M.C. for Youth',
      title: 'BTS Love Army',
      desc: 'Welcome to the global ARMY community with BTS. Share music, news, fan art, and grow together.',
      cta: 'Join Community'
    },
    about: {
      title: 'We are ARMY',
      lead: 'BTS Love Army is a space where ARMYs around the world gather to share music and messages.',
      card1: {
        title: 'Support Together',
        desc: 'Support the members\' activities together and share news and content in real-time.'
      },
      card2: {
        title: 'Music and Messages',
        desc: 'Share messages within BTS\'s music and lyrics, and listen to each other\'s stories.'
      },
      card3: {
        title: 'Global Community',
        desc: 'Communicate in various languages including Korean and English, and become friends with ARMYs around the world.'
      }
    },
    community: {
      title: 'Community Activities',
      item1: {
        title: 'Announcements & News',
        desc: 'Check the latest information including official news, concerts, and album releases in one place.'
      },
      item2: {
        title: 'Fan Art & Fan Fiction',
        desc: 'Enjoy and share fan art, fan fiction, and video edits created by ARMYs.'
      },
      item3: {
        title: 'Free Board',
        desc: 'A space to comfortably share daily life, hobbies, and concerns.'
      }
    },
    events: {
      title: 'Events & Gatherings',
      lead: 'Join offline/online fan meetings, streaming parties, and commemorative events.',
      card1: {
        time: 'Weekly',
        title: 'Streaming Party',
        desc: 'Stream music and MVs together and set records.'
      },
      card2: {
        time: 'Regular',
        title: 'Fan Meeting & Viewing',
        desc: 'Conduct regional offline gatherings and online viewing sessions.'
      },
      card3: {
        time: 'Special',
        title: 'Commemorative Events',
        desc: 'Celebrate special days together such as debut anniversaries, birthdays, and album releases.'
      }
    },
    join: {
      title: 'Join Now',
      lead: 'Join BTS Love Army. Membership is free and everyone is welcome.',
      nickname: 'Nickname',
      email: 'Email',
      intro: 'Introduction or message (optional)',
      submit: 'Sign Up',
      note: 'You can participate in the community after admin approval.'
    },
    login: {
      title: 'Login',
      subtitle: 'Welcome to BTS Love Army Community',
      email: 'Email',
      password: 'Password',
      remember: 'Remember me',
      submit: 'Login',
      forgot: 'Forgot password?',
      noAccount: 'Don\'t have an account?',
      signup: 'Sign Up',
      success: 'Logged in successfully! 💜'
    },
    signup: {
      title: 'Sign Up',
      subtitle: 'Join BTS Love Army Community',
      nickname: 'Nickname',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      intro: 'Introduction (optional)',
      submit: 'Sign Up',
      hasAccount: 'Already have an account?',
      login: 'Login',
      success: 'Registration completed! 💜'
    },
    footer: {
      disclaimer: 'This is a fan-made community. We are not affiliated with BTS or Big Hit Music.',
      copyright: '© 2025 BTS Love Army. Made with 💜 by ARMY.'
    },
    legal: {
      title: '⚠️ Legal Disclaimer',
      content: [
        'This website is an independent fan-operated lifestyle platform run by K-pop fans. We have no partnership, sponsorship, or endorsement relationship with any specific artist or entertainment company.',
        '「Borahae」was rejected for trademark registration by the Korean Intellectual Property Office (KIPO) and is not a registered trademark. It is an expression that naturally emerged in fan culture (Patent Court 2023허10361, confirmed on 2023.10.27).',
        'All artist names, group names, company names, logos, images, videos, and related intellectual property rights mentioned or used on this platform, including BTS, 방탄소년단, ARMY, HYBE, and Big Hit Music, belong to their respective rights holders. This site does not claim any rights to these rights, and all content is provided solely for non-commercial fan activities and information sharing purposes.',
        'This site is provided "as is" and makes no express or implied warranties regarding merchantability, fitness for a particular purpose, etc. We are not liable for any direct, indirect, or incidental damages arising from use.',
        'The responsibility for content (posts, images, links, etc.) posted by members and visitors lies with the respective poster. The platform operator does not pre-screen this content and is not legally responsible for third-party rights infringements caused by such content. We may take action on content upon receiving legitimate deletion or modification requests from rights holders.'
      ]
    }
  }
};
