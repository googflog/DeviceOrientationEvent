function onClick() {
  // feature detect
  if (typeof DeviceMotionEvent.requestPermission === "function") {
    DeviceMotionEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === "granted") {
          window.addEventListener("devicemotion", () => {});
        }
      })
      .catch(console.error);
  } else {
    // handle regular non iOS 13+ devices
  }
}

// DeviceOrientationEvent.requestPermission()
//   .then(response => {
//     if (response == "granted") {
//       window.addEventListener("devicemotion", function(e) {
//         // do something with e
//       });
//     }
//   })
//   .catch(console.error);

// DeviceMotionEvent.requestPermission()
//   .then(response => {
//     if (response == "granted") {
//       window.addEventListener("devicemotion", e => {
//         // do something with e
//       });
//     }
//   })
//   .catch(console.error);

// /*
//  * 端末の傾きに応じてボールを動かす
//  */

// /*
//  * 定数
//  */
// const SCREEN_WIDTH = 480; // キャンバス幅（ピクセル）
// const SCREEN_HEIGHT = 480; // キャンバス高さ（ピクセル）

// /*
//  * グローバル変数
//  */
// var canvas = null; // キャンバス
// var g = null; // コンテキスト
// var vec = { x: 0, y: 0 }; // 加速度センサー値格納用
// var ball = null; // 表示するボール

// /*
//  * ボールクラス
//  */
// class Ball {
//   constructor(x, y, r) {
//     this.x = x; // x座標
//     this.y = y; // y座標
//     this.r = r; // 半径
//   }
//   draw() {
//     // 位置を計算
//     this.x += vec.x;
//     this.y += vec.y;
//     // 円を描画（塗りつぶし円）
//     g.beginPath();
//     g.fillStyle = "orange";
//     g.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
//     g.fill();
//   }
// }

// /*
//  * ゲームループ
//  */
// function mainLoop() {
//   // 画面クリア
//   g.fillStyle = "#ddd";
//   g.fillRect(0, 0, canvas.width, canvas.height);

//   // ボールを描く
//   ball.draw();

//   // 再帰呼び出し
//   requestAnimationFrame(mainLoop);
// }

// /*
//  * 加速度センサーの値を取得
//  */
// window.addEventListener(
//   "deviceorientation",
//   function(e) {
//     vec.x = e.gamma / 5; // x方向の移動量: そのままでは大きい為、小さくする
//     vec.y = e.beta / 5; // y方向の移動量:         〃
//   },
//   false
// );

// /*
//  * 起動処理
//  */
// window.addEventListener("load", function() {
//   // キャンバス情報取得
//   canvas = document.getElementById("canvas");
//   g = canvas.getContext("2d");

//   // キャンバスサイズ設定
//   canvas.width = SCREEN_WIDTH;
//   canvas.height = SCREEN_HEIGHT;

//   // ボールを一つ生成
//   ball = new Ball(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, 20);

//   // メインループ実行
//   mainLoop();
// });
