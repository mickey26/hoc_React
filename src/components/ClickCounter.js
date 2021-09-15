import React from "react";
import enhancedComponent from "./HocFunction";

class ClickCounter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handler}>
          Clicked {this.props.count} time
          {console.log(this.props, "props")}
        </button>
      </div>
    );
  }
}

export default enhancedComponent(ClickCounter);
