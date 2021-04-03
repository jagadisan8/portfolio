import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import Joke from './components/Joke';
import {Router,Switch,Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import MusicMaster from './project/music-master';

const History = createBrowserHistory();

ReactDOM.render(
<Router history={History}>
    <Switch>
        <Route exact={true} path='/' component={App}></Route>
        <Route path='/jokes' component={Joke}></Route>
        <Route path='/music-master' component={MusicMaster}></Route>
    </Switch>
</Router>
,document.getElementById('root'));