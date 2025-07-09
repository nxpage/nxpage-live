import{j as e,P as c,R as m,a,i as l,b as u}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const i=void 0,x=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],g=void 0,f=[],h=[],y=o=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="error-section">
  <h1 class="error-code">404</h1>
  <p class="error-message">You’ve hit an invalid path.</p>
  <p class="error-subtext">Either this operator doesn’t exist or the presence link is broken.</p>

  <a href="/" class="nx-btn nx-return">Return to Main Grid</a>
</section>

<style>
  .error-section {
    padding: 120px 20px;
    background: radial-gradient(circle at center, #111, #000);
    color: #eee;
    text-align: center;
  }

  .error-code {
    font-size: 100px;
    font-weight: 900;
    color: #FF5C5C;
    margin-bottom: 12px;
  }

  .error-message {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .error-subtext {
    font-size: 16px;
    color: #aaa;
    margin-bottom: 36px;
  }

  .nx-btn {
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 6px;
    background: #4FD1C5;
    color: #111;
    text-decoration: none;
  }

  .nx-return:hover {
    background: #38B2AC;
  }
</style>`,className:"w-html-embed"})}),j=({data:o})=>{const{system:t,resources:s,url:r}=o;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:a,resources:s,breakpoints:x,onError:console.error},children:e.jsx(y,{system:t},r)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),v=({data:o})=>{const{pageMeta:t}=o,{origin:s}=new URL(o.url);let r=t.socialImageUrl;t.socialImageAssetName&&(r=`${s}${l({src:`${a}/${t.socialImageAssetName}`})}`);const d=t.custom.some(n=>n.property==="twitter:card");return e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),i,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:n,content:p})=>e.jsx("meta",{property:n,content:p},n)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),g,f.map(n=>e.jsx("link",{rel:"preload",href:`${a}${n}`,as:"font",crossOrigin:"anonymous"},n)),h.map(n=>e.jsx("link",{rel:"preload",href:`${a}${n}`,as:"image"},n))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:v},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/404/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/404/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{A as configValuesSerialized};
