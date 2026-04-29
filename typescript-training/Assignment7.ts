const sentence: string= "Java programming is fun and challenging";
const splitString: string[] = sentence.split(" ");

//1. Count the total number of words in the sentence.
const wordcount: number= splitString.length;
console.log(`Total words in the sentence: ${splitString}`);
console.log(`Total number of words in the sentence: ${wordcount}`);

//2. Print the sentence words in reverse order.
let reversedSentence:string ="";
for(let i: number= splitString.length-1 ; i >= 0 ; i--){
    reversedSentence += splitString[i]+" ";
}
console.log(`Sentence words in reverse order: ${reversedSentence}`);

//3. Convert the first character of each word to uppercase and print original sentence
let UppercaseSentence:string = "";
for (let i: number= 0; i < splitString.length; i++) {
    let word = splitString[i];
   UppercaseSentence += word.charAt(0).toUpperCase() + word.slice(1) + " ";
}
console.log("Convert the first character of each word to uppercase:");
console.log(`Original: "${sentence}"`);
console.log(`Modified: "${UppercaseSentence.trim()}"`);