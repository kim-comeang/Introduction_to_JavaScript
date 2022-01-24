const inpputType = document.querySelector("#typing")
const inpputClick = document.querySelector("#push")

const handleTyping = function(){
    console.log("타이핑")
}
const handleClick = function(){
    console.log("클릭")
}

inpputType.onkeydown = handleTyping
inpputClick.onclick = handleClick