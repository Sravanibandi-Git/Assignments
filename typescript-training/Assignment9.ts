const n: number= 5;
 
for (let i:number = 1; i<=n ; i++){

    let row: string="";

    for (let j:number = i; j < n; j++){
        row +=" ";
            }
    for (let j:number = 1; j <= i; j++){
        row +="*";
    }
console.log(row)}