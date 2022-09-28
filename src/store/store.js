import { createSlice, configureStore } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      return 'john ' + state;
    },
    // increase(state, action) {
    //   //   console.log(state.age);
    //   state.age += action.payload;
    // },
  },
});

// export let { changeName, increase } = user.actions;

let data = createSlice({
  name: 'data',
  initialState: [
    {
      id: 0,
      name: 'White and Black',
      count: 2,
    },
    {
      id: 2,
      name: 'Grey Yordan',
      count: 1,
    },
  ],
  reducers: {
    increase(state, action) {
      let b = state.findIndex(a => {
        return a.id === action.payload;
      });
      state[b].count++;
    },
  },
});

export default configureStore({
  reducer: {
    user: user.reducer,
    data: data.reducer,
  },
});

export let { increase } = data.actions;
