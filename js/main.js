const userName = document.querySelector('.user-name');
const loginBtn = document.querySelector('#login');
const logoutBtn = document.querySelector('#logout');

const welcome = document.querySelector('.welcome');
const loginBox = document.querySelector('.login-box');
const main = document.querySelector('.main');
const HIDDEN_CLASSNAME = 'hidden';
const BOOM_CLASSNAME = 'boom';
welcome.innerText = '';

const logIn = (event) => {
    const user = userName.value.trim();
    if (user) {
    event.preventDefault();
    localStorage.setItem('userName', user);

    welcome.innerText = `Welcome, ${user}!`;
    // 로그인 박스 숨기기
    loginBox.classList.add(HIDDEN_CLASSNAME);
    loginBox.classList.remove(BOOM_CLASSNAME);
    // 메인 화면 보이기
    main.classList.remove(HIDDEN_CLASSNAME);
    main.classList.add(BOOM_CLASSNAME);
    }
};
loginBtn.addEventListener('click', logIn);

// 로그인 유지 (새로고침 후에도 적용)
document.addEventListener('DOMContentLoaded', () => {
    setRandomBackground();

    const savedUserName = localStorage.getItem('userName');
    setTimeout(() => {
    // 페이지 로드 후 서서히 등장
    loginBox.classList.add('show');
    }, 500);
    if (savedUserName) {
    welcome.innerText = `Welcome, ${savedUserName}!`;

    // 화면 전환
    loginBox.classList.add(HIDDEN_CLASSNAME);
    loginBox.classList.remove(BOOM_CLASSNAME);
    main.classList.remove(HIDDEN_CLASSNAME);
    main.classList.add(BOOM_CLASSNAME);
    }
});

const logOut = () => {
  // 저장된 사용자 이름 & 투두리스트 삭제
    localStorage.removeItem('userName');
    localStorage.removeItem('todos');

  // 화면 전환
    loginBox.classList.remove(HIDDEN_CLASSNAME);
    loginBox.classList.add(BOOM_CLASSNAME);
    main.classList.add(HIDDEN_CLASSNAME);
    main.classList.remove(BOOM_CLASSNAME);
};

logoutBtn.addEventListener('click', logOut);
