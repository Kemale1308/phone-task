function isValidNumber(phoneNumber) {
  
  if (phoneNumber.length === 12 && phoneNumber.startsWith("+7")) {
    return true; 
  } else {
    return false; 
  }
}

let result = isValidNumber("+71234567890");
console.log(result); 
