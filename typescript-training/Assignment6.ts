let n: number=7;
let isprimeNumber: boolean=true;


if (n<= 1){
    console.log(`${n} is not a prime number`);
    isprimeNumber = false;
} else {
for (let i: number=2; i< n; i++) {
            if (n%i===0) {
              isprimeNumber = false;         
            }}
                if (isprimeNumber){
            console.log(`${n} is a Prime Number`);
         } else {
            console.log(`${n} is not a Prime Number`);
         }

            } 





