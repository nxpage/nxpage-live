import{j as e,P as c,R as g,a,i as l,b as m}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const s=void 0,h=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],u=void 0,x=[],f=[],v=o=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="spotlight-section">
  <h1 class="spotlight-title">Spotlight Operators</h1>
  <p class="spotlight-subtitle">Handpicked by the system. Backed by presence. Ready for more.</p>

  <div class="spotlight-grid">
    <div class="spotlight-card">
      <div class="spotlight-aura"></div>
      <h2>Op-Kairo</h2>
      <p>Elite Strategist — Tier 1</p>
      <a href="/editor/op-kairo">View Spotlight</a>
    </div>

    <div class="spotlight-card">
      <div class="spotlight-aura"></div>
      <h2>Op-Syn</h2>
      <p>Creative Signal — Tier 2</p>
      <a href="/editor/op-syn">View Spotlight</a>
    </div>

    <div class="spotlight-card">
      <div class="spotlight-aura"></div>
      <h2>Op-Lux</h2>
      <p>Growth Architect — Tier 3</p>
      <a href="/editor/op-lux">View Spotlight</a>
    </div>
  </div>
</section>

<style>
  .spotlight-section {
    padding: 100px 20px;
    background: #0d0d0d;
    text-align: center;
    color: #f5f5f5;
  }

  .spotlight-title {
    font-size: 40px;
    font-weight: bold;
    color: #f9f9f9;
    margin-bottom: 12px;
  }

  .spotlight-subtitle {
    font-size: 18px;
    color: #ccc;
    margin-bottom: 40px;
  }

  .spotlight-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .spotlight-card {
    background: #111;
    border-radius: 14px;
    padding: 32px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    position: relative;
    overflow: hidden;
    transition: transform 0.2s ease;
  }

  .spotlight-card:hover {
    transform: translateY(-6px);
  }

  .spotlight-card h2 {
    font-size: 22px;
    margin-bottom: 8px;
    color: #fff;
    z-index: 2;
    position: relative;
  }

  .spotlight-card p {
    font-size: 15px;
    color: #aaa;
    margin-bottom: 16px;
    z-index: 2;
    position: relative;
  }

  .spotlight-card a {
    color: #4FD1C5;
    font-weight: bold;
    text-decoration: none;
    z-index: 2;
    position: relative;
  }

  .spotlight-aura {
    position: absolute;
    top: -25%;
    left: -25%;
    width: 150%;
    height: 150%;
    background: radial-gradient(circle, #c084fc33 0%, transparent 70%);
    animation: pulseAura 4s infinite ease-in-out;
    z-index: 1;
  }

  @keyframes pulseAura {
    0%, 100% {
      transform: scale(1);
      opacity: 0.6;
    }
    50% {
      transform: scale(1.1);
      opacity: 1;
    }
  }
</style>`,className:"w-html-embed"})}),y=({data:o})=>{const{system:t,resources:r,url:i}=o;return e.jsx(g.Provider,{value:{imageLoader:l,assetBaseUrl:a,resources:r,breakpoints:h,onError:console.error},children:e.jsx(v,{system:t},i)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),j=({data:o})=>{const{pageMeta:t}=o,{origin:r}=new URL(o.url);let i=t.socialImageUrl;t.socialImageAssetName&&(i=`${r}${l({src:`${a}/${t.socialImageAssetName}`})}`);const p=t.custom.some(n=>n.property==="twitter:card");return e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),s,i&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),s,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:n,content:d})=>e.jsx("meta",{property:n,content:d},n)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&p===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),u,x.map(n=>e.jsx("link",{rel:"preload",href:`${a}${n}`,as:"font",crossOrigin:"anonymous"},n)),f.map(n=>e.jsx("link",{rel:"preload",href:`${a}${n}`,as:"image"},n))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/spotlight-dark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/spotlight-dark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{T as configValuesSerialized};
