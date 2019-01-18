import sha256 from 'js-sha256';
import cryptoRandomString from 'crypto-random-string';

document.addEventListener('DOMContentLoaded', () => { 
  let saltGenerator = (length) => {
    return cryptoRandomString(length);
  }
  document.querySelector('.validate_button').addEventListener('click', () => {
     let salt = saltGenerator(12);
     alert(salt);
     const username = document.querySelector('.loginForm_username').value,
           password = document.querySelector('.loginForm_password').value;
     localStorage.setItem('login_form', 'Shubhankar,' + sha256('abc' + salt) + ',' + salt);
     if(username === localStorage.getItem('login_form').split(',')[0]) {
      let hashed_value = localStorage.getItem('login_form').split(',')[1],
          salted_value = localStorage.getItem('login_form').split(',')[2];
      if(sha256(password + salted_value) === hashed_value) {
        window.location = '/success';
      } else {
        alert('Wrong username/password');
        $('.error-message').removeClass('hidden');
        $('.loginForm_password').addClass('error-field');
        $('.loginForm_username').addClass('error-field');
        
      }
     } else {
      alert('Wrong username/password');
      $('.error-message').removeClass('hidden');
      $('.loginForm_password').addClass('error-field');
      $('.loginForm_username').addClass('error-field');
     }
    
   });
});