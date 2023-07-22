import { Route, Routes } from 'react-router'
import './App.scss'


function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App