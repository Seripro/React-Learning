// WrapPromise と Suspense 連携の最小例
// - getInfo(): 2秒後に成功/失敗する Promise を WrapPromise でラップ
// - ThrowResult: resource.get() を呼び、
//     pending → Promise を throw（親の <Suspense> が fallback を表示）
//     fulfilled → 返ってきた値を表示
//     rejected → エラーを throw（ErrorBoundary で捕捉可能）
import WrapPromise from "./WrapPromise";

const info = getInfo();

export default function ThrowResult() {
  const result = info.get();
  // resultとして渡るのは成功時のvalueのみ。（WrapPromiseの実装を見ろ）
  // reject, pendingの場合は、info.get中にthrowされる
  return <p>{result}</p>;
}

// ラップしてくれるシステムにPromiseを与えた関数を定義
function getInfo() {
  // 成功/失敗をランダムに返すダミー非同期処理（2秒遅延）
  return WrapPromise(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Succeeded!!");
        } else {
          reject("Error!!");
          // 投げられたエラー（"Error!!"）は最も近い Error Boundary が捕捉します。
          // Error Boundaryが無い場合は画面がクラッシュし、開発用オーバーレイにエラーが表示されます。
        }
      }, 2000);
    })
  );
}
