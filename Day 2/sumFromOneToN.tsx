//tính tổng từ 0 tới N
let numberNInput: number = 10

let sumN: number = 0

for(let i: number = 1 ; i <= numberNInput ; i++){
    sumN = i + sumN
}
console.log("Sum: " + sumN)