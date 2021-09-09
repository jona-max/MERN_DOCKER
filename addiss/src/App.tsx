import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import {Createuser} from './User/Createuser';
import { Updateuser } from './User/Updateuser';
import {Navigation} from './Navigation/Navigation';
import { UserList } from './User/UserList';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={UserList} />
        <Route exact path='/employee/:empId' component={Updateuser} />
        <Route exact path='/create' component={Createuser} />
      </Switch>
    </div>
  );
}

export default App;
