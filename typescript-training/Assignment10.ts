let prices:number[] =[7, 1, 5, 3, 6, 4];
let buyday:number = 0;
let sellday:number = 0;
let maxprofit:number = 0;

for (let i=0; i < prices.length-1; i++)  {
    for(let j=i+1; j < prices.length; j++) {
    let profit= prices[j]-prices[i];
if (profit > maxprofit) {
    maxprofit = profit;
     buyday= i+1;
sellday= j+1;
}}}
  
if (maxprofit > 0)
{ 
    console.log(`Max profit: ${maxprofit}`);
    console.log(`Share Bought on Day: ${buyday}`);
    console.log(`Share Sold on Day: ${sellday}`);
    }
    else 
    {
        console.log("Buying this share results in loss");
    }






