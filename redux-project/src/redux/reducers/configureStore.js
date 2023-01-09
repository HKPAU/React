import {createStore} from 'redux';
import RootReducer from './index';

export default function configureStore(){
    return createStore(RootReducer);
}