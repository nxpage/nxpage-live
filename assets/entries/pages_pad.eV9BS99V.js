import{j as e,P as c,R as m,a as i,i as l,b as u}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const r=void 0,x=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],g=void 0,f=[],h=[],y=a=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="pad-section">
  <h1 class="pad-title">Operator Pulse Grid</h1>
  <p class="pad-subtitle">Live signal presence across the system. Top-tier movement and spotlight entry are highlighted below.</p>

  <div class="pad-grid">
    <div class="pad-tile pulse-aura">
      <h2>Op-Raye</h2>
      <p>Spotlight Tier</p>
    </div>
    <div class="pad-tile">
      <h2>Op-Kairo</h2>
      <p>Featured Tier</p>
    </div>
    <div class="pad-tile pulse-soft">
      <h2>Op-Syn</h2>
      <p>Active Tier</p>
    </div>
  </div>
</section>

<style>
  .pad-section {
    padding: 100px 20px;
    background: #000;
    color: #fff;
    text-align: center;
  }

  .pad-title {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .pad-subtitle {
    font-size: 16px;
    color: #ccc;
    margin-bottom: 40px;
    max-width: 640px;
    margin-inline: auto;
  }

  .pad-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .pad-tile {
    background: #111;
    border: 1px solid #333;
    border-radius: 12px;
    padding: 24px;
    transition: all 0.3s ease;
  }

  .pad-tile h2 {
    font-size: 20px;
    margin-bottom: 6px;
    color: #fff;
  }

  .pad-tile p {
    font-size: 14px;
    color: #aaa;
  }

  .pulse-aura {
    box-shadow: 0 0 12px 4px rgba(255, 215, 0, 0.6);
    animation: auraPulse 2.5s infinite ease-in-out;
  }

  .pulse-soft {
    box-shadow: 0 0 8px 2px rgba(79, 209, 197, 0.4);
    animation: auraPulseSoft 3s infinite ease-in-out;
  }

  @keyframes auraPulse {
    0%, 100% { box-shadow: 0 0 12px 4px rgba(255, 215, 0, 0.6); }
    50% { box-shadow: 0 0 18px 6px rgba(255, 215, 0, 0.8); }
  }

  @keyframes auraPulseSoft {
    0%, 100% { box-shadow: 0 0 8px 2px rgba(79, 209, 197, 0.4); }
    50% { box-shadow: 0 0 12px 3px rgba(79, 209, 197, 0.6); }
  }
</style>`,className:"w-html-embed"})}),b=({data:a})=>{const{system:t,resources:s,url:o}=a;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:i,resources:s,breakpoints:x,onError:console.error},children:e.jsx(y,{system:t},o)})},v=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),j=({data:a})=>{const{pageMeta:t}=a,{origin:s}=new URL(a.url);let o=t.socialImageUrl;t.socialImageAssetName&&(o=`${s}${l({src:`${i}/${t.socialImageAssetName}`})}`);const p=t.custom.some(n=>n.property==="twitter:card");return e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),r,o&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),r,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:n,content:d})=>e.jsx("meta",{property:n,content:d},n)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&p===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),g,f.map(n=>e.jsx("link",{rel:"preload",href:`${i}${n}`,as:"font",crossOrigin:"anonymous"},n)),h.map(n=>e.jsx("link",{rel:"preload",href:`${i}${n}`,as:"image"},n))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),z={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/pad/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/pad/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{z as configValuesSerialized};
