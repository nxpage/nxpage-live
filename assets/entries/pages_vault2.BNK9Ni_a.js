import{j as e,P as c,R as m,a as r,i as l,b as u}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const i=void 0,x=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],g=void 0,f=[],v=[],h=n=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="vault-section">
  <h1 class="vault-title">The Vault</h1>
  <p class="vault-subtitle">Secure admin tools, export routes, and system logs. Authorized access only.</p>

  <div class="vault-grid">
    <div class="vault-card">
      <h2>Export Operators</h2>
      <p>Generate a PDF dossier of all approved operators in the system.</p>
      <a href="/api/export-operators-pdf" target="_blank">Export PDF</a>
    </div>

    <div class="vault-card">
      <h2>View Logbook</h2>
      <p>Access the full edit trail of operator records, approvals, and admin actions.</p>
      <a href="/records/logs">Open Logs</a>
    </div>

    <div class="vault-card">
      <h2>Manage Boost File</h2>
      <p>Modify <code>boost.json</code> to affect operator exposure dynamically.</p>
      <a href="/records/metrics">Manage Boost</a>
    </div>
  </div>
</section>

<style>
  .vault-section {
    padding: 100px 20px;
    background: #0b0b0b;
    color: #f5f5f5;
    text-align: center;
  }

  .vault-title {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .vault-subtitle {
    font-size: 16px;
    color: #aaa;
    margin-bottom: 40px;
    max-width: 640px;
    margin-inline: auto;
  }

  .vault-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 28px;
    max-width: 960px;
    margin: 0 auto;
  }

  .vault-card {
    background: #1a1a1a;
    border-radius: 12px;
    padding: 26px;
    border: 1px solid #333;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
    text-align: left;
  }

  .vault-card h2 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .vault-card p {
    font-size: 14px;
    color: #ccc;
    margin-bottom: 12px;
  }

  .vault-card a {
    color: #4FD1C5;
    font-weight: bold;
    text-decoration: none;
  }
</style>`,className:"w-html-embed"})}),y=({data:n})=>{const{system:t,resources:s,url:o}=n;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:r,resources:s,breakpoints:x,onError:console.error},children:e.jsx(h,{system:t},o)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),j=({data:n})=>{const{pageMeta:t}=n,{origin:s}=new URL(n.url);let o=t.socialImageUrl;t.socialImageAssetName&&(o=`${s}${l({src:`${r}/${t.socialImageAssetName}`})}`);const d=t.custom.some(a=>a.property==="twitter:card");return e.jsxs(e.Fragment,{children:[n.url&&e.jsx("meta",{property:"og:url",content:n.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,o&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),i,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:p})=>e.jsx("meta",{property:a,content:p},a)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),g,f.map(a=>e.jsx("link",{rel:"preload",href:`${r}${a}`,as:"font",crossOrigin:"anonymous"},a)),v.map(a=>e.jsx("link",{rel:"preload",href:`${r}${a}`,as:"image"},a))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/vault2/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/vault2/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{P as configValuesSerialized};
