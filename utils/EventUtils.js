exports.EventUtils=class EventUtils
{
   
 getRandomString(prefix = 'Test', length = 5) {
    const randomString = Math.random().toString(36).substring(2, 2 + length);
    return `${prefix}${randomString}`;
  }

   getRandomEmpID()
  {
    const randomId=Math.random()
    return '2' + Math.floor(Math.random() * 9000000 + 1000000);
  }
  getMobilenumber()
  {
    const randomId=Math.random()
      return '9' + Math.floor(Math.random() * 900000000 + 100000000);
  
  }
  getAadharNumber()
  {
    const randomId=Math.random()
      return '7' + Math.floor(Math.random() * 90000000000 + 100000000);
  
  }
  generatePanNumber()
  {
    
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Uppercase letters
      const numbers = '0123456789'; // Digits
  
      // Generate the first part (5 uppercase letters + 4 numbers)
      let result = '';
      for (let i = 0; i < 5; i++) {
          result += letters.charAt(Math.floor(Math.random() * letters.length));
      }
      for (let i = 0; i < 4; i++) {
          result += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }
  
      // Add  letter at the end
      return result += letters.charAt(Math.floor(Math.random() * letters.length));
  
     
  
  }
  generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;

    // Generate a random string of 10 characters
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    // Create the email address by appending '@malinator.com'
    return result + '@mailinator.com';
}
}
//   const eventClass=new EventUtils();
//   console.log(eventClass.getRandomEmpID())
// console.log(eventClass.getRandomString())
