import { Button, ButtonGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Addchannel } from "./Addchannel";
import { Channelcard } from "./Channelcard";
//collecting data from  API and desplaying in Card
export function Channellist() {
  const [channels, setchannels] = useState([]);
  const URL = "https://61c412fdf1af4a0017d99285.mockapi.io/YTchannel";
  const getchannels = () => {
    fetch(URL)
      .then((data) => data.json())
      .then((res) => setchannels(res));
  };
  useEffect(getchannels, []);
  const history = useHistory();
  return (
    <div className="main">
      <h3>
        Welcome to the best collection of usefull youtube channel to develop
        your programming skills
      </h3>
      <br />
      <h5>Help others by adding your favorite youtube channel</h5>
      <Addchannel />
      <hr />
      <div className="cardstyle">
        {channels.map(
          ({ channel, avgview, sub, description, poster, url, id }) => (
            <Channelcard
              channel={channel}
              avgview={avgview}
              sub={sub}
              poster={poster}
              url={url}
              description={description}
              editcnl={
                <Button onClick={() => history.push(`/channel/edit/${id}`)}>
                  Edit
                </Button>
              }
              deletebtn={
                <Button
                  onClick={() => {
                    fetch(
                      `https://61c412fdf1af4a0017d99285.mockapi.io/YTchannel/${id}`,
                      { method: "DELETE" }
                    )
                      .then((data) => data.json())
                      .then(() => getchannels());
                  }}
                >
                  Delete
                </Button>
              }
            />
          )
        )}
      </div>
    </div>
  );
}
