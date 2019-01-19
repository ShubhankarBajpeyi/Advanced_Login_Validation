import React from 'react';

class Success extends React.Component {
    handleClick(callback) {
      callback();
    }
    render(){
        return(
            <div>
                 <div className = 'col-xs-12'>
                    <button onClick = {() => {this.handleClick(this.props.cb);}} className='btn btn-primary pull-right logout_button'> Logout </button>
                </div>
                <h1 className = 'login_margin'> Great, you were successfully authenticated! </h1>
            </div>
        );
    }
}

export default Success;