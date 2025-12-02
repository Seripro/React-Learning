import { useState } from "react";

export const EventPoint = () => {
  const [screen, setScreen] = useState({ x: 0, y: 0 });
  const [page, setPage] = useState({ x: 0, y: 0 });
  const [client, setClient] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const handleMousemove = (e) => {
    setScreen({ x: e.screenX, y: e.screenY });
    setPage({ x: e.pageX, y: e.pageY });
    setClient({ x: e.clientX, y: e.clientY });
    setOffset({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };
  return (
    <div onMouseMove={handleMousemove}>
      screen: x={screen.x}, y={screen.y}
      <br />
      page: x={page.x}, y={page.y}
      <br />
      client: x={client.x}, y={client.y}
      <br />
      offset: x={offset.x}, y={offset.y}
    </div>
  );
};
