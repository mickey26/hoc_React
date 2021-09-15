import React from "react";

const enhancedComponent = (Compo) => {
  class NewComponet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
      this.handleCount = this.handleCount.bind(this);
    }
    handleCount() {
      this.setState({ count: this.state.count + 1 });
    }

    render() {
      return <Compo count={this.state.count} handler={this.handleCount} />;
    }
  }
  return NewComponet;
};

export default enhancedComponent;
