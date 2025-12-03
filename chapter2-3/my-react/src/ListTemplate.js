import React from "react";
// childrenに対してパラメータを引き渡す
export const ListTemplate = ({ src, children }) => {
  return (
    <dl>
      {src.map((elem) => (
        <React.Fragment key={elem.isbn}>{children(elem)}</React.Fragment>
      ))}
    </dl>
  );
};
