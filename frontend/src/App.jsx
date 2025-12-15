import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router'
import reactLogo from './assets/react.svg'
import Headlines from './Headlines'
import Article from './Article'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const SECTIONS = [
  'France', 'International', 'Économie', 'Culture', 'Planète', 'Santé', 'Art de vivre', 'Sport'
]

function App() {
  return (
    <BrowserRouter>
      <Navbar expand="md">
        <Navbar.Brand>
          <Link to="/">
            <h1>
              <img src={reactLogo}/>
              QVOTIDIE
            </h1>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />        
        <Navbar.Collapse>
          <Nav>
            {SECTIONS.map((x, i) =>
              <Nav.Link key={i} as={Link} to={`/section/${x}`}>
                {x}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<Headlines/>} />
        <Route path="/section/:section" element={<Headlines/>} />
        <Route path="/:id" element={<Article/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
