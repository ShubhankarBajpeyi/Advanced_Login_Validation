import sha256 from 'js-sha256';
import getUser from '../Src/api.js';

document.addEventListener('DOMContentLoaded', () => { 
 
  document.querySelector('.validate_button').addEventListener('click', () => {
     const username = document.querySelector('.loginForm_username').value,
           password = document.querySelector('.loginForm_password').value;
     let currentUser =  getUser();//Calling the api layer to get the user info.
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