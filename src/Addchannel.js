import { Button, Form } from "react-bootstrap";
import { useState } from "react";

export function Addchannel() {
  const [channel, setChannel] = useState("");
  const [avgview, setAvgview] = useState("");
  const [description, setDescription] = useState("");
  const [sub, setSub] = useState("");
  const [poster, setPoster] = useState("");
  const [url, setUrl] = useState("");
  console.log(channel, avgview, description, sub, poster, url);
  return (
    <div className="inputform">
      <Form.Control
        onChange={(e) => setChannel(e.target.value)}
        type="text"
        placeholder="Enter Channel Name"
      />
      <Form.Control
        onChange={(e) => setAvgview(e.target.value)}
        type="text"
        placeholder="Average view count"
      />
      <Form.Control
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Enter Channel Description"
      />
      <Form.Control
        onChange={(e) => setSub(e.target.value)}
        type="text"
        placeholder="Total Number of subscribers"
      />
      <Form.Control
        onChange={(e) => setPoster(e.target.value)}
        type="text"
        placeholder="Enter Channel poster"
      />
      <Form.Control
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
          fetch(`https://61c412fdf1af4a0017d99285.mockapi.io/YTchannel/`, {
            method: "POST",
            body: JSON.stringify(newchannel),
            headers: { "Content-Type": "application/json" },
          }).then((data) => data.json());
        }}
      >
        Add Channel
      </Button>
    </div>
  );
}
