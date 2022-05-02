// // テンプレート文字列
// const name = "じゃけぇ";
// const age = "30";

// const a = `私の名前は${name}です。年齢は${age}です。`;

// console.log(a);

// アロー関数
// function func1(str) {
//   return str;
// }

// const func1 = function(str) {
//   return str;
// }

// // リターン省略できる
// const func1 = (str) => str;
// console.log(func1('jak'));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: "28"
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["じゃけぇ", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);


/**
 * デフォルト値、引数など
 */

//  const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
//  sayHello();


/**
 * スプレット構文...
 */
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20]
// const arr5 = arr4;  元も変更されるからこの方法ではコピーしない。
// const arr5 = [...arr4] スプレッド構文でコピーする。
// console.log(arr5);

