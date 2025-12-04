import { useState } from "react";

export const FormSelect = () => {
  const [form, setForm] = useState({
    animal: "",
  });
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const show = () => {
    console.log(`好きな動物：${form.animal}`);
  };
  return (
    <>
      <label htmlFor="animal">好きな動物：</label>
      <select
        id="animal"
        name="animal"
        value={form.animal}
        onChange={handleForm}
      >
        <option value="dog">イヌ</option>
        <option value="cat">ネコ</option>
        <option value="rabbit">ウサギ</option>
      </select>
      <button type="button" onClick={show}>
        送信
      </button>
    </>
  );
};
