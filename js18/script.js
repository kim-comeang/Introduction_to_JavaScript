const btn1 = document.getElementById("button1")
const btn2 = document.getElementById("button2")
const btn3 = document.getElementById("button3")

const handleClick = function(e) {
    console.log(e.target);
};

btn1.addEventListener('click', handleClick)
btn2.addEventListener('click', handleClick)
btn3.addEventListener('click', handleClick)
// btn2.addEventListener('click', function(){
//     console.log("클릭클릭?");
// })

// btn2.removeEventListener('click', handleClick)
