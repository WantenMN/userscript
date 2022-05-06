// ==UserScript==
// @name         some implementations on bilibili
// @namespace    https://greasyfork.org/en/scripts/444568
// @version      0.01
// @description  This script is for bilibili, it contains some auxiliary functions
// @author       Wanten
// @copyright    2022 Wanten
// @supportURL   https://github.com/WantenMN/userscript/issues
// @license      GNU General Public License v3.0
// @match        *://*.bilibili.com/video/*
// @match        *://*bilibili.com/video/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const waitFor = (...selectors) => new Promise(resolve => {
    const delay = 10
    const f = () => {
        const elements = selectors.map(selector => document.querySelector(selector))
        if (elements.every(element => element != null)) {
            resolve(elements)
        } else {
            setTimeout(f, delay)
        }
    }
    f()
  })
  function removeBilibiliPlayerElectricPanel() {
    waitFor("div.bilibili-player-electric-panel").then(() => {
      let bilibiliPlayerElectricPanel = document.querySelector(".bilibili-player-electric-panel")
      console.clear();
      bilibiliPlayerElectricPanel.style.display = "none";
      // bilibiliPlayerElectricPanel.innerHTML = `<div class="bilibili-player-electric-panel-jump"><span
      // class="bilibili-player-electric-panel-jump-time">02</span><span
      // class="bilibili-player-electric-panel-jump-content">跳过</span></div>`;
      // console.log(bilibiliPlayerElectricPanel);
      let switchButton = document.querySelector(".switch-button");
      if(switchButton.classList.contains("on")) {
        //jump to next video
        document.querySelector(".bilibili-player-iconfont-next").click();
      }
      setTimeout(removeBilibiliPlayerElectricPanel, 5000);
    });
  }
  waitFor('div#reco_list').then(()=>{
    //remove #reco_list
    let rCon = document.getElementById("reco_list");
    rCon.style.display = "none";
    console.clear();
    console.log(rCon);

    //remove .right-bottom-banner
    let rightBottomBanner = document.getElementById("right-bottom-banner");
    rightBottomBanner.style.display = "none";

    //remove .bilibili-player-electric-panel
    removeBilibiliPlayerElectricPanel();
  });
})();