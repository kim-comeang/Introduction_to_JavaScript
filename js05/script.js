const data1 = "데이터"
const str1 = `문자열 중간에 ${data1} 삽입하기`
console.log(str1)

const data2 = 100
const str2 = `숫자도 문자로 녹하든다 :  ${data2} !`
console.log(str2)

const str = `그렇다면 이건 될까? ${prompt('될까?')}`
console.log(str)

let number = 21;
let player = "안드레아 피를로";

console.log(`제가 좋아하는 축구선수는 ${player}, 그의 등번호는 ${number}`)

let number2 = 07;

console.log(`제가 좋아하는 축구선수는 ${prompt('좋아하는 축구 선수는?')}, 그의 등번호는 ${number2}`)
