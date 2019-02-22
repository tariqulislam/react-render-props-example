import React from "react";
import { ReusableListView } from "./ReusableListview.jsx";

const AuthorList = [
  {
    value: "stephen_king",
    text: "Stephen King",
    description: `Stephen Edwin King (born September 21, 1947) 
    is an American author of horror, supernatural fiction, 
    suspense, science fiction, and fantasy. `
  },
  {
    value: "mark_twain",
    text: "Mark Twain",
    description: `Mark Twain was born Samuel Langhorne 
    Clemens on November 30, 1835,`
  }
];

export const Authors = props => {
  return (
    <ReusableListView list={AuthorList}>
      {(selectedValue, onSelectedValue, footerObject) => {
        if (selectedValue) {
          let findAuthor = AuthorList.filter(author => {
            if (author.value === selectedValue) {
              return author;
            }
          });

          return (
            <div>
              Description:
              <p>{findAuthor[0].description}</p>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => onSelectedValue(findAuthor[0])}
              >
                Show Author Jason String
              </a>
              {footerObject && (
                <div
                  style={{
                    marginTop: "10px",
                    padding: "10px",
                    backgroundColor: "lightblue"
                  }}
                >
                  {footerObject && JSON.stringify(footerObject, undefined, 2)}
                </div>
              )}
            </div>
          );
        }
      }}
    </ReusableListView>
  );
};
