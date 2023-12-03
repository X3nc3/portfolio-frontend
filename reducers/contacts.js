import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const contactstSlice = createSlice({
 name: 'contacts',

  initialState,
 reducers: {
    addContactsToStore: (state, action)=> {
    state.value.push(action.payload)
    }
 },
});

export const {addContactsToStore} = contactstSlice.actions;
export default contactstSlice.reducer;