// ==UserScript==
// @name         Cambridge dictionary quick search
// @namespace    https://greasyfork.org/en/scripts/456383
// @version      0.0.1
// @description  cambridge dictionary quick search。
// @author       Wanten
// @copyright    2022 Wanten
// @supportURL   https://github.com/WantenMN/userscript/issues
// @license      GNU General Public License v3.0
// @match        *://*.dictionary.cambridge.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @run-at       document-body
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  let quickSearchButton = document.createElement("button");
  quickSearchButton.setAttribute("id", "quickSearchButton");
  document.body.appendChild(quickSearchButton);
  GM_addStyle(`
    #quickSearchButton {
      position: fixed;
      top: 5px;
      left: calc(50vw - 20px);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(111, 111, 111, 0.2);
      border: none;
      z-index: 99999999;
      transition: all .4s;
      }
    #quickSearchButton:hover {
      background-color: rgba(111, 111, 111, 0.4);
      cursor: grab;
    }
  `);
  quickSearchButton = document.getElementById("quickSearchButton");
  quickSearchButton.onclick = () => {
    navigator.clipboard
      .readText()
      .then((clipText) => {
        console.log(clipText);
        location.href = `https://dictionary.cambridge.org/dictionary/english/${clipText.trim()}`
      });
  }
})();