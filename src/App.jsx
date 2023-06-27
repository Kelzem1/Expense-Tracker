import './App.css'
import { Balance } from './Components/Balance'
import { Bmove } from './Components/Bmove'
import { Header } from './Components/Header'

function App() {

  return (
  <div className='container'>
    <Header />
    <Balance />
    <Bmove />
  </div>
  )
}

export default App
