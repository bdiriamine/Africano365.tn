function openNav(){document.getElementById("mySidenav").style.width="250px"}function closeNav(){document.getElementById("mySidenav").style.width="0"}function openNavi(){document.getElementById("mySidenavi").style.width="250px"}function closeNavi(){document.getElementById("mySidenavi").style.width="0"}var i,coll=document.getElementsByClassName("collapsible");for(i=0;i<coll.length;i++)coll[i].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight=e.style.maxHeight?null:e.scrollHeight+"px"});$(function(){$("#nav li a").click(function(){$("#nav li").removeClass(),$($(this).attr("href")).addClass("active")})}),window.setMobileTable=function(e){const t=document.querySelector(e),l=t.querySelectorAll("thead th"),i=Array.from(l).map(e=>e.innerText);t.querySelectorAll("tbody tr").forEach(e=>{Array.from(e.children).forEach((e,t)=>e.setAttribute("label",i[t]))})};