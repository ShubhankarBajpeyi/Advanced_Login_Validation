import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import sha256 from 'js-sha256';
import Login from './Pages/Login.jsx';
import Success from './Pages/Success.jsx';
import './Src/mockDB.js';

const app= document.getElementById('app');
//alert(sha256('Message to hash'));
class Main extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
          };
    
        this.setLoginState = this.setLoginState.bind(this);
      }
      setLoginState(value) {
        this.setState({ isLoggedIn: value });
      };
    render() {

      return (
        <div>
          {!this.state.isLoggedIn ? (
            <Login
              cb={() => {
                this.setLoginState(true);
              }}
            />
          ) : (
            <Success
              cb={() => {
                this.setLoginState(false);
              }}
            />
          )}
        </div>
      );
    }
  }
  ReactDOM.render(<Main />, app);