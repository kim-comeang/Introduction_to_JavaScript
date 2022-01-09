// function say(ant, num){
//     for(let i = 0; i < num; i++){
//         console.log(ant);
//     }
// }
// say("이것도", 10);
// say("저것도", 2);

function aEvent(num) {
    if(num % 2 == 1){
        return "홀"
    } else {
        return "짝"
    }
}
console.log(aEvent(3));
console.log(aEvent(10));