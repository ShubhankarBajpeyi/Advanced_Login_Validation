import sha256 from 'js-sha256';
import cryptoRandomString from 'crypto-random-string';

document.addEventListener('DOMContentLoaded', () => { 
  let saltGenerator = (length) => {
    return cryptoRandomString(length);
  }
  document.querySelector('.validate_button').addEventListener('click', () => {
     let salt = saltGenerator(12);  // Getting random 12 digit string
     const username = document.querySelector('.loginForm_username').value,
           password = document.querySelector('.loginForm_password').value,
     user = {
        "Shubhankar": `${sha256('abc' + salt)}, ${salt}`,
        "user2": `${sha256('123' + salt)}, ${salt}`,
        "user3": `${sha256('xyz' + salt)}, ${salt}`
        };
     localStorage.setItem('login_form', JSON.stringify(user)); //Stringify is needed as localstorage can only store strings
     let currentUser = JSON.parse(localStorage.getItem('login_form')); //Getting item while converting string to object.
     if(currentUser[username] !== undefined) {
      let hashed_value = currentUser[username].split(',')[0],
          salted_value = currentUser[username].split(',')[1];
      if(sha256(password + salted_value.trim()) === hashed_value) {
        window.location = '/success'; //Success!
      } else {
        $('.error-message').removeClass('hidden');
        $('.loginForm_password').addClass('error-field');
        $('.loginForm_username').addClass('error-field');
        
      }
     } else {
      $('.error-message').removeClass('hidden');
      $('.loginForm_password').addClass('error-field');
      $('.loginForm_username').addClass('error-field');
     }
    
   });
});