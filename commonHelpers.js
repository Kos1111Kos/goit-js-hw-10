import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as r,i as a}from"./assets/vendor-651d7991.js";const c=document.getElementById("datetime-picker"),i=document.querySelector("[data-start]"),d=document.getElementById("timer");r(c);i.addEventListener("click",()=>{const t=new Date(c.value).getTime();m(t)});let s;function m(t){s=setInterval(()=>{const n=Date.now(),e=t-n;if(e<=0)clearInterval(s),a.success({title:"Success",message:"Time end"});else{const o=u(e);l(o)}},1e3)}function u(t){const n=Math.floor(t/1e3%60),e=Math.floor(t/(1e3*60)%60),o=Math.floor(t/(1e3*60*60)%24);return{days:Math.floor(t/(1e3*60*60*24)),hours:o,minutes:e,seconds:n}}function l({days:t,hours:n,minutes:e,seconds:o}){d.textContent=`${t} days, ${n} hours, ${e} minutes, ${o} seconds`}
//# sourceMappingURL=commonHelpers.js.map
