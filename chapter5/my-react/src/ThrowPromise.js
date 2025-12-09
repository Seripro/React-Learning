export default function ThrowPromise() {
  throw new Promise((resolve, reject) => {});
}

// Promise: 非同期処理の結果を表す箱。進行中、成功、失敗
// new Promise((resolve, reject) => { /* 非同期 */ })

// resolveに入った値はthenの引数としてわたる。
// rejectに入った値はcatchの引数としてわたる。

/*
resolveの例（成功）
const p = new Promise((resolve) => {
  setTimeout(() => resolve("OK"), 1000);
});

p.then(v => console.log(v)); // 1秒後に "OK"
*/

/*
rejectの例（失敗）
const p = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("失敗")), 1000);
});

p.catch(e => console.error(e.message)); // 1秒後に "失敗"
*/
