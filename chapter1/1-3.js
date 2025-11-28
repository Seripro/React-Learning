// 数値セパレーター
const number = 12_3_4_567;
console.log(number); // 1234567

// アロー関数
const add = (a, b) => a + b;
a = 1;
b = 2;
console.log(add(a, b)); // 3

// オブジェクトリテラルの簡易構文
const name = "Alice";
const age = 30;
const person = { name, age }; // { name: name, age: age } と同じ
console.log(person); // { name: 'Alice', age: 30 }

// メソッドの簡易構文
const member = {
  name: "Bob",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

member.greet();

// 算出プロパティ
let i = 0;
const person2 = {
  [`attr${++i}`]: "山田",
  [`attr${++i}`]: "男性",
  [`attr${++i}`]: 15,
};

console.log(person2); // { attr1: '山田', attr2: '男性', attr3: 15 }

// 分割代入
const list = [10, 20, 30];
const [first, second, third] = list;
console.log(first, second, third); // 10 20 30

const [x, y] = list;
console.log(x, y); // 10 20

const [x2, , z2] = list;
console.log(x2, z2); // 10 30

const [one, ...rest] = list;
console.log(one, rest); // 10 [ 20, 30 ]

// オブジェクトの分割代入
const fruites = {
  fruite1: "apple",
  fruite2: "grape",
  fruite3: "orange",
};

const { fruite2, fruite1, fruite4 = "???" } = fruites;
// ???はfruite4がなかった場合、この値になる。オプショナルプロパティと同じ考え方

console.log(fruite1, fruite2, fruite4);

// 異なる名前の変数に代入
const { fruite1: my_favorite } = fruites;
console.log(my_favorite);

// 残りのプロパティを取得する
const { fruite1: apple, ...rest2 } = fruites;
console.log(apple, rest2);

// 入れ子のオブジェクトを分解する これいいね、データ扱うときつかうよね。
const place = {
  name: "shibuya_sky",
  address: {
    prefecture: "東京都",
    city: "渋谷区",
  },
};

const {
  address,
  address: { prefecture },
} = place;
console.log(address, prefecture);

// 入れ子の配列
const list2 = [1, [2, 3, 4]];
const [, [n1, n2, n3]] = list2;
console.log(n1, n2, n3);

// 宣言文と代入文を切り離す ここちょっとよくわからんな なんで()がないとだめなんだ
// → if文とかのブロック{}と区別がつかないから構文エラー
const member2 = {
  fullname2: "田中小僧",
  sex2: "男性",
  age2: 13,
};

let fullname2, sex2, age2, memo2;
({ fullname2, sex2, memo2 = "---" } = member2);
console.log(fullname2, sex2, memo2, age2);

// 引数の規定値構文
const getTrapezoidArea = (upper = 1, lower = 1, height = 1) => {
  return ((upper + lower) * height) / 2;
};

console.log(getTrapezoidArea());
console.log(getTrapezoidArea(2, 3, 4));

// 可変長引数 別の引数と併用する場合は可変長引数を最後に指定
const sum = (...nums) => {
  let result = 0;
  for (const num of nums) {
    result = result + num;
  }
  return result;
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2));

// スプレッド構文による引数の展開
SUM = sum(...[1, 2, 3, 4, 5]); // 配列を要素にばらす
console.log(SUM);

// 分割代入によるオブジェクト引数の分解
const weather = ({ day, weather }) => {
  console.log(`${day}の天気は${weather}です`);
};

const info = { day: "2025/11/28", tempreture: "24℃", weather: "晴れ" };
weather(info);

// Optional Chaining
const str = null;
console.log(str?.substring(1)); // undefined

// Null合体演算子
let value = null;
console.log(value ?? "既定値");
