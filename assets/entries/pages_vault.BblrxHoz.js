import{j as e,P as c,R as u,a as r,i as l,b as m}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const i=void 0,x=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],g=void 0,v=[],f=[],h=a=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="vault-section">
  <h1 class="vault-title">Operator Vault</h1>
  <p class="vault-subtitle">Browse, export, or reference verified operator profiles. Vault is updated weekly with new system-approved entries.</p>

  <div class="vault-grid">
    <div class="vault-card">
      <h2>Approved Operators</h2>
      <p>Download full PDF dossier of current grid.</p>
      <a href="/api/export-operators-pdf.js" target="_blank" class="nx-btn nx-download">Download Dossier</a>
    </div>

    <div class="vault-card">
      <h2>Recent Logs</h2>
      <p>System changes, approvals, and operator movements.</p>
      <a href="/records/logs" class="nx-btn nx-view">View Logs</a>
    </div>

    <div class="vault-card">
      <h2>Link Archive</h2>
      <p>Operator-submitted links, updates, and proofs.</p>
      <a href="/records/links" class="nx-btn nx-view">View Links</a>
    </div>
  </div>
</section>

<style>
  .vault-section {
    padding: 100px 20px;
    background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
    text-align: center;
  }

  .vault-title {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .vault-subtitle {
    font-size: 18px;
    color: #444;
    max-width: 640px;
    margin: 0 auto 48px;
  }

  .vault-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 28px;
    max-width: 960px;
    margin: 0 auto;
  }

  .vault-card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 32px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.06);
    transition: transform 0.2s ease;
  }

  .vault-card:hover {
    transform: translateY(-6px);
  }

  .vault-card h2 {
    font-size: 22px;
    margin-bottom: 8px;
  }

  .vault-card p {
    font-size: 15px;
    margin-bottom: 16px;
    color: #555;
  }

  .nx-btn {
    padding: 10px 24px;
    border-radius: 8px;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
  }

  .nx-download {
    background-color: #FFD700;
    color: #111;
  }

  .nx-view {
    background-color: #2D3748;
    color: white;
  }
</style>`,className:"w-html-embed"})}),b=({data:a})=>{const{system:t,resources:s,url:o}=a;return e.jsx(u.Provider,{value:{imageLoader:l,assetBaseUrl:r,resources:s,breakpoints:x,onError:console.error},children:e.jsx(h,{system:t},o)})},y=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),w=({data:a})=>{const{pageMeta:t}=a,{origin:s}=new URL(a.url);let o=t.socialImageUrl;t.socialImageAssetName&&(o=`${s}${l({src:`${r}/${t.socialImageAssetName}`})}`);const d=t.custom.some(n=>n.property==="twitter:card");return e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,o&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),i,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:n,content:p})=>e.jsx("meta",{property:n,content:p},n)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),g,v.map(n=>e.jsx("link",{rel:"preload",href:`${r}${n}`,as:"font",crossOrigin:"anonymous"},n)),f.map(n=>e.jsx("link",{rel:"preload",href:`${r}${n}`,as:"image"},n))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),k={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/vault/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/vault/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{k as configValuesSerialized};
