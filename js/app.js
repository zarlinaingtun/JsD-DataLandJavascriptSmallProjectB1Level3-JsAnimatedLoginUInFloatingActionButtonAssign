//UI
const togglebtn=document.querySelector('.toggle-btn');
const icon=document.querySelector('.toggle-btn i');
const menucontainer=document.querySelector('.menu-container');

togglebtn.addEventListener('click',()=>{
    if(icon.classList.contains('fa-hand-spock')){
        icon.classList.replace('fa-hand-spock','fa-times');
    }
    else{
        icon.classList.replace('fa-times','fa-hand-spock');
    }

    togglebtn.classList.toggle('click');
    togglebtn.classList.add('ani');
    setTimeout(()=>togglebtn.classList.remove('ani'),'900');
    
});

//AnimatedLogin
const signup=document.querySelector('.signup'),
login=document.querySelector('.login'),
forgot=document.querySelector('.forgot');

const signupui=document.querySelector('.signupui'),
loginui=document.querySelector('.loginui'),
forgotui=document.querySelector('.forgotui');

const loginlink=document.querySelector('.login-link'),
signuplink=document.querySelector('.signup-link'),
forgotlink=document.querySelector('.forgot-link');

const close=document.querySelector('.close');

signup.addEventListener('click',()=>{
    loginui.style.display="none";
    signupui.style.display="flex"
    forgotui.style.display="none";

    signup.classList.add('active');
    login.classList.remove('active');
    forgot.classList.remove('active');
});
login.addEventListener('click',()=>{
    loginui.style.display="flex";
    signupui.style.display="none"
    forgotui.style.display="none";

    signup.classList.remove('active');
    login.classList.add('active');
    forgot.classList.remove('active');
});
forgot.addEventListener('click',()=>{
    loginui.style.display="none";
    signupui.style.display="none"
    forgotui.style.display="flex";

    signup.classList.remove('active');
    login.classList.remove('active');
    forgot.classList.add('active');
});

loginlink.addEventListener('click',()=>{
    signupui.style.display="none";
    loginui.style.display="flex";
});
signuplink.addEventListener('click',()=>{
    loginui.style.display="none";
    signupui.style.display="flex";
});
forgotlink.addEventListener('click',()=>{
    loginui.style.display="none";
    forgotui.style.display="flex";
});
close.addEventListener('click',()=>{
    forgotui.style.display="none";
    loginui.style.display="flex";
    
});
