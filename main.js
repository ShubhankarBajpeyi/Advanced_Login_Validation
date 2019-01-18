import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import sha256 from 'js-sha256';
import Login from './Pages/Login.jsx';
import Success from './Pages/Success.jsx';

const app= document.getElementById('app');
//alert(sha256('Message to hash'));
ReactDOM.render(
<BrowserRouter>
<div>

    <div className='container'>
    <Route exact path="/" component={Login}> </Route>
    <Route exact path="/success" component={Success}> </Route>
    </div>

</div>
</BrowserRouter>,
app);