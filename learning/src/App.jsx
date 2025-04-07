import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Usereducer from './Components/Usereducer'
import Dynamic_parent_2 from './pagination_fetch/Dynamic_parent_2'
import Axios_post_2 from './Components/Axios_post_2'
import Counter_parent from './Colorchange_context/Counter_parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello world</h1>
      <Usereducer/>

      <Dynamic_parent_2/>
      <Axios_post_2/>
      <Counter_parent/>
      
    </>
  )
}

export default App
