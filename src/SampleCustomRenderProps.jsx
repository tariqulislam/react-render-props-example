import React from "react";
import { RenderPropsCustomProps } from "./RenderPropsCustomProps.jsx";

export default class SampleRenderProps extends React.Component {
  render() {
    return (
      <RenderPropsCustomProps
        renderList={() => {
          return (
            <ul>
              <li>Rose</li>
              <li>Lily</li>
            </ul>
          );
        }}
      />
    );
  }
}
