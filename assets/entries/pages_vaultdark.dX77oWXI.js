import{j as e,P as c,R as u,a as r,i as l,b as m}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const i=void 0,x=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],g=void 0,f=[],v=[],h=a=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="vault-section">
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
    background: linear-gradient(to bottom, #0d0d0d, #1a1a1a);
    text-align: center;
    color: #f5f5f5;
  }

  .vault-title {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 12px;
    color: #fff;
  }

  .vault-subtitle {
    font-size: 18px;
    color: #ccc;
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
    background: #1e1e1e;
    border: 1px solid #333;
    border-radius: 12px;
    padding: 32px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.4);
    transition: transform 0.2s ease;
  }

  .vault-card:hover {
    transform: translateY(-6px);
  }

  .vault-card h2 {
    font-size: 22px;
    margin-bottom: 8px;
    color: #fff;
  }

  .vault-card p {
    font-size: 15px;
    margin-bottom: 16px;
    color: #aaa;
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
    background-color: #4FD1C5;
    color: #000;
  }
</style>`,className:"w-html-embed"})}),b=({data:a})=>{const{system:n,resources:s,url:o}=a;return e.jsx(u.Provider,{value:{imageLoader:l,assetBaseUrl:r,resources:s,breakpoints:x,onError:console.error},children:e.jsx(h,{system:n},o)})},y=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),w=({data:a})=>{const{pageMeta:n}=a,{origin:s}=new URL(a.url);let o=n.socialImageUrl;n.socialImageAssetName&&(o=`${s}${l({src:`${r}/${n.socialImageAssetName}`})}`);const d=n.custom.some(t=>t.property==="twitter:card");return e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:n.title}),e.jsx("meta",{property:"og:title",content:n.title}),n.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:n.description}),e.jsx("meta",{property:"og:description",content:n.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,o&&e.jsx("meta",{property:"og:image",content:n.socialImageUrl}),i,n.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),n.custom.map(({property:t,content:p})=>e.jsx("meta",{property:t,content:p},t)),(n.socialImageAssetName!==void 0||n.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),g,f.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),v.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),k={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/vaultdark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/vaultdark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{k as configValuesSerialized};
