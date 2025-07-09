import{j as e,P as c,R as m,a as r,i as l,b as u}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const i=void 0,g=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],x=void 0,f=[],h=[],v=o=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="vault-section light">
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
  .vault-section.light {
    padding: 100px 20px;
    background: #fdfdfd;
    color: #111;
    text-align: center;
  }

  .vault-title {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .vault-subtitle {
    font-size: 16px;
    color: #666;
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
    background: #ffffff;
    border-radius: 12px;
    padding: 26px;
    border: 1px solid #ddd;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
    text-align: left;
  }

  .vault-card h2 {
    font-size: 20px;
    margin-bottom: 8px;
    color: #222;
  }

  .vault-card p {
    font-size: 14px;
    color: #555;
    margin-bottom: 12px;
  }

  .vault-card a {
    color: #2C7A7B;
    font-weight: bold;
    text-decoration: none;
  }

  .vault-card a:hover {
    text-decoration: underline;
  }
</style>`,className:"w-html-embed"})}),y=({data:o})=>{const{system:t,resources:s,url:a}=o;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:r,resources:s,breakpoints:g,onError:console.error},children:e.jsx(v,{system:t},a)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),j=({data:o})=>{const{pageMeta:t}=o,{origin:s}=new URL(o.url);let a=t.socialImageUrl;t.socialImageAssetName&&(a=`${s}${l({src:`${r}/${t.socialImageAssetName}`})}`);const d=t.custom.some(n=>n.property==="twitter:card");return e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,a&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),i,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:n,content:p})=>e.jsx("meta",{property:n,content:p},n)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),x,f.map(n=>e.jsx("link",{rel:"preload",href:`${r}${n}`,as:"font",crossOrigin:"anonymous"},n)),h.map(n=>e.jsx("link",{rel:"preload",href:`${r}${n}`,as:"image"},n))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/vault2light/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/vault2light/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{A as configValuesSerialized};
