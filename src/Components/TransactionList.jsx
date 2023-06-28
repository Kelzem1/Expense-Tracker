import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"
import { Transaction } from "./Transaction"

export const TransactionList = () =>{
    const { transactions } = useContext(GlobalContext)
    return(
    <div className="history">
        <ul className="list">
        {transactions.map(transaction =>( <Transaction key={transaction.id} transaction={transaction} />))}
        </ul>
            
    </div>
    )
}