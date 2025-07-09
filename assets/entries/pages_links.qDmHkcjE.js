import{j as e,P as c,R as m,a as r,i as l,b as g}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const s=void 0,u=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],x=void 0,f=[],h=[],y=a=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="links-section">
  <h1 class="links-title">Operator Access Links</h1>
  <p class="links-subtitle">Direct actions for operator visibility, resources, or system injection.</p>

  <div class="links-grid">
    <div class="link-card">
      <h2>Request Operator Link</h2>
      <p>Issue a system-generated access link for a new presence entry.</p>
      <a href="#">Generate Link</a>
    </div>

    <div class="link-card">
      <h2>Custom Profile Boost</h2>
      <p>Trigger boost.json for an operator you’re mentoring or managing.</p>
      <a href="#">Trigger Boost</a>
    </div>

    <div class="link-card">
      <h2>Pulse Preview Panel</h2>
      <p>Live-check an operator’s signal presence in real time.</p>
      <a href="#">View Pulse</a>
    </div>
  </div>
</section>

<style>
  .links-section {
    padding: 100px 20px;
    background: #0e0e0e;
    color: #f5f5f5;
    text-align: center;
  }

  .links-title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .links-subtitle {
    font-size: 16px;
    color: #bbb;
    margin-bottom: 40px;
    max-width: 640px;
    margin-inline: auto;
  }

  .links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .link-card {
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 12px;
    padding: 24px;
    transition: all 0.3s ease;
    text-align: left;
  }

  .link-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  .link-card h2 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .link-card p {
    font-size: 14px;
    color: #aaa;
    margin-bottom: 12px;
  }

  .link-card a {
    color: #4FD1C5;
    font-weight: bold;
    text-decoration: none;
  }
</style>`,className:"w-html-embed"})}),v=({data:a})=>{const{system:n,resources:i,url:o}=a;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:r,resources:i,breakpoints:u,onError:console.error},children:e.jsx(y,{system:n},o)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),j=({data:a})=>{const{pageMeta:n}=a,{origin:i}=new URL(a.url);let o=n.socialImageUrl;n.socialImageAssetName&&(o=`${i}${l({src:`${r}/${n.socialImageAssetName}`})}`);const d=n.custom.some(t=>t.property==="twitter:card");return e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:n.title}),e.jsx("meta",{property:"og:title",content:n.title}),n.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:n.description}),e.jsx("meta",{property:"og:description",content:n.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),s,o&&e.jsx("meta",{property:"og:image",content:n.socialImageUrl}),s,n.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),n.custom.map(({property:t,content:p})=>e.jsx("meta",{property:t,content:p},t)),(n.socialImageAssetName!==void 0||n.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),x,f.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),h.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},k=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),z={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/links/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/links/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}}};export{z as configValuesSerialized};
