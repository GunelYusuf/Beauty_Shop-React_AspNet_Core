import {createAsyncThunk, createSlice, isAnyOf} from "@reduxjs/toolkit";
import {FieldValues, useForm} from "react-hook-form";
import httpAgent from "../../api/httpAgent";
import Cookies from 'universal-cookie';
import {setBasket} from "../Cart/CartSlice";


const cookies = new Cookies();

const initialState = {
    user:null
}

export const signInUser = createAsyncThunk(
    'account/signInUser',
        async (data,thunkAPI)=>{
            try {
                const userDto = await httpAgent.Account.login(data);
                const {basket,...user} = userDto;
                if(basket) thunkAPI.dispatch(setBasket(basket))
                cookies.set('user',JSON.stringify(user),{path:'/'})
                return user;
            }catch (error) {
                return thunkAPI.rejectWithValue({error:error.data})
            }
        }
)

export const fetchCurrentUser = createAsyncThunk(
    'account/fetchCurrentUser',
        async (_,thunkAPI)=>{
            thunkAPI.dispatch(setUser(JSON.parse(cookies.get('user'))))
            try {
                const userDto = await httpAgent.Account.currentUser();
                const {basket,...user} = userDto;
                if(basket) thunkAPI.dispatch(setBasket(basket))
                cookies.set('user',JSON.stringify(user),{path:'/'})
                return user;
            }catch (error) {
                return thunkAPI.rejectWithValue({error:error.data})
            }
        },
        {
            condition:()=>{
                if (!cookies.get('user'))return false
            }
        }
)

export const  AccountSlice = createSlice({
    name:'account',
    initialState,
    reducers:{
        signOut:(state)=>{
            state.user =null;
            cookies.remove('user')
        },
        setUser:(state,action)=>{
            state.user=action.payload;
        }
    },
    extraReducers:(builder => {
        builder.addMatcher(isAnyOf(signInUser.fulfilled,fetchCurrentUser.fulfilled),(state,action)=>{
            state.user = action.payload;
        });
        builder.addMatcher(isAnyOf(signInUser.rejected,fetchCurrentUser.rejected),(state,action)=>{
            console.log(action.payload)
        })
    })
})
export const  {signOut,setUser} = AccountSlice.actions;
