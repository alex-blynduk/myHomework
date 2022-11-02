let registerForm = document.getElementById('registerForm');
let loginForm = document.getElementById('loginForm');
let logoutBtn = document.getElementById('logoutBtn');

            registerForm.hidden = true;
            loginForm.hidden = true;
            logoutBtn.hidden = true;

let siteContent = document.getElementById('siteContent');
let errorMsg = document.getElementById('errorMessage');

            function showRegisterForm() {
                registerForm.hidden = false;
                siteContent.hidden = true;
                loginForm.hidden = true;
                errorMsg.hidden = true;
            }

            function showLoginForm() {
                registerForm.hidden = true;
                siteContent.hidden = true;
                loginForm.hidden = false;
                errorMsg.style.color = 'green';
                errorMsg.textContent = 'User created successfully';
                errorMsg.hidden = false;
            }

let startPageBtns = document.getElementById('startPageBtnsDiv');

            function showStartPage() {
                logoutBtn.hidden = true;
                siteContent.textContent = 'Site content is visible only for authorized users';
                siteContent.hidden = false;
                startPageBtns.hidden = false;
            }

            function clearRegisterForm() {
                registerInputLogin.value = '';
                registerInputNickname.value = '';
                registerInputPass.value = '';
                registerInputCheckPass.value = '';
            }

            function clearLoginForm() {
                loginFormLog.value = '';
                loginFormPass.value = '';
            }

let users = [];

            function addUser(log, nick, pass) {
                let user = {
                    login: log,
                    nickname: nick,
                    password: pass
                };
                users.push(user);
            }

            function validateUser(log) {
                for(let user of users) {
                    if(user.login == log) {
                        errorMsg.textContent = 'Login is already in use';
                        errorMsg.hidden = false;
                        return
                    }
                }
                errorMsg.textContent = '';
                addUser(registerInputLogin.value, registerInputNickname.value, registerInputPass.value);

                clearRegisterForm();
                showLoginForm();
            }

            function successfulAuthorization() {
                    errorMsg.textContent = '';
                    errorMsg.style.color = 'green';
                    siteContent.hidden = false;
                    startPageBtns.hidden = true;
                    loginForm.hidden = true;
                    logoutBtn.hidden = false; 

                    clearLoginForm();
            }

            function wrongAuthorizeData() {
                    errorMsg.textContent = 'Login or password is incorrect';
                    errorMsg.style.color = 'red';

                    clearLoginForm();
            }

            function authorize(log, pass) {
                for(let user of users) {
                    errorMsg.hidden = false;
                    
                    if(user.login == log) {
                        if (user.password == pass) {
                            siteContent.innerHTML = `Hello ${user.nickname}`;
                            successfulAuthorization();
                            return
                        }
                    }
                }
                wrongAuthorizeData();
            }

let registerInputLogin = document.getElementById('registerLogin');
let registerInputNickname = document.getElementById('registerNickname');
let registerInputPass = document.getElementById('registerPass');
let registerInputCheckPass = document.getElementById('registerCheckPass');

            function registerUser() {
                errorMsg.style.color = 'red';
                errorMsg.hidden = false;

                if (registerInputLogin.value.length > 8 || registerInputLogin.value.length < 3) {
                    errorMsg.textContent = 'Login length must be 3 to 8 symbols'
                } else if (registerInputNickname.value.length > 10) {
                    errorMsg.textContent = 'Nickname max length is 10 symbols'
                } else if ( !(registerInputPass.value == registerInputCheckPass.value) ) {
                    errorMsg.textContent = 'Passwords do not match'
                } else {
                    validateUser(registerInputLogin.value);
                }
                        
                return false;
            }

let loginFormLog = document.getElementById('loginFormLog');
let loginFormPass = document.getElementById('loginFormPass');

            function loginUser() {

                authorize(loginFormLog.value, loginFormPass.value);

                return false;
            }