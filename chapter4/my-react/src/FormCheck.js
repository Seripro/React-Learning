import { useState } from "react";

export const FormCheck = () => {
  const [form, setForm] = useState({
    agreement: true,
  });
  const handleFormCheck = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };
  const show = () => {
    console.log(`同意確認：${form.agreement ? "同意" : "反対"}`);
  };
  return (
    <form>
      <label htmlFor="agreement">同意します</label>
      <input
        id="agreement"
        name="agreement"
        checked={form.agreement}
        type="checkbox"
        onChange={handleFormCheck}
      ></input>
      <br />
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
};
