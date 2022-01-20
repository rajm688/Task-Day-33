import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Channellist } from "./Channellist";
import { Editcnl } from "./Editcnl";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Channellist />
        </Route>
        <Route path="/channel/edit/:id">
          <Editcnl />
        </Route>
      </Switch>
    </div>
  );
}
