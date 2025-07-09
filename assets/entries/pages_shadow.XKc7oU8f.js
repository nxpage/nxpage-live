import{j as e,P as c,R as m,a as s,i as l,b as u}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const n=void 0,x=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],h=void 0,f=[],g=[],w=a=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="shadow-section">
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
    background: linear-gradient(to bottom, #ffffff, #f0f4f9);
    text-align: center;
  }

  .shadow-title {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 12px;
    color: #111;
  }

  .shadow-subtitle {
    font-size: 16px;
    color: #555;
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
    border: 1px solid #ccc;
    border-radius: 6px;
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
    background-color: #805AD5;
    color: white;
  }
</style>`,className:"w-html-embed"})}),y=({data:a})=>{const{system:t,resources:i,url:r}=a;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:s,resources:i,breakpoints:x,onError:console.error},children:e.jsx(w,{system:t},r)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),j=({data:a})=>{const{pageMeta:t}=a,{origin:i}=new URL(a.url);let r=t.socialImageUrl;t.socialImageAssetName&&(r=`${i}${l({src:`${s}/${t.socialImageAssetName}`})}`);const d=t.custom.some(o=>o.property==="twitter:card");return e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),n,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),n,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:p})=>e.jsx("meta",{property:o,content:p},o)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),h,f.map(o=>e.jsx("link",{rel:"preload",href:`${s}${o}`,as:"font",crossOrigin:"anonymous"},o)),g.map(o=>e.jsx("link",{rel:"preload",href:`${s}${o}`,as:"image"},o))]})},v=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/shadow/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/shadow/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}}};export{A as configValuesSerialized};
