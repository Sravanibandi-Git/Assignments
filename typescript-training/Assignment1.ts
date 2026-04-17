//1.Temperture of a city in degrees Celsius: 25.5
let temperature: number= 25.5;
console.log(`Temperature of a city in degrees Celsius: ${temperature}°C`);

//2.Whether a customer has placed an order:true or false
let order_placed: boolean= true;
console.log(`Whether a customer has placed an order: ${order_placed}`);

//3.Person's phone number:"123-456-7890"
let phone_number: number= "123-456-7890";
console.log(`Person's phone number: "${phone_number}"`);
//Note: This is working with string as well

//4.Amount of money in a customer's bank account: 1000.50
let amount_in_account: number= 1000.50;
console.log(`Amount of money in a customer's bank account: ${amount_in_account}`);

//5.Person's email address: "john.doe@example.com"
let emp1_email_address: string= "john.doe@example.com";
console.log(`Person's email address: "${emp1_email_address}"`);

//6.Coordinates of a location (latitude, longitude): 37.7749, -122.4194 
//Without using Array/Tuples
let latitude: number = 37.7749;
let longitude: number = -122.4194;
console.log(`Coordinates of a location (latitude, longitude): ${latitude},${longitude}`);
//Using an Array
let coordinates: (number|number) []= [37.7749, -122.4194];
console.log(`Coordinates of a location (latitude, longitude): ${coordinates}`);
//Using tuples
let coordinates1: [number,number] = [37.7749, -122.4194];
console.log(`Coordinates of a location (latitude, longitude): ${coordinates1}`);

//7.Person's marital status: true or false
let age: number = 25;
let marital_status: boolean= (age>=20)? "true" : "false";
console.log(`Person's marital status: ${marital_status}`);

//8.Person's occupation: "Software Engineer"
let emp_occupation: string= "Software Engineer";
console.log(`Person's occupation: "${emp_occupation}"`);

//9.Person's favourite colour: "Blue"
let favorite_colour: string= "Blue";
console.log(`Person's favourite colour: "${favorite_colour}"`);

//10.Current year: 2023
let currentDate= new Date();
currentYear= currentDate.getFullYear()-3;
console.log(`Current year: ${currentYear}`);

//11.Number of followers on a social media platform: 1,000,000
let socia_media_followers: number= 1000000;
console.log(`Number of followers on a social media platform: ${socia_media_followers}`);
//Question: Which method to be used to print a number with thousands seperator(e.g 1,000,000)?

//12.Rating of a movie: 7.5
let movie_rating: number= 7.5;
console.log(`Rating of a movie: ${movie_rating}`);

//13.Person's blood type: 'A'
let blood_group: string= "A";
console.log(`Person's blood type: '${blood_group}'`);

//14.Title of a book: "To Kill a Mockingbird"
let book_name: string= "To Kill a Mockingbird";
console.log(`Title of a book: "${book_name}"`);

//15.Number of employees in a company: 500
let total_employees: number= 500;
console.log(`Number of employees in a company: ${total_employees}`);

//16.Time of an event: 2:30 PM
console.log(currentDate.getHours(),`:`, currentDate.getMinutes());
//I am able to print the current time with hours and minutes. But unable to print the specific time in merediem format AM/PM. Need help here.

//17.Name of a country: "United States"
let country_name: string= "United States";
console.log(`Name of a country: "${country_name}"`);

//18.Person's eye color: "Brown"
let eye_color: string= "Brown";
console.log(`Person's eye color: "${eye_color}"`);

//19.Person's birthplace: "New York City"
let birth_place: string= "New York City";
console.log(`Person's birthplace: "${birth_place}"`);

//20.Distance between two cities: 200.5
let distance: number= 200.5;
console.log(`Distance between two cities: ${distance}`);



