(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let l;l=setInterval((()=>{const e=(()=>{const e=(new Date("14 april 2024").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})(),r=e=>e<=9?"0"+e:e;e.timeRemaining<=0?(t.textContent="00",n.textContent="00",o.textContent="00",clearInterval(l)):(t.textContent=r(e.hours),n.textContent=r(e.minutes),o.textContent=r(e.seconds))}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul > li > a"),l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),n.addEventListener("click",l),o.forEach((e=>e.addEventListener("click",l)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close");t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",screen.width>=768&&(()=>{let t,n=0;const o=()=>{n+=.05,t=requestAnimationFrame(o),n<=1?e.style.opacity=n:cancelAnimationFrame(t)};o()})()}))})),n.addEventListener("click",(()=>{screen.width>=768?(()=>{let t,n=1;const o=()=>{n-=.05,t=requestAnimationFrame(o),n>=0?e.style.opacity=n:(cancelAnimationFrame(t),e.style.display="none")};o()})():e.style.display="none"}))})(),(()=>{const e=document.querySelector("main > a"),t=document.querySelectorAll("menu > ul > li > a"),n=document.getElementById("service-block");t.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}))})),e.addEventListener("click",(e=>{e.preventDefault(),n.scrollIntoView({behavior:"smooth"})}))})(),(()=>{const e=document.querySelector(".calc-block"),t=e.querySelector(".calc-square"),n=e.querySelector(".calc-count"),o=e.querySelector(".calc-day"),l=e=>{e.value=e.value.replace(/\D/,"")};t.addEventListener("input",(e=>{e.preventDefault(),l(t)})),n.addEventListener("input",(e=>{e.preventDefault(),l(n)})),o.addEventListener("input",(e=>{e.preventDefault(),l(o)}))})(),(()=>{const e=document.querySelectorAll('[name="user_form"]'),t=document.querySelector(".mess"),n=document.querySelector(".popup"),o=document.querySelector("#form3");let l;const r=e=>{let t,n=1;const o=()=>{n-=.05,t=requestAnimationFrame(o),n>=0?e.style.opacity=n:(cancelAnimationFrame(t),e.style.display="none")};o()};l=document.createElement("div"),l.textContent="Данные отправлены!",l.style.cssText=" position: fixed;  \n                                    color: white;      \n                                    font-size: 18px;\n                                    position: fixed;\n                                    padding-top: 35px;\n                                    right: 0;\n                                    left: 0;\n                                    top: 50px;\n                                    bottom: 0;\n                                    width: 200px;\n                                    height: 100px;\n                                    z-index: 9;\n                                    margin: 0 auto;\n                                    background-color: rgba(0,0,0,.5);\n                                    opacity: 0;\n                                    display: none",document.body.insertAdjacentElement("beforeend",l),t.addEventListener("input",(()=>{t.value=t.value.replace(/[^а-я -]+/gi,"")})),e.forEach((e=>{e.addEventListener("submit",(c=>{c.preventDefault();const a=e.querySelector('[placeholder="Ваше имя"]'),i=e.querySelector("[type=tel]"),s=e.querySelector("[type=email]");let u=!1,d=(e,t,n)=>{t.style.border="none";let o=t.nextElementSibling;if(o&&o.remove(),e){let e=document.createElement("p");e.textContent=n,e.style.cssText=` font-size: 12px;\n                                                color: red;\n                                                transform: ${getComputedStyle(t).transform}`,t.style.border="1px solid red",console.log(e.innerHTML),t.insertAdjacentElement("afterend",e)}};/[^а-я^ ^-]+/i.test(a.value)||""===a.value?(d(!0,a,"Введите Ваше имя"),u=!0):d(!1,a),/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(s.value)?d(!1,s):(d(!0,s,"email введен не корректно!"),u=!0),/[^\d^\()^-]/.test(i.value)||""===i.value?(d(!0,i,"Недопустимые символы"),u=!0):d(!1,i),u||(c.target===o&&r(n),(e=>{let t,n=0;e.style.display="block";const o=()=>{n+=.05,t=requestAnimationFrame(o),n<=1?e.style.opacity=n:(cancelAnimationFrame(t),setTimeout((()=>{r(e)}),1500))};o()})(l),console.log("Данные отправлены"),a.value="",s.value="",i.value="",t.value="")}))}))})(),(()=>{const e=document.querySelector(".service-header");document.querySelectorAll(".service-tab"),e.addEventListener("click",(e=>{let t=e.target.closest(".service-header-tab");console.log(t)})),console.log(e)})()})();