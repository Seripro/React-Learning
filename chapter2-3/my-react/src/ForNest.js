import { ForItem } from "./ForItem";

export const ForNest = ({ src }) => {
  return (
    <dl>
      {src.map((elem) => (
        <ForItem book={elem} key={elem.isbn}></ForItem>
      ))}
    </dl>
  );
};
