// const result = window.confirm("확인해봐요")

// console.log(result)

function noReturn() {
    console.log("반환하지 않는다");
};

const result = noReturn();
console.log(result);


function isReturn() {
    console.log("반환한다");
    return 2;
};

const result2 = isReturn();
console.log(result2);