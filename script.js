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
  //Next 4 Ifs are adding one character to the password if employee answers YES.
  number = confirm("Do you want number in your password?");
  if (number){
    passwordArray = numberOptions;
    password += passwordArray[Math.floor(Math.random() * passwordArray.length)]}
  upperCase = confirm("Do you want uppercase letter in your password?")
  if (upperCase){
    passwordArray = upperCaseOptions;
    password += passwordArray[Math.floor(Math.random() * passwordArray.length)]}
  lowerCase = confirm("Do you want lowercase letter in your password?")
  if (lowerCase){
    passwordArray = lowerCaseOptions;
    password += passwordArray[Math.floor(Math.random() * passwordArray.length)]}
  specialCharacter = confirm("Do you want special character in your password?")
  if (specialCharacter){
    passwordArray = specialCharacterOptions;
    password += passwordArray[Math.floor(Math.random() * passwordArray.length)]}


  //This loop is for when all criterias are selected
  if (number && upperCase && lowerCase && specialCharacter){
    passwordArray = numberOptions.concat(upperCaseOptions,lowerCaseOptions,specialCharacterOptions);
    for (let i=4; i<passwordLength;i++){
      password += passwordArray[Math.floor(Math.random() * passwordArray.length)]
     }
     return (password);
 


  } else if (number && upperCase && lowerCase){
    passwordArray = numberOptions.concat(upperCaseOptions,lowerCaseOptions);
   
    //This loop is for when three criterias are selected
    for (let i=3; i<passwordLength;i++){
      password += passwordArray[Math.floor(Math.random() * passwordArray.length)]
      }
      return (password);
  
  } else if (number && upperCase && specialCharacter){
    passwordArray = numberOptions.concat(upperCaseOptions,specialCharacterOptions);
  
    //This loop is for when three criterias are selected
    for (let i=3; i<passwordLength;i++){
      password += passwordArray[Math.floor(Math.random() * passwordArray.length)]
      }
      return (password);
  
  } else if (number && lowerCase && specialCharacter){
    passwordArray = numberOptions.concat(lowerCaseOptions,specialCharacterOptions);
  
    //This loop is for when three criterias are selected
    for (let i=3; i<passwordLength;i++){
      password += passwordArray[Math.floor(Math.random() * passwordArray.length)]
      }
      return (password);

  } else if (upperCase && lowerCase && specialCharacter){
    passwordArray = upperCaseOptions.concat(lowerCaseOptions,specialCharacterOptions);
  
    //This loop is for when three criterias are selected
    for (let i=3; i<passwordLength;i++){
      password += passwordArray[Math.floor(Math.random() * passwordArray.length)]
      }
      return (password);
  
  } else if (number && upperCase){
    passwordArray = numberOptions.concat(upperCaseOptions);
    //This loop is for when two criterias are selected
    for (let i=2; i<passwordLength;i++){
      password += passwordArray[Math.floor(Math.random() * passwordArray.length)]
      }
      return (password);
  
  } else if (number && lowerCase){
    passwordArray = numberOptions.concat(lowerCaseOptions);
    
    //This loop is for when two criterias are selected
    for (let i=2; i<passwordLength;i++){
      password += passwordArray[Math.floor(Math.random() * passwordArray.length)]
      }
      return (password);
  
  
  } else if (number && specialCharacter){
    passwordArray = numberOptions.concat(specialCharacterOptions);
   
    //This loop is for when two criterias are selected
    for (let i=2; i<passwordLength;i++){
      password += passwordArray[Math.floor(Math.random() * passwordArray.length)]
      }
      return (password);
  
  } else if (upperCase && lowerCase){
    passwordArray = upperCaseOptions.concat(lowerCaseOptions);
    
    //This loop is for when two criterias are selected
    for (let i=2; i<passwordLength;i++){
      password += passwordArray[Math.floor(Math.random() * passwordArray.length)]
      }
      return (password);
  
  } else if (upperCase && specialCharacter){
    passwordArray = upperCaseOptions.concat(specialCharacterOptions);
   
    //This loop is for when two criterias are selected
    for (let i=2; i<passwordLength;i++){
      password += passwordArray[Math.floor(Math.random() * passwordArray.length)]
      }
      return (password);
  
  } else if (lowerCase && specialCharacter){
    passwordArray = lowerCaseOptions.concat(specialCharacterOptions);
    
    //This loop is for when two criterias are selected
    for (let i=2; i<passwordLength;i++){
      password += passwordArray[Math.floor(Math.random() * passwordArray.length)]
      }
      return (password);
  
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


  //This loop is for when only one criteria is selected
  for (let i=1; i<passwordLength;i++){
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
