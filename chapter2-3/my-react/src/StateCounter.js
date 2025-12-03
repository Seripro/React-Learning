export const StateCounter = ({ step, update }) => {
  const handleClick = () => update(step);
  return (
    <button className="cnt" onClick={handleClick}>
      <span>{step}</span>
    </button>
  );
};
