import { createStore } from 'redux';
import  reducer  from "../reducers";

const initialState = { tech: "hajascript"}


export  const store = createStore(reducer, initialState);