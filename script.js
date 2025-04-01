document.addEventListener("DOMContentLoaded", () => {
  // 要素の取得
  const yearCounter = document.getElementById("year-counter");
  const loadingAnimation = document.getElementById("loading-animation");
  const mainContent = document.getElementById("main-content");

  // カウントアップの設定
  const startYear = 1923;
  const endYear = 2025;
  let currentYear = startYear;

  // アニメーションの速度設定（ミリ秒）
  let interval = 30; // 初期速度（速い）

  // カウントアップアニメーション
  const countUp = () => {
    if (currentYear <= endYear) {
      yearCounter.innerText = currentYear;
      currentYear++;

      // 年が進むにつれてカウントアップの速度を遅くする
      if (currentYear > 2000) {
        interval = 200; // 2000年以降はゆっくり
      } else if (currentYear > 1980) {
        interval = 100; // 1980年以降は少しゆっくり
      } else if (currentYear > 1950) {
        interval = 50; // 1950年以降は少し遅く
      }

      setTimeout(countUp, interval);
    } else {
      // カウントアップ完了後、メインコンテンツを表示
      setTimeout(() => {
        loadingAnimation.classList.add("hidden");
        mainContent.classList.remove("hidden");
      }, 1000);
    }
  };

  // アニメーション開始（少し遅延させる）
  setTimeout(countUp, 800);
});
