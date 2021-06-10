!function(){var e=class{constructor(e,t){this.links=e,this.pages=t,this.currentPage=null}getLinks(){console.log(this.links)}setPage(e){this.currentPage=e,console.log(this.currentPage),this.links.forEach((t=>{t.classList.remove("active"),this.getHash(t)===e&&t.classList.add("active")})),this.pages.forEach((e=>{e.style.display="none"})),document.getElementById(e).style.display="block"}getHash(e){return e.href.split("#")[1]}};var t=new e(document.querySelectorAll(".vertical > ul > li > a"),document.querySelectorAll(".page-container"));t.getLinks(),t.links.forEach((function(e){e.addEventListener("click",(function(){let n=t.getHash(e);t.setPage(n)}))}));var n=new e(document.querySelectorAll(".sub-nav > ul > li > a"),document.querySelectorAll(".sub-page-container"));n.links.forEach((e=>{e.addEventListener("click",(function(){let t=n.getHash(e);n.setPage(t)}))}));const o=document.getElementById("taskform");document.querySelector("#taskform > button");var a=document.getElementById("taskInput"),i=document.getElementById("tasklist"),s=document.getElementById("dueDateInput"),r=document.getElementById("completionTimeInput"),c=document.getElementById("estimatedTimeInput"),l=document.getElementById("priorityInput");o.addEventListener("submit",(function(e){e.preventDefault();let t=a.value,n=s.value,u=r.value;!function(e,t,n,a,s,r){let c=(new Date).getFullYear(),l={taskDescription:e,dueDate:t,dateCreated:c,estimatedTime:n,completionTime:s,priorityRating:a,completionStatus:r};d.push(l),function(e){let t=document.createElement("li");t.innerHTML="<p>"+e.taskDescription+"</p>",i.appendChild(t);let n=document.createElement("button"),a=document.createTextNode("Delete Task");n.appendChild(a),t.appendChild(n),n.addEventListener("click",(function(e){e.preventDefault(),t.remove()})),o.reset()}(l)}(t,n,c.value,l.options[l.selectedIndex].value,u,!1),console.log(taskList)}));var d=[];let u,m,p=0;function g(e){document.getElementById("display").innerHTML=e}function f(e){const t="PLAY"===e?v:y;("PLAY"===e?y:v).style.display="block",t.style.display="none"}let y=document.getElementById("playButton"),v=document.getElementById("pauseButton"),h=document.getElementById("resetButton");y.addEventListener("click",(function(){u=Date.now()-p,m=setInterval((function(){p=Date.now()-u,g(function(e){let t=e/36e5,n=Math.floor(t),o=60*(t-n),a=Math.floor(o),i=60*(o-a),s=Math.floor(i),r=100*(i-s),c=Math.floor(r);return`${n.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`}(p))}),10),f("PAUSE")})),v.addEventListener("click",(function(){clearInterval(m),f("PLAY")})),h.addEventListener("click",(function(){clearInterval(m),g("00:00:00:00"),p=0,f("PLAY")}));const k={pomodoro:25,shortBreak:5,longBreak:15,longBreakInterval:4,sessions:0};let E;const I=new Audio("button-sound.mp3"),L=document.getElementById("js-btn");L.addEventListener("click",(()=>{I.play();const{action:e}=L.dataset;"start"===e?b():S()}));function b(){let{total:e}=k.remainingTime;const t=Date.parse(new Date)+1e3*e;"pomodoro"===k.mode&&k.sessions++,L.dataset.action="stop",L.textContent="stop",L.classList.add("active"),E=setInterval((function(){if(k.remainingTime=function(e){const t=e-Date.parse(new Date),n=Number.parseInt(t/1e3,10);return{total:n,minutes:Number.parseInt(n/60%60,10),seconds:Number.parseInt(n%60,10)}}(t),B(),e=k.remainingTime.total,e<=0){switch(clearInterval(E),k.mode){case"pomodoro":k.sessions%k.longBreakInterval==0?w("longBreak"):w("shortBreak");break;default:w("pomodoro")}if("granted"===Notification.permission){const e="pomodoro"===k.mode?"Get back to work!":"Take a break!";new Notification(e)}document.querySelector(`[data-sound="${k.mode}"]`).play(),b()}}),1e3)}function S(){clearInterval(E),L.dataset.action="start",L.textContent="start",L.classList.remove("active")}function B(){const{remainingTime:e}=k,t=`${e.minutes}`.padStart(2,"0"),n=`${e.seconds}`.padStart(2,"0"),o=document.getElementById("js-minutes"),a=document.getElementById("js-seconds");o.textContent=t,a.textContent=n;const i="pomodoro"===k.mode?"Get back to work!":"Take a break!";document.title=`${t}:${n} — ${i}`;document.getElementById("js-progress").value=60*k[k.mode]-k.remainingTime.total}function w(e){k.mode=e,k.remainingTime={total:60*k[e],minutes:k[e],seconds:0},document.querySelectorAll("button[data-mode]").forEach((e=>e.classList.remove("active"))),document.querySelector(`[data-mode="${e}"]`).classList.add("active"),document.body.style.backgroundColor=`var(--${e})`,document.getElementById("js-progress").setAttribute("max",k.remainingTime.total),B()}document.querySelector("#js-mode-buttons").addEventListener("click",(function(e){const{mode:t}=e.target.dataset;if(!t)return;w(t),S()})),document.addEventListener("DOMContentLoaded",(()=>{"Notification"in window&&"granted"!==Notification.permission&&"denied"!==Notification.permission&&Notification.requestPermission().then((function(e){"granted"===e&&new Notification("You will be notified at the start of each session")})),w("pomodoro")}));let T=document.querySelector("#input"),q=document.querySelector("#search"),D="b3459c2f-974e-4b4d-b275-980057d4041a",$=document.querySelector(".not__found"),x=document.querySelector(".def"),A=document.querySelector(".audio"),C=document.querySelector(".loading");q.addEventListener("click",(function(e){e.preventDefault(),A.innerHTML="",$.innerText="",x.innerText="";let t=T.value;""!==t?async function(e){C.style.display="block";const t=await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${e}?key=${D}`),n=await t.json();if(console.log(n),!n.length)return C.style.display="none",void($.innerText=" No result found");if("string"==typeof n[0]){C.style.display="none";let e=document.createElement("h3");return e.innerText="Did you mean:",$.appendChild(e),void n.forEach((e=>{let t=document.createElement("span");t.classList.add("suggested"),t.innerText=e,$.appendChild(t)}))}C.style.display="none";let o=n[0].shortdef[0];x.innerText=o;const a=n[0].hwi.prs[0].sound.audio;a&&function(e){let t=`https://media.merriam-webster.com/soundc11/${e.charAt(0)}/${e}.wav?key=${D}`,n=document.createElement("audio");n.src=t,n.controls=!0,A.appendChild(n)}(a)}(t):alert("Word is required")}))}();
//# sourceMappingURL=index.496e7029.js.map
