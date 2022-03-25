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

const a =['1','sada','dq82y dh'];
console.log(a);

for (let i = 0; i < a.length; i++) {
    console.log(i)
}

const remove = a.splice(1,1);
console.log(a);
console.log(remove);