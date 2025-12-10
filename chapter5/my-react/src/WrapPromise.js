/**
 * Suspense向けのPromiseラッパー。
 * - pending: 未解決の間は Promise（wrapper）を throw → 親の <Suspense> が fallback を表示
 * - fulfilled: 解決後は値（data）を返す
 * - rejected: 失敗時はエラー（data）を throw
 *
 * 使い方例：
 *   const resource = WrapPromise(fetch('/api').then(r => r.json()));
 *   function Component() {
 *     const data = resource.get(); // pendingならthrowされSuspenseへ、成功なら値が返る
 *     return <div>{data.title}</div>;
 *   }
 */
export default function WrapPromise(promise) {
  // 現在の状態と結果を閉包で保持
  let status = "pending";
  let data;
  // promiseの解決/失敗時に状態を更新
  let wrapper = promise.then(
    // result, eの命名はなんでもいい。とにかくこれらに成功時のvalue, 失敗時の理由が入る
    (result) => {
      status = "fulfilled";
      data = result; // ThrowResult.jsでのresolve(value)のvalueがresultに入る
    },
    (e) => {
      // エラーの理由が引数に入る
      status = "rejected";
      data = e;
    }
  );

  return {
    // getを定義
    get() {
      // 状態に応じて、値を返す/エラーを投げる/Promiseを投げる
      switch (status) {
        case "fulfilled":
          return data;
        case "rejected":
          throw data; // return dataじゃだめ。throwにしないとErrorBoundaryが発火しないので、エラーとみなされない
        case "pending":
          throw wrapper;
        default:
          break;
      }
    },
  };
}
