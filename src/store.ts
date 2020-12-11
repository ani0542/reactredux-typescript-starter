// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const initialState = {};

// const middleware = [thunk];

// declare global{


// interface window{
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__? :typeof compose
// }

// }


// const composeEnhancers=   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

// const store = createStore(
//   rootReducer,
//   initialState,
//   ( applyMiddleware(...middleware),composeEnhancers())
// );

// export default store;






import {createStore, applyMiddleware} from "redux";
import RootReducer from './reducers/rootReducer'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof RootReducer>

export default Store