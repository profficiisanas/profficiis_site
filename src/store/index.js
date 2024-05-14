import { createStore, applyMiddleware, combineReducers } from 'redux';
import { default as thunk } from 'redux-thunk'; // Import using default keyword
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from '../reducers/userReducers';  // Ensure this path is correct

const rootReducer = combineReducers({
  user: userReducer,
  // You can add more reducers here
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)  // Apply middleware correctly
  )
);

export default store;
