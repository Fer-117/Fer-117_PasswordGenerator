// Characters available for the password generator
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = [0,1,2,3,4,5,6,7,8,9];
let specialCharacters = ['!','\"','#', '$', '%', '&','\'','\(','\)', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>','?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// declare and initialize password variable 
let password = "";

// declare variables for length of password
let minLength;
let maxLength;

// prompt for user input to get the length of the password, show alert messages if password does not meet length requirements 
minLength = prompt("What is the minimum length you want for your password? ");
if(minLength < 8 || minLength > 128){
    do{
        alert("The password length must be a number between 8 and 128 characters long. \nPlease try again");
        minLength = prompt("what is the minimum length?");
    }while(minLength < 8 || minLength > 128)
}
maxLength = prompt("What is the maximum length?");
if(maxLength < 8 || maxLength > 128){
    do{
        alert("The password length must be a number between 8 and 128 characters long. \nPlease try again");
        maxLength = prompt("What is the maximum length?");
    }while(maxLength < 8 || maxLength > 128)
}
// log the user input to debug
// console.log(`Minimum length: ${minLength}\nMaximum length: ${maxLength}`);

// Variables to capture the user input for the filters
let LoCase;
let lowerCase;


let upCase;
let upperCase;

let numValues;
let numericValues;

let specialChar;
let characters;

// a counter so we can track how many of the filters will be applied to the password 
let optionsCounter = 0;

// Do...While loop for getting lowercase filter
do{
    LoCase = prompt("Include lowercase letters?");
    if(LoCase == "yes"){
        lowerCase = true;
        optionsCounter++;
        break;
    }else if(LoCase == "no"){
        lowerCase = false;
        break;
    }else{
        alert("Please write \"yes\" or \"no\".");
    }
}while(lowerCase !== true || lowerCase !== false);
// Log for debuggin purposes
console.log(`Lowercase = ${lowerCase}`);

// Do...While loop for getting uppercase filter
do{
    upCase = prompt("Include uppercase letters?");
    if(upCase == "yes"){
        upperCase = true;
        optionsCounter++;
        break;
    }else if(upCase == "no"){
        upperCase = false;
        break;
    }else{
        alert("Please write \"yes\" or \"no\".");
    }
}while(upperCase !== true || upperCase !== false);
// Log for debuggin purposes
console.log(`Uppercase = ${upperCase}`);

// Do...While loop for getting numeric filter
do{
    numValues = prompt("Include numeric values?");
    if(numValues == "yes"){
        numericValues = true;
        optionsCounter++;
        break;
    }else if(numValues == "no"){
        numericValues = false;
        break;
    }else{
        alert("Please write \"yes\" or \"no\".");
    }
}while(numericValues !== true || numericValues !== false);
// Log for debuggin purposes
console.log(`Numeric values = ${numericValues}`);

// Do...While loop for getting special characters filter
do{
    specialChar = prompt("Include special characters?");
    if(specialChar == "yes"){
        characters = true;
        optionsCounter++;
        break;
    }else if(specialChar == "no"){
        characters = false;
        break;
    }else{
        alert("Please write \"yes\" or \"no\".");
    }
}while(characters !== true || characters !== false);
// Log for debuggin purposes
console.log(`Special characters = ${characters}`);
console.log(`options = ${optionsCounter}`);

// Select the dom element and add an event listener to the "generate" button
let generateBtn = document.getElementById("generate");
generateBtn.addEventListener('click', generatePassword);

// Function to add lowercase letters to the password
function addLowercase(){
    if(lowerCase){
        for(let i = 0; i < Math.floor(maxLength / optionsCounter); i++){
            password += (alphabet[Math.floor(Math.random() * 26)]).toLowerCase();
        } 
    }
}
// Function to add uppercase letters to the password
function addUppercase(){
    if(upperCase){
        for(let i = 0; i < Math.floor(maxLength / optionsCounter); i++){
            password += (alphabet[Math.floor(Math.random() * 26)]);
        } 
    }
}
// Function to add numbers to the password
function addNumbers(){
    if(numericValues){
        for(let i = 0; i < Math.floor(maxLength / optionsCounter); i++){
            password += (numbers[Math.floor(Math.random() * 10)]);
        } 
    }
}
// Function to add special characters to the password
function addSymbols(){
    let specialLength = specialCharacters.length;
    if(characters){
        for(let i = 0; i < Math.floor(maxLength / optionsCounter); i++){
            password += (specialCharacters[Math.floor(Math.random() * specialLength)]);
        } 
    }
}
// function to get a random integer to use in the shuffle function
function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}
// shuffle the order of the password that was generated
function shuffle(s) {
    var arr = s.split('');           // Convert String to array
    var n = arr.length;              // Length of the array
    
    for(var i=0 ; i<n-1 ; ++i) {
      var j = getRandomInt(n);       // Get random of array length
      
      var temp = arr[i];             // Swap arr[i] and arr[j]
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
  }

function generatePassword(){
    // make calls to each function in order to add the selected filters to the password
    addLowercase();
    addUppercase() 
    addNumbers() 
    addSymbols();

    // created a variable to store the shuffled password
    let shuffledPassword = shuffle(password); //pass the password to the shuffle function, otherwise the filters will be added in order

    // log for debugging
    console.log(shuffledPassword);
    // apply the shuffled password to the HTML
    document.querySelector("textarea").innerHTML = shuffledPassword;
    // reset the value of password, otherwise when a new password is generated it will be added to the previous password
    password = "";
}