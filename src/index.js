import React from "react";
import ReactDOM from "react-dom";
import SampleRenderProps from "./SampleRenderProps.jsx";
import SampleCustomRenderProps from "./SampleCustomRenderProps.jsx";
import SampleRenderPropsWithChildren from "./SampleRenderPropsWithChildren.jsx";
import { Books } from "./RealLifeExample/Books.jsx";
import { Authors } from "./RealLifeExample/Authors.jsx";
export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3> Using `render` props for sharing code between component</h3>
        <SampleRenderProps />
        <h3>Using custom props for sharing code between component</h3>
        <SampleCustomRenderProps />
        <h3>
          Using Special Props `Children` in render props to Share Code between
          compoent
        </h3>
        <SampleRenderPropsWithChildren />
        <h3>Using Render Props to Extend The list Component </h3>
        <Books />
        <h3>
          Using Render Props Using the Wrapper Component State and Function to
          extend component
        </h3>
        <Authors />
      </React.Fragment>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
