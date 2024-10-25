import reactLogo from './assets/react.svg'
import data from './assets/sample_data.json'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>
          <img src={reactLogo}/>
          QVOTIDIE
        </h1>
      </header>
      <main className="container">
        {data.articles.map((x, i) =>
          <Headline {...x} key={i} />
        )}
      </main>
    </>
  )
}

function Headline({heading, issued, section}) {
  return (
    <article>
      <header>
        <span className="tag"> {section} </span>
        <time> {issued} </time>
      </header>
      <h2>{heading}</h2>
    </article>
  )
}

export default App
