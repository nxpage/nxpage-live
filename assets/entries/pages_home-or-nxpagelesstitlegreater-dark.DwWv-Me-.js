import{j as e,P as c,R as m,a,i as l,b as x}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const i=void 0,g=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],u=void 0,f=[],h=[],b=o=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="hero-section">
  <div class="nxpage-logo">
    <span class="gold-nx">NX</span><span class="white-page">PAGE</span>
  </div>
  <p class="hero-subtitle">A new way to connect, mentor, and rise.</p>
  <div class="hero-buttons">
    <a href="/connect" class="nx-btn nx-primary">Join Waitlist</a>
    <a href="/explore" class="nx-btn nx-outline">Explore the Grid</a>
    <a href="/spotlight" class="nx-btn nx-outline">Spotlight Operators</a>
  </div>
</section>

<style>
  .hero-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #0e0e0e;
  }

  .nxpage-logo {
    font-size: 64px;
    margin-bottom: 12px;
  }

  .gold-nx {
    color: #D4AF37;
    font-weight: bold;
  }

  .white-page {
    color: #f5f5f5;
    font-weight: bold;
  }

  .hero-subtitle {
    font-size: 18px;
    color: #bbb;
    margin-bottom: 32px;
    text-align: center;
  }

  .hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }

  .nx-btn {
    padding: 12px 32px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    width: 220px;
    text-align: center;
  }

  .nx-primary {
    background-color: #4FD1C5;
    color: #111;
    border: none;
  }

  .nx-outline {
    background-color: transparent;
    border: 1px solid #bbb;
    color: #bbb;
  }
</style>`,className:"w-html-embed"})}),y=({data:o})=>{const{system:n,resources:s,url:r}=o;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:a,resources:s,breakpoints:g,onError:console.error},children:e.jsx(b,{system:n},r)})},j=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),v=({data:o})=>{const{pageMeta:n}=o,{origin:s}=new URL(o.url);let r=n.socialImageUrl;n.socialImageAssetName&&(r=`${s}${l({src:`${a}/${n.socialImageAssetName}`})}`);const d=n.custom.some(t=>t.property==="twitter:card");return e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:n.title}),e.jsx("meta",{property:"og:title",content:n.title}),n.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:n.description}),e.jsx("meta",{property:"og:description",content:n.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,r&&e.jsx("meta",{property:"og:image",content:n.socialImageUrl}),i,n.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),n.custom.map(({property:t,content:p})=>e.jsx("meta",{property:t,content:p},t)),(n.socialImageAssetName!==void 0||n.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),u,f.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),h.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:v},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/home-or-nxpagelesstitlegreater-dark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/home-or-nxpagelesstitlegreater-dark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{A as configValuesSerialized};
