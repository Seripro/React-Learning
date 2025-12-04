import { useState } from "react";

export const FormList = () => {
  const [form, setForm] = useState({
    animal: [""],
  });
  const handleFormList = (e) => {
    const data = [];
    const opts = e.target.options;
    for (const opt of opts) {
      if (opt.selected) {
        data.push(opt.value);
      }
    }
    setForm({
      ...form,
      [e.target.name]: data,
    });
  };
  const show = () => {
    console.log(`好きな動物：${form.animal}`);
  };
  return (
    <>
      <label htmlFor="animal">好きな動物：</label>
      <select
        id="animal" // FormSelectでもidをanimalにしたから一意じゃなくなってる、、
        name="animal"
        value={form.animal}
        multiple={true}
        size="3"
        onChange={handleFormList}
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
