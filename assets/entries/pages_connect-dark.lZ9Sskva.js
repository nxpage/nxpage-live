import{j as e,P as d,R as m,a,i as l,b as u}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const s=void 0,x=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],g=void 0,f=[],h=[],y=o=>e.jsx("body",{className:"w-element",children:e.jsx(d,{code:`<section class="connect-section">
  <h1 class="connect-title">Join the Waitlist</h1>
  <p class="connect-subtitle">Be the first to access operator mentorship, grid exposure, and shadowing experiences.</p>

  <form class="connect-form" action="#" method="POST">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    
    <select name="interest">
      <option disabled selected>What are you here for?</option>
      <option value="mentorship">Mentorship</option>
      <option value="visibility">Operator Grid Exposure</option>
      <option value="shadow">Shadow Opportunities</option>
    </select>
    
    <button type="submit" class="nx-btn nx-primary">Request Access</button>
  </form>
</section>

<style>
  .connect-section {
    padding: 100px 20px;
    background: linear-gradient(to bottom, #111111, #1a1a1a);
    text-align: center;
    color: #f2f2f2;
  }

  .connect-title {
    font-size: 42px;
    font-weight: 700;
    color: #f5f5f5;
    margin-bottom: 12px;
  }

  .connect-subtitle {
    font-size: 18px;
    color: #ccc;
    margin-bottom: 40px;
    max-width: 600px;
    margin-inline: auto;
  }

  .connect-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 400px;
    margin: 0 auto;
  }

  .connect-form input,
  .connect-form select {
    padding: 12px 16px;
    font-size: 16px;
    border: 1px solid #444;
    border-radius: 6px;
    background-color: #1e1e1e;
    color: #eee;
  }

  .connect-form select {
    background-color: #1e1e1e;
  }

  .nx-btn {
    padding: 12px 32px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    border: none;
  }

  .nx-primary {
    background-color: #4FD1C5;
    color: #000;
  }
</style>`,className:"w-html-embed"})}),b=({data:o})=>{const{system:n,resources:i,url:r}=o;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:a,resources:i,breakpoints:x,onError:console.error},children:e.jsx(y,{system:n},r)})},j=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),v=({data:o})=>{const{pageMeta:n}=o,{origin:i}=new URL(o.url);let r=n.socialImageUrl;n.socialImageAssetName&&(r=`${i}${l({src:`${a}/${n.socialImageAssetName}`})}`);const c=n.custom.some(t=>t.property==="twitter:card");return e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:n.title}),e.jsx("meta",{property:"og:title",content:n.title}),n.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:n.description}),e.jsx("meta",{property:"og:description",content:n.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),s,r&&e.jsx("meta",{property:"og:image",content:n.socialImageUrl}),s,n.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),n.custom.map(({property:t,content:p})=>e.jsx("meta",{property:t,content:p},t)),(n.socialImageAssetName!==void 0||n.socialImageUrl!==void 0)&&c===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),g,f.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),h.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:v},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/connect-dark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/connect-dark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{P as configValuesSerialized};
