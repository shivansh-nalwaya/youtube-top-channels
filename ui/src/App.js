import React from "react";
import Home from "./routes/Home";
import ChannelCard from "./routes/ChannelCard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import ChannelModel from "./models/ChannelModel";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.channel = new ChannelModel();
    this.channel.getAll();
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar channel={this.channel} />
          <Route
            path="/"
            exact
            render={props => <Home {...props} channel={this.channel} />}
          />
          <Route
            path="/:channel_id"
            render={props => <ChannelCard {...props} channel={this.channel} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
