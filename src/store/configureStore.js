/**
 * Created by kevin on 16-4-8.
 */
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export default function(initialState){
    const store =createStoreWithMiddleware(reducer,initialState);
    if(module.hot){
        module.hot.accept('../reducers',()=>{
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        })
    }
    return store;
}