import { useState } from "react";

export const StateForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };
  return (
    <>
      <p>name</p>
      <input value={name} onChange={handleChangeName} />
      <p>age</p>
      <input value={age} onChange={handleChangeAge} />
    </>
  );
};
