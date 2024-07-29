import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import Error from '../../pages/Error/Error'
import Logements from '../../pages/Logements/Logements'
import About from '../../pages/About/About'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../../style/style.scss'

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements/:id" element={<Logements />} errorElement={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
