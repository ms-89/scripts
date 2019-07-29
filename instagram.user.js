// ==UserScript==
// @name         Instagram Profile Magnifier
// @match        https://www.instagram.com/*
// @namespace    http://tampermonkey.net/
// @grant        none
// @version      0.1
// @author       Michael Stief
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @updateURL   https://github.com/ms-89/scripts/raw/master/instagram.user.js
// @downloadURL https://github.com/ms-89/scripts/raw/master/instagram.user.js
// ==/UserScript==

(function() {
    'use strict';
    var url = window.location.pathname;
    url.substr(url.lastIndexOf('/') + 1);
    url = url.replace(/\//g, '');
    url = '<a target="_blank" href="https://mogry.net/instagram.php?user=' + url + '"><img style="position:fixed;top:2px;left:2px;width:16px;height:16px" src="https://cdn3.iconfinder.com/data/icons/fatcow/32/magnifier_zoom_in.png"></a>';
    $("body").append(url);

})();
