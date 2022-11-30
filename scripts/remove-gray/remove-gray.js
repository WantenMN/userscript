// ==UserScript==
// @name         黑白首页，灰白首页，黑色首页去除(Remove gray | Remove filter)
// @namespace    https://greasyfork.org/en/scripts/455710
// @version      0.0.2
// @description  移除部分网站首页的灰白效果。
// @author       Wanten
// @copyright    2022 Wanten
// @supportURL   https://github.com/WantenMN/userscript/issues
// @license      GNU General Public License v3.0
// @match        *://*/*
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  //document.documentElement.style.filter = "none";
  GM_addStyle("*{-webkit-filter: none !important;filter:  none !important;}");
})();