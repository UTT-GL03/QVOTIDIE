import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Headlines from './Headlines'
import Article from './Article'
import './App.css'

const SECTIONS = [
  'France', 'International', 'Économie', 'Culture', 'Planète', 'Santé', 'Art de vivre', 'Sport'
]

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <h1>
                  <img src={reactLogo}/>
                  QVOTIDIE
                </h1>
              </Link>
            </li>
          </ul>
          <ul>
            {SECTIONS.map((x, i) =>
              <li key={i}>
                <NavLink to={`/section/${x}`}>
                  {x}
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Headlines/>} />
        <Route path="/section/:section" element={<Headlines/>} />
        <Route path="/:id" element={<Article/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
