import { Suspense, lazy } from "react";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const LazyButton = lazy(() => sleep(2000).then(() => import("./LazyButton")));

export default function LazyBasic() {
  return (
    // buttonコンポーネントが表示されるまでNow Loading...を表示する
    <Suspense fallback={<p>Now Loading...</p>}>
      <LazyButton></LazyButton>
    </Suspense>
  );
}
