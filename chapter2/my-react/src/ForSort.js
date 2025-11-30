// 配列の並び替え
import { ForNest } from "./ForNest";

export const ForSort = ({ src }) => {
  const sortedSrc = [...src].sort((m, n) => n.price - m.price);
  return (
    <>
      <ForNest src={sortedSrc}></ForNest>
    </>
  );
};
