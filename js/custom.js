document.addEventListener("DOMContentLoaded", function () {
  // 创建加载动画的 HTML 结构
  var loaderHTML = `
      <div class="loading-overlay">
        <div class="loader JS_on">
          <span class="binary"></span>
          <span class="binary"></span>
          <span class="getting-there">LOADING...</span>
        </div>
      </div>
    `;

  // 创建样式
  var style = document.createElement("style");
  style.innerHTML = `
      .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.65); /* 半透明灰色背景 */
        backdrop-filter: blur(6px); /* 毛玻璃效果 */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }
      
      .loader {
        width: 200px; /* 放大动画 */
        height: 260px; /* 放大动画 */
        position: relative;
        font-family: inherit;
      }
      
      .loader::before, .loader::after {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        bottom: 80px; /* 调整三角形位置 */
        left: 0px; /* 调整三角形位置 */
        z-index: 1;
        border-left: 100px solid transparent; /* 调整三角形大小 */
        border-right: 100px solid transparent; /* 调整三角形大小 */
        border-bottom: 40px solid #7278c5;
        transform: scale(0);
        transition: all 0.2s ease;
      }
      
      .loader::after {
        border-right: 30px solid transparent; /* 调整三角形大小 */
        border-bottom: 40px solid #483D8B;
      }
      
      .loader .getting-there {
        width: 150%;
        text-align: center;
        position: absolute;
        bottom: 35px; /* 调整文字位置 */
        left: -22%; /* 调整文字位置 */
        font-size: 22px; /* 调整文字大小 */
        letter-spacing: 2px;
        color: white;
      }
      
      .loader .binary {
        width: 100%;
        height: 200px; /* 调整三角形高度 */
        display: block;
        color: white;
        position: absolute;
        top: 0;
        left: 0px; /* 调整三角形位置 */
        z-index: 2;
        overflow: hidden;
      }
      
      .loader .binary::before, .loader .binary::after {
        font-family: "Lato";
        font-size: 35px; /* 调整三角形文字大小 */
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
      }
      
      .loader .binary:nth-child(1)::before {
        content: "0";
        animation: a 1.1s linear infinite;
      }
      
      .loader .binary:nth-child(1)::after {
        content: "0";
        animation: b 1.3s linear infinite;
      }
      
      .loader .binary:nth-child(2)::before {
        content: "1";
        animation: c 0.9s linear infinite;
      }
      
      .loader .binary:nth-child(2)::after {
        content: "1";
        animation: d 0.7s linear infinite;
      }
      
      .loader.JS_on::before, .loader.JS_on::after {
        transform: scale(1);
      }
      
      @keyframes a {
        0% {
          transform: translate(60px, 0) rotate(30deg);
          opacity: 0;
        }
        100% {
          transform: translate(60px, 180px) rotate(-50deg);
          opacity: 1;
        }
      }
      
      @keyframes b {
        0% {
          transform: translate(100px, 0) rotate(-40deg);
          opacity: 0;
        }
        100% {
          transform: translate(80px, 180px) rotate(80deg);
          opacity: 1;
        }
      }
      
      @keyframes c {
        0% {
          transform: translate(140px, 0) rotate(10deg);
          opacity: 0;
        }
        100% {
          transform: translate(120px, 180px) rotate(70deg);
          opacity: 1;
        }
      }
      
      @keyframes d {
        0% {
          transform: translate(60px, 0) rotate(-50deg);
          opacity: 0;
        }
        100% {
          transform: translate(90px, 180px) rotate(30deg);
          opacity: 1;
        }
      }
  
      .fade-out {
        animation: fadeOut 0.5s ease forwards;
      }
  
      @keyframes fadeOut {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          display: none;
        }
      }  
    `;

  // 添加样式和 HTML 到页面
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(style);
  document.body.insertAdjacentHTML("afterbegin", loaderHTML);

  // 当页面开始加载时显示加载动画
  var loaderOverlay = document.querySelector(".loading-overlay");
  var loader = document.querySelector(".loader");
  loader.classList.add("JS_on");

  // 页面加载完成后隐藏加载动画和背景
  window.onload = function () {
    loader.classList.remove("JS_on");
    loaderOverlay.classList.add("fade-out");

    // 等待动画结束后移除元素
    setTimeout(function () {
      loaderOverlay.remove();
    }, 500); // 这里的延迟时间要和动画持续时间匹配
  };
});
// 禁止右键菜单
document.oncontextmenu = function () {
  return false;
};
// 禁止文字选择
document.onselectstart = function () {
  return true;
};
// 禁止复制
document.oncopy = function () {
  return false;
};
// 禁止剪切
document.oncut = function () {
  return false;
};
function toggleDiv() {
  var div = document.getElementById("toggle");

  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
