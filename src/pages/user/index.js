
'use strict';

import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

type Props = {};

class User extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

export default withRouter(User);


