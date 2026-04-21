let customerMap :Map<string, string | number | boolean>= new Map();
customerMap.set("customerName", "John Doe");
customerMap.set("creditscore", 720);
customerMap.set("income", 55000.0);
customerMap.set("isEmployed", true);
customerMap.set("debtToIncomeRatio", 35.0);

let customerName = customerMap.get("customerName") as string;
let creditscore = customerMap.get("creditscore") as number;
let income = customerMap.get("income") as number;
let isEmployed = customerMap.get("isEmployed") as boolean;
let debtToIncomeRatio = customerMap.get("debtToIncomeRatio") as number;

if (creditscore > 750) {
    console.log("Loan Approved");
} 
else if ((creditscore >= 650) && (creditscore < 750)) {
  if (income >= 50000 && isEmployed && debtToIncomeRatio < 40) {
             console.log('Loan status: "Loan Approved"'); 
              }     else {
            console.log('Loan status: "Loan Denied"');
    }}
    else {
    console.log('Loan status: "Loan Denied"');    
    } 
        
   
