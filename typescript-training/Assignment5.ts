let employeeName: string[] = ["Alice Johnson", "Bob Smith", "Carol Davis", "David Brown", "Eva Green"];
const baseSalary: number[] = [75000.0, 68000.0, 82000.0, 90000.0, 60000.0];
const experience_inyears: number[] = [5.1, 3.2, 7.1, 10.2, 2.4];
const yearendrating: number[] = [4.2, 3.8, 4.5, 2.5, 3.5];
const reward:number= 5000;
let hike: number[]=[];

for (let i=0; i < employeeName.length; i++) {
if (yearendrating[i] >= 4.0) {
    if (experience_inyears[i]> 5.0) {
        hike[i]= 0.15 * baseSalary[i] + 1500 + reward;
    } else {
           hike[i]= 0.15 * baseSalary[i] + 1500;
    }
    } else if ((yearendrating[i] >= 3.0) && (yearendrating[i] <4)) {
            if (experience_inyears[i] > 5.0) {
    hike[i]= 0.10 * baseSalary[i] +  1200 + reward;
             } else {
        hike[i]= 0.10 * baseSalary[i] + 1200;
    }
                
} else {
       if (experience_inyears[i]> 5.0) {
            hike[i]= 0.03 * baseSalary[i] + 300 + reward;
       } else { 
        hike[i]= 0.03 * baseSalary[i] + 300;           
            }     
        }
      
const hikepercentage: number= (hike[i]/baseSalary[i]) * 100;

console.log("***Hike***");
console.log(`${employeeName[i]} - ${hike[i]}`);
console.log("***Hike%***");
console.log(`${employeeName[i]} - ${hikepercentage}`);
}



