import './App.css'
// import { Faker } from './component/Faker'
import { UserInput } from './component/UserInput'
import { UsersList } from './component/UsersList'

function App() {

  return (
    <div className="App">
      <UserInput/>
      <UsersList />
      {/* <Faker/> */}
    </div>
  )
}

export default App
