
import {createStore, applyMiddleware} from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist-immutable';
import thunk from 'redux-thunk';
import * as localforage from 'localforage';
import apiMiddleware from '../../common/api';
import rootReducer from '../reducers/index';

const createNovelStore = applyMiddleware(thunk, apiMiddleware)(createStore);

const configureStore = (onComplete: ?() => void) => {
    const store = autoRehydrate()(createNovelStore)(rootReducer);
    let ps = persistStore(store, {localforage: localforage}, onComplete);

    window.persistStore = ps;
    window.store = store;

    return store;
};

// 配置localforage
// localforage.config({
//     driver      : localforage.LOCALSTORAGE,
//     name        : 'novel-backstage',
//     size        : 6666666,
//     storeName   : 'novel-all'
// });
//
// window.localforage = localforage;

export default configureStore;









