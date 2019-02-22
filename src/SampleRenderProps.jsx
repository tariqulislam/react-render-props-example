import React from "react";
import { RenderPropsElement } from "./RenderPropsElement.jsx";

export default class SampleRenderProps extends React.Component {
  render() {
    return (
      <RenderPropsElement
        render={() => {
          return (
            <ul>
              <li>Banana</li>
              <li>Apple</li>
            </ul>
          );
        }}
      />
    );
  }
}
