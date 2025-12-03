import { useState } from "react";

export const StateForm = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
  });
  const handleForm = (e) => {
    setForm({
      ...form,
      // 複数プロパティをまとめて式で管理する場合、[]が必要
      [e.target.name]: e.target.value, // e.target.valueは入力内容、valueは表示内容
    });
  };
  return (
    <>
      <p>name</p>
      <input name="name" value={form.name} onChange={handleForm} />
      <p>age</p>
      <input name="age" value={form.age} onChange={handleForm} />
    </>
  );
};
