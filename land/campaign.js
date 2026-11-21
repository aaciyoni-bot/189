"use strict";
const API = "https://negba189-land-registry.yonifr1.chatgpt.site";
const $ = id => document.getElementById(id);
const url = new URL(location.href);
let lang = url.searchParams.get("lang") || (/^en\b/i.test(navigator.language) ? "en" : "he");
lang = lang === "en" ? "en" : "he";
let ref = url.searchParams.get("a") || "", stats = null, issued = null, createdTeam = "", checked = false;
let submittingGift = false, submittingTeam = false, purchaseKey = null;
const en = {
 shortBrand:"Negba 189",unitTag:"$100 for one symbolic metre",source:"Ramban, Additions to the Book of Commandments, positive commandment 4",enlarge:"Enlarge certificate",close:"Close",occasion:"What is the occasion?",ordinary:"General dedication",bar:"Bar Mitzvah",brit:"Brit Milah",wedding:"Wedding",birthday:"Birthday",personal:"Personal dedication",previewGift:"Preview my personalised certificate",
 skip:"Skip to the participation form",brand:"Negba 189 Association",storyNav:"The initiative",ambNav:"Ambassadors",
 appeal:"The Negba 189 land campaign",title:"A Metre of Israel",lede:"Join people around the world to help Negba 189 buy a field in Israel. Our goal is 20,000 donors. A $100 gift dedicates one symbolic square metre in a name you choose.",
 dedicate:"Dedicate a metre",become:"Become an ambassador",illustration:"Illustrative agricultural landscape",
 progress:"Campaign progress",raised:"toward the $2,000,000 goal",units:"metres dedicated out of 20,000",donors:"donors toward our goal of 20,000",progressNote:"Totals update after payment is confirmed.",
 teamHeader:"Ambassador page",copyLink:"Copy personal link",association:"An initiative of Negba 189",storyTitle:"One field, thousands of dedications",
 storyText:"The Negba 189 Association aims to purchase 20,000 m² of agricultural land in Israel at an estimated cost of ₪5 million. Funds will help cover the purchase and campaign costs. The balance will support the association’s work with brigade families.",
 use:"The association intends to hold the land in its own name. Future uses and income would serve its charitable purposes, subject to agricultural zoning and the necessary approvals.",
 meaning:"Dedicate a metre to the grandparent who taught you to love this land, to a new baby, or to an entire community.",
 certificate:"Your certificate",certText:"With digital delivery, we automatically email you a personalised Hebrew and English certificate after your gift is confirmed. You may choose a printed certificate in gift packaging instead.",
 sample:"Sample",certOver:"Negba 189 Association",certTitle:"Certificate of dedication",certLegal:"Symbolic recognition in the association register • No property rights",
 downloadSample:"Download sample certificate",participate:"Take part",giftTitle:"Your dedication",one:"One symbolic square metre",onCert:"Name on the certificate",dedField:"Personal dedication (optional)",
 enhance:"Optional additions",treeText:"Plant a tree",treeSub:"Through the association’s planting programme",paperText:"Printed certificate in a gift package",paperSub:"Mailed to the address you choose, with an optional gift message",
 extra:"Additional gift to the association in USD (optional)",postal:"Full mailing address, including recipient, postal code and country",total:"Total",
 symbolic:"Your metre is a unit of recognition in the association’s register. A gift confers no land title, land registry entry, right of use or share of income.",
 giftNote:"Message for the gift package (optional)",email:"Donor’s email address",ambTitle:"Bring your community with you",ambCopy:"Start a page for your family, synagogue or community. Choose a donor goal and share your personal link. Confirmed donations through it count toward both your page and the campaign.",
 teamLabel:"Public ambassador or community name",privateEmail:"Contact email (private)",goal:"Donor goal",ambConsent:"I agree to display the page name publicly and be contacted by the association about this campaign.",createTeam:"Create ambassador page",
 wa:"Share on WhatsApp",faq:"Before you take part",contact:"Contact the association"
};
const he = Object.fromEntries([...document.querySelectorAll("[data-k]")].map(el=>[el.dataset.k, el.textContent]));
const t=(h,e)=>lang==="he"?h:e, txt=key=>(lang==="he"?he:en)[key];
const num = n=>new Intl.NumberFormat(lang==="he"?"he-IL":"en-US",{maximumFractionDigits:2}).format(n);
const money=n=>"$"+num(n);
function linkFor(id) {
  const link=new URL("https://www.189.co.il/land/"); link.searchParams.set("lang",lang);
  if(id)link.searchParams.set("a",id);return link.href;
}
async function api(path,body){
  const res=await fetch(API+path,body?{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body),referrerPolicy:"no-referrer"}:{cache:"no-store",referrerPolicy:"no-referrer"});
  const data=await res.json();if(!res.ok)throw new Error(data.error||"unavailable");return data;
}
function feedback(id,h,e){$(id).textContent=t(h,e);}
function failure(id,error){
  const messages={sold_out:["כל המטרים כבר הוקדשו.","All metres have been dedicated."],pending:["ממתינים לאישור הספק. חזרו לקישור הזה כדי לבדוק שוב.","Payment confirmation is pending. Revisit this link to check again."],try_later:["נסו שוב בעוד שעה.","Please try again in an hour."],team:["עמוד השגריר אינו זמין. בדקו את הקישור.","This ambassador page is unavailable. Check the link."],prelaunch:["הגבייה טרם נפתחה.","Payments have not opened yet."],terms_changed:["תנאי ההשתתפות עודכנו. רעננו את העמוד.","Participation terms have changed. Please reload the page."]};
  feedback(id,...(messages[error.message]||["הפעולה לא הושלמה. בדקו את החיבור ונסו שוב.","The action could not be completed. Check your connection and try again."]));
}
function questions(){
 const content=lang==="he"?[
 ["מה בדיוק נרשם על שמי?","לאחר תשלום מאומת, העמותה רושמת יחידת הוקרה ממוספרת ואת ההקדשה שבחרתם. אם הרכישה תושלם, הזכויות בקרקע יירשמו על שם העמותה. ההקדשה פרטית כברירת מחדל."],
 ["למה מיועדים הכספים?","מחיר הרכישה המשוער הוא 5 מיליון ש״ח. מהגיוס ימומנו הרכישה וההוצאות הכרוכות בה ובקמפיין. היתרה מיועדת לפעילות העמותה. תוספות לנטיעה ולמשלוח נספרות בנפרד מיעד המטרים."],
 ["האם העץ יינטע על המטר שלי?","תוספת של 50 דולר מיועדת לנטיעת עץ בתכנית מרוכזת. מספר המטר הוא מספר הקדשה. מיקום העצים, מועדי הנטיעה והקיבולת תלויים בתכנון החקלאי."],
 ["מה קורה אם רכישת הקרקע לא תושלם?",stats?.terms?.he||"העמותה תגבש ותפרסם את מדיניות הטיפול בכסף לפני פתיחת הגבייה. בשלב ההיערכות אפשר להירשם לעדכון."],
 ["מי רואה את הפרטים והאם התעודה משמשת לקבלת זיכוי מס?","שם עמוד השגריר וההתקדמות שלו גלויים למי שקיבל את הקישור. פרטי הקשר, הכתובת וההקדשה נשמרים לשימוש העמותה. תעודת ההוקרה נפרדת מקבלה חשבונאית. לבירור קבלה או לבקשה בנוגע לפרטים אישיים אפשר לפנות לעמותה."]]:[
 ["What is recorded in my name?","Once payment is verified, the association records a numbered unit of recognition and your dedication. If the land purchase completes, the association will hold the land rights. Dedications are private by default."],
 ["How will funds be used?","The estimated purchase price is ₪5 million. Funds will cover the purchase, related costs and campaign expenses. The balance will support the association’s work. Tree and postage additions are tracked separately from the metre target."],
 ["Will the tree be planted on my metre?","The $50 option supports a tree in a coordinated planting programme. Your metre number identifies a dedication. Planting locations, timing and capacity depend on the agricultural plan."],
 ["What if the purchase does not go ahead?",stats?.terms?.en||"The association will publish its policy on the use or return of funds before opening payments. You can currently sign up for a launch notice."],
 ["Who can see my information, and is the certificate a tax receipt?","People with an ambassador link can see its public name and progress. Contact details, dedications and delivery addresses are for the association’s use. The dedication certificate is separate from an accounting receipt. Contact the association about receipts or your personal data."]];
 const root=$("questions");root.replaceChildren();
 for(const [q,a] of content){const details=document.createElement("details"),summary=document.createElement("summary"),p=document.createElement("p");summary.textContent=q;p.textContent=a;details.append(summary,p);root.append(details);}
}
function certificateData(){
 const occasion=issued?issued.occasion:$("occasion").value;
 return {name:issued?.name||$("name").value.trim(),dedication:issued?issued.dedication:$("ded").value.trim(),occasion,number:issued?.number||null};
}
function preview(){
 const data=certificateData();

 $("certDescription").textContent=[data.number?t("תעודת הוקרה דו־לשונית","Bilingual certificate of dedication"):t("תעודה לדוגמה · עברית ואנגלית","Sample certificate · Hebrew and English"), data.name, data.occasion?(lang==="he"?he:en)[data.occasion]:"",data.dedication].filter(Boolean).join(" · ");
 window.NegbaCertificate.draw($("certCanvas"),data);
}
function total(){const extra=Number($("extra").value)||0;return 100+(+$("tree").checked)*50+(+$("paper").checked)*20+extra;}
function form(){
 const live=!!stats?.live, ready=!!stats;
 $("giftNoteWrap").hidden=!$("paper").checked;
 $("deliveryInfo").textContent=$("paper").checked?t("בחרתם במשלוח תעודה מודפסת באריזת מתנה. לאחר אישור התרומה יישלח לתורם אישור הזמנה במייל.","You selected a printed certificate in a gift package. The donor will receive an order confirmation by email after payment."):t("המסלול הדיגיטלי כלול בתרומה. לאחר אישור התשלום נשלח אוטומטית את התעודה כקובץ PDF למייל של התורם.","Digital delivery is included. After confirmed payment, we automatically email the PDF certificate to the donor.");
 $("postalWrap").hidden=!(live && $("paper").checked);$("postal").required=!$("postalWrap").hidden;
 $("name").required=live;$("giftTotal").textContent=money(total());
 $("terms").textContent=stats?.terms?.[lang]||"";$("terms").hidden=!live;
 $("launchNotice").textContent=live?t("בדקו את הסכום וההקדשה לפני המעבר לתשלום המאובטח.","Review the gift and dedication before continuing to secure payment."):t("הקמפיין בהיערכות. אפשר לעצב הקדשה ולהירשם להודעת פתיחה. בהרשמה נשמרים הדוא״ל, השפה ושיוך לשגריר, אם קיים. אין חיוב או שמירת מטר.","Prelaunch: preview your dedication and sign up for a launch email. We save only your email, language and ambassador referral, if any. No charge or metre reservation.");
 $("consentText").textContent=live?t("קראתי את תנאי ההשתתפות ואת מדיניות העמותה ואני מאשר/ת את התרומה ואת עיבוד הפרטים לצורך מימושה.","I accept the participation terms and the association’s policy and agree to the use of these details to fulfil my gift."):t("אני מסכים/ה לקבל דוא״ל מהעמותה עם פתיחת הקמפיין.","I agree to receive a launch email from the association.");
 $("submitGift").textContent=live?t("לתשלום מאובטח · ","Secure checkout · ")+money(total()):t("עדכנו אותי כשהתרומות נפתחות","Email me when donations open");
 $("submitGift").disabled=!ready||submittingGift;$("submitTeam").disabled=!ready||submittingTeam;
}
function renderStats(){
 const c=stats?.campaign;
 $("campaignCta").textContent=stats?.live?t("להקדשת מטר","Dedicate a metre"):t("הרשמה לעדכון","Get launch updates");
 $("progressPct").textContent=c?Math.min(100,Math.floor(100*c.base/2000000))+"%":"—";
 for(const [id,val] of [["raised",c?money(c.base):"—"],["units",c?num(c.units):"—"],["donors",c?num(c.donors):"—"]]) $(id).textContent=val;
 $("phase").textContent=stats?(stats.live?t("הגיוס פתוח","Fundraising open"):t("לפני פתיחת הגבייה","Prelaunch")):checked?t("הנתונים אינם זמינים","Data unavailable"):t("מתחבר…","Connecting…");
 if(c)$("progressBar").value=c.base;else $("progressBar").removeAttribute("value");
 $("totalProgress").textContent=c?t("סה״כ כולל תוספות: ","Total including additions: ")+money(c.raised):"";
 const team=stats?.team;$("teamBox").hidden=!team;if(team){
 $("teamName").textContent=team.name;$("teamProgress").textContent=t(num(team.donors)+" מתוך "+num(team.goal)+" תורמים · "+money(team.raised)+" גויסו",num(team.donors)+" of "+num(team.goal)+" donors · "+money(team.raised)+" raised");
 $("teamBar").max=team.goal;$("teamBar").value=team.donors;
 }
}
function share(){
 $("generatedTeam").hidden=!createdTeam;if(!createdTeam)return;
 const link=linkFor(createdTeam);$("generatedLink").href=link;$("generatedLink").textContent=link;
 $("wa").href="https://wa.me/?text="+encodeURIComponent(t("הצטרפו לעמוד השגריר שלנו בקמפיין מטר של אדמה של נגבה 189. ","Join our Negba 189 land campaign ambassador page. ")+link);
}
function render(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==="he"?"rtl":"ltr";
 document.querySelectorAll("[data-k]").forEach(el=>el.textContent=txt(el.dataset.k));
 document.querySelectorAll("a.brand").forEach(a=>a.href="../?lang="+lang);
 document.title=txt("title")+" | "+txt("brand");$("lang").textContent=t("English","עברית");$("lang").setAttribute("aria-label",$("lang").textContent);
 $("name").placeholder=t("למשל, משפחת כהן","e.g. The Cohen family");$("ded").placeholder=t("לכבוד, לזכר או בהוקרה…","In honour, in memory, or in gratitude…");
 renderStats();form();preview();share();questions();$("sourceEn").hidden=lang==="he";
}
$("lang").onclick=()=>{lang=lang==="he"?"en":"he";const u=new URL(location.href);u.searchParams.set("lang",lang);history.replaceState(null,"",u);$("teamMsg").textContent="";$("giftMsg").textContent="";render();};
async function refresh(){
 try{stats=await api("/stats"+(ref?"?a="+encodeURIComponent(ref):""));}
 catch(e){if(ref && e.message==="team"){failure("giftMsg",e);} }
 checked=true;render();
}
async function copy(link,button){
 try{await navigator.clipboard.writeText(link);button.textContent=t("הקישור הועתק","Link copied");}
 catch{const node=document.createElement("input");node.value=link;button.after(node);node.select();}
}
$("copyNew").onclick=()=>copy(linkFor(createdTeam),$("copyNew"));$("copyTeam").onclick=()=>copy(linkFor(ref),$("copyTeam"));
$("teamForm").onsubmit=async e=>{
 e.preventDefault();if(submittingTeam||!stats)return;submittingTeam=true;form();$("teamMsg").textContent="";
 try{
 const r=await api("/teams",{name:$("ambName").value,email:$("ambEmail").value,goal:+$("goal").value,consent:$("ambConsent").checked});
 createdTeam=r.id;share();feedback("teamMsg","עמוד השגריר שלכם נפתח. שמרו את הקישור האישי.","Your ambassador page is ready. Save your personal link.");
 }catch(err){failure("teamMsg",err);}finally{submittingTeam=false;form();}
};
$("giftForm").oninput=()=>{purchaseKey=null;form();preview();};
$("giftForm").onsubmit=async e=>{
 e.preventDefault();if(submittingGift||!stats)return;submittingGift=true;form();$("giftMsg").textContent="";
 try{
 if(!stats.live){
 await api("/interest",{email:$("email").value,team:ref,lang,consent:$("consent").checked});
 feedback("giftMsg","נרשמתם לעדכון פתיחת הקמפיין. תודה!","You’re on the campaign launch list. Thank you!");
 }else{
 purchaseKey ||= {id:crypto.randomUUID(),secret:crypto.randomUUID()};
 sessionStorage.setItem("negba-gift-"+purchaseKey.id,purchaseKey.secret);
 const r=await api("/checkout",{...purchaseKey,email:$("email").value,name:$("name").value,dedication:$("ded").value,occasion:$("occasion").value,tree:$("tree").checked,paper:$("paper").checked,postal:$("postal").value,giftNote:$("paper").checked?$("giftNote").value:"",extra:+$("extra").value,team:ref,lang,terms:stats.terms[lang],accept:$("consent").checked});
 location.assign(r.url);
 }
 }catch(err){failure("giftMsg",err);}finally{submittingGift=false;form();}
};
async function returnFromPayment(){
 const id=url.searchParams.get("order");if(!id)return;
 if(url.searchParams.get("cancel")){feedback("giftMsg","חזרתם מתהליך התשלום. בדקו את מצב העסקה אצל ספק התשלום לפני ניסיון נוסף.","You returned from checkout. Check the payment status before trying again.");return;}
 const secret=sessionStorage.getItem("negba-gift-"+id);
 if(!secret){feedback("giftMsg","פתחו את עמוד האישור באותה לשונית שבה בוצעה התרומה, או פנו לעמותה לקבלת התעודה.","Open this confirmation in the tab used to donate, or contact the association for your certificate.");return;}
 try{issued=await api("/certificate",{id,secret});await refresh();const sent=issued.delivery==="accepted";
 if(issued.paper)feedback("giftMsg",sent?"התרומה אושרה. אישור הזמנת המתנה הועבר למשלוח במייל.":"התרומה אושרה. הזמנת אריזת המתנה נקלטה.",sent?"Your gift is confirmed and your package confirmation was submitted for email delivery.":"Your gift and package order are confirmed.");
 else feedback("giftMsg",sent?"תודה! התעודה הועברה למשלוח למייל של התורם.":"תודה! התרומה אושרה והתעודה ממתינה למשלוח במייל.",sent?"Thank you! Your certificate was submitted for delivery to the donor’s email.":"Thank you! Your gift is confirmed and the certificate is queued for email delivery.");$("preview").scrollIntoView();}
 catch(err){failure("giftMsg",err);$("giftMsg").scrollIntoView();}
}
$("enlarge").onclick=async()=>{const canvas=$("certCanvas");await window.NegbaCertificate.draw(canvas,certificateData());$("largeCert").src=canvas.toDataURL();$("largeCert").alt=$("certDescription").textContent;$("certDialog").showModal();};
$("closeCert").onclick=()=>$("certDialog").close();
render();refresh().then(returnFromPayment);
