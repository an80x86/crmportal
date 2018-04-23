import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Artist from './components/artist';
import Kullanici from './components/kullanici';
import Modul from './components/modul';
import Rol from './components/rol';
import Yetki from './components/yetki';

import CrmForm from './components/crmform';
import FormIsl from './components/formisl';
import Hedef from './components/hedef';

import NotFound from './components/notfound.js';


const Routes = () => {
        return(
            <Switch>
                <Route path="/" exact component={Home}/>

                <Route path="/kullanici" exact component={Kullanici}/>
                <Route path="/modul" exact component={Modul}/>
                <Route path="/rol" exact component={Rol}/>
                <Route path="/yetki" exact component={Yetki}/>

                <Route path="/crmform" exact component={CrmForm}/>
                <Route path="/form" exact component={FormIsl}/>
                <Route path="/hedef" exact component={Hedef}/>

                <Route path="/artist/:id" exact component={Artist}/>

                <Route path="*" component={NotFound}/>
            </Switch>
        )
}

export default Routes;
