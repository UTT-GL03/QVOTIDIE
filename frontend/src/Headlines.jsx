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
    fetch('http://localhost:5984/qvotidie/_all_docs?include_docs=true')
      .then(x => x.json())
      .then(data => {
        setArticlesByRow(
          Object.values(
            Object.groupBy(data.rows, (x, i) => Math.floor(i/3))
          )
        )
      })
  }, [])

  return (
    <main className="container">
      {articlesByRow.map((x, i) =>
        <div key={i} className="grid">
          {x.map(({doc}, j) =>
            <Headline {...doc} key={j} />
          )}
        </div>
      )}
    </main>
  )
}

function Headline({_id, heading, issued, section}) {
  return (
    <article>
      <header>
        <span className="tag"> {section} </span>
        <time> {dayjs(issued).fromNow()} </time>
      </header>
      <Link to={_id}>
        <h2>{heading}</h2>
      </Link>
    </article>
  )
}

export default Headlines
