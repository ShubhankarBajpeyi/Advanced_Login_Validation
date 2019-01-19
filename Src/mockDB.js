import cryptoRandomString from 'crypto-random-string';
import sha256 from 'js-sha256';

let saltGenerator = (length) => {
    return cryptoRandomString(length);
  }
let salt = saltGenerator(12);  // Getting random 12 digit string
const user = {
      "Shubhankar": `${sha256('abc' + salt)}, ${salt}`,
      "user2": `${sha256('123' + salt)}, ${salt}`,
      "user3": `${sha256('xyz' + salt)}, ${salt}`
      };
localStorage.setItem('userDB', JSON.stringify(user)); //Stringify is needed as localstorage can only store strings