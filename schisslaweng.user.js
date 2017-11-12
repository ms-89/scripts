// ==UserScript==
// @name        schisslaweng original images
// @include     http://www.schisslaweng.net/*
// @include     https://www.schisslaweng.net/*
// @grant       none
// @version     1.3
// @author      Michael Stief
// @require     http://code.jquery.com/jquery-2.1.4.min.js
// @updateURL   https://github.com/ms-89/scripts/blob/master/schisslaweng.user.js
// @downloadURL https://github.com/ms-89/scripts/blob/master/schisslaweng.user.js
// ==/UserScript==

jQuery(function($) {
  $('img').each(function() {
    if ( $(this).attr('src').indexOf('-980x1386') !== -1 ) {
      $(this).attr('src', $(this).attr('src').replace("-980x1386", ""));
      $(this).removeAttr('srcset');
      $(this).removeAttr('sizes');
      $(this).removeAttr('height');
      $(this).removeAttr('width');
      $(this).attr('style', 'width: 1280px; margin-left: -150px');
      $(window).trigger('resize');
    }
  });
});
