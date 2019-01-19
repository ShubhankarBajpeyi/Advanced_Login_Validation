import React from 'react';
import getUsers from '../Src/api.js';
import sha256 from 'js-sha256';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password: ''
        };
    
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
      }
    
      handleUsernameChange(event) {
        this.setState({username: event.target.value});
      }
    
      handlePasswordChange(event) {
        this.setState({password: event.target.value});
      }
      handleClick(callback) {
        let currentUser =  getUsers(), //Calling the api layer to get the user info.
            userData = currentUser[this.state.username];
        if(userData !== undefined) {
            let hashed_value = userData.split(',')[0],
                salted_value = userData.split(',')[1];
            if(sha256(this.state.password + salted_value.trim()) === hashed_value) {
                callback(); //Success!
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
      }
    render() {

        // common.loginWidget();
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4 text-center login-section">
                    <p className = "welcome">Welcome, guest!</p>
                    <img className = "login_image" src = '../Src/login.png'/>
                    <div className="search-box">
                        <div className="caption">
                            <h3>Advance Password Validation</h3>
                        </div>
                        <div className="loginForm">
                            <div className="input-group col-xs-12">
                                <div className='hidden error-message text-left'>Please correct the username</div>
                                <input type="text" id="name" onChange = {this.handleUsernameChange} className="form-control loginForm_username" placeholder="Full Name" />
                                <div className='hidden error-message text-left'>Please correct the password</div>
                                <input type="password" id="paw" onChange = {this.handlePasswordChange} className="form-control loginForm_password" placeholder="Password" />
                                <input type="button" id="submit" onClick={() => {this.handleClick(this.props.cb);}} className="form-control btn btn-primary validate_button" value="Submit" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="aro-pswd_info">
                        <div id="pswd_info">
                            <h4>Password requirements</h4>
                            <ul>
                                <li id="letter" className="invalid">At least <strong>one letter</strong></li>
                                <li id="capital" className="invalid">At least <strong>one capital letter</strong></li>
                                <li id="number" className="invalid">At least <strong>one number</strong></li>
                                <li id="length" className="invalid">Be at least <strong>8 characters</strong></li>
                                <li id="space" className="invalid">be<strong> use [~,!,@,#,$,%,^,&,*,-,=,.,;,']</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;