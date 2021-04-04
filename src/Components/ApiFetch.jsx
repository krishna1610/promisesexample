import React from "react";
import SourcesList from "./SourcesList";

const url =
  "https://newsapi.org/v2/sources?apiKey=b5e4aade57854b568497b5284c3d2c3e";

class ApiFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      error: null,
    };
  }

  componentDidMount() {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw "error occured.";
        }
      })
      .then((data) => {
        return data.sources;
      })
      .then((sources) => {
        this.setState({ sources: sources, error: null });
      })
      .catch((error) => {
        this.setState({ sources: [], error: error });
      });
  }
  render() {
    return (
      <SourcesList error={this.state.error} sources={this.state.sources} />
    );
  }
}
export default ApiFetch;
