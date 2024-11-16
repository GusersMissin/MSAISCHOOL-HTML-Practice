const id=prompt("아이디를 입력해주세요.")
const adminId="Admin"
const adminPassword="pwd1234"

if (id===null){
    alert("취소되었습니다.")
}
else if(id===adminId){
    const password=prompt("비밀번호를 입력해주세요.")
    if(password===null){
        alert("취소되었습니다.")
    }else if(password === adminPassword){
        alert("환영합니다!")
    }else{
        alert("인증에 실패하셨습니다.")
    }
}else{
    alert("인증되지 않은 사용자입니다.")
}