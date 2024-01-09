import { createSlice } from "@reduxjs/toolkit"
import { getUser } from "./ActionCreator"

const initialState = {
    user: {},
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getUser.fulfilled.type]: (state, action) => {
            state.user = action.payload
            state.isLoading = false
        },
        [getUser.pending.type]: (state, action) => {
            state.isLoading = true
        }
    }
})

export default userSlice.reducer;