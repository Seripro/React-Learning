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
