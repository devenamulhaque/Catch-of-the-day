import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Store from './Store'
import App from './App'
import NotFound from './NotFound'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Store}></Route>
            <Route path="/store/:id" component={App}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
)

export default Router