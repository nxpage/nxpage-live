import{j as e,P as c,R as m,a as r,i,b as u}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const d=void 0,h=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],x=void 0,g=[],f=[],b=o=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="dashboard-section">
  <h1 class="dashboard-title">Welcome Back, Operator</h1>
  <p class="dashboard-subtitle">Access your core tools, review your status, or request updates directly from here.</p>

  <div class="dashboard-grid">
    <a href="/editor/op-id" class="dashboard-card">
      <h2>Edit Profile</h2>
      <p>Update your details and system notes.</p>
    </a>

    <a href="/boost" class="dashboard-card">
      <h2>Request Boost</h2>
      <p>Submit a boost request to upgrade your presence.</p>
    </a>

    <a href="/records/logs" class="dashboard-card">
      <h2>View Logs</h2>
      <p>Review your changes and system activity.</p>
    </a>

    <a href="/records/links" class="dashboard-card">
      <h2>My Links</h2>
      <p>Manage your submissions and archive updates.</p>
    </a>
  </div>
</section>

<style>
  .dashboard-section {
    padding: 100px 20px;
    background: #0d0d0d;
    text-align: center;
    color: #eee;
  }

  .dashboard-title {
    font-size: 38px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 12px;
  }

  .dashboard-subtitle {
    font-size: 18px;
    color: #aaa;
    max-width: 600px;
    margin: 0 auto 40px;
  }

  .dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 28px;
    max-width: 960px;
    margin: 0 auto;
  }

  .dashboard-card {
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 12px;
    padding: 32px;
    text-decoration: none;
    color: #fff;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    transition: all 0.2s ease;
  }

  .dashboard-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 14px rgba(0,0,0,0.3);
  }

  .dashboard-card h2 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .dashboard-card p {
    font-size: 15px;
    color: #ccc;
  }
</style>`,className:"w-html-embed"})}),y=({data:o})=>{const{system:a,resources:s,url:n}=o;return e.jsx(m.Provider,{value:{imageLoader:i,assetBaseUrl:r,resources:s,breakpoints:h,onError:console.error},children:e.jsx(b,{system:a},n)})},v=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),j=({data:o})=>{const{pageMeta:a}=o,{origin:s}=new URL(o.url);let n=a.socialImageUrl;a.socialImageAssetName&&(n=`${s}${i({src:`${r}/${a.socialImageAssetName}`})}`);const l=a.custom.some(t=>t.property==="twitter:card");return e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:a.title}),e.jsx("meta",{property:"og:title",content:a.title}),a.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:a.description}),e.jsx("meta",{property:"og:description",content:a.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),d,n&&e.jsx("meta",{property:"og:image",content:a.socialImageUrl}),d,a.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),a.custom.map(({property:t,content:p})=>e.jsx("meta",{property:t,content:p},t)),(a.socialImageAssetName!==void 0||a.socialImageUrl!==void 0)&&l===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),x,g.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),f.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/dashboarddark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/dashboarddark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{P as configValuesSerialized};
