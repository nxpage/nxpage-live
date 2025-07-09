import{j as e,P as c,R as m,a as r,i as l,b as u}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const i=void 0,x=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],g=void 0,f=[],b=[],h=n=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="boost-section">
  <h1 class="boost-title">Trigger Operator Boost</h1>
  <p class="boost-subtitle">Use this panel to activate pulse signals, elevate status, or inject a boost.json effect.</p>

  <form class="boost-form" action="#" method="POST">
    <input type="text" name="operator_id" placeholder="Operator ID (e.g., op-kairo)" required>
    
    <select name="boost_type">
      <option disabled selected>Boost Type</option>
      <option value="pulse">Pulse Effect</option>
      <option value="aura">Aura Activation</option>
      <option value="grid-spotlight">Grid Spotlight</option>
    </select>

    <textarea name="reason" rows="3" placeholder="Reason or context for this boost..."></textarea>

    <button type="submit" class="nx-btn nx-boost">Trigger Boost</button>
  </form>
</section>

<style>
  .boost-section {
    padding: 100px 20px;
    background: #0d0d0d;
    color: #f9f9f9;
    text-align: center;
  }

  .boost-title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .boost-subtitle {
    font-size: 16px;
    color: #bbb;
    margin-bottom: 32px;
    max-width: 600px;
    margin-inline: auto;
  }

  .boost-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 460px;
    margin: 0 auto;
  }

  .boost-form input,
  .boost-form select,
  .boost-form textarea {
    padding: 12px 16px;
    font-size: 16px;
    border: 1px solid #444;
    border-radius: 6px;
    background: #1a1a1a;
    color: #eee;
  }

  .boost-form textarea {
    resize: vertical;
  }

  .nx-btn {
    padding: 12px 28px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    border: none;
  }

  .nx-boost {
    background-color: #FBBF24;
    color: #111;
  }
</style>`,className:"w-html-embed"})}),y=({data:n})=>{const{system:t,resources:s,url:a}=n;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:r,resources:s,breakpoints:x,onError:console.error},children:e.jsx(h,{system:t},a)})},j=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),v=({data:n})=>{const{pageMeta:t}=n,{origin:s}=new URL(n.url);let a=t.socialImageUrl;t.socialImageAssetName&&(a=`${s}${l({src:`${r}/${t.socialImageAssetName}`})}`);const p=t.custom.some(o=>o.property==="twitter:card");return e.jsxs(e.Fragment,{children:[n.url&&e.jsx("meta",{property:"og:url",content:n.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,a&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),i,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:d})=>e.jsx("meta",{property:o,content:d},o)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&p===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),g,f.map(o=>e.jsx("link",{rel:"preload",href:`${r}${o}`,as:"font",crossOrigin:"anonymous"},o)),b.map(o=>e.jsx("link",{rel:"preload",href:`${r}${o}`,as:"image"},o))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:v},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/boost-admin/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/boost-admin/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{T as configValuesSerialized};
