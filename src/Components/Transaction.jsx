export const Transaction = ({ transaction }) =>{
    return(
        <li>
        {transaction.text}
        <span>-400e</span>
        <button className="delete-btn">X</button>
        </li>
    )}