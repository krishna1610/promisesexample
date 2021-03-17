import React from "react";

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
    let result;
    if (this.state.error) {
      result = <p>{this.state.error}</p>;
    } else {
      result = this.state.sources.map((source, index) => {
        return (
          <li className="list-group-item" key={index}>
            {source.name}
          </li>
        );
      });
    }
    return <div className="container">{result}</div>;
  }
}
export default ApiFetch;
