
'use strict';

import Immutable from 'immutable';
import {Action} from "../container/types";

const initialState = Immutable.fromJS({

});

const login = (state = initialState, action: Action) => {
    if(action.type.includes('_LOGIN')){
        // state = Immutable.fromJS(state.toJS());
        // let errorKey = action.params.stateKeys.concat(['error']);

        // // 移除上一次请求的错误提示
        // if (state.hasIn(errorKey)) {
        //     state = state.deleteIn(errorKey);
        // }
        //
        // // 请求成功 - 处理
        // switch (action.type){
        //     case '':
        //         return state.setIn(action.params.stateKeys,{
        //
        //         });
        // }
        //
        // // 请求初始 | 请求失败 | 请求其他异常 - 统一处理
        // if(action.type.endsWith('_REQUEST') || action.type.endsWith('_FAILURE') || action.type.endsWith('_ABNORMAL')){
        //     let command = action.type.split('_').splice(-1)[0];
        //
        //     switch (command) {
        //         case 'FAILURE':
        //             return state.setIn(action.params.stateKeys, {
        //
        //             });
        //         case 'REQUEST':
        //             return state.setIn(action.params.stateKeys, {
        //
        //             });
        //         case 'ABNORMAL':
        //             return state.setIn(action.params.stateKeys, {
        //
        //             });
        //     }
        // }
    }

    return state;
};

export default login;





