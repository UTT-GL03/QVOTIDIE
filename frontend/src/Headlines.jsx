import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

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
          ...data.docs
          
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
    <Container>
      <Row className="gy-4">
        {articlesByRow.map((x, i) =>
          <Col key={i} md="4">
            <Headline {...x} />
          </Col>
        )}
      </Row>
      <Button type="submit" onClick={ () => setRequestedBookmark(nextBookmark) }>
        Suivant
      </Button>
    </Container>
  )
}

function Headline({_id, heading, issued, section}) {
  return (
    <Card className="h-100">
      <Card.Header>
        <Badge> {section} </Badge>
        <time> {dayjs(issued).fromNow()} </time>
      </Card.Header>
      <Card.Body>
      <Link to={'/' + _id}>
        <h2>{heading}</h2>
      </Link>
      </Card.Body>
    </Card>
  )
}

export default Headlines
