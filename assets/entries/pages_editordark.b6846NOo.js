import{j as e,P as c,R as m,a,i as l,b as u}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const s=void 0,x=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],f=void 0,g=[],h=[],y=n=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="editor-section">
  <h1 class="editor-title">Edit Operator Record</h1>
  <p class="editor-subtitle">Adjust and update fields linked to this operator’s profile. All edits are logged in the system.</p>

  <form class="editor-form" action="#" method="POST">
    <input type="text" name="operator_name" placeholder="Operator Name" required>
    <input type="text" name="operator_id" placeholder="Operator ID (e.g., op-raye)" required>

    <select name="tier">
      <option disabled selected>Tier</option>
      <option value="scout">Scout</option>
      <option value="active">Active</option>
      <option value="featured">Featured</option>
      <option value="spotlight">Spotlight</option>
    </select>

    <textarea name="notes" rows="4" placeholder="Admin or mentor notes…"></textarea>

    <button type="submit" class="nx-btn nx-save">Save Changes</button>
  </form>
</section>

<style>
  .editor-section {
    padding: 80px 20px;
    background: linear-gradient(to bottom, #0f0f0f, #1a1a1a);
    text-align: center;
    color: #eee;
  }

  .editor-title {
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 12px;
  }

  .editor-subtitle {
    font-size: 16px;
    color: #aaa;
    margin-bottom: 32px;
    max-width: 600px;
    margin-inline: auto;
  }

  .editor-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 500px;
    margin: 0 auto;
  }

  .editor-form input,
  .editor-form select,
  .editor-form textarea {
    padding: 12px 16px;
    font-size: 16px;
    border: 1px solid #444;
    border-radius: 6px;
    background-color: #111;
    color: #fff;
  }

  .editor-form textarea {
    resize: vertical;
  }

  .nx-btn {
    padding: 12px 26px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    border: none;
  }

  .nx-save {
    background-color: #38B2AC;
    color: white;
  }
</style>`,className:"w-html-embed"})}),v=({data:n})=>{const{system:t,resources:i,url:r}=n;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:a,resources:i,breakpoints:x,onError:console.error},children:e.jsx(y,{system:t},r)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),j=({data:n})=>{const{pageMeta:t}=n,{origin:i}=new URL(n.url);let r=t.socialImageUrl;t.socialImageAssetName&&(r=`${i}${l({src:`${a}/${t.socialImageAssetName}`})}`);const d=t.custom.some(o=>o.property==="twitter:card");return e.jsxs(e.Fragment,{children:[n.url&&e.jsx("meta",{property:"og:url",content:n.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),s,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),s,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:p})=>e.jsx("meta",{property:o,content:p},o)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),f,g.map(o=>e.jsx("link",{rel:"preload",href:`${a}${o}`,as:"font",crossOrigin:"anonymous"},o)),h.map(o=>e.jsx("link",{rel:"preload",href:`${a}${o}`,as:"image"},o))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/editordark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/editordark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{A as configValuesSerialized};
