import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Headlines from './Headlines'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>
          <img src={reactLogo}/>
          QVOTIDIE
        </h1>
      </header>
      <Routes>
        <Route path="/" element={<Headlines/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
