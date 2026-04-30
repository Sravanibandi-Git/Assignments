const text: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
const words: string[] = text.split(" ");

//Java word is present in Array with Index
let countofJava: number = 0;

for(let i: number= 0; i < words.length; i++){
   if(words[i]==='Java') {      
    console.log("Java word present in text with Index : " + i);
   countofJava++;
       }}
  
//Count of Total Java words in the sentence     
       console.log(`Total Java words in the sentence:` + countofJava);


