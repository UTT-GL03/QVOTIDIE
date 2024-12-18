import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr'

dayjs.extend(relativeTime)
dayjs.locale('fr')
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD')

function Headlines() {
  const [articlesByRow, setArticlesByRow] = useState([])
  const [nextBookmark, setNextBookmark] = useState()
  const [requestedBookmark, setRequestedBookmark] = useState()
  const section = new URLSearchParams(useLocation().search).get('section')

  const fetchArticles = (previousArticles) => {
    const resetBookmark = previousArticles.length === 0
    fetch('http://localhost:5984/qvotidie/_find', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selector: {
            ...(section && {section}),
            issued: { "$lt": tomorrow }
          },
          sort: [{ issued: "desc" }],
          fields: [ "_id", "section", "issued", "heading" ],
          limit: 24,
          bookmark: resetBookmark ? null : requestedBookmark
        })
    })
      .then(x => x.json())
      .then(data => {
        setArticlesByRow([
          ...previousArticles,
          ...Object.values(
            Object.groupBy(data.docs, (x, i) => Math.floor(i/3))
          )
        ])
        setNextBookmark(data.bookmark)
      })
  }

  useEffect(() => {
    fetchArticles(articlesByRow)
  }, [requestedBookmark])

  useEffect(() => {
    fetchArticles([])
  }, [section])

  return (
    <main className="container">
      {articlesByRow.map((x, i) =>
        <div key={i} className="grid">
          {x.map((doc, j) =>
            <Headline {...doc} key={j} />
          )}
        </div>
      )}
      <button type="submit" onClick={ () => setRequestedBookmark(nextBookmark) }>
        Suivant
      </button>
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
