// 인증 상태 관리
const Auth = {
  // 로컬 스토리지에서 사용자 정보 가져오기
  getUser: function() {
    const userStr = localStorage.getItem('btslovearmy_user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // 사용자 정보 저장
  setUser: function(user) {
    localStorage.setItem('btslovearmy_user', JSON.stringify(user));
  },

  // 로그인 상태 확인
  isAuthenticated: function() {
    return this.getUser() !== null;
  },

  // 로그인
  login: function(email, password) {
    // 실제 백엔드 연동 전 시뮬레이션
    const users = JSON.parse(localStorage.getItem('btslovearmy_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      this.setUser({
        email: user.email,
        nickname: user.nickname,
        loginTime: new Date().toISOString()
      });
      return { success: true, user: user };
    }
    return { success: false, message: '이메일 또는 비밀번호가 올바르지 않습니다.' };
  },

  // 회원가입
  signup: function(userData) {
    const users = JSON.parse(localStorage.getItem('btslovearmy_users') || '[]');
    
    // 이메일 중복 확인
    if (users.find(u => u.email === userData.email)) {
      return { success: false, message: '이미 사용 중인 이메일입니다.' };
    }

    // 닉네임 중복 확인
    if (users.find(u => u.nickname === userData.nickname)) {
      return { success: false, message: '이미 사용 중인 닉네임입니다.' };
    }

    // 새 사용자 추가
    const newUser = {
      id: Date.now().toString(),
      email: userData.email,
      password: userData.password, // 실제로는 해시화해야 함
      nickname: userData.nickname,
      intro: userData.intro || '',
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('btslovearmy_users', JSON.stringify(users));

    // 자동 로그인
    this.setUser({
      email: newUser.email,
      nickname: newUser.nickname,
      loginTime: new Date().toISOString()
    });

    return { success: true, user: newUser };
  },

  // 로그아웃
  logout: function() {
    localStorage.removeItem('btslovearmy_user');
    window.location.href = 'index.html';
  }
};
