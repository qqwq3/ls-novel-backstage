
/*母版页*/

'use strict';

import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

type Props = {};

class IndexMaster extends Component<Props>{
    render(){
        return (
            <div>
                母版页头部
                { this.props.children }
            </div>
        );
    }
}

export default withRouter(IndexMaster);



