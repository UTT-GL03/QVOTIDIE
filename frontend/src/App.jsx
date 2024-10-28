import { BrowserRouter, Routes, Route } from 'react-router'
import reactLogo from './assets/react.svg'
import Headlines from './Headlines'
import Article from './Article'
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
        <Route path="/:id" element={<Article/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
