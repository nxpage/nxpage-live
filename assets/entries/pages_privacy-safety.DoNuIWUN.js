import{j as e,P as c,R as m,a as i,i as p,b as u}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const s=void 0,y=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],x=void 0,g=[],v=[],f=a=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="privacy-section">
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
    background: #f9fafb;
    text-align: center;
  }

  .privacy-title {
    font-size: 40px;
    font-weight: bold;
    color: #111;
    margin-bottom: 12px;
  }

  .privacy-subtitle {
    font-size: 18px;
    color: #444;
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
    background: white;
    padding: 24px;
    border-radius: 12px;
    border: 1px solid #eee;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    text-align: left;
  }

  .privacy-point h2 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .privacy-point p {
    font-size: 15px;
    color: #555;
  }
</style>`,className:"w-html-embed"})}),h=({data:a})=>{const{system:t,resources:r,url:o}=a;return e.jsx(m.Provider,{value:{imageLoader:p,assetBaseUrl:i,resources:r,breakpoints:y,onError:console.error},children:e.jsx(f,{system:t},o)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),j=({data:a})=>{const{pageMeta:t}=a,{origin:r}=new URL(a.url);let o=t.socialImageUrl;t.socialImageAssetName&&(o=`${r}${p({src:`${i}/${t.socialImageAssetName}`})}`);const l=t.custom.some(n=>n.property==="twitter:card");return e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),s,o&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),s,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:n,content:d})=>e.jsx("meta",{property:n,content:d},n)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&l===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),x,g.map(n=>e.jsx("link",{rel:"preload",href:`${i}${n}`,as:"font",crossOrigin:"anonymous"},n)),v.map(n=>e.jsx("link",{rel:"preload",href:`${i}${n}`,as:"image"},n))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/privacy-safety/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/privacy-safety/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{P as configValuesSerialized};
