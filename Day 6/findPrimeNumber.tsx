let primeA: number = 1

let primeB: number = 1000

while (primeA <= primeB)
{
    let isPrime: boolean  = true
    if( primeA > 1){
        for( let i = 2 ; i < primeA ; i ++){
            if (primeA % i == 0){
                isPrime = false;
                break
            }
        }
        if(isPrime ){
            let changeString: string = primeA.toString()
            let kqPalin: string = changeString.split('').reverse().join('')
            if(changeString == kqPalin){
                console.log(primeA)
            }
        }
    }
    primeA++
}