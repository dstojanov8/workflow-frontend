import { /*createAsyncThunk,*/ createSlice } from "@reduxjs/toolkit";

interface AccountState {
    id: number;
    email: string;
    username: string;
    firstname: string;
    lastname: string;
};

const initialState: AccountState = {
    id: 0,
    email: '',
    username: '',
    firstname: '',
    lastname: '',
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const {id, email, username, firstname, lastname} = action.payload;
            state.id = id;
            state.email = email;
            state.username = username;
            state.firstname = firstname;
            state.lastname = lastname;
        },
        logoutUser: () => initialState
    },
    //* Implement Async reducer for login
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginAsync.pending, () => {
    //             console.log('loginAsync.pending');
    //         })
    //         .addCase(loginAsync.fulfilled, (state, action) => {
    //             const {id, email, username, firstname, lastname} = action.payload;
    //             state.id = id;
    //             state.email = email;
    //             state.username = username;
    //             state.firstname = firstname;
    //             state.lastname = lastname;
    //         });
    // },
});

// export const loginAsync = createAsyncThunk(
//     "account/loginAsync",
//     async (account: AccountState) => {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         return account;
//     }
// )

export const { loginUser, logoutUser } = accountSlice.actions;

export default accountSlice.reducer;