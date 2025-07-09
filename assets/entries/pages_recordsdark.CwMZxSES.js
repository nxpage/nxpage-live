import{j as e,P as c,R as m,a,i as l,b as g}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const i=void 0,x=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],u=void 0,f=[],y=[],h=n=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="records-section">
  <h1 class="records-title">Operator Logbook</h1>
  <p class="records-subtitle">Every move gets logged. This is your archive of approved updates, system activity, and verified presence.</p>

  <div class="log-grid">
    <div class="log-entry">
      <h3>+ Added spotlight for Op-Kairo</h3>
      <p class="log-meta">Logged by system — 2025-06-15</p>
    </div>

    <div class="log-entry">
      <h3>+ Edited connect form styling</h3>
      <p class="log-meta">Logged by Ghost — 2025-06-14</p>
    </div>

    <div class="log-entry">
      <h3>+ Operator Grid ready for injection</h3>
      <p class="log-meta">Logged by Commander — 2025-06-13</p>
    </div>
  </div>
</section>

<style>
  .records-section {
    padding: 100px 20px;
    background: #0d0d0d;
    text-align: center;
    color: #eee;
  }

  .records-title {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 12px;
    color: #fff;
  }

  .records-subtitle {
    font-size: 18px;
    max-width: 620px;
    margin: 0 auto 40px;
    color: #aaa;
  }

  .log-grid {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
  }

  .log-entry {
    background: #1a1a1a;
    padding: 24px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    border-left: 5px solid #4FD1C5;
  }

  .log-entry h3 {
    font-size: 18px;
    margin-bottom: 6px;
    color: #fff;
  }

  .log-meta {
    font-size: 14px;
    color: #888;
  }
</style>`,className:"w-html-embed"})}),v=({data:n})=>{const{system:t,resources:s,url:r}=n;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:a,resources:s,breakpoints:x,onError:console.error},children:e.jsx(h,{system:t},r)})},j=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),b=({data:n})=>{const{pageMeta:t}=n,{origin:s}=new URL(n.url);let r=t.socialImageUrl;t.socialImageAssetName&&(r=`${s}${l({src:`${a}/${t.socialImageAssetName}`})}`);const d=t.custom.some(o=>o.property==="twitter:card");return e.jsxs(e.Fragment,{children:[n.url&&e.jsx("meta",{property:"og:url",content:n.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),i,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:p})=>e.jsx("meta",{property:o,content:p},o)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),u,f.map(o=>e.jsx("link",{rel:"preload",href:`${a}${o}`,as:"font",crossOrigin:"anonymous"},o)),y.map(o=>e.jsx("link",{rel:"preload",href:`${a}${o}`,as:"image"},o))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:b},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/recordsdark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/recordsdark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{T as configValuesSerialized};
