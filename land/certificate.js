"use strict";
window.NegbaCertificate = (() => {
  const occasions = {
    bar:["לכבוד בר המצווה","In celebration of your Bar Mitzvah"],
    brit:["לכבוד ברית המילה","In celebration of your Brit Milah"],
    wedding:["לרגל הנישואין","In celebration of your wedding"],
    birthday:["לכבוד יום ההולדת","In celebration of your birthday"],
    personal:["בהקדשה אישית","A personal dedication"]
  };
  function image(path){const img=new Image();img.src=path;return img.decode().then(()=>img).catch(()=>null);}
  const assets=Promise.all([image("../assets/certificate-field.webp"),image("../assets/brand-mark.png"),document.fonts.load("700 24px Negba").catch(()=>[])]);
  function wrap(ctx,text,maxWidth){
    const rows=[];
    for(const paragraph of text.trim().split(/\n/)){
      let line="";
      for(const word of paragraph.trim().split(/\s+/)){
        if(!word)continue;
        const candidate=line?line+" "+word:word;
        if(ctx.measureText(candidate).width<=maxWidth){line=candidate;continue;}
        if(line)rows.push(line);line="";
        for(const ch of word){if(line&&ctx.measureText(line+ch).width>maxWidth){rows.push(line);line="";}line+=ch;}
      }
      if(line)rows.push(line);
    }return rows;
  }
  async function draw(canvas,data){
    const [paper,logo]=await assets, ctx=canvas.getContext("2d");
    const W=1600,H=1132;ctx.setTransform(canvas.width/W,0,0,canvas.height/H,0,0);
    ctx.fillStyle="#faf4e4";ctx.fillRect(0,0,W,H);if(paper)ctx.drawImage(paper,0,0,W,H);
    ctx.textAlign="center";ctx.textBaseline="middle";
    function line(value,y,size,{color="#123e35",dir="rtl",family="Negba,Arial,sans-serif",weight="400",max=1260}={}){
      ctx.direction=dir;ctx.fillStyle=color;ctx.font=weight+" "+size+"px "+family;ctx.fillText(value,W/2,y,max);
    }
    function dual(h,e,y,size=24){line(h,y,size);line(e,y+35,size-2,{dir:"ltr",family:"Georgia,serif"});}
    if(logo)ctx.drawImage(logo,750,67,100,100);
    line("עמותת חטיבת נגבה 189   |   NEGBA 189",200,24,{weight:"700"});
    line("תעודת הוקרה",284,78,{weight:"700",family:"Georgia,'Times New Roman',serif"});
    line("CERTIFICATE OF DEDICATION",355,34,{dir:"ltr",family:"Georgia,serif",color:"#93681e"});
    dual("תעודה זו מוענקת לכבוד","Presented in honour of",415,23);
    line(data.name||"שם מקבל/ת ההקדשה  ·  Recipient’s name",523,52,{weight:"700",dir:/[א-ת]/u.test(data.name)||!data.name?"rtl":"ltr"});
    if(occasions[data.occasion])dual(...occasions[data.occasion],581,23);
    dual("על השתתפות במיזם העמותה לרכישת אדמה בארץ ישראל, ברוח מצוות יישוב הארץ.","For taking part in the association’s land purchase initiative in the spirit of Yishuv Eretz Yisrael.",659,25);
    let size=30,rows=[];
    do{ctx.font=size+"px Negba, Arial";rows=wrap(ctx,data.dedication.slice(0,240),1130);if(rows.length*(size+3)<=120||size<=16)break;size-=2;}while(size>0);
    rows.forEach((row,i)=>line(row,750+(i-(rows.length-1)/2)*(size+3),size,{dir:/[א-ת]/u.test(row)?"rtl":"ltr",max:1160}));
    line("״שנצטוינו לרשת הארץ אשר נתן האל יתעלה לאבותינו לאברהם ליצחק וליעקב״",842,27,{weight:"700"});
    line("“We were commanded to take possession of the land that God gave our forefathers, Abraham, Isaac and Jacob.”",882,21,{dir:"ltr",family:"Georgia,serif"});
    line("רמב״ן, השגות לספר המצוות, מצווה ד׳   ·   Ramban, Additions to the Book of Commandments, no. 4",920,18);
    line(data.number?"מרשם ההקדשות   ·   Association register   № "+String(data.number).padStart(5,"0"):"דוגמה בלבד   ·   SAMPLE ONLY",978,24,{weight:"700",color:"#664d23"});
    line("הקדשה סמלית במרשם העמותה   ·   Symbolic dedication in the association’s register",1015,18);
  }
  return {draw};
})();
