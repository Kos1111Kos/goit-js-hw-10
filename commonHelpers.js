import{f as h,i as g}from"./assets/vendor-c2cf587c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=document.getElementById("datetime-picker"),l=document.getElementById("startButton"),a=document.getElementById("seconds"),f=document.getElementById("minutes"),p=document.getElementById("hours"),I=document.getElementById("days");let u,B;h(d);l.addEventListener("click",()=>{E()});function E(){if(l.setAttribute("disabled",!0),d.setAttribute("disabled",!0),u-=1e3,parseInt(a.textContent)<=0&&parseInt(f.textContent)<=0)g.success({title:"Success",message:"Time end"}),clearInterval(B);else{const n=r(u);b(n)}}function b(n){a.textContent=n.seconds,f.textContent=n.minutes,p.textContent=n.hours,I.textContent=n.days}function r(n){const t=Math.floor(n/864e5),o=Math.floor(n%864e5/36e5),m=Math.floor(n%864e5%36e5/6e4),y=Math.floor(n%864e5%36e5%6e4/1e3);return{days:t,hours:o,minutes:m,seconds:y}}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));
//# sourceMappingURL=commonHelpers.js.map
