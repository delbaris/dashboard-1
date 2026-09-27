(() => {
    const LOGIN_PATH = '/login';
    const STORAGE_KEY = 'robin-auth-session';
    const DEFAULT_USERNAME = 'admin';
    const DEFAULT_PASSWORD = 'Robin1404!';
    const DEFAULT_USER = {
        username: DEFAULT_USERNAME,
        name: 'مدیر سامانه',
        role: 'مدیر کل'
    };

    const normalizePath = path => path.replace(/\/$/, '') || '/';
    const path = normalizePath(window.location.pathname);
    const isLoginPage = path === LOGIN_PATH;

    function readUser() {
        try {
            const value = sessionStorage.getItem(STORAGE_KEY);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            return null;
        }
    }

    function saveUser(user) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }

    function goToDashboard() {
        window.location.replace('/');
    }

    window.RobinAuth = {
        getUser: readUser,
        logout() {
            sessionStorage.removeItem(STORAGE_KEY);
            window.location.replace(LOGIN_PATH);
        }
    };

    if (!isLoginPage) {
        if (!readUser()) window.location.replace(LOGIN_PATH);
        return;
    }

    if (readUser()) {
        goToDashboard();
        return;
    }

    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('loginForm');
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        const error = document.getElementById('loginError');
        const submit = document.getElementById('loginSubmit');
        const toggle = document.getElementById('passwordToggle');

        if (!form || !username || !password || !error || !submit) return;

        toggle?.addEventListener('click', () => {
            const showing = password.type === 'text';
            password.type = showing ? 'password' : 'text';
            toggle.setAttribute('aria-label', showing ? 'نمایش رمز عبور' : 'پنهان کردن رمز عبور');
            toggle.setAttribute('aria-pressed', String(!showing));
            password.focus();
        });

        form.addEventListener('submit', event => {
            event.preventDefault();
            error.textContent = '';
            const enteredUsername = username.value.trim();
            const enteredPassword = password.value;

            if (!enteredUsername || !enteredPassword) {
                error.textContent = 'نام کاربری و رمز عبور را وارد کنید.';
                (!enteredUsername ? username : password).focus();
                return;
            }

            submit.disabled = true;
            submit.setAttribute('aria-busy', 'true');
            submit.textContent = 'در حال بررسی…';

            window.setTimeout(() => {
                if (enteredUsername === DEFAULT_USERNAME && enteredPassword === DEFAULT_PASSWORD) {
                    saveUser(DEFAULT_USER);
                    goToDashboard();
                    return;
                }
                error.textContent = 'نام کاربری یا رمز عبور درست نیست. دوباره بررسی کنید.';
                submit.disabled = false;
                submit.removeAttribute('aria-busy');
                submit.textContent = 'ورود به داشبورد';
                password.value = '';
                password.focus();
            }, 180);
        });
    });
})();
