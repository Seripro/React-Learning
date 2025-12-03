// childrenから目的の要素を取り出す
export const TitledPanel = ({ children }) => {
  const title = children.find((elem) => elem.key === "title");
  const body = children.find((elem) => elem.key === "body");
  return (
    <div>
      {title}
      <hr />
      {body}
    </div>
  );
};
