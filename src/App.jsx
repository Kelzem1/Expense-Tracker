import './App.css'
import { AddTransaction } from './Components/AddTransaction'
import { Balance } from './Components/Balance'
import { Bmove } from './Components/Bmove'
import { Header } from './Components/Header'
import { TransactionList } from './Components/TransactionList'

import { GlobalProvider } from './Context/GlobalState'

function App() {

  return (
  <GlobalProvider>
  
    <div className='container'>
    <Header />
    <Balance />
    <AddTransaction />
    <Bmove />
    <TransactionList />
    
    </div>
  
  </GlobalProvider>
  )
}

export default App
