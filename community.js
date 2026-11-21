"use strict";
const boardAPI = "https://negba189-land-registry.yonifr1.chatgpt.site/community";
const boards = {
  connections: { title:ui("חיבורים מקצועיים"), help:ui("מציעים ליווי מקצועי או מחפשים שותף, חונך או היכרות בתחום מסוים."), publish:ui("פרסום בקשת חיבור"), field:ui("איזה חיבור מחפשים או מציעים?"), org:ui("תחום מקצועי או ארגון"), empty:ui("עדיין אין בקשות חיבור. אפשר לפרסם את החיבור המקצועי הראשון.") },
  business: { title:ui("לוח פרסומים עסקיים"), help:ui("שירותים, הצעות והטבות של בעלי עסקים ממשפחות החטיבה."), publish:ui("פרסום עסק או הצעה"), field:ui("שם העסק או ההצעה"), org:ui("תחום העסק"), empty:ui("עדיין אין פרסומים עסקיים. יש לכם עסק או הטבה לקהילה? אפשר לפרסם כאן.") },
  jobs: { title:ui("לוח דרושים"), help:ui("משרות שמפרסמים מעסיקים וחברי הקהילה, עם דרך ישירה לפנות למגייס."), publish:ui("פרסום משרה"), field:ui("שם המשרה"), org:ui("שם המעסיק"), empty:ui("עדיין אין משרות בלוח. מגייסים? אפשר לפרסם כאן משרה.") }
};
const el = id => document.getElementById(id);
let active = "connections", generation = 0, offset = 0, timer, draftId;
const drafts = {};
function show(id) { const dialog=el(id); dialog.showModal(); }
document.querySelectorAll("[data-dialog]").forEach(b=>b.onclick=()=>show(b.dataset.dialog));
document.querySelectorAll("dialog").forEach(dialog=>{
  dialog.querySelector("[data-close]").onclick=()=>dialog.close();
  dialog.addEventListener("click", e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
});
el("menuBtn").onclick=()=>{
  const open=el("mobileMenu").hidden;el("mobileMenu").hidden=!open;el("menuBtn").setAttribute("aria-expanded",String(open));
};
document.querySelectorAll("nav a").forEach(link=>link.addEventListener("click",()=>{
  el("mobileMenu").hidden=true;el("menuBtn").setAttribute("aria-expanded","false");
}));
function appendPost(post) {
  const card=document.createElement("article"), title=document.createElement("h4"), meta=document.createElement("small"), details=document.createElement("p");
  title.textContent=post.title;meta.textContent=[post.organization,post.location,new Date(post.created*1000).toLocaleDateString(homeEnglish?"en-GB":"he-IL")].filter(Boolean).join(" · ");
  details.className="details";details.textContent=post.description;card.append(title,meta,details);
  const value=post.contact.trim();let href;
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) href="mailto:"+value;
  else if (/^\+?[\d ()-]{7,26}$/.test(value)) href="tel:"+value.replace(/[^+\d]/g,"");
  else if (/^https?:\/\//i.test(value)){try{href=new URL(value).href}catch{}}
  const contact=document.createElement(href?"a":"span");contact.dir="auto";contact.textContent=value;
  if(href){contact.href=href;if(/^https?:/.test(href)){contact.target="_blank";contact.rel="noopener noreferrer";}}
  card.append(contact);el("posts").append(card);
}
async function loadBoard(reset=true) {
  const current=++generation;clearTimeout(timer);
  if(reset){offset=0;el("posts").replaceChildren();}
  el("loadMore").hidden=true;el("retry").hidden=true;el("boardStatus").textContent=ui("טוען את המודעות…");
  const query=el("boardSearch").value.trim();
  const url=new URL(boardAPI);url.search=new URLSearchParams({kind:active,q:query,offset});
  try {
    const r=await fetch(url,{cache:"no-store"});if(!r.ok)throw Error();const data=await r.json();if(current!==generation)return;
    data.posts.forEach(appendPost);offset+=data.posts.length;el("loadMore").hidden=offset>=data.count;
    el("boardStatus").textContent=data.count?(homeEnglish?data.count+" listings":data.count+" מודעות"+(query?" נמצאו בחיפוש":" בלוח")):query?ui("אין מודעות שמתאימות לחיפוש. נסו לשנות את מילות החיפוש."):boards[active].empty;
  } catch {if(current===generation){el("boardStatus").textContent=ui("הלוח לא נטען. אפשר לנסות שוב.");el("retry").hidden=false;}}
}
function openBoard(kind,scroll) {
  active=kind;const config=boards[kind];el("boardTitle").textContent=config.title;el("boardHelp").textContent=config.help;
  el("newPost").textContent=config.publish;el("boardSearch").value="";
  document.querySelectorAll("[data-kind]").forEach(a=>{if(a.dataset.kind===kind)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");});
  if(scroll)el("networking").scrollIntoView();loadBoard();
}
function routeBoard(){const id=location.hash.slice(1);if(Object.hasOwn(boards,id))openBoard(id,true);else if(id==="networking")openBoard("connections",true);}
window.addEventListener("hashchange",routeBoard);
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>{if(location.hash===a.hash && Object.hasOwn(boards,a.hash.slice(1)))routeBoard();}));
el("boardSearch").oninput=()=>{++generation;clearTimeout(timer);timer=setTimeout(loadBoard,240);};
el("loadMore").onclick=()=>loadBoard(false);el("retry").onclick=()=>loadBoard();
const postForm=el("postForm");
el("newPost").onclick=()=>{
  const config=boards[active];el("postHeading").textContent=config.publish;el("titleLabel").textContent=config.field;el("orgLabel").textContent=config.org;
  postForm.reset();for(const [key,value] of Object.entries(drafts[active]||{}))postForm.elements[key].value=value;
  postForm.querySelector("[role=status]").textContent="";draftId=crypto.randomUUID();show("post");
};
postForm.oninput=()=>{drafts[active]=Object.fromEntries(new FormData(postForm));draftId=crypto.randomUUID();};
postForm.onsubmit=async e=>{
  e.preventDefault();const button=postForm.querySelector("[type=submit]");if(button.disabled)return;button.disabled=true;
  const status=postForm.querySelector("[role=status]");status.textContent=ui("מפרסם…");const kind=active;
  try{const r=await fetch(boardAPI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:draftId,kind,...Object.fromEntries(new FormData(postForm))})});if(!r.ok)throw Error();
    delete drafts[kind];el("post").close();el("boardSearch").value="";await loadBoard();
  }catch{status.textContent=ui("המודעה לא פורסמה. בדקו את הפרטים והחיבור ונסו שוב.");}finally{button.disabled=false;}
};
el("joinForm").onsubmit=async e=>{
  e.preventDefault();const form=e.target,button=form.querySelector("[type=submit]"),status=form.querySelector("[role=status]");if(button.disabled)return;button.disabled=true;status.textContent=ui("שולח בקשה…");
  try{
    const base="https://www.gstatic.com/firebasejs/11.6.1/";
    const [{initializeApp,getApps},{getFirestore,addDoc,collection,serverTimestamp}]=await Promise.all([import(base+"firebase-app.js"),import(base+"firebase-firestore.js")]);
    const app=getApps()[0]||initializeApp({apiKey:"AIzaSyCEC5xVKq58pgxY8aAnl3L7LPW8N-06tok",projectId:"netabel-7c1c9",appId:"1:827558848571:web:65dc634d083baaadd1541e"});
    await addDoc(collection(getFirestore(app),"join_requests"),{...Object.fromEntries(new FormData(form)),createdAt:serverTimestamp()});
    form.reset();status.textContent=ui("בקשת ההצטרפות נשלחה להנהלת העמותה. תודה!");
  }catch{status.textContent=ui("לא הצלחנו לשלוח את הבקשה. אפשר לנסות שוב או לפנות לעמותה בוואטסאפ.");}finally{button.disabled=false;}
};
openBoard(Object.hasOwn(boards,location.hash.slice(1))?location.hash.slice(1):"connections",Object.hasOwn(boards,location.hash.slice(1)));
