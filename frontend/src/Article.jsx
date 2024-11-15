import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/fr'

dayjs.extend(localizedFormat)
dayjs.locale('fr')

function Article() {
  const {id} = useParams()
  const [article, setArticle] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5984/qvotidie/${id}`)
      .then(x => x.json())
      .then(data => {
        setArticle(data)
      })

  }, [id])

  const {heading, creator, issued, content=''} = article
  return (
    <main className="container">
      <article>
        <header>
          <h2>{heading}</h2>
          <address> {creator} </address>
          <time> {dayjs(issued).format('LLLL')} </time>
        </header>
        {content.split('\n\n').map((x, i) =>
          <p key={i}>
            {x}
          </p>
        )}
      </article>
    </main>
  )
}

export default Article
