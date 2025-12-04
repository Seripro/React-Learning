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
  const show = () => {
    console.log(`こんにちは、${form.name}（${form.age}歳）さん！`);
  };
  return (
    <form>
      <div>
        <label htmlFor="name">名前：</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleForm}
        />
      </div>
      <div>
        <label htmlFor="age">年齢：</label>
        <input
          id="age"
          name="age"
          type="number"
          value={form.age}
          onChange={handleForm}
        />
      </div>
      <div>
        <button type="button" onClick={show}>
          送信
        </button>
      </div>
      <p>
        こんにちは、{form.name}（{form.age}歳）さん！
      </p>
    </form>
  );
};
