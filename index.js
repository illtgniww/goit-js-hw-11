import{a as u,S as d,i as a}from"./assets/vendor-sgVy0kkG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();function f(o){return u.get("https://pixabay.com/api/",{params:{key:"57644288-12613f747784ed1ecbf29c2c7",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data)}const c=new d(".gallery a",{captionsData:"alt",captionDelay:250});function m(o){const s=document.querySelector(".gallery"),n=o.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}" target="_blank"><img src="${e.webformatURL}" alt="${e.tags}" /></a>
          <div>
            <p>Likes: ${e.likes}</p>
            <p>Views: ${e.views}</p>
            <p>Comments: ${e.comments}</p>
            <p>Downloads: ${e.downloads}</p>
          </div>
        </li>
      `).join("");s.innerHTML=n,c.refresh()}function p(){const o=document.querySelector(".gallery");o.innerHTML="",c.refresh()}function y(){document.querySelector(".loader").classList.add("block")}function g(){document.querySelector(".loader").classList.remove("block")}const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const s=l.elements["search-text"].value.trim();if(!s){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}p(),y(),f(s).then(e=>{e.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):m(e.hits)}).catch(e=>{a.error({title:"Error",message:"An error occurred while fetching images.",position:"topRight"})}).finally(()=>{g()})});
//# sourceMappingURL=index.js.map
