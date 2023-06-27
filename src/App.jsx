import './App.css'
import { AddTransaction } from './Components/AddTransaction'
import { Balance } from './Components/Balance'
import { Bmove } from './Components/Bmove'
import { Header } from './Components/Header'
import { TransactionList } from './Components/TransactionList'

function App() {

  return (
  <div className='container'>
    <Header />
    <Balance />
    <Bmove />
    <TransactionList />
    <AddTransaction />
  </div>
  )
}

export default App
