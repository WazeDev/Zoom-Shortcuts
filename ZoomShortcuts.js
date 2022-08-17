// ==UserScript==
// @name             Zoom Shortcuts
// @namespace        https://greasyfork.org/users/30701-justins83-waze
// @version          2021.08.17.01
// @description      Adds configurable shortcuts for all zoom levels
// @author           JustinS83
// @include          https://www.waze.com/editor*
// @include          https://www.waze.com/*/editor*
// @include          https://beta.waze.com/editor*
// @include          https://beta.waze.com/*/editor*
// @exclude          https://www.waze.com/*user/editor*
// @grant            none
// @require          https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js
// @contributionURL  https://github.com/WazeDev/Thank-The-Authors
// ==/UserScript==
 
/* global W */
/* ecmaVersion 2017 */
/* global $ */
/* global WazeWrap */
/* eslint curly: ["warn", "multi-or-nest"] */
 
(function() {
    'use strict';
 
    var settings = {};
 
    function bootstrap(tries = 1) {
        if (W &&
            W.map &&
            W.model &&
            W.loginManager.user &&
            $ && WazeWrap.Ready)
            init();
        else if (tries < 1000)
            setTimeout(function () {bootstrap(++tries);}, 200);
    }
 
    bootstrap();
 
    function init(){
        loadSettings();
        new WazeWrap.Interface.Shortcut('ZoomNew10Shortcut', 'Zoom to 10', 'wmezoomshortcuts', 'Zoom Shortcuts', settings.ZoomNew10Shortcut, function(){W.map.olMap.zoomTo(10);}, null).add();
        new WazeWrap.Interface.Shortcut('ZoomNew11Shortcut', 'Zoom to 11', 'wmezoomshortcuts', 'Zoom Shortcuts', settings.ZoomNew11Shortcut, function(){W.map.olMap.zoomTo(11);}, null).add();
        new WazeWrap.Interface.Shortcut('Zoom0Shortcut', 'Zoom to 12 (old 0)', 'wmezoomshortcuts', 'Zoom Shortcuts', settings.Zoom0Shortcut, function(){W.map.olMap.zoomTo(0+12);}, null).add();
        new WazeWrap.Interface.Shortcut('Zoom1Shortcut', 'Zoom to 13 (old 1)', 'wmezoomshortcuts', 'Zoom Shortcuts', settings.Zoom1Shortcut, function(){W.map.olMap.zoomTo(1+12);}, null).add();
        new WazeWrap.Interface.Shortcut('Zoom2Shortcut', 'Zoom to 14 (old 2)', 'wmezoomshortcuts', 'Zoom Shortcuts', settings.Zoom2Shortcut, function(){W.map.olMap.zoomTo(2+12);}, null).add();
        new WazeWrap.Interface.Shortcut('Zoom3Shortcut', 'Zoom to 15 (old 3)', 'wmezoomshortcuts', 'Zoom Shortcuts', settings.Zoom3Shortcut, function(){W.map.olMap.zoomTo(3+12);}, null).add();
        new WazeWrap.Interface.Shortcut('Zoom4Shortcut', 'Zoom to 16 (old 4)', 'wmezoomshortcuts', 'Zoom Shortcuts', settings.Zoom4Shortcut, function(){W.map.olMap.zoomTo(4+12);}, null).add();
        new WazeWrap.Interface.Shortcut('Zoom5Shortcut', 'Zoom to 17 (old 5)', 'wmezoomshortcuts', 'Zoom Shortcuts', settings.Zoom5Shortcut, function(){W.map.olMap.zoomTo(5+12);}, null).add();
        new WazeWrap.Interface.Shortcut('Zoom6Shortcut', 'Zoom to 18 (old 6)', 'wmezoomshortcuts', 'Zoom Shortcuts', settings.Zoom6Shortcut, function(){W.map.olMap.zoomTo(6+12);}, null).add();
        new WazeWrap.Interface.Shortcut('Zoom7Shortcut', 'Zoom to 19 (old 7)', 'wmezoomshortcuts', 'Zoom Shortcuts', settings.Zoom7Shortcut, function(){W.map.olMap.zoomTo(7+12);}, null).add();
        new WazeWrap.Interface.Shortcut('Zoom8Shortcut', 'Zoom to 20 (old 8)', 'wmezoomshortcuts', 'Zoom Shortcuts', settings.Zoom8Shortcut, function(){W.map.olMap.zoomTo(8+12);}, null).add();
        new WazeWrap.Interface.Shortcut('Zoom9Shortcut', 'Zoom to 21 (old 9)', 'wmezoomshortcuts', 'Zoom Shortcuts', settings.Zoom9Shortcut, function(){W.map.olMap.zoomTo(9+12);}, null).add();
        new WazeWrap.Interface.Shortcut('Zoom10Shortcut', 'Zoom to 22 (old 10)', 'wmezoomshortcuts', 'Zoom Shortcuts', settings.Zoom10Shortcut, function(){W.map.olMap.zoomTo(10+12);}, null).add();
 
        window.addEventListener("beforeunload", function() {
            saveSettings();
        }, false);
    }
 
    function loadSettings() {
        var loadedSettings = $.parseJSON(localStorage.getItem("WMEZoomShortcuts_Settings"));
        var defaultSettings = {
            Zoom1Shortcut: '',
            Zoom2Shortcut: '',
            Zoom3Shortcut: '',
            Zoom4Shortcut: '',
            Zoom5Shortcut: '',
            Zoom6Shortcut: '',
            Zoom7Shortcut: '',
            Zoom8Shortcut: '',
            Zoom9Shortcut: '',
            Zoom10Shortcut: '',
            Zoom0Shortcut: '',
            ZoomNew10Shortcut: '',
            ZoomNew11Shortcut: ''
        };
        settings = $.extend({}, defaultSettings, loadedSettings)
    }
 
    function saveSettings(){
        if (localStorage) {
            var localsettings = {
                Zoom1Shortcut: settings.Zoom1Shortcut,
                Zoom2Shortcut: settings.Zoom2Shortcut,
                Zoom3Shortcut: settings.Zoom3Shortcut,
                Zoom4Shortcut: settings.Zoom4Shortcut,
                Zoom5Shortcut: settings.Zoom5Shortcut,
                Zoom6Shortcut: settings.Zoom6Shortcut,
                Zoom7Shortcut: settings.Zoom7Shortcut,
                Zoom8Shortcut: settings.Zoom8Shortcut,
                Zoom9Shortcut: settings.Zoom9Shortcut,
                Zoom10Shortcut: settings.Zoom10Shortcut,
                Zoom0Shortcut: settings.Zoom0Shortcut,
                ZoomNew10Shortcut: settings.ZoomNew10Shortcut,
                ZoomNew11Shortcut: settings.ZoomNew11Shortcut
            };
 
            for (var name in W.accelerators.Actions) {
                var TempKeys = "";
                if (W.accelerators.Actions[name].group == 'wmezoomshortcuts') {
                    if (W.accelerators.Actions[name].shortcut) {
                        if (W.accelerators.Actions[name].shortcut.altKey === true)
                            TempKeys += 'A';
                        if (W.accelerators.Actions[name].shortcut.shiftKey === true)
                            TempKeys += 'S';
                        if (W.accelerators.Actions[name].shortcut.ctrlKey === true)
                            TempKeys += 'C';
                        if (TempKeys !== "")
                            TempKeys += '+';
                        if (W.accelerators.Actions[name].shortcut.keyCode)
                            TempKeys += W.accelerators.Actions[name].shortcut.keyCode;
                    } else
                        TempKeys = "-1";
                    localsettings[name] = TempKeys;
                }
            }
 
            localStorage.setItem("WMEZoomShortcuts_Settings", JSON.stringify(localsettings));
        }
    }
})();
