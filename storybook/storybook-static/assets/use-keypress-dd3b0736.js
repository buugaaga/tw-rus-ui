import{r as u}from"./index-76fb7be0.js";function d(t,n,r){u.useEffect(()=>{if(!n)return;const o=e=>{e.key===t&&r&&(r(e),e.key!=="ArrowDown"&&e.key!=="ArrowUp"||e.preventDefault())};return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[t,r,n])}export{d as r};
//# sourceMappingURL=use-keypress-dd3b0736.js.map
