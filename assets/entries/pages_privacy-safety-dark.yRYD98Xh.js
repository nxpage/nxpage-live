import{j as e,P as c,R as m,a as r,i as l,b as u}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const s=void 0,y=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],x=void 0,g=[],f=[],v=a=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="privacy-section">
  <h1 class="privacy-title">Privacy &amp; Safety</h1>
  <p class="privacy-subtitle">NXPAGE is committed to protecting your data, your presence, and your path.</p>

  <div class="privacy-points">
    <div class="privacy-point">
      <h2>Data Handling</h2>
      <p>We only store essential data for operator interactions. No third-party tracking. No resale. Ever.</p>
    </div>

    <div class="privacy-point">
      <h2>Presence Control</h2>
      <p>You can request removal, masking, or suspension of your visibility from the grid at any time.</p>
    </div>

    <div class="privacy-point">
      <h2>Encrypted Comm</h2>
      <p>Operator requests, waitlist forms, and submissions are encrypted end-to-end.</p>
    </div>

    <div class="privacy-point">
      <h2>Zero Tolerance</h2>
      <p>No exploitation, no harassment, no manipulation. System access will be revoked on breach.</p>
    </div>
  </div>
</section>

<style>
  .privacy-section {
    padding: 100px 20px;
    background: #0e0e0e;
    text-align: center;
    color: #f5f5f5;
  }

  .privacy-title {
    font-size: 40px;
    font-weight: bold;
    color: #f5f5f5;
    margin-bottom: 12px;
  }

  .privacy-subtitle {
    font-size: 18px;
    color: #bbb;
    margin-bottom: 40px;
    max-width: 640px;
    margin-inline: auto;
  }

  .privacy-points {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 28px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .privacy-point {
    background: #1a1a1a;
    padding: 24px;
    border-radius: 12px;
    border: 1px solid #2a2a2a;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    text-align: left;
  }

  .privacy-point h2 {
    font-size: 20px;
    margin-bottom: 8px;
    color: #ffffff;
  }

  .privacy-point p {
    font-size: 15px;
    color: #ccc;
  }
</style>`,className:"w-html-embed"})}),h=({data:a})=>{const{system:t,resources:i,url:o}=a;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:r,resources:i,breakpoints:y,onError:console.error},children:e.jsx(v,{system:t},o)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),j=({data:a})=>{const{pageMeta:t}=a,{origin:i}=new URL(a.url);let o=t.socialImageUrl;t.socialImageAssetName&&(o=`${i}${l({src:`${r}/${t.socialImageAssetName}`})}`);const p=t.custom.some(n=>n.property==="twitter:card");return e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),s,o&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),s,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:n,content:d})=>e.jsx("meta",{property:n,content:d},n)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&p===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),x,g.map(n=>e.jsx("link",{rel:"preload",href:`${r}${n}`,as:"font",crossOrigin:"anonymous"},n)),f.map(n=>e.jsx("link",{rel:"preload",href:`${r}${n}`,as:"image"},n))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/privacy-safety-dark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/privacy-safety-dark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{P as configValuesSerialized};
