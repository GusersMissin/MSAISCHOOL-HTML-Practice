function changeBg(color){
    let result = document.querySelector('#result');
    result.style.backgroundColor = color;
};

const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase.onclick = () => {
    console.log('Increase가 클릭됨');
    const current = parseInt(number.innerText, 10);
    number.innerText = current +1;
};

decrease.onclick = () => {
    console.log('Decrease가 클릭됨');
    const current = parseInt(number.innerText, 10);
    number.innerText = current -1;
};

const h2 = document.querySelector('h2');
let counter = 0;
//console.log(h2);
h2.addEventListener('click', () => {
    console.log('clicked!');
    counter++;
    h2.textContent = `클릭횟수: ${counter}`;
});

const textcount = document.getElementById('textcount')
const textarea = document.getElementById('textarea')
textarea.addEventListener('keyup', () => {
    textcount.textContent = `글자 수: ${textarea.value.length}`
})

document.getElementById('inchBtn').addEventListener('click', () => {
    let inch = document.getElementById('inch').value
    let cm = inch * 2.54
    document.getElementById('cm').textContent = `${cm} cm`
})