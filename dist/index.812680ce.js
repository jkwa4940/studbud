!function(){class e{constructor(e,t){this.links=e,this.pages=t,this.currentPage=null}getLinks(){console.log(this.links)}setPage(e){this.currentPage=e,console.log(this.currentPage),this.links.forEach((t=>{t.classList.remove("active"),this.getHash(t)===e&&t.classList.add("active")})),this.pages.forEach((e=>{e.style.display="none"})),document.getElementById(e).style.display="block"}getHash(e){return e.href.split("#")[1]}}var t=new e(document.querySelectorAll(".top-nav > ul > li > a"),document.querySelectorAll(".page-container"));t.getLinks(),t.links.forEach((function(e){e.addEventListener("click",(function(){let s=t.getHash(e);t.setPage(s)}))}));var s=new e(document.querySelectorAll(".sub-nav > ul > li > a"),document.querySelectorAll(".sub-page-container"));s.links.forEach((e=>{e.addEventListener("click",(function(){let t=s.getHash(e);s.setPage(t)}))}))}();
//# sourceMappingURL=index.812680ce.js.map
