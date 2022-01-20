import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";
//editng Channnels 
export function Editcnl() {
  const { id } = useParams();
  const [channels, setchannels] = useState(null);
  const getchannels = () => {
    // getting values to populate textfields to enter value
    fetch(`https://61c412fdf1af4a0017d99285.mockapi.io/YTchannel/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => setchannels(res));
  };
  useEffect(getchannels, [id, channels]);
  return channels ? <Updateedit channels={channels} /> : "";
}
//seperate component for getting input from user
function Updateedit({ channels }) {
  const [channel, setChannel] = useState(channels.channel);
  const [avgview, setAvgview] = useState(channels.avgview);
  const [description, setDescription] = useState(channels.description);
  const [sub, setSub] = useState(channels.sub);
  const [poster, setPoster] = useState(channels.poster);
  const [url, setUrl] = useState(channels.url);
  const history = useHistory();
  return (
    <div className="editinputform">
      <h1>Edit Channel details only if necessery</h1>
     <Form.Label>Channel Name</Form.Label>
      <Form.Control
        value={channel}
        onChange={(e) => setChannel(e.target.value)}
        type="text"
        placeholder="Enter Channel Name"
      />
      <Form.Label>Average view</Form.Label>
      <Form.Control
        value={avgview}
        onChange={(e) => setAvgview(e.target.value)}
        type="text"
        placeholder="Average view count"
      />
      <Form.Label>Description</Form.Label>
      <Form.Control
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Enter Channel Description"
      />
      <Form.Label>Subscribers</Form.Label>
      <Form.Control
        value={sub}
        onChange={(e) => setSub(e.target.value)}
        type="text"
        placeholder="Total Number of subscribers"
      />
      <Form.Control
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
        type="text"
        placeholder="Enter Channel poster"
      />
      <Form.Label>Channel URL</Form.Label>
      <Form.Control
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        type="text"
        placeholder="Enter Channel URL"
      />
      <Button
        onClick={() => {
          const newchannel = {
            channel,
            avgview,
            description,
            sub,
            poster,
            url,
          };
          fetch(
            `https://61c412fdf1af4a0017d99285.mockapi.io/YTchannel/${channels.id}`,
            {
              method: "PUT",
              body: JSON.stringify(newchannel),
              headers: { "Content-Type": "application/json" },
            }
          )
            .then((data) => data.json())
            .then(() => history.push("/"));
        }}
      >
        Save changes
      </Button>
    </div>
  );
}
