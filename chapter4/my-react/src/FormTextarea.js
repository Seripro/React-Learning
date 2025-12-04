import { useState } from "react";

export const FormTextarea = () => {
  const [form, setForm] = useState({
    comment: "",
  });
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`コメント：${form.comment}`);
  };
  return (
    <>
      <label htmlFor="comment">コメント：</label>
      <br />
      <textarea
        id="comment"
        value={form.comment}
        name="comment"
        cols="30"
        rows="7"
        onChange={handleForm}
      />
      <br />
      <button type="button" onClick={show}>
        送信
      </button>
    </>
  );
};
