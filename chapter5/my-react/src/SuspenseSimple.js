import { Suspense } from "react";
import ThrowPromise from "./ThrowPromise";

export default function SuspenseSimple() {
  return (
    // throwで投げられた未解決のPromiseが読み込み中の間フォールバックUIを表示する
    <Suspense fallback={<p>Now Loading...</p>}>
      <ThrowPromise></ThrowPromise>
    </Suspense>
  );
}

/*
ThrowPromiseの流れ
・レンダー中に未解決のPromiseをthrow
・Suspenseがそれを検知し、fallbackのUIを表示
・Promiseが解決すると再レンダーが走り、もう一度ThrowPromise内のロジックが動き、flagが再評価され、if文内の処理が実行される。
*/
