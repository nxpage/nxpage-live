import{j as e,P as m,R as c,a as r,i as d,b as x}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const s=void 0,g=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],u=void 0,f=[],h=[],v=a=>e.jsx("body",{className:"w-element",children:e.jsx(m,{code:`<section class="admin-section">
  <h1 class="admin-title">Admin Control</h1>
  <p class="admin-subtitle">Operator system management, approvals, and internal tools.</p>

  <div class="admin-grid">
    <div class="admin-card">
      <h2>Review Operators</h2>
      <p>Access, approve, or reject new presence submissions.</p>
      <a href="#">Open Grid</a>
    </div>

    <div class="admin-card">
      <h2>Log History</h2>
      <p>View the full system logs and tracked actions.</p>
      <a href="/records/logs">View Logs</a>
    </div>

    <div class="admin-card">
      <h2>Export PDF</h2>
      <p>Generate a full dossier of approved operators.</p>
      <a href="#">Export File</a>
    </div>
  </div>
</section>

<style>
  .admin-section {
    padding: 100px 20px;
    background: #fdfdfd;
    color: #1a1a1a;
    text-align: center;
  }

  .admin-title {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .admin-subtitle {
    font-size: 16px;
    color: #666;
    margin-bottom: 40px;
    max-width: 600px;
    margin-inline: auto;
  }

  .admin-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 28px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .admin-card {
    background: #ffffff;
    border-radius: 12px;
    padding: 24px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 6px rgba(0,0,0,0.06);
    text-align: left;
    transition: all 0.3s ease;
  }

  .admin-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 14px rgba(0,0,0,0.1);
  }

  .admin-card h2 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .admin-card p {
    font-size: 14px;
    color: #444;
    margin-bottom: 12px;
  }

  .admin-card a {
    color: #319795;
    font-weight: bold;
    text-decoration: none;
  }
</style>`,className:"w-html-embed"})}),y=({data:a})=>{const{system:n,resources:i,url:o}=a;return e.jsx(c.Provider,{value:{imageLoader:d,assetBaseUrl:r,resources:i,breakpoints:g,onError:console.error},children:e.jsx(v,{system:n},o)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),j=({data:a})=>{const{pageMeta:n}=a,{origin:i}=new URL(a.url);let o=n.socialImageUrl;n.socialImageAssetName&&(o=`${i}${d({src:`${r}/${n.socialImageAssetName}`})}`);const l=n.custom.some(t=>t.property==="twitter:card");return e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:n.title}),e.jsx("meta",{property:"og:title",content:n.title}),n.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:n.description}),e.jsx("meta",{property:"og:description",content:n.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),s,o&&e.jsx("meta",{property:"og:image",content:n.socialImageUrl}),s,n.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),n.custom.map(({property:t,content:p})=>e.jsx("meta",{property:t,content:p},t)),(n.socialImageAssetName!==void 0||n.socialImageUrl!==void 0)&&l===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),u,f.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),h.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/admin-light-root-dashboard/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/admin-light-root-dashboard/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{A as configValuesSerialized};
