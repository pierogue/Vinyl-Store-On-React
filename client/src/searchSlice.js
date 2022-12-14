import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '',
  };

const searchSlice = createSlice({
    name: 'search',
    initialState,
    // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
    reducers: {
      searchSet: (state, action) => {
        state.value = action.payload;
      }
    },
})


export const { searchSet } = searchSlice.actions;
export default searchSlice.reducer;