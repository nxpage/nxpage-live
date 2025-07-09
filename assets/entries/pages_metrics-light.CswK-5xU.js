import{j as e,P as c,R as m,a as o,i as l,b as u}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const i=void 0,g=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],x=void 0,f=[],h=[],v=s=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="metrics-section">
  <h1 class="metrics-title">Operator Metrics</h1>
  <p class="metrics-subtitle">Review key presence metrics across all active operators.</p>

  <div class="metrics-table">
    <div class="metrics-header">
      <span>ID</span>
      <span>Tier</span>
      <span>Boosts</span>
      <span>XP</span>
      <span>Last Move</span>
    </div>

    <div class="metrics-row">
      <span>@op-kairo</span>
      <span>Featured</span>
      <span>3</span>
      <span>1,220</span>
      <span>Jun 15</span>
    </div>

    <div class="metrics-row">
      <span>@op-syn</span>
      <span>Active</span>
      <span>1</span>
      <span>750</span>
      <span>Jun 14</span>
    </div>

    <div class="metrics-row">
      <span>@op-lux</span>
      <span>Scout</span>
      <span>0</span>
      <span>410</span>
      <span>Jun 12</span>
    </div>
  </div>
</section>

<style>
  .metrics-section {
    padding: 100px 20px;
    background: #fefefe;
    color: #222;
    text-align: center;
  }

  .metrics-title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .metrics-subtitle {
    font-size: 16px;
    color: #666;
    margin-bottom: 40px;
    max-width: 640px;
    margin-inline: auto;
  }

  .metrics-table {
    max-width: 800px;
    margin: 0 auto;
  }

  .metrics-header, .metrics-row {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
    gap: 12px;
    padding: 16px 20px;
    border-bottom: 1px solid #ddd;
  }

  .metrics-header {
    font-weight: bold;
    color: #319795;
    border-bottom: 2px solid #319795;
    background: #f0fdfc;
  }

  .metrics-row {
    color: #333;
    background: #fff;
  }

  .metrics-row:hover {
    background: #f9f9f9;
  }
</style>`,className:"w-html-embed"})}),y=({data:s})=>{const{system:n,resources:r,url:a}=s;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:o,resources:r,breakpoints:g,onError:console.error},children:e.jsx(v,{system:n},a)})},j=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),b=({data:s})=>{const{pageMeta:n}=s,{origin:r}=new URL(s.url);let a=n.socialImageUrl;n.socialImageAssetName&&(a=`${r}${l({src:`${o}/${n.socialImageAssetName}`})}`);const p=n.custom.some(t=>t.property==="twitter:card");return e.jsxs(e.Fragment,{children:[s.url&&e.jsx("meta",{property:"og:url",content:s.url}),e.jsx("title",{children:n.title}),e.jsx("meta",{property:"og:title",content:n.title}),n.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:n.description}),e.jsx("meta",{property:"og:description",content:n.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,a&&e.jsx("meta",{property:"og:image",content:n.socialImageUrl}),i,n.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),n.custom.map(({property:t,content:d})=>e.jsx("meta",{property:t,content:d},t)),(n.socialImageAssetName!==void 0||n.socialImageUrl!==void 0)&&p===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),x,f.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),h.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:b},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/metrics-light/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/metrics-light/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{P as configValuesSerialized};
