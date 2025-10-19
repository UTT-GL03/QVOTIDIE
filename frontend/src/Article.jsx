import { useParams } from 'react-router'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/fr'
import data from './assets/sample_data.json'

dayjs.extend(localizedFormat)
dayjs.locale('fr')

function Article() {
  const {id} = useParams()
  const {heading, creator, issued, content} =
    data.articles.find(x => id === x.issued)
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
