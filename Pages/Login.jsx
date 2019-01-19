import React from 'react';
import * as common from '../Src/common.js';
import { Link } from 'react-router-dom';
import '../Src/validate.js';
class Login extends React.Component {
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
                                <input type="text" id="name" className="form-control loginForm_username" placeholder="Full Name" />
                                <div className='hidden error-message text-left'>Please correct the password</div>
                                <input type="password" id="paw" className="form-control loginForm_password" placeholder="Password" />
                                <input type="button" id="submit" className="form-control btn btn-primary validate_button" value="Submit" />
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