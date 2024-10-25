import reactLogo from './assets/react.svg'
import data from './assets/sample_data.json'
import './App.css'

function App() {
  const articlesByRow = Object.values(
    Object.groupBy(data.articles, (x, i) => Math.floor(i/3))
  )
  return (
    <>
      <header>
        <h1>
          <img src={reactLogo}/>
          QVOTIDIE
        </h1>
      </header>
      <main className="container">
        {articlesByRow.map((x, i) =>
          <div key={i} className="grid">
            {x.map((y, j) =>
              <Headline {...y} key={j} />
            )}
          </div>
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
