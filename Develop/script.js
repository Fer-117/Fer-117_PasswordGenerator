// Assignment code here
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = [0,1,2,3,4,5,6,7,8,9];
let specialCharacters = ['!','\"','#', '$', '%', '&','\'','\(','\)', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>','?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];


let promptCounter = 0;

//prompts for generating password
let pwdLength = 8;
pwdLength = prompt("What password length would you like?", "type a number here");

if(isNaN(pwdLength)){
  alert("not a number, please try again")
}else {
  while(pwdLength < 8 || pwdLength > 128){
    alert("Password length must be greater than 8 characters and less than 128 characters and must be a number. Please try again");
    pwdLength = parseINt(prompt("What password length would you like?", "type a number here"));
}
}
//prompt for lowercase
let lowercase = prompt("Do you want lowercase letters?", "yes/no");
// console.log(lowercase);
if(lowercase != "yes" || lowercase != "no"){
  console.log("please type \'Yes\' or \'No\' ")
}
if(lowercase === "no"){
  lowercase = false;

}else{
  lowercase = true;
  promptCounter++;
}

//prompt for uppercase
let uppercase = prompt("Do you want uppercase letters?", "yes/no");
// console.log(lowercase);
if(uppercase != "yes" || uppercase != "no"){
  console.log("please type \'Yes\' or \'No\' ")
}
if(uppercase === "no"){
  uppercase = false;
}else{
  uppercase = true;
  promptCounter++;
}

//prompt for numeric
let numeric = prompt("Do you want numeric values?", "yes/no");
// console.log(lowercase);
if(numeric != "yes" || numeric != "no"){
  console.log("please type \'Yes\' or \'No\' ")
}
if(numeric === "no"){
  numeric = false;
}else{
  numeric = true;
  promptCounter++;

}

//prompt for special characters
let specialChar = prompt("Do you want special characters?", "yes/no");
// console.log(lowercase);
if(specialChar != "yes" || specialChar != "no"){
  console.log("please type \'Yes\' or \'No\' ")
}
if(specialChar === "no"){
  specialChar = false;
}else{
  specialChar = true;
  promptCounter++;
}

// console.log("password length after while loop: " + pwdLength);
function generatePassword(){
  var prePassword = [];
  console.log("This is inside the generatePassword function: " + lowercase);

  if(lowercase){
    for(var i = 0; i < pwdLength/4; i++){
      prePassword.push(alphabet[Math.floor(Math.random() * 26)]).toLowerCase;
      console.log(prePassword);
    }
  }else if(uppercase){
    for(var i = 0; i < pwdLength/4; i++){
      prePassword += alphabet[Math.floor(Math.random() * 26)];
      console.log(prePassword);
    }
  }else if(numeric){
    for(var i = 0; i < pwdLength/4; i++){
      prePassword += numbers[Math.floor(Math.random() * 10)];
      console.log(prePassword);
    }
  }else if(specialChar){
    for(var i = 0; i < pwdLength/4; i++){
      prePassword += specialCharacters[Math.floor(Math.random() * 32)];
      console.log(prePassword);
    }
  }else {
    for(var i = 0; i < pwdLength/4; i++){
      prePassword.push(alphabet[Math.floor(Math.random() * 26)]).toLowerCase;
      console.log(prePassword);
    }
  }
  return prePassword.toString(); 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
