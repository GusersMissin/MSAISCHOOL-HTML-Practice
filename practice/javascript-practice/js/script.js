/*
console.log("Hello Javascript");
alert('alert');
confirm('confirm msg');
document.write('<h2>안녕하세요</h2>');
prompt('이름을 입력하세요.');
*/

/*
console.log(typeof('123'));
console.log(typeof(123));
console.log(typeof(true));

console.log(`표현식 123 + 45의 값은 ${123+45}입니다`)

const pi = 3.141592;
pi = 3;
*/

/*
let a = 10;

console.log(a+=1);
console.log(a-=1);
console.log(a*=1);
console.log(a/=1);
console.log(a%=1);
*/

/*
//변수 선언
let number = 10;
//변수 출력
alert(number++);
alert(number);
number += 1;
alert(number);
alert(++number);
number++;
alert(number);
*/

/*
let name = prompt("이름을 입력해주세요.")
document.write(`<h1>어서오세요</h1>\n<b>${name}</b>님, 환영합니다.`)
*/

/*
let name = prompt("이름을 입력해주세요.")
document.write(`<h1>어서오세요</h1>\n<b>${name}</b>님, 환영합니다.`)
*/

/*
const year = prompt("태어난 연도를 입력하세요.(YYYY)")
const age = 2024 - year
console.log(age)
*/

/*
const num1 = prompt("첫번째 수를 입력해주세요.")
const num2 = prompt("두번째 수를 입력해주세요")
document.write(`${num1} + ${num2} = ${num1+num2}<br>${num1} - ${num2} = ${num1-num2}<br>${num1} * ${num2} = ${num1*num2}<br>${num1} / ${num2} = ${num1/num2}<br>${num1} % ${num2} = ${num1%num2}`)
*/

/*
let num = prompt("숫자를 입력해주세요.")
if(num==null){
    console.log("취소하셨습니다.")
}
else if(num===''){
    console.log("입력값이 없습니다.")
}
else {
    num = Number(num)
    if(isNaN(num)){
        console.log('숫자 외의 값을 입력하셨습니다.')
    }else if(num===0){
        console.log("0을 입력하셨습니다.")
    }else if(num%3 === 0){
        console.log("3의 배수입니다.")
    }else{
        console.log("3의 배수가 아닙니다.")
    }
}
*/

/*
const year = prompt("태어난 연도를 입려해주시기 바랍니다.")
const numToAnimal = year%12

switch(numToAnimal){
    case 0:
        alert(`당신은 원숭이띠입니다.`)
        break;
    case 1:
        alert(`당신은 닭띠입니다.`)
        break;
    case 2:
        alert(`당신은 개띠입니다.`)
        break;
    case 3:
        alert(`당신은 돼지띠입니다.`)
        break;
    case 4:
        alert(`당신은 쥐띠입니다.`)
        break;
    case 5:
        alert(`당신은 소띠입니다.`)
        break;
    case 6:
        alert(`당신은 호랑이띠입니다.`)
        break;
    case 7:
        alert(`당신은 토끼띠입니다.`)
        break;
    case 8:
        alert(`당신은 용띠입니다.`)
        break;
    case 9:
        alert(`당신은 뱀띠입니다.`)
        break;
    case 10:
        alert(`당신은 말띠입니다.`)
        break;
    case 11:
        alert(`당신은 양띠입니다.`)
        break;
}
*/

/*
let sum=0
for(i=1;i<=5;i++){
    sum+=i
    console.log(i)
}
console.log(sum)
*/

/*
for(i=1;i<10;i++){
    for(j=1;j<10;j++){
        document.write(`${i} * ${j} = ${i*j}<br>`)
    }
}
*/

/*
const all = prompt("입장하실 총원을 입력해주세요.")
const line = Number(prompt("한 줄에 앉을실 인원수를 입력해주세요."))
let count=0
document.write("<table style='margin:auto;' border=1><tr><td>교탁</td></tr></table>")
document.write("<table style='margin:auto;' border=1>")
for(i=0;i<all;i++){
    if(count++===0){
        document.write("<tr>")
    }
    document.write(`<td style='text-align:center;'>좌석 ${i+1}</td>`)
    if(count===line){
        document.write("</tr>")
        count=0
    }
}
document.write("</table>")
*/

/*){
    for(j=1;j<15-i;j++){
        document.write("&nbsp")
    }
    for(j=1;j<=2*i-1;j++){
        if(i===1){
            document.write("<span style='color:yellow; font-weight:bold;'>*</span>")
        }
        else{
            if(j%3===2){
                document.write("<span style='color:red;'>*</span>")
            } else {
                document.write("<span style='color:green;'>*</span>")
            }
        }
    }
    document.write("<br>")
}
document.write('</div>')
*/

/*
//팩토리얼
const start = prompt("수를 입력해주세요")
let num = start
let result = 1
while(1<num){
    result *= num--;
}
document.write(`${start}! = ${result}입니다`)
*/

/*
sum = 0
const num = prompt("수를 입력해주세요.")
for(i=0;i<=num;i++){
    if(i%2===0){
        sum+=i;
        continue;
    }
}
document.write(sum)
*/

/*
// 숫자 맞추기
const randomNumber = Math.floor(Math.random() * 100) + 1;
let chance = 10
let input
while(chance>0){
    input = prompt("숫자를 입력해주세요.")
    if(1<=input && input<=100){
        if(input < randomNumber){
            alert(`UP!\n기회가 ${chance}번 남았습니다.`)
        }else if (input > randomNumber){
            alert(`DOWN!\n기회가 ${--chance}번 남았습니다.`)
        }else{
            alert("정답을 맞췄습니다.\n숫자 맞추기를 종료합니다.")
            break;
        }
    } else {
        alert("잘못된 값을 입력하셨습니다.")
    }
}
if(chance===0){
    alert("숫자 맞추기에 실패하셨습니다.")
}else{
    alert(`${10-chance}번 만에 성공하셨습니다.`)
}
*/

/*
const fruits =['apple','orange','banana']
for(const fruit of fruits){
    console.log(fruit)
}

const user = {name:'chris',age:30, city:'anyang'};
for(const k in user){
    console.log(k)
    console.log(user[k])
}
*/

/*
function greeting(){
    console.log('인사');
}
greeting();
*/

/*
function sum(a,b) {
    return a+b;
}

let result = sum(1,2)
alert(result);
*/

/*
let varA = function funcA(){
    console.log('funcA')
}

varA();
funcA();
*/

//콜백함수
/*
function main(value){
    //이 부분이 콜백함수
    value();
}

function sub() {
    console.log("I am sub");
}

//main(sub)
main(() => {
    console.log("I am sub2");
});
*/

/*
function repeat(count, callback) {
    for(let idx = 1; idx <= count; idx++){
        callback(idx);
    }

}

repeat(5, (idx) => {
    console.log(idx)
});

repeat(5, (idx) => {
    console.log(idx*2)
});

repeat(5, (idx) => {
    console.log(idx*5)
});
*/

/*
const numbers = [272,52,103,32,57]

//for(i in numbers){
//    console.log(`${i}번째 요소: ${numbers[i]}`)
//}

//numbers.forEach((element,index) => {
//    console.log(`${index}번쨰 요소: ${element}`)
//})

return_numbers = numbers.map(element => element**2)
console.log(return_numbers);
*/

/*
const numbers = [0,1,2,3,4,5]

evenNumbers = numbers.filter(index => index%2===0)

console.log(`원래 배열: ${numbers}`)
console.log(`짝수만 추출: ${evenNumbers}`)
*/
const genre = ["Sci-Fi", "Action", "Drama", "Comedy"];
console.log("추천 받을 장르를 선택하세요:");
genre.forEach((genre, index) => console.log(`${index + 1}. ${genre}`));

const userChoice = prompt('추천 받을 장르를 선택하세요: ');
const selectedGenre = genre[userChoice - 1];

recommendMovies(selectedGenre);

function recommendMovies(selectedGenre){
    const movies = [
        {
            title:'Inception',
            genre:'Sci-Fi',
            rating:8.8
        },
        {
            title:'The Dark Knight',
            genre:'Action',
            rating:9.0
        },
        {
            title:'Parasite',
            genre:'Drama',
            rating:8.6
        },
        {
            title:'Avengers: Endgame',
            genre:'Actjion',
            rating:8.4
        },
        {
            title:'Interstellar',
            genre:'Sci-Fi',
            rating:8.6
        }
    ]
    
    filteredMovies = movies.filter(index => index.genre === selectedGenre);
    filteredMovies.forEach(movie => console.log(`제목: ${movie.title}\n평점: ${movie.rating}`))
}
