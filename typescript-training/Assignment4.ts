const transactions: number[]= [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
let totalcredittransactions: number[]=[];
let totaldebittransactions: number[]=[];
let totaltransactions: number=0;
let totalCreditAmount: number=0;
let totalDebitAmount: number=0;
let suspicioustransactions: number=0;


for (const amount of transactions) {
       if (amount> 0) {
    totalcredittransactions++;
    totalCreditAmount += amount;
        if (amount>10000) {
            console.log(`Suspicious credit transactions with amount: ${amount}`);
            suspicioustransactions++;
        }
} else {
    totaldebittransactions++;
    totalDebitAmount -= amount;
    if (amount< -10000) {
            console.log(`Suspicious debit transactions with amount: ${amount}`);
            suspicioustransactions++;
        }
}}

const totalBalance: number= totalCreditAmount - totalDebitAmount;

console.log("***Transaction Summary***");
console.log(`Total Credit Transactions: ${totalcredittransactions}`);
console.log(`Total Debit Transactions: ${totaldebittransactions}`);
console.log(`Total Credit Amount: ${totalCreditAmount}`);
console.log(`Total Debit amount: ${totalDebitAmount}`);
console.log(`Total number of Suspecious Transactions: ${suspicioustransactions}`);
console.log(`Final Balance in the account: ${totalBalance}`);

export {};