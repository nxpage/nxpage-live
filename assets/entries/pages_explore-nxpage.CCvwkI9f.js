import{j as e,P as c,R as m,a,i as l,b as x}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const i=void 0,u=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],g=void 0,h=[],f=[],y=o=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="explore-section">
  <h1 class="explore-title">Explore NXPAGE</h1>
  <p class="explore-subtitle">Browse featured operators, access shadow requests, or pulse your presence.</p>

  <div class="explore-grid">
    <div class="explore-card">
      <h2>Featured Operators</h2>
      <p>See who’s currently in spotlight rotation and discover their latest moves.</p>
      <a href="/spotlight">Browse Spotlights</a>
    </div>

    <div class="explore-card">
      <h2>Apply to Shadow</h2>
      <p>Want behind-the-scenes access? Request a shadow pass and earn your place.</p>
      <a href="/Apply_ShadowX">Request Access</a>
    </div>

    <div class="explore-card">
      <h2>Join the Grid</h2>
      <p>Submit your details and get listed. Presence is permission.</p>
      <a href="/connect">Join Now</a>
    </div>
  </div>
</section>

<style>
  .explore-section {
    padding: 100px 20px;
    background: #fdfdfd;
    color: #111;
    text-align: center;
  }

  .explore-title {
    font-size: 42px;
    font-weight: 800;
    margin-bottom: 12px;
  }

  .explore-subtitle {
    font-size: 16px;
    color: #555;
    margin-bottom: 40px;
    max-width: 600px;
    margin-inline: auto;
  }

  .explore-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
    max-width: 960px;
    margin: 0 auto;
  }

  .explore-card {
    background: #fff;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.05);
    text-align: left;
  }

  .explore-card h2 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .explore-card p {
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
  }

  .explore-card a {
    color: #4FD1C5;
    font-weight: bold;
    text-decoration: none;
  }
</style>`,className:"w-html-embed"})}),v=({data:o})=>{const{system:t,resources:s,url:r}=o;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:a,resources:s,breakpoints:u,onError:console.error},children:e.jsx(y,{system:t},r)})},j=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),w=({data:o})=>{const{pageMeta:t}=o,{origin:s}=new URL(o.url);let r=t.socialImageUrl;t.socialImageAssetName&&(r=`${s}${l({src:`${a}/${t.socialImageAssetName}`})}`);const p=t.custom.some(n=>n.property==="twitter:card");return e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),i,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:n,content:d})=>e.jsx("meta",{property:n,content:d},n)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&p===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),g,h.map(n=>e.jsx("link",{rel:"preload",href:`${a}${n}`,as:"font",crossOrigin:"anonymous"},n)),f.map(n=>e.jsx("link",{rel:"preload",href:`${a}${n}`,as:"image"},n))]})},b=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/explore-nxpage/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/explore-nxpage/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}}};export{A as configValuesSerialized};
