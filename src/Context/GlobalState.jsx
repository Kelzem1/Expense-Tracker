import { createContext, useReducer } from "react";
import  AppReducer from './AppReducer'

//Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Phone' , amount: -12},
        { id: 2, text: 'Food', amount: -50},
        { id: 3, text: 'Paycheck', amount: 400},
        { id: 4, text:'Loteria', amount: 1000 }
    ]
}

//Create context
export const GlobalContext = createContext(initialState)

// Provider components

export const GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}