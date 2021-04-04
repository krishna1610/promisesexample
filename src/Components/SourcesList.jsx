import React from "react";

class SourcesList extends React.Component {
  render() {
    let result;
    if (this.props.error) {
      result = <p>{this.props.error}</p>;
    } else {
      result = this.props.sources.map((source, index) => {
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
export default SourcesList;
