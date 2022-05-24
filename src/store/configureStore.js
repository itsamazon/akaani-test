import { combineReducers, createStore } from 'redux'
import cartReducer from './reducers/cartReducer'

export default () => {
    const store = createStore(
        combineReducers({
            cart: cartReducer,
        })
    )
    return store
}