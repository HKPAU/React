import {createStore} from 'redux';

import reducer from './index';

export default function configureStore()
{
    return createStore(reducer);
}