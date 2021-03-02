import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
// import Favorites from '../components/podcast/Favorites';
import History from './History';
import Test from './Test'


const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='navigation-list-styling'>
                <ul className='navigation-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    {/* <li><Link to='/favorites'>Favorites</Link></li> */}
                    <li><Link to='/history'>History</Link></li>
                    <li><Link to='/test'>Test</Link></li>
                </ul>
            </div>
            <div className='navigation-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    {/* <Route exact path='/favorites'><Favorites /></Route> */}
                    <Route exact path='/history'><History /></Route>
                    <Route exact path='/test'><Test /></Route>
                    <Route exact path='/'><Home /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Navigation;