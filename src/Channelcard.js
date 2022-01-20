import { Button, Card } from "react-bootstrap";

export function Channelcard({
  channel,
  avgview,
  description,
  sub,
  poster,
  url,
  deletebtn,
  editcnl,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={poster} />
      <Card.Body>
        <Card.Title>{channel}</Card.Title>
        <Card.Text>
          <strong>subscription: </strong>
          {sub}
        </Card.Text>
        <Card.Text>
          <strong>Avg view: </strong>
          {avgview}
        </Card.Text>
        <Card.Text>{description}</Card.Text>
        <Button href={url} target="_blank" variant="primary">
          Explore
        </Button>
        {editcnl}
        {deletebtn}
      </Card.Body>
    </Card>
  );
}
