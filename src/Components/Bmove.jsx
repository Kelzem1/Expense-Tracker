import { GlobalContext } from "../Context/GlobalState"
import { useContext } from "react"

export const Bmove = () =>{

    const { transactions } = useContext(GlobalContext)

    const amount =transactions.map(transactions => transactions.amount)

    const income = amount
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

    const expense = (
        amount.filter(item => item < 0 )
        .reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2)

    return(
        <div className="Bmove-container">
            <div className="ingresos">
                <h2>Ingresos</h2>
                <p className="addm">{income}</p>
            </div>

            <div className="gastos">
                <h2>Gastos</h2>
                <p className="minm">{expense}</p>
            </div>

        </div>
    )
}