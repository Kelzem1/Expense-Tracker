import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"

export const TransactionList = () =>{
    const context = useContext(GlobalContext)
    console.log(context)
    return(
    <div className="history">
        <h3>History</h3>
        <ul className="list">
            <li>
                Cash
                <span>-400e</span>
                <button className="delete-btn">X</button>
            </li>
        </ul>
    </div>
    )
}