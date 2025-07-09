import{j as e,P as c,R as m,a,i as l,b as u}from"../chunks/chunk-CPDQULdJ.js";/* empty css                      */const i=void 0,x=[{id:"1TIoX3oNbA1RQXA8eA-Rd"},{id:"EDXEewUkjxtg8M3jBLyrf",maxWidth:991},{id:"5GohLzNeBaDd4VmQXXzL_",maxWidth:767},{id:"h1v-4zQE9qyJtOKYv1pPM",maxWidth:479}],g=void 0,b=[],f=[],h=n=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`<section class="boost-section">
  <h1 class="boost-title">Boost Your Presence</h1>
  <p class="boost-subtitle">Request priority visibility on the operator grid, spotlight rotation, or explore feed.</p>

  <form class="boost-form" action="#" method="POST">
    <input type="text" name="name" placeholder="Your Name or Alias" required>
    <input type="email" name="email" placeholder="Your Email" required>

    <select name="boost_type" required>
      <option disabled selected>What do you want to boost?</option>
      <option value="grid">Operator Grid</option>
      <option value="spotlight">Spotlight Tier</option>
      <option value="explore">Explore Feed</option>
    </select>

    <textarea name="reason" rows="5" placeholder="Why should you be boosted? Drop your case."></textarea>

    <button type="submit" class="nx-btn nx-boost">Submit Boost Request</button>
  </form>
</section>

<style>
  .boost-section {
    padding: 100px 20px;
    background: linear-gradient(to bottom, #fffdf5, #fceabb);
    text-align: center;
  }

  .boost-title {
    font-size: 40px;
    font-weight: 800;
    color: #222;
    margin-bottom: 12px;
  }

  .boost-subtitle {
    font-size: 18px;
    color: #444;
    max-width: 600px;
    margin: 0 auto 36px;
  }

  .boost-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 480px;
    margin: 0 auto;
  }

  .boost-form input,
  .boost-form select,
  .boost-form textarea {
    padding: 12px 16px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
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
    background-color: #FF8C00;
    color: white;
  }
</style>`,className:"w-html-embed"})}),y=({data:n})=>{const{system:t,resources:s,url:r}=n;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:a,resources:s,breakpoints:x,onError:console.error},children:e.jsx(h,{system:t},r)})},j=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),v=({data:n})=>{const{pageMeta:t}=n,{origin:s}=new URL(n.url);let r=t.socialImageUrl;t.socialImageAssetName&&(r=`${s}${l({src:`${a}/${t.socialImageAssetName}`})}`);const p=t.custom.some(o=>o.property==="twitter:card");return e.jsxs(e.Fragment,{children:[n.url&&e.jsx("meta",{property:"og:url",content:n.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),i,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:d})=>e.jsx("meta",{property:o,content:d},o)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&p===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),g,b.map(o=>e.jsx("link",{rel:"preload",href:`${a}${o}`,as:"font",crossOrigin:"anonymous"},o)),f.map(o=>e.jsx("link",{rel:"preload",href:`${a}${o}`,as:"image"},o))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:v},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/boost/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/boost/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{P as configValuesSerialized};
