// import {configureStore} from '@reduxjs/toolkit';
// import Reducer from './Reducer/Reducer';

// const store = configureStore({reducer: Reducer});
// export default store;

import Reducer from './Reducer/Reducer';

import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({reducer: Reducer});

export default store;