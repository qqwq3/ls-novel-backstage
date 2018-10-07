
'use strict';

import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import {Layout} from 'antd';
import * as hormone from 'hormone.js';

const { Header, Footer, Sider, Content } = Layout;

type Props = {};

class Login extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    componentDidMount(){
        let strToArr = hormone.strIntoArr('lisong',',');

        console.log('login componentDidMount', strToArr);
    }
    componentWillReceiveProps(nextProps){
        console.log('login', nextProps);
    }
    render(){
        return (
            <Layout>
                <Content>
                    <div >
                        用户登录
                    </div>
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // let userData = state.getIn(['']);

    // if(Immutable.Map.isMap(userData)){ userData = userData.toJS() }

    return null;
};

export default withRouter(connect()(Login));







