/* ════ ORANGE GARDEN ════ */
let orangeInited=false;
function initOrange(){
  if(orangeInited)return; orangeInited=true;
  const seq=[{id:'of3',big:true,d:300},{id:'of1',big:false,d:1800},{id:'of2',big:false,d:2600},{id:'of4',big:false,d:3500},{id:'of5',big:false,d:4400}];
  seq.forEach(({id,big,d})=>setTimeout(()=>{document.getElementById(id).classList.add(big?'main-bloomed':'bloomed')},d));
}
