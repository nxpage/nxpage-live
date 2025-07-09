import{j as e,P as c,R as m,a as s,i as l,b as u}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const i=void 0,x=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],g=void 0,f=[],v=[],h=n=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="approved-section">
  <h1 class="approved-title">Request Received</h1>
  <p class="approved-message">Your request has been successfully submitted. The NXPAGE system is processing it now.</p>
  <p class="approved-subtext">You’ll receive an update soon via the contact you provided. Until then, stay visible.</p>

  <a href="/" class="nx-btn nx-home">Back to Home</a>
</section>

<style>
  .approved-section {
    padding: 100px 20px;
    background: linear-gradient(to bottom, #0d0d0d, #161616);
    text-align: center;
    color: #f5f5f5;
  }

  .approved-title {
    font-size: 42px;
    font-weight: 800;
    color: #f0f0f0;
    margin-bottom: 16px;
  }

  .approved-message {
    font-size: 18px;
    color: #ccc;
    margin-bottom: 8px;
  }

  .approved-subtext {
    font-size: 15px;
    color: #888;
    margin-bottom: 32px;
  }

  .nx-btn {
    padding: 12px 28px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    text-decoration: none;
    background: #4FD1C5;
    color: #fff;
  }

  .nx-home:hover {
    background: #38B2AC;
  }
</style>`,className:"w-html-embed"})}),y=({data:n})=>{const{system:t,resources:r,url:a}=n;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:s,resources:r,breakpoints:x,onError:console.error},children:e.jsx(h,{system:t},a)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),j=({data:n})=>{const{pageMeta:t}=n,{origin:r}=new URL(n.url);let a=t.socialImageUrl;t.socialImageAssetName&&(a=`${r}${l({src:`${s}/${t.socialImageAssetName}`})}`);const d=t.custom.some(o=>o.property==="twitter:card");return e.jsxs(e.Fragment,{children:[n.url&&e.jsx("meta",{property:"og:url",content:n.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,a&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),i,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:p})=>e.jsx("meta",{property:o,content:p},o)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),g,f.map(o=>e.jsx("link",{rel:"preload",href:`${s}${o}`,as:"font",crossOrigin:"anonymous"},o)),v.map(o=>e.jsx("link",{rel:"preload",href:`${s}${o}`,as:"image"},o))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/accessapproveddark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/accessapproveddark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{A as configValuesSerialized};
