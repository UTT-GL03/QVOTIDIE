import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr'

dayjs.extend(relativeTime)
dayjs.locale('fr')

function Headlines() {
  const [articlesByRow, setArticlesByRow] = useState([])

  useEffect(() => {
    fetch('/sample_data.json')
      .then(x => x.json())
      .then(data => {
        setArticlesByRow(
          Object.values(
            Object.groupBy(data.articles, (x, i) => Math.floor(i/3))
          )
        )
      })
  }, [])

  return (
    <main className="container">
      {articlesByRow.map((x, i) =>
        <div key={i} className="grid">
          {x.map((y, j) =>
            <Headline {...y} key={j} />
          )}
        </div>
      )}
    </main>
  )
}

function Headline({heading, issued, section}) {
  return (
    <article>
      <header>
        <span className="tag"> {section} </span>
        <time> {dayjs(issued).fromNow()} </time>
      </header>
      <Link to={issued}>
        <h2>{heading}</h2>
      </Link>
    </article>
  )
}

export default Headlines
