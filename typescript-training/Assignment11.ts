const n: number= 5;
const m: number[]=[1, 2, 3, 4, 5];

//Upper half of the triangle

for (let i:number = 1; i <= n ; i++){
     let row: string="";
            for (let j:number = 1; j <= n - i; j++){
        row += " ";
            }
            for (let j:number = 1; j <= i ; j++){
        row += j + " ";
            }
            console.log(row);
        }
//Lower half of the triangle

 for (let i:number = n - 1; i >=1 ; i--){
     let row: string="";
            for (let j:number = 1; j <= n - i; j++){
        row += " ";
            }
            for (let j:number = 1; j <= i ; j++){
        row += j + " ";
            }
console.log(row);

}
