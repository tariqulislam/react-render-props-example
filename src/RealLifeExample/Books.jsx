import React from "react";
import { ReusableListView } from "./ReusableListview.jsx";

const BookList = [
  { value: "introduction_to_algo", text: "Introduction to algo" },
  {
    value: "the_art_of_computer_programming",
    text: "The Art of Computer Programming"
  },
  { value: "data_structure_and_algo", text: "Data Structure and Algo" }
];

export const Books = props => {
  return (
    <ReusableListView list={BookList}>
      {(selectedValue, onSelectedValue, footerObject) => {
        if (selectedValue) {
          console.log("this is Resuable Component state", selectedValue);
          return <div>Selected Book: {selectedValue}</div>;
        }
      }}
    </ReusableListView>
  );
};
