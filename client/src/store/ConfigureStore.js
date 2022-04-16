import {configureStore} from "@reduxjs/toolkit";
import { useDispatch, useSelector} from "react-redux";
import {AccountSlice} from "../components/Profile/AccountSlice";
import {CartSlice} from "../components/Cart/CartSlice";

export const store = configureStore({
    reducer:{
        account:AccountSlice.reducer,
        basket:CartSlice.reducer


    }
})


export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;