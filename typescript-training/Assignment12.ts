// Taking base number
let x: number= 2;
//Taking exponent (positive/neagtive/zero)
let n: number[]= [10, -3, -2, 0, 2.1];
let power: number[]= [];


//Logic for x power '0'
for (let i:number =0; i < n.length; i++){
   if ( n[i] === 0)
    {
    power[i] = 1;
       }
//Logic for x power negative number       
else if ( n[i] < 0 )
{
    power[i] = 1/(x ** (-(n[i])));
}
//Logic for x power postive number
 else {
   power[i] =(x ** (n[i])); 
 } 
//Printing the x power n(values in the Array)
console.log(power[i]);
}


  

    



