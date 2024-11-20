const signup = document.getElementById('signup');
const userId = document.getElementById('id');
const userEmail = document.getElementById('mail-addr');
const userPassword = document.getElementById('password');
const userPasswordConfirm = document.getElementById('password-confirm');
const recommand = document.getElementById('recommand');
const memo = document.getElementById('memo')
const notification = document.getElementById('notification');

let userInfo = {
    userId:undefined,
    userEmail:undefined,
    userPassword:undefined,
    recommand:undefined,
    memo:undefined,
    notification:undefined,
}

async function notificationTrue(){
    userInfo.notification = Boolean(true);
}

async function notificationFalse(){
    userInfo.notification = Boolean(false);
}

//아이디 규칙
const regex = /^[a-z|A-Z|0-9|]+$/; 
//비밀번호 규칙
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 

function checkId(){
    //아이디 규칙 확인
    if(userId.value.length>4 && userId.value.length<10 && regex.test(userId.value))
        return true;
    else
        return false;
}

function checkPassword(){
    // 비밀번호 규칙 확인
    if(regexPassword.test(userPassword.value)){
        // 비밀번호 확인의 확인
        if(userPassword === userPasswordConfirm){ß
            return true;
        }
    }
    return false;
}

function inputUserInfo(){
    userInfo.userId = userId.value;
    userInfo.userEmail = userEmail.value;
    userInfo.userPassword = userPassword.value;
    userInfo.recommand = recommand.value;
    userInfo.memo = memo.value;
    return;
}

signup.addEventListener('click', () => {
    checkId();
    checkPassword();
    inputUserInfo();
    console.log(userInfo);
});