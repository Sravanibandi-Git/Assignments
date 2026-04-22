let students: string[] = ["Suresh", "Mahesh", "Naresh"];
let marks: number[] = [75, 80, 82];
let updatedmarks: number[]=[];
let totalmarks: number = 0;

console.log(`Updated Marks:`);

for (let i=0; i < marks.length; i++)  {
    updatedmarks[i] = marks[i]+10;
    totalmarks += updatedmarks[i];
    console.log(`${students[i]}: ${updatedmarks[i]}`);
}

let averagemarks: number= totalmarks/updatedmarks.length;
console.log(`Average Marks: ${averagemarks}`);
    