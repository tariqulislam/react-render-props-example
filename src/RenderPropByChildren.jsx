import React from "react";

export class RenderPropsByChildren extends React.Component {
  render() {
    return this.props.children();
  }
}
