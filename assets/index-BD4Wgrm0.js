(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function u(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=u(o);fetch(o.href,s)}})();function c(d){let i=0;const u=l=>{i=l,d.innerHTML=`count is ${i}`};d.addEventListener("click",()=>u(i+1)),u(0)}document.querySelector("#app").innerHTML=`
     <div class="container-principal">
        <div class="container-lateral">
            <h1>Container</h1>
            <h1>Container</h1>
        </div>
        <div class="container-central">
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
        </div>
    </div>
   
`;c(document.querySelector("#counter"));
