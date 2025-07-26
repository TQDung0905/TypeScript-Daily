let soN: number = 5

let hinhSao: string = "*"
let khoangCach: string = " "
for(let i = 1 ; i <= soN ; i++){
    let tinhKhoangCach: number = soN - i
    let khoangCachInRa: string = khoangCach.repeat(tinhKhoangCach)
    let tinhNgoiSaoTrongMotHang: number = i * 2 - 1
    let soNgoiSaoInRa: string = hinhSao.repeat(tinhNgoiSaoTrongMotHang)
    console.log(khoangCachInRa + soNgoiSaoInRa)
}
for(let i = soN - 1 ; i >= 1 ; i--){
    let tinhKhoangCach: number = soN - i
    let khoangCachInRa: string = khoangCach.repeat(tinhKhoangCach)
    let tinhNgoiSaoTrongMotHang: number = i * 2 - 1
    let soNgoiSaoInRa: string = hinhSao.repeat(tinhNgoiSaoTrongMotHang)
    console.log(khoangCachInRa + soNgoiSaoInRa)
}