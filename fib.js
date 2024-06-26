let num = 15
let a = 0
let b = 1

for (let i = 1; i < num; i++){
    let nextNumb = a + b
    a = b
    b = nextNumb
}

console.log(b);