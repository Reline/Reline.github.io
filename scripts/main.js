"use strict";function deviceCheck(){return navigator.userAgent.match(/Android/i)}function resizeFrame(e){if(null!=e)for(var t=0;t<e.length;t++)e[t].style.height=e[t].clientWidth+"px"}function resizeStatic(e){if(null!=e)for(var t=0;t<e.length;t++)window.innerWidth<950?e[t].style.visibility="hidden":(e[t].style.visibility="visible",e[t].style.width=.08*window.innerWidth+"px",e[t].style.height=e[t].style.width+"px")}function githubFeed(e){$.ajax({type:"GET",url:"http://cors.io/?u=https://github.com/"+e+".atom",cache:!1,dataType:"xml",success:function(t){console.log(e+".atom loaded");var i=$("<span />",{html:t.firstChild}).text(),n=$("#githubActivity");n.html(i);var r=n.children();n.html(r),$(".github a").each(function(){var e=$(this).attr("href");e&&(e="https://github.com"+e,$(this).attr("href",e),$(this).attr("target","_blank"))}),$("#github-container").addClass("github-container")},error:function(e){console.log("AJAX error in request: "+JSON.stringify(e,null,2))},async:!0})}$(document).ready(function(){resizeFrame(document.getElementsByClassName("document")),resizeStatic(document.getElementsByClassName("qrcode")),$(".objective-image").hover(function(){$(this).attr("src",$(this).prop("src").indexOf("png")>-1?$(this).prop("src").replace("png","gif"):$(this).prop("src").replace("gif","png"))}),githubFeed("Reline")}),window.onresize=function(){resizeFrame(document.getElementsByClassName("document")),resizeStatic(document.getElementsByClassName("qrcode"))},function(){if(navigator.userAgent.match(/IEMobile\/10\.0/)){var e=document.createElement("style");e.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.querySelector("head").appendChild(e)}}();