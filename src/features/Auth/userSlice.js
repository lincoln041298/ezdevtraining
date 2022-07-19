import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import userApi from '../../API/userApi'

export const register = createAsyncThunk('user/register', async(payload) => {
    const data = await userApi.register(payload)
    localStorage.setItem('access_token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user))
   return data.user
})

const userSlice  = createSlice({
    name: 'user',
    initialState: {
        current: {},
        settings: {},
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state, action)=> {
            state.status = 'complete'
            state.current = action.payload
        })
    }
 })

 export const selectUser = state => state.user.current
 export const selectUserFetchStatus = state => state.user.status

 export default userSlice.reducer