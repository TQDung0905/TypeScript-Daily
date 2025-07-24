//tim so lon nhat

let numberArray: number[] = [1,3,6,9,5,2]

let maxNumber: number = numberArray[0]

for(let i: number = 1 ; i < numberArray.length ; i++){ // vì i chạy từ số 3 do max number nó đã ở vị trí đầu tiên nên i = 1 thì i nó ở vị trí thứ 2 
    if(numberArray[i] > maxNumber){ //nếu số trong mảng tại vị trí i nếu lớn hơn maxNumber  thì nó sẽ thành maxNumber mới lặp lại hết mảng
        maxNumber = numberArray[i]
    }
}
console.log(maxNumber)