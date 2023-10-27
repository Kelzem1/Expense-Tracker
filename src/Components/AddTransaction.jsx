import { useState } from "react"
import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"

export const AddTransaction = () =>{
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e =>{
        e.preventDefault()

        const newTransaction = {
                id: Math.floor(Math.random() * 10000000),
                text,
                amount: +amount
        }
        {addTransaction(newTransaction)}
    }
   

    
    return(
        <div className="addnew">
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label>Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."></input>
            </div>

            <div className="form-control">
                 <label htmlFor="amount">
                    Amount
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount"></input>
            </div>

            <button className="btn">Add transaction</button>
        </form>

        </div>
      
    )
}