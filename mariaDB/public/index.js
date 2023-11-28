document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');

  // 회원가입 이벤트 핸들러
  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = signupForm.querySelector('#signupUsername').value;
    const password = signupForm.querySelector('#signupPassword').value;

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error during signup:', error);
    }
  });

  // 로그인 이벤트 핸들러
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = loginForm.querySelector('#loginUsername').value;
    const password = loginForm.querySelector('#loginPassword').value;

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error during login:', error);
    }
  });
});