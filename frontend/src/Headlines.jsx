import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr'

dayjs.extend(relativeTime)
dayjs.locale('fr')

function Headlines() {
  const [articlesByRow, setArticlesByRow] = useState([])
  const [nextBookmark, setNextBookmark] = useState()
  const [requestedBookmark, setRequestedBookmark] = useState()
  const { section } = useParams()

  const fetchArticles = (previousArticles) => {
    const resetBookmark = previousArticles.length === 0
    fetch('http://localhost:5984/qvotidie/_find', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selector: {
            ...(section && {section}),
            issued: { "$gt": null }
          },
          sort: [{ issued: "desc" }],
          fields: [ "_id", "section", "issued", "heading" ],
          bookmark: resetBookmark ? null : requestedBookmark,
          limit: 24
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
