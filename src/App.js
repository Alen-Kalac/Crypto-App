import { Route, Routes } from 'react-router'
import './App.scss'
import Coins from './components/Pages/Coins'
import Home from './components/Pages/Home'
import Exchanges from './components/Pages/Exchanges'
import AboutUs  from './components/Pages/AboutUs'
import MyProfile from './components/Pages/MyProfile'
import Favorites from './components/Pages/Favorites'
import Footer from './components/Helper/Footer'
import Navbar from './components/Helper/Nav'
import CoinPage from './components/Pages/CoinPage'
import LoadingPage from './components/Pages/loadingPage'





function App() {

  return (
  <>
         <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/exchanges' element={<Exchanges />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="/:uuid" element={<CoinPage/>} />
        <Route path="/loader" element={<LoadingPage/>} />
      </Routes>
        <Footer/>
  </>
    
  )
}

export default App