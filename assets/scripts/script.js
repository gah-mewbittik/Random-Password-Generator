// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  
///start project
//Arrays of lowercaseArr, numArr, and special characters
var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z'];
var uppercaseArr = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacterArr = ['!', '@', '#', "$",'%', '^', '&', '*', '(', ')', "-", '_', '=', '+', '[', ']', '{', '}', ';', ':', "'",'"', '|', ',', '.', '<','>','/', '?'];

// Array used to combine(concat) above arrays
var arrSetup= [];

// start of generatePassword //
function generatePassword(){
  //initial prompt question - Password size request
  let numberOfChar = prompt("Type the number of characters you want your password to be: ");
  
  // empty string, but will be the random generate password
  var randPass = '';

/// # of character tests  min = 8, max =128, and empty string 
 if(numberOfChar == "" || numberOfChar < 8 || numberOfChar > 128  || numberOfChar != Number(numberOfChar)){
  alert('ERROR. Enter a number that is a minimum of 8 and a maximum of 128. ONLY enter a number.');
  }else{
  // object that contains the questions need for this project 
  var passConfirms = {
    lowerQuote: confirm("Would you like to use lowercase letters?"),
    upperQuote: confirm("Would you like to use uppercase letters?"),
    numberQuote: confirm("Would you like to use numbers?"),
    specialQuote: confirm("Would you like to use special characters?")
  }

  ////////Switch starts
  switch(true){

    // lowercase evaluation + ...
    case passConfirms.lowerQuote && passConfirms.upperQuote && passConfirms.numberQuote && passConfirms.specialQuote:
      // array (arrSetup) takes an array and add, 0 or more, arrays together    NOTE: this process repeats in variation for every case
      arrSetup = lowercaseArr.concat(uppercaseArr, numArr, specialCharacterArr);
      //Generates random characters for numOfChar length and returns the password. NOTE: this process repeats exactly the same way for every case
      for(var i = 0; i < numberOfChar; i++){      
        randPass += arrSetup[(Math.floor(Math.random() * arrSetup.length))];
      }
      return randPass;
    // lowercase evaluation + ...
    case passConfirms.lowerQuote && passConfirms.upperQuote && passConfirms.numberQuote:
      arrSetup = lowercaseArr.concat(uppercaseArr, numArr);
      for(var i = 0; i < numberOfChar; i++){      
        randPass += arrSetup[(Math.floor(Math.random() * arrSetup.length))];
    }
    return randPass;
    // lowercase evaluation + ..
    case passConfirms.lowerQuote && passConfirms.upperQuote && passConfirms.specialQuote:
      arrSetup = lowercaseArr.concat(uppercaseArr, specialCharacterArr);
      for(var i = 0; i < numberOfChar; i++){      
        randPass += arrSetup[(Math.floor(Math.random() * arrSetup.length))];
    }
    return randPass;
    // lowercase evaluation + ...
    case passConfirms.lowerQuote && passConfirms.numberQuote && passConfirms.specialQuote:
      arrSetup = lowercaseArr.concat(numArr, specialCharacterArr);
      for(var i = 0; i < numberOfChar; i++){      
        randPass += arrSetup[(Math.floor(Math.random() * arrSetup.length))];
      }
      return randPass;
    // lowercase evaluation + ...
    case passConfirms.lowerQuote && passConfirms.numberQuote:  
      arrSetup = lowercaseArr.concat(numArr);
      for(var i = 0; i < numberOfChar; i++){      
        randPass += arrSetup[(Math.floor(Math.random() * arrSetup.length))];
      }
      return randPass;
    // lowercase evaluation + ...
    case passConfirms.lowerQuote && passConfirms.specialQuote:    
      arrSetup = lowercaseArr.concat(specialCharacterArr);
      for(var i = 0; i < numberOfChar; i++){      
        randPass += arrSetup[(Math.floor(Math.random() * arrSetup.length))];
      }
      return randPass;
    // lowercase evaluation + ...
    case passConfirms.lowerQuote && passConfirms.upperQuote: 
      arrSetup = lowercaseArr.concat(uppercaseArr);
      for(var i = 0; i < numberOfChar; i++){      
        randPass += arrSetup[(Math.floor(Math.random() * arrSetup.length))];
      }
      return randPass;
    // lowercase evaluation
    case passConfirms.lowerQuote:
      arrSetup = lowercaseArr;
      for(var i = 0; i < numberOfChar; i++){      
          randPass += arrSetup[(Math.floor(Math.random() * arrSetup.length))];
      }
      return randPass;

    /////uppercase evaluation + ...
    
    case passConfirms.upperQuote && passConfirms.numberQuote && passConfirms.specialQuote:
      arrSetup = uppercaseArr.concat(numArr, specialCharacterArr);
      for(var i = 0; i < numberOfChar; i++){      
        randPass += arrSetup[(Math.floor(Math.random() * arrSetup.length))];
      }
      return randPass;
    //uppercase evaluation + ...
    case passConfirms.upperQuote && passConfirms.numberQuote:
      arrSetup = uppercaseArr.concat(numArr);
      for(var i = 0; i < numberOfChar; i++){      
        randPass += arrSetup[(Math.floor(Math.random() * arrSetup.length))];
      }
      return randPass;
      //uppercase evaluation + ...
      case passConfirms.upperQuote && passConfirms.specialQuote:
        arrSetup = uppercaseArr.concat(specialCharacterArr);
        for(var i = 0; i < numberOfChar; i++){      
          randPass += arrSetup[(Math.floor(Math.random() * arrSetup.length))];
        }
        return randPass;
    //uppercase evaluation 
    case passConfirms.upperQuote:
      arrSetup = uppercaseArr;
      for(var i = 0; i < numberOfChar; i++){      
        randPass += arrSetup[(Math.floor(Math.random() * arrSetup.length))];
      }
      return randPass;
 
    ////number evaluation + ... 

    case passConfirms.numberQuote && passConfirms.specialQuote:
      arrSetup = numArr.concat(specialCharacterArr);
      for(var i = 0; i < numberOfChar; i++){      
        randPass += arrSetup[(Math.floor(Math.random() * arrSetup.length))];
      }
      return randPass;
    //number evaluation
    case passConfirms.numberQuote:
      arrSetup = numArr;
      for(var i = 0; i < numberOfChar; i++){      
        randPass += arrSetup[(Math.floor(Math.random() * arrSetup.length))];
      }
      return randPass;

    // specialQuote evaluation

    case passConfirms.specialQuote:
      arrSetup = specialCharacterArr;
      for(var i = 0; i < numberOfChar; i++){      
        randPass += arrSetup[(Math.floor(Math.random() * arrSetup.length))];
      }
      return randPass;
    // default return.
    default:
      alert('ERROR. You are required to select at least one character type. Enter a minimum of 8 and a maximum of 128 characters. ONLY enter number.');
      
  }////  end of switch

 } // end of else
 

}////  end of GeneratePassword function




