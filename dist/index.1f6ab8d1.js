!function(){class e{constructor(e,t){this.links=e,this.pages=t,this.currentPage=null}getLinks(){console.log(this.links)}setPage(e){this.currentPage=e,console.log(this.currentPage),this.links.forEach((t=>{t.classList.remove("active"),this.getHash(t)===e&&t.classList.add("active")})),this.pages.forEach((e=>{e.style.display="none"})),document.getElementById(e).style.display="block"}getHash(e){return e.href.split("#")[1]}}var t=new e(document.querySelectorAll(".vertical > ul > li > a"),document.querySelectorAll(".page-container"));t.getLinks(),t.links.forEach((function(e){e.addEventListener("click",(function(){let n=t.getHash(e);t.setPage(n)}))}));var n=new e(document.querySelectorAll(".sub-nav > ul > li > a"),document.querySelectorAll(".sub-page-container"));n.links.forEach((e=>{e.addEventListener("click",(function(){let t=n.getHash(e);n.setPage(t)}))}));const l=document.getElementById("taskform");document.querySelector("#taskform > button");var a=document.getElementById("taskInput"),i=document.getElementById("tasklist"),s=document.getElementById("dueDateInput"),o=document.getElementById("completionTimeInput"),c=document.getElementById("estimatedTimeInput"),u=document.getElementById("priorityInput");l.addEventListener("submit",(function(e){e.preventDefault();let t=a.value,n=s.value,d=o.value;!function(e,t,n,a,s,o){let c=(new Date).getFullYear(),u={taskDescription:e,dueDate:t,dateCreated:c,estimatedTime:n,completionTime:s,priorityRating:a,completionStatus:o};r.push(u),function(e){let t=document.createElement("li");t.innerHTML="<p>"+e.taskDescription+"</p>",i.appendChild(t);let n=document.createElement("button"),a=document.createTextNode("Delete Task");n.appendChild(a),t.appendChild(n),n.addEventListener("click",(function(e){e.preventDefault(),t.remove()})),l.reset()}(u)}(t,n,c.value,u.options[u.selectedIndex].value,d,!1),console.log(taskList)}));var r=[]}();
//# sourceMappingURL=index.1f6ab8d1.js.map
