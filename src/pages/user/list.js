
/*用户列表*/

'use strict';

import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

type Props = {};

class UserList extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return (
            <div>
                用户列表
            </div>
        );
    }
}

export default withRouter(UserList);


















