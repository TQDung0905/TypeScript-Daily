//if else có 5 loại
// const score: number = 75;

// if (score >= 90) {
//   console.log('Điểm A');
// } else if (score >= 80) {
//   console.log('Điểm B');
// } else if (score >= 70) {
//   console.log('Điểm C');
// } else {
//   console.log('Điểm D');
// }


// const diemSo: number = 3

// let ketQua: string = ""

// ketQua = diemSo >= 5 ? "dat" : "chua dat"
// console.log(ketQua)

const age: number = 20
const isVip: boolean = true
// let checkAge: string = ""
// checkAge = age >= 18 ? "du tuoi" : "chua du tuoi"
// console.log(checkAge)
if(age >= 18){
    if(!isVip){
        console.log("ban la VIP, moi ban vao")
    }else{
        console.log("dell phai VIP xep hang di ku cuong")
    }
}else{
    console.log("m cook")
}