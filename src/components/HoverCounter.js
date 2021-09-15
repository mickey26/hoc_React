import React from "react";
import enhancedComponent from "./HocFunction";

class HoverCounter extends React.Component {
  render() {
    return (
      <div>
        <h3 onMouseOver={this.props.handler}>Hoverd {this.props.count} time</h3>
      </div>
    );
  }
}

export default enhancedComponent(HoverCounter);
