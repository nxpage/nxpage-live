import{j as e,P as c,R as m,a as s,i as l,b as u}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const n=void 0,x=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],h=void 0,g=[],f=[],w=a=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="shadow-section">
  <h1 class="shadow-title">Apply to Shadow</h1>
  <p class="shadow-subtitle">Request temporary shadow access to a spotlight operator. Only serious applicants considered.</p>

  <form class="shadow-form" action="#" method="POST">
    <input type="text" name="name" placeholder="Your Name or Alias" required>
    <input type="email" name="email" placeholder="Your Email" required>

    <select name="duration" required>
      <option disabled selected>How long do you want to shadow?</option>
      <option value="1day">1 Day Pass</option>
      <option value="1week">1 Week</option>
      <option value="full">Full Bootcamp</option>
    </select>

    <textarea name="reason" rows="5" placeholder="Tell us why you're applying to shadow. What do you want to learn?"></textarea>

    <button type="submit" class="nx-btn nx-shadow">Submit Shadow Request</button>
  </form>
</section>

<style>
  .shadow-section {
    padding: 100px 20px;
    background: #0a0a0a;
    color: #f4f4f4;
    text-align: center;
  }

  .shadow-title {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 12px;
    color: #fff;
  }

  .shadow-subtitle {
    font-size: 16px;
    color: #bbb;
    margin-bottom: 40px;
    max-width: 600px;
    margin-inline: auto;
  }

  .shadow-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 500px;
    margin: 0 auto;
  }

  .shadow-form input,
  .shadow-form select,
  .shadow-form textarea {
    padding: 12px 16px;
    font-size: 16px;
    border: 1px solid #444;
    border-radius: 6px;
    background: #1a1a1a;
    color: #eee;
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
    background-color: #9F7AEA;
    color: #111;
  }
</style>`,className:"w-html-embed"})}),y=({data:a})=>{const{system:o,resources:i,url:r}=a;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:s,resources:i,breakpoints:x,onError:console.error},children:e.jsx(w,{system:o},r)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),j=({data:a})=>{const{pageMeta:o}=a,{origin:i}=new URL(a.url);let r=o.socialImageUrl;o.socialImageAssetName&&(r=`${i}${l({src:`${s}/${o.socialImageAssetName}`})}`);const d=o.custom.some(t=>t.property==="twitter:card");return e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:o.title}),e.jsx("meta",{property:"og:title",content:o.title}),o.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:o.description}),e.jsx("meta",{property:"og:description",content:o.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),n,r&&e.jsx("meta",{property:"og:image",content:o.socialImageUrl}),n,o.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),o.custom.map(({property:t,content:p})=>e.jsx("meta",{property:t,content:p},t)),(o.socialImageAssetName!==void 0||o.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),h,g.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"font",crossOrigin:"anonymous"},t)),f.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"image"},t))]})},v=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/shadowdark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/shadowdark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}}};export{A as configValuesSerialized};
