import{j as e,P as c,R as m,a as s,i as l,b as u}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const n=void 0,x=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],f=void 0,h=[],g=[],w=a=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="shadow-request-section">
  <h1 class="shadow-title">Apply for Shadow Access</h1>
  <p class="shadow-subtitle">Submit your interest to shadow a NXPAGE operator. Selections are limited and evaluated weekly.</p>

  <form class="shadow-form" action="#" method="POST">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>

    <select name="preferred_role" required>
      <option disabled selected>Preferred Role</option>
      <option value="creator">Creator</option>
      <option value="strategist">Strategist</option>
      <option value="mentor">Mentor</option>
    </select>

    <textarea name="message" rows="5" placeholder="Tell us why you're ready to shadow."></textarea>

    <button type="submit" class="nx-btn nx-shadow">Request Shadow Access</button>
  </form>
</section>

<style>
  .shadow-request-section {
    padding: 100px 20px;
    background: linear-gradient(to bottom, #0b0b0b, #141414);
    text-align: center;
    color: #f5f5f5;
  }

  .shadow-title {
    font-size: 38px;
    font-weight: 700;
    color: #f0f0f0;
    margin-bottom: 12px;
  }

  .shadow-subtitle {
    font-size: 18px;
    color: #bbb;
    margin-bottom: 36px;
    max-width: 620px;
    margin-inline: auto;
  }

  .shadow-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 480px;
    margin: 0 auto;
  }

  .shadow-form input,
  .shadow-form select,
  .shadow-form textarea {
    padding: 12px 16px;
    font-size: 16px;
    border: 1px solid #444;
    border-radius: 6px;
    background-color: #1a1a1a;
    color: #f0f0f0;
  }

  .shadow-form textarea {
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

  .nx-shadow {
    background-color: #7f5af0;
    color: white;
  }
</style>`,className:"w-html-embed"})}),y=({data:a})=>{const{system:t,resources:i,url:r}=a;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:s,resources:i,breakpoints:x,onError:console.error},children:e.jsx(w,{system:t},r)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),j=({data:a})=>{const{pageMeta:t}=a,{origin:i}=new URL(a.url);let r=t.socialImageUrl;t.socialImageAssetName&&(r=`${i}${l({src:`${s}/${t.socialImageAssetName}`})}`);const d=t.custom.some(o=>o.property==="twitter:card");return e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),n,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),n,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:p})=>e.jsx("meta",{property:o,content:p},o)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),f,h.map(o=>e.jsx("link",{rel:"preload",href:`${s}${o}`,as:"font",crossOrigin:"anonymous"},o)),g.map(o=>e.jsx("link",{rel:"preload",href:`${s}${o}`,as:"image"},o))]})},v=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/applyshadowxdark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/applyshadowxdark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}}};export{A as configValuesSerialized};
