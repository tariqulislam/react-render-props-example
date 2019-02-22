import React from "react";
import { RenderPropsByChildren } from "./RenderPropByChildren.jsx";

export default class SampleRenderPropsWithChildren extends React.Component {
  render() {
    return (
      <RenderPropsByChildren>
        {() => {
          return (
            <ul>
              <li>USA</li>
              <li>UAE</li>
            </ul>
          );
        }}
      </RenderPropsByChildren>
    );
  }
}
