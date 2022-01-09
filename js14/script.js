let number = 3;
let myNumber = 5;

console.log(number);
console.log(myNumber);

function sayHello(){
    console.log('sayHello');
    console.log('Hi');
    console.log('안녕');

    let hello = "문자열 세이헬로우" // 지역 변수
    console.log(hello + " - 지역변수");
}

sayHello();
sayHello();
sayHello();


const sayBye = function(){
    console.log("bye~");
}
sayBye();