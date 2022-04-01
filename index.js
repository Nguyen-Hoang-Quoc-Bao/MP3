//login
const login = document.querySelector('.js-login')
const formlogin = document.querySelector('.formlogin')
const closelogin = document.querySelector('.login--close')
login.addEventListener('click', function(){
    formlogin.classList.add('openlogin')
})
closelogin.addEventListener('click', function(){
    formlogin.classList.toggle('openlogin')
})
//signup
const signup = document.querySelector('.js-signup')
const formsignup = document.querySelector('.formsignup')
const closesignup = document.querySelector('.login-close')
signup.addEventListener('click', function(){
    formsignup.classList.add('opensignup')
})
signup.addEventListener('click', function(){
    formlogin.classList.remove('openlogin')
})
closesignup.addEventListener('click', function(){
    formsignup.classList.toggle('opensignup')
})

//header
const homemenu = document.getElementById('moblie-navbar');
const header = document.getElementById('header-0');
homemenu.onclick = function(){
    var isOpen = header.clientHeight === 49;
    if(isOpen) {
        header.style.height = 'auto';
    }
    else{
        header.style.height = '49px';
    }
}

const menuUser = document.getElementById('moblie-navbar');
const headeruser = document.getElementById('header-0');
menuUser.onclick = function(){
    var isOpen = headeruser.clientHeight === 49;
    if(isOpen) {
        headeruser.style.height = 'auto';
    }
    else{
        headeruser.style.height = '49px';
    }
}