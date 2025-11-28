import { getTriangle, Article } from "./App.js";

console.log(getTriangle(1, 2));

const article = new Article();
console.log(article.getAppTitle());

// 動的インポート
import("./App2.js").then((app2) => {
  console.log("インポートできた");
  app2.Hello();
});
