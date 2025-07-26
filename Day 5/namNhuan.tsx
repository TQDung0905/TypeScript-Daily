const arr: number[] = [2020, 2111, 1111, 1284];

for (let i = 0; i < arr.length; i++) {
    const year: number = arr[i]
  if(year%4 == 0 && year%100 != 0 || year%400 == 0){
    console.log(arr[i] + " Day la nam nhuan")
  }else{
    console.log(arr[i] + " Day khong phai nam nhuan")
  }

}