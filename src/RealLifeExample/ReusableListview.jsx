import React, { Component } from "react";

export class ReusableListView extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedValue: null, footerObject: null };
  }

  selectedItemValue = value => {
    this.setState({ selectedValue: value, footerObject: null });
  };

  onSelectedValue = selectedObject => {
    console.log("this is selected object", selectedObject);
    return selectedObject && this.setState({ footerObject: selectedObject });
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.props.list &&
            this.props.list.map(item => {
              return (
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => this.selectedItemValue(item.value)}
                >
                  {item.text}
                </li>
              );
            })}
        </ul>
        {this.props.children(
          this.state.selectedValue,
          this.onSelectedValue,
          this.state.footerObject
        )}
      </React.Fragment>
    );
  }
}
