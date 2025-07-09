import{j as e,P as c,R as g,a as s,i as l,b as m}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const i=void 0,u=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],x=void 0,f=[],y=[],h=o=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="log-section">
  <h1 class="log-title">Operator Logbook</h1>
  <p class="log-subtitle">System events, operator upgrades, boosts, and audit trails — recorded and viewable here.</p>

  <div class="log-feed">
    <div class="log-entry">
      <span class="log-time">Jun 15 – 14:23</span>
      <p><strong>Op-Kairo</strong> promoted to <span class="log-tier">Featured Tier</span> by admin.</p>
    </div>
    <div class="log-entry">
      <span class="log-time">Jun 14 – 20:48</span>
      <p><strong>Op-Syn</strong> received <span class="log-boost">Momentum Boost</span> for stream activation.</p>
    </div>
    <div class="log-entry">
      <span class="log-time">Jun 13 – 09:17</span>
      <p><strong>Op-Lux</strong> updated notes via editor dashboard.</p>
    </div>
  </div>
</section>

<style>
  .log-section {
    padding: 100px 20px;
    background: #fefefe;
    color: #222;
    text-align: center;
  }

  .log-title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .log-subtitle {
    font-size: 16px;
    color: #666;
    margin-bottom: 40px;
    max-width: 640px;
    margin-inline: auto;
  }

  .log-feed {
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .log-entry {
    background: #ffffff;
    border-left: 4px solid #4FD1C5;
    padding: 16px 20px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .log-time {
    display: block;
    font-size: 13px;
    color: #999;
    margin-bottom: 6px;
  }

  .log-tier {
    color: #D69E2E;
  }

  .log-boost {
    color: #DD6B20;
  }
</style>`,className:"w-html-embed"})}),v=({data:o})=>{const{system:t,resources:r,url:a}=o;return e.jsx(g.Provider,{value:{imageLoader:l,assetBaseUrl:s,resources:r,breakpoints:u,onError:console.error},children:e.jsx(h,{system:t},a)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),j=({data:o})=>{const{pageMeta:t}=o,{origin:r}=new URL(o.url);let a=t.socialImageUrl;t.socialImageAssetName&&(a=`${r}${l({src:`${s}/${t.socialImageAssetName}`})}`);const d=t.custom.some(n=>n.property==="twitter:card");return e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,a&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),i,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:n,content:p})=>e.jsx("meta",{property:n,content:p},n)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),x,f.map(n=>e.jsx("link",{rel:"preload",href:`${s}${n}`,as:"font",crossOrigin:"anonymous"},n)),y.map(n=>e.jsx("link",{rel:"preload",href:`${s}${n}`,as:"image"},n))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/logslight/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/logslight/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{T as configValuesSerialized};
