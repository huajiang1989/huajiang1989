function isPages(e){var t=document.querySelector(".navbar.navbar-custom").getAttribute(e);return"true"===t}function scrollCheck(e,t,o){document.addEventListener("scroll",function(){var s=window.pageYOffset;s>(o||e.clientHeight)?e.classList.add(t):e.classList.remove(t)})}$(function(){$("[data-toggle='tooltip']").tooltip()}),$(document).ready(function(){$("table").wrap("<div class='table-responsive'></div>"),$("table").addClass("table")}),$(document).ready(function(){$('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'),$('iframe[src*="youtube.com"]').addClass("embed-responsive-item"),$('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'),$('iframe[src*="vimeo.com"]').addClass("embed-responsive-item")}),function(){if(!isPages("data-ispost")){var e=document.querySelector(".navbar.navbar-custom");e.classList.add("is-fixed")}}(),function(){if(isPages("data-ispost")){var e=document.querySelector(".navbar-custom"),t=document.querySelector(".intro-header").offsetHeight,t=t>497?t:400,o=document.querySelector(".toc-wrap"),s=document.querySelector(".post-title-haojen");scrollCheck(o,"toc-fixed",t-60),scrollCheck(e,"is-fixed"),scrollCheck(s,"post-title-fixed",t-60)}}(),function(){var e=document.querySelector("#nav-top");e.ondblclick=function(){$("body").animate({scrollTop:0},500)}}();