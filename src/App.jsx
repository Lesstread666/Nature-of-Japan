import { useState } from 'react'
import Header from './components/Header'
import MainContentContainer from './components/MainContentContainer'
import Footer from './components/Footer'
import './App.css'

function App() {

  const [page, setPage] = useState("home")

  return (
    <div className="appLayout">
      <Header page={page} setPage={setPage} />
      <MainContentContainer page={page} setPage={setPage} />
      <Footer />
    </div>
  )
}

export default App
