
import React,{Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import User from '../pages/user/index';
import UserList from '../pages/user/list';
import IndexMaster from '../pages/index';
import Login from '../pages/login/index';
import configureStore from '../redux/store/index';

const store = configureStore(() => {});

const GetRouter = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path={"/index"} render={props => (
                    <IndexMaster>
                        <Switch>
                            {/*<Route path={"/index/user"} render={props => (*/}
                                {/*<User>*/}
                                    {/*<Route path={"/index/user/list"} component={UserList}/>*/}
                                {/*</User>*/}
                            {/*)}/>*/}
                            <Route render={() => <Redirect to="/index" />} />
                        </Switch>
                    </IndexMaster>
                )}/>
                <Route path='/login' component={Login} />
                <Redirect to="/login" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default GetRouter;









