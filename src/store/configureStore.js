import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/indexReducer';

/* Middleware: force store immutability */
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}

