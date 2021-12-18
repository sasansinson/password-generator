// Assignment Code
var generateBtn = document.querySelector("#generate");

//Characters computer to choose from
var numberOptions = ["0","1","2","3","4","5","6","7","8","9"]
var upperCaseOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z","W"]
var lowerCaseOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var specialCharacterOptions = ["!","#","$","%","&","'","(",")","*","+","-",".","/",":","@","[","]","^","{","}","~","_","|","?","<",">"]

//Global variables
var password = "";
var passwordArray = "";

function generatePassword(){
 
 //Password length validation
  var passwordNum = window.prompt("Enter password length from 8 to 128 character");
  if (passwordNum>=8 && passwordNum<=128){
    var passwordLength = parseInt(passwordNum);
  } else {
    window.alert("Enter a number between 8 to 128")
    return;
  }

  
  
  //Employee choices are taken here
  number = confirm("Do you want number in your password?");
  upperCase = confirm("Do you want uppercase letter in your password?")
  lowerCase = confirm("Do you want lowercase letter in your password?")
  specialCharacter = confirm("Do you want special character in your password?")
  
  if (number && upperCase && lowerCase && specialCharacter){
    passwordArray = numberOptions.concat(upperCaseOptions,lowerCaseOptions,specialCharacterOptions);
  } else if (number && upperCase && lowerCase){
    passwordArray = numberOptions.concat(upperCaseOptions,lowerCaseOptions);
  } else if (number && upperCase && specialCharacter){
    passwordArray = numberOptions.concat(upperCaseOptions,specialCharacterOptions);
  } else if (number && lowerCase && specialCharacter){
    passwordArray = numberOptions.concat(lowerCaseOptions,specialCharacterOptions);
  } else if (upperCase && lowerCase && specialCharacter){
    passwordArray = upperCaseOptions.concat(lowerCaseOptions,specialCharacterOptions);
  } else if (number && upperCase){
    passwordArray = numberOptions.concat(upperCaseOptions);
  } else if (number && lowerCase){
    passwordArray = numberOptions.concat(lowerCaseOptions);
  } else if (number && specialCharacter){
    passwordArray = numberOptions.concat(specialCharacterOptions);
  } else if (upperCase && lowerCase){
    passwordArray = upperCaseOptions.concat(lowerCaseOptions);
  } else if (upperCase && specialCharacter){
    passwordArray = upperCaseOptions.concat(specialCharacterOptions);
  } else if (lowerCase && specialCharacter){
    passwordArray = lowerCaseOptions.concat(specialCharacterOptions);
  } else if (number){
    passwordArray = numberOptions;
  } else if (upperCase){
    passwordArray = upperCaseOptions;
  } else if (lowerCase){
    passwordArray = lowerCaseOptions;
  } else if (specialCharacter){
    passwordArray = specialCharacterOptions;
  } else {
    window.alert ("You should choose at least one option")
    return;  
  }


  //Loop that consolidate computer character choices and password length
    for (let i=0; i<passwordLength;i++){
     password += passwordArray[Math.floor(Math.random() * passwordArray.length)]
    }
    return (password);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
