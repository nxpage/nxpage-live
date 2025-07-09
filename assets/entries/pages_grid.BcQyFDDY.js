import{j as e,P as c,R as m,a,i as d,b as g}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const s=void 0,u=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],x=void 0,f=[],h=[],v=o=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="grid-section">
  <h1 class="grid-title">The Operator Grid</h1>
  <p class="grid-subtitle">View all active and archived operators in the NXPAGE system. Visibility earned through action.</p>

  <div class="operator-grid">
    <div class="op-card">
      <h2>@op-kairo</h2>
      <p>Tier 1 – Strategist</p>
    </div>
    <div class="op-card">
      <h2>@op-syn</h2>
      <p>Tier 2 – Creative</p>
    </div>
    <div class="op-card">
      <h2>@op-lux</h2>
      <p>Tier 3 – Growth</p>
    </div>
    <div class="op-card">
      <h2>@op-raye</h2>
      <p>Tier 1 – Voice Ops</p>
    </div>
    <!-- Add more ops as needed -->
  </div>
</section>

<style>
  .grid-section {
    padding: 100px 20px;
    background: #ffffff;
    text-align: center;
  }

  .grid-title {
    font-size: 42px;
    font-weight: 800;
    margin-bottom: 12px;
  }

  .grid-subtitle {
    font-size: 18px;
    color: #555;
    margin-bottom: 48px;
    max-width: 700px;
    margin-inline: auto;
  }

  .operator-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 28px;
    max-width: 960px;
    margin: 0 auto;
  }

  .op-card {
    background: #f6f9fc;
    padding: 24px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.03);
    transition: transform 0.2s ease;
  }

  .op-card:hover {
    transform: scale(1.03);
  }

  .op-card h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
    color: #222;
  }

  .op-card p {
    font-size: 14px;
    color: #666;
  }
</style>`,className:"w-html-embed"})}),y=({data:o})=>{const{system:t,resources:i,url:r}=o;return e.jsx(m.Provider,{value:{imageLoader:d,assetBaseUrl:a,resources:i,breakpoints:u,onError:console.error},children:e.jsx(v,{system:t},r)})},j=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),b=({data:o})=>{const{pageMeta:t}=o,{origin:i}=new URL(o.url);let r=t.socialImageUrl;t.socialImageAssetName&&(r=`${i}${d({src:`${a}/${t.socialImageAssetName}`})}`);const l=t.custom.some(n=>n.property==="twitter:card");return e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),s,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),s,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:n,content:p})=>e.jsx("meta",{property:n,content:p},n)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&l===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),x,f.map(n=>e.jsx("link",{rel:"preload",href:`${a}${n}`,as:"font",crossOrigin:"anonymous"},n)),h.map(n=>e.jsx("link",{rel:"preload",href:`${a}${n}`,as:"image"},n))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:b},Symbol.toStringTag,{value:"Module"})),z={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/grid/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/grid/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{z as configValuesSerialized};
