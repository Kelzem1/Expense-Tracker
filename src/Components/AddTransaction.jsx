export const AddTransaction = () =>{
    return(
        <>
        <h3>Add new transaction</h3>
        <form>
            <div className="form-control">
                <label>Text</label>
                <input type="text" placeholder="Enter text..."></input>
            </div>
            <div className="form-control">
                 <label htmlFor="amount">
                    Amount
                    <br />
                    (Negative - expense, positive - income)
                </label>
                <input type="number" placeholder="Enter amount"></input>
            </div>
            <button className="btn">Add transaction</button>
        </form> 
        </>
      
    )
}