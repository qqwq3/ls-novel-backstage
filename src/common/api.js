
import axios from 'axios';
import { camelizeKeys } from 'humps';
import {CALL_API, HOSTS} from './keys';


const API_ROOT = HOSTS.API + '/api/app/'; //--------------零时写法

export const callApi = (endpoint = '', options = {}) => {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

    console.log('callApi:', fullUrl);

    let method = (options && options.method && options.method.toUpperCase()) || 'GET';
    let headers = (options && options.headers) || {};
    let data = (options && options.data) || {};
    let params = (options && options.params) || {};

    return axios({
        fullUrl, method,
        headers, data,
        params
    }).then(res => {
        const camelizedJson = camelizeKeys(res);

        if(parseInt(camelizedJson.code) !== 0){
            return Promise.reject({message: camelizedJson});
        }

        return camelizedJson;
    });
};

// 自定义中间件
const apiMiddleware = store => next => action => {
    let callAip = action[CALL_API];

    if(typeof callAip === 'undefined'){
        return next(action);
    }

    let {endpoint} = callAip;
    const {options, type} = callAip;

    if(typeof endpoint === 'undefined'){
        endpoint = '';
    }

    if(typeof endpoint === 'function'){
        endpoint = endpoint(store.getState());
    }

    if(typeof endpoint !== 'string'){
        throw new Error('Endpoint was invalid.');
    }

    if(options && typeof options !== 'object'){
        throw new Error('Expected options type to be object.');
    }

    if (typeof type !== 'string') {
        throw new Error('Expected action type to be string.');
    }

    const actionWith = data => {
        const  finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
    };

    next(actionWith({ type: type + '_REQUEST'}));

    return callApi(endpoint, options)
        .then(response => next(actionWith({
                response,
                type: type + '_SUCCESS'
            })),
            error => next(actionWith({
                type: type + '_FAILURE',
                error: error.message || 'Some other mistakes.'
            }))
        )
        .catch(error => next(actionWith({
            type: type + '_ABNORMAL',
            error: error.message || 'Some other abnormal.'
        })));
};

export default apiMiddleware;



