import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as m}from"./assets/vendor-651d7991.js";document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".form").addEventListener("submit",n)});function n(s){s.preventDefault();const o=new FormData(s.target),t=o.get("delay"),i=o.get("state");new Promise((e,r)=>{i==="fulfilled"?setTimeout(()=>{e(t)},t):i==="rejected"&&setTimeout(()=>{r(t)},t)}).then(e=>{m.success({title:"Fulfilled promise",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{m.error({title:"Rejected promise",message:`❌ Rejected promise in ${e}ms`})})}
//# sourceMappingURL=commonHelpers2.js.map
