<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>עמותת חטיבת נגבה 189 | Negba 189 NGO</title>
    
    <!-- פונטים פרימיום -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;700&family=Rubik:wght@300;500;700;900&family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Assistant', 'Inter', 'sans-serif'],
                        heading: ['Rubik', 'Inter', 'sans-serif'],
                    },
                    colors: {
                        idf: {
                            green: '#3d441e',
                            lightGreen: '#5c633a',
                            yellow: '#facc15',
                            dark: '#0a0c05',
                            gold: '#b45309',
                            slate: '#1e293b'
                        }
                    }
                }
            }
        }
    </script>
    
    <style>
        body { background-color: #0a0c05; transition: all 0.3s ease; }
        h1, h2, h3, h4 { font-family: 'Rubik', sans-serif; font-weight: 900; }
        html { scroll-behavior: smooth; }

        /* אפקטים סינמטיים */
        .hero-video-bg {
            position: relative;
            background: linear-gradient(rgba(10, 12, 5, 0.7), rgba(10, 12, 5, 0.9)), 
                        url('https://images.unsplash.com/photo-1590401416653-53530646199e?q=80&w=2000');
            background-size: cover; background-position: center; background-attachment: fixed;
        }
        
        .maneuver-bg {
            background: linear-gradient(rgba(10, 12, 5, 0.85), rgba(10, 12, 5, 0.85)), 
                        url('https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2000');
            background-size: cover; background-position: center;
        }

        .humvee-bg {
            background: linear-gradient(rgba(10, 12, 5, 0.9), rgba(10, 12, 5, 0.9)), 
                        url('https://images.unsplash.com/photo-1533069129528-79659b8be56d?q=80&w=2000');
            background-size: cover; background-position: center;
        }

        .glass {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .card-gold-hover {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border-bottom: 4px solid transparent;
        }
        .card-gold-hover:hover {
            transform: translateY(-10px);
            border-color: #facc15;
            background: rgba(250, 204, 21, 0.05);
        }

        /* בורר שפות */
        .lang-btn { opacity: 0.6; transition: 0.3s; }
        .lang-btn.active { opacity: 1; border-bottom: 2px solid #facc15; }

        /* אנימציה עדינה */
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade { animation: fadeIn 0.8s ease-out forwards; }
    </style>
</head>
<body class="text-white text-right overflow-x-hidden">

    <nav class="fixed w-full z-50 top-0 bg-idf-dark/95 backdrop-blur-xl border-b border-idf-yellow/20">
        <div class="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
            <!-- ימין: לוגו ובורר שפות -->
            <div class="flex items-center gap-8">
                <div class="flex items-center gap-4 group cursor-pointer" onclick="window.scrollTo(0,0)">
                    <div class="bg-white p-1 rounded-xl shadow-2xl h-16 w-16 md:h-20 md:w-20 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
                        <img src="logo.png" alt="189" class="max-h-full max-w-full object-contain" onerror="this.src='https://placehold.co/100x100/3d441e/ffffff?text=189'">
                    </div>
                    <div class="hidden md:block">
                        <h1 class="text-xl md:text-2xl font-black tracking-tighter leading-none" id="nav-title">עמותת חטיבת נגבה 189</h1>
                        <p class="text-idf-yellow font-bold text-xs uppercase tracking-widest mt-1 opacity-80" id="nav-subtitle">משפחה אחת. דרך אחת.</p>
                    </div>
                </div>
            </div>

            <!-- מרכז: בורר שפות מעוצב -->
            <div class="flex items-center gap-4 bg-white/5 p-1.5 rounded-full border border-white/10">
                <button onclick="changeLanguage('he')" class="lang-btn px-4 py-1 rounded-full text-xs font-black active" id="btn-he">עברית</button>
                <button onclick="changeLanguage('en')" class="lang-btn px-4 py-1 rounded-full text-xs font-black" id="btn-en">English</button>
                <button onclick="changeLanguage('fr')" class="lang-btn px-4 py-1 rounded-full text-xs font-black" id="btn-fr">Français</button>
            </div>

            <!-- שמאל: כפתור פעולה -->
            <div class="hidden lg:block">
                <a href="#recruit" class="bg-idf-yellow text-idf-dark px-8 py-3 rounded-xl font-black text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] uppercase" id="btn-recruit-nav">התגייסו לחטיבה</a>
            </div>
        </div>
    </nav>

    <section class="hero-video-bg min-h-screen flex items-center justify-center pt-24">
        <div class="max-w-5xl mx-auto px-6 text-center animate-fade">
            <span class="inline-block px-4 py-1 bg-idf-yellow text-idf-dark font-black rounded-lg text-xs mb-8 uppercase tracking-widest italic" id="hero-tagline">מהנגב באנו, על הנגב נגן</span>
            <h2 class="text-6xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter italic" id="hero-title">הכוח שלנו הוא <br><span class="text-idf-yellow">האנשים שלנו.</span></h2>
            <p class="text-xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed mb-12" id="hero-desc">עמותת חטיבת המילואים 189 בונה קהילה לוחמת ותומכת - משדה הקרב ועד החיים האזרחיים.</p>
            <div class="flex flex-col sm:flex-row justify-center gap-6">
                <a href="#join" class="px-14 py-6 bg-white text-idf-dark font-black text-2xl rounded-2xl hover:bg-idf-yellow transition-all shadow-2xl hover:scale-105" id="btn-join-hero">מילוי טופס חבר</a>
                <a href="#projects" class="px-14 py-6 border-2 border-white/20 backdrop-blur-md text-white font-black text-2xl rounded-2xl hover:bg-white/10 transition" id="btn-projects-hero">פעילות העמותה</a>
            </div>
        </div>
    </section>

    <section id="projects" class="humvee-bg py-32 border-y border-white/5">
        <div class="max-w-7xl mx-auto px-6">
            <div class="mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
                <div class="text-right">
                    <h2 class="text-5xl md:text-7xl font-black italic tracking-tighter" id="projects-title">העורף של הלוחמים</h2>
                    <p class="text-xl text-idf-yellow font-bold mt-4 opacity-70" id="projects-subtitle">משימות העמותה בשגרה ובחירום</p>
                </div>
                <div class="h-2 w-32 bg-idf-yellow rounded-full hidden md:block"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="glass p-12 rounded-[3rem] card-gold-hover text-center">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-inner"><i class="fa-solid fa-truck-fast"></i></div>
                    <h3 class="text-2xl font-black mb-4 italic" id="p1-title">ניידת ת"ש</h3>
                    <p class="text-gray-400 text-lg leading-relaxed" id="p1-desc">ניידת מגיעה לשטח עם ציוד לוגיסטי ופינוקים להרמת המורל בזמן אמת.</p>
                </div>
                <div class="glass p-12 rounded-[3rem] card-gold-hover text-center">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-inner"><i class="fa-solid fa-house-chimney-heart"></i></div>
                    <h3 class="text-2xl font-black mb-4 italic" id="p2-title">רווחה ומשפחה</h3>
                    <p class="text-gray-400 text-lg leading-relaxed" id="p2-desc">ימי משפחה ונופשים יחידתיים לחיזוק התא המשפחתי המלווה את הלוחם.</p>
                </div>
                <div class="glass p-12 rounded-[3rem] card-gold-hover text-center">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-inner"><i class="fa-solid fa-handshake"></i></div>
                    <h3 class="text-2xl font-black mb-4 italic" id="p3-title">נטוורקינג</h3>
                    <p class="text-gray-400 text-lg leading-relaxed" id="p3-desc">חיבור עסקי ותעסוקתי בין חברי העמותה באזרחות וסיוע הדדי לקידום.</p>
                </div>
                <div class="glass p-12 rounded-[3rem] card-gold-hover text-center">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-inner"><i class="fa-solid fa-tags"></i></div>
                    <h3 class="text-2xl font-black mb-4 italic" id="p4-title">מועדון צרכנות</h3>
                    <p class="text-gray-400 text-lg leading-relaxed" id="p4-desc">כוח קנייה מאוחד המעניק הנחות והטבות בלעדיות למשרתי החטיבה.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="management" class="py-32 bg-idf-dark">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-24">
                <h2 class="text-5xl md:text-7xl font-black italic tracking-tighter mb-4" id="mgmt-title">הנהגת העמותה</h2>
                <div class="h-2 w-24 bg-idf-yellow mx-auto mt-6 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- יו"ר -->
                <div class="p-10 rounded-[3rem] border-4 border-dashed border-white/10 flex flex-col items-center justify-center text-center bg-white/5">
                    <div class="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-white/20 text-4xl mb-6"><i class="fa-solid fa-crown"></i></div>
                    <h3 class="text-3xl font-black text-white/20 italic" id="mgmt-chair">יו"ר העמותה</h3>
                    <p class="text-xs font-bold text-idf-yellow/40 mt-4 tracking-widest uppercase" id="mgmt-process">בתהליך מינוי</p>
                </div>
                <!-- חיים קמחי -->
                <div class="glass p-10 rounded-[3rem] text-center border-b-4 border-idf-yellow/50">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-full flex items-center justify-center text-3xl mb-6 mx-auto shadow-lg"><i class="fa-solid fa-user-tie"></i></div>
                    <h3 class="text-2xl font-black mb-2">חיים קמחי</h3>
                    <p class="text-idf-yellow font-bold mb-4 uppercase text-sm italic" id="mgmt-member">חבר ועד</p>
                    <p class="text-gray-400 text-sm leading-relaxed" id="mgmt-desc">הובלה אסטרטגית וניהול קשרי חוץ של העמותה.</p>
                </div>
                <!-- מולי פז -->
                <div class="glass p-10 rounded-[3rem] text-center border-b-4 border-idf-yellow/50">
                    <div class="w-20 h-20 bg-idf-yellow text-idf-dark rounded-full flex items-center justify-center text-3xl mb-6 mx-auto shadow-lg"><i class="fa-solid fa-shield-halved"></i></div>
                    <h3 class="text-2xl font-black mb-2">מולי פז</h3>
                    <p class="text-idf-yellow font-bold mb-4 uppercase text-sm italic" id="mgmt-rep">נציג החטיבה</p>
                    <p class="text-gray-400 text-sm leading-relaxed" id="mgmt-desc2">אמון על הקשר הישיר בין המערך הלוחם לבין העמותה.</p>
                </div>
                <!-- גל אדווה -->
                <div class="glass p-10 rounded-[3rem] text-center border-b-4 border-idf-yellow/50">
                    <div class="w-20 h-20 bg-white/10 text-white rounded-full flex items-center justify-center text-3xl mb-6 mx-auto shadow-lg"><i class="fa-solid fa-user-shield"></i></div>
                    <h3 class="text-2xl font-black mb-2 leading-none">רו"ח גל אדווה</h3>
                    <p class="text-idf-yellow font-bold mb-4 uppercase text-sm italic" id="mgmt-auditor">מבקרת העמותה</p>
                    <p class="text-gray-400 text-sm leading-relaxed" id="mgmt-desc3">אמונה על התקינות, השקיפות והביקורת המקצועית.</p>
                </div>

                <!-- הוועד (שמות שנתת) -->
                <div class="glass p-8 rounded-[3rem] text-center"><h3 class="text-2xl font-black">יואב הנר</h3><p class="text-idf-yellow text-xs font-bold uppercase mt-2">Board Member</p></div>
                <div class="glass p-8 rounded-[3rem] text-center"><h3 class="text-2xl font-black">יהונתן פרידמן</h3><p class="text-idf-yellow text-xs font-bold uppercase mt-2">Board Member</p></div>
                <div class="glass p-8 rounded-[3rem] text-center"><h3 class="text-2xl font-black">דני בלובשטיין</h3><p class="text-idf-yellow text-xs font-bold uppercase mt-2">Board Member</p></div>
                <div class="glass p-8 rounded-[3rem] text-center"><h3 class="text-2xl font-black">בר נוימן</h3><p class="text-idf-yellow text-xs font-bold uppercase mt-2">Board Member</p></div>
            </div>
        </div>
    </section>

    <section id="battalions" class="bg-maneuver py-32 border-y border-white/10">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-5xl md:text-8xl font-black text-center italic tracking-tighter mb-24" id="force-title">השדרה המבצעית</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <!-- 1891 -->
                <div class="glass p-10 rounded-[3rem] border-b-8 border-idf-yellow flex flex-col transition-transform hover:scale-105 duration-300 shadow-2xl">
                    <div class="text-center mb-10">
                        <h3 class="text-5xl font-black italic">1891</h3>
                        <p class="text-idf-yellow font-black text-xl mt-2 tracking-widest uppercase italic" id="b1-name">"מגני יואב"</p>
                    </div>
                    <p class="text-lg text-gray-300 leading-relaxed font-light mb-10 text-right" id="b1-desc">גזרה: מרחב לכיש, קריית גת ומועצה אזורית יואב. גדוד חי"ר המגן על השער הצפוני של הנגב.</p>
                    <div class="mt-auto bg-white/5 p-6 rounded-2xl text-center">
                        <span class="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-2" id="rep-label">נציג העמותה</span>
                        <span class="text-idf-yellow font-black text-lg italic">יואב הנר</span>
                    </div>
                </div>

                <!-- 1892 -->
                <div class="glass p-10 rounded-[3rem] border-b-8 border-idf-yellow flex flex-col transition-transform hover:scale-105 duration-300 shadow-2xl">
                    <div class="text-center mb-10">
                        <h3 class="text-5xl font-black italic">1892</h3>
                        <p class="text-idf-yellow font-black text-xl mt-2 tracking-widest uppercase italic" id="b2-name">"חורב"</p>
                    </div>
                    <p class="text-lg text-gray-300 leading-relaxed font-light mb-10 text-right" id="b2-desc">גזרה: יישובי עוטף עזה. גדוד המורכב מלוחמים בני העוטף, המגן פיזית על הבית והקהילה.</p>
                    <div class="mt-auto bg-white/5 p-6 rounded-2xl text-center">
                        <span class="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-2" id="rep-label-2">נציג העמותה</span>
                        <span class="text-idf-yellow font-black text-lg italic">אלי כהן</span>
                    </div>
                </div>

                <!-- 1893 -->
                <div class="glass p-10 rounded-[3rem] border-b-8 border-idf-yellow flex flex-col transition-transform hover:scale-105 duration-300 shadow-2xl">
                    <div class="text-center mb-10">
                        <h3 class="text-5xl font-black italic">1893</h3>
                        <p class="text-idf-yellow font-black text-xl mt-2 tracking-widest uppercase italic" id="b3-name">"הר הנגב"</p>
                    </div>
                    <p class="text-lg text-gray-300 leading-relaxed font-light mb-10 text-right" id="b3-desc">גזרה: דימונה, ערד, ירוחם ומצפה רמון. גדוד מילואים מבוסס מודל "בני מקום" לשמירה הדוקה על הנגב.</p>
                    <div class="mt-auto bg-white/5 p-6 rounded-2xl text-center">
                        <span class="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-2" id="rep-label-3">נציג העמותה</span>
                        <span class="text-idf-yellow font-black text-lg italic">אורי שינדלר</span>
                    </div>
                </div>

                <!-- 1894 -->
                <div class="glass p-10 rounded-[3rem] border-b-8 border-idf-yellow flex flex-col transition-transform hover:scale-105 duration-300 shadow-2xl">
                    <div class="text-center mb-10">
                        <h3 class="text-5xl font-black italic">1894</h3>
                        <p class="text-idf-yellow font-black text-xl mt-2 tracking-widest uppercase italic" id="b4-name">"הלל"</p>
                    </div>
                    <p class="text-lg text-gray-300 leading-relaxed font-light mb-10 text-right" id="b4-desc">אופי: מורכב מיוצאי חיל הים. גדוד חי"ר המשלב ניסיון מבצעי עשיר מעולם הים והיבשה לכדי כוח מנצח.</p>
                    <div class="mt-auto bg-white/5 p-6 rounded-2xl text-center">
                        <span class="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-2" id="rep-label-4">נציג העמותה</span>
                        <span class="text-idf-yellow font-black text-lg italic">יהונתן פרידמן</span>
                    </div>
                </div>

                <!-- 1895 -->
                <div class="glass p-10 rounded-[3rem] border-b-8 border-idf-yellow flex flex-col transition-transform hover:scale-105 duration-300 shadow-2xl md:col-span-2 lg:col-span-1">
                    <div class="text-center mb-10">
                        <h3 class="text-5xl font-black italic">1895</h3>
                        <p class="text-idf-yellow font-black text-xl mt-2 tracking-widest uppercase italic" id="b5-name">"יעלה"</p>
                    </div>
                    <p class="text-lg text-gray-300 leading-relaxed font-light mb-10 text-right" id="b5-desc">גזרה: העיר אילת ויישובי חבל אילות. הגדוד המגן על הגזרה הדרומית ביותר של מדינת ישראל.</p>
                    <div class="mt-auto bg-white/5 p-6 rounded-2xl text-center">
                        <span class="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-2" id="rep-label-5">נציג העמותה</span>
                        <span class="text-idf-yellow font-black text-lg italic">[פנוי]</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="recruit" class="py-32 bg-cqb bg-idf-dark relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-6 relative z-10">
            <div class="glass p-12 md:p-24 rounded-[4rem] shadow-2xl border-t border-idf-yellow/20">
                <h2 class="text-5xl font-black text-white mb-6 italic tracking-tighter text-center md:text-right" id="recruit-title">גיוס לחטיבה</h2>
                <p class="text-2xl text-gray-400 mb-12 font-light text-center md:text-right" id="recruit-desc">מחפשים לוחמים ומפקדים להגנה על הבית.</p>
                
                <form class="space-y-8" onsubmit="event.preventDefault();">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
                        <div class="space-y-2">
                            <label class="text-xs font-black text-idf-yellow uppercase mr-4" id="label-name">שם מלא</label>
                            <input type="text" required class="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-idf-yellow outline-none transition text-xl font-bold">
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-black text-idf-yellow uppercase mr-4" id="label-phone">טלפון</label>
                            <input type="tel" required class="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-idf-yellow outline-none transition text-xl font-bold">
                        </div>
                    </div>
                    <button type="submit" class="w-full bg-idf-yellow text-idf-dark font-black text-2xl py-6 rounded-2xl hover:scale-[1.02] transition-all shadow-[0_20px_50px_rgba(250,204,21,0.3)] uppercase italic" id="btn-submit">שליחת פרטים להצטרפות</button>
                </form>
            </div>
        </div>
    </section>

    <footer class="bg-idf-dark text-white py-24 border-t-8 border-idf-yellow">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-16 text-center md:text-right">
            <div class="flex items-center gap-8">
                <div class="bg-white p-3 rounded-2xl h-28 w-28 flex items-center justify-center shadow-2xl">
                    <img src="logo.png" alt="לוגו" class="max-h-full max-w-full object-contain" onerror="this.parentElement.style.display='none'">
                </div>
                <div class="border-r border-white/10 pr-8 text-right">
                    <span class="font-black text-4xl block italic leading-none">חטיבת נגבה 189</span>
                    <p class="text-slate-500 font-bold mt-2 uppercase tracking-widest text-sm" id="footer-tag">העמותה הרשמית למשרתים ומשפחותיהם</p>
                </div>
            </div>
            <div class="flex gap-12 text-5xl opacity-40">
                <a href="#" class="hover:text-idf-yellow transition"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" class="hover:text-idf-yellow transition"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="mailto:info@189ngo.org.il" class="hover:text-idf-yellow transition"><i class="fa-solid fa-envelope"></i></a>
            </div>
        </div>
        <div class="mt-20 pt-10 border-t border-white/5 text-center text-gray-700 font-bold text-xs uppercase tracking-[0.3em]" id="footer-copy">
            &copy; 2024 עמותת חטיבה 189. כל הזכויות שמורות למשרתי החטיבה.
        </div>
    </footer>

    <script>
        const translations = {
            he: {
                dir: 'rtl',
                navTitle: 'עמותת חטיבת נגבה 189',
                navSub: 'משפחה אחת. דרך אחת.',
                btnRecNav: 'התגייסו לחטיבה',
                heroTag: 'מהנגב באנו, על הנגב נגן',
                heroTitle: 'הכוח שלנו הוא <br><span class="text-idf-yellow">האנשים שלנו.</span>',
                heroDesc: 'עמותת חטיבת המילואים 189 בונה קהילה לוחמת ותומכת - משדה הקרב ועד החיים האזרחיים.',
                btnJoin: 'מילוי טופס חבר',
                btnProj: 'פעילות העמותה',
                projTitle: 'העורף של הלוחמים',
                projSub: 'משימות העמותה בשגרה ובחירום',
                p1T: 'ניידת ת"ש', p1D: 'ניידת מגיעה לשטח עם ציוד לוגיסטי ופינוקים להרמת המורל בזמן אמת.',
                p2T: 'רווחה ומשפחה', p2D: 'ימי משפחה ונופשים יחידתיים לחיזוק התא המשפחתי המלווה את הלוחם.',
                p3T: 'נטוורקינג', p3D: 'חיבור עסקי ותעסוקתי בין חברי העמותה באזרחות וסיוע הדדי לקידום.',
                p4T: 'מועדון צרכנות', p4D: 'כוח קנייה מאוחד המעניק הנחות והטבות בלעדיות למשרתי החטיבה.',
                mgmtTitle: 'הנהגת העמותה',
                mgmtChair: 'יו"ר העמותה',
                mgmtProc: 'בתהליך מינוי',
                mgmtMem: 'חבר ועד',
                mgmtRep: 'נציג החטיבה',
                mgmtAud: 'מבקרת העמותה',
                forceTitle: 'השדרה המבצעית',
                b1N: '"מגני יואב"', b1D: 'גזרה: מרחב לכיש, קריית גת ומועצה אזורית יואב. גדוד חי"ר המגן על השער הצפוני של הנגב.',
                b2N: '"חורב"', b2D: 'גזרה: יישובי עוטף עזה. גדוד המורכב מלוחמים בני העוטף, המגן פיזית על הבית והקהילה.',
                b3N: '"הר הנגב"', b3D: 'גזרה: דימונה, ערד, ירוחם ומצפה רמון. גדוד מילואים מבוסס מודל "בני מקום" לשמירה הדוקה על הנגב.',
                b4N: '"הלל"', b4D: 'אופי: מורכב מיוצאי חיל הים. גדוד חי"ר המשלב ניסיון מבצעי עשיר מעולם הים והיבשה לכדי כוח מנצח.',
                b5N: '"יעלה"', b5D: 'גזרה: העיר אילת ויישובי חבל אילות. הגדוד המגן על הגזרה הדרומית ביותר של מדינת ישראל.',
                repL: 'נציג העמותה',
                recTitle: 'גיוס לחטיבה',
                recDesc: 'מחפשים לוחמים ומפקדים להגנה על הבית.',
                lName: 'שם מלא', lPhone: 'טלפון',
                btnSub: 'שליחת פרטים להצטרפות',
                footTag: 'העמותה הרשמית למשרתים ומשפחותיהם',
                footCopy: '© 2024 עמותת חטיבה 189. כל הזכויות שמורות למשרתי החטיבה.'
            },
            en: {
                dir: 'ltr',
                navTitle: 'Negba 189 Brigade NGO',
                navSub: 'One Family. One Way.',
                btnRecNav: 'Join the Brigade',
                heroTag: 'From the Negev we came, the Negev we guard',
                heroTitle: 'Our Strength is <br><span class="text-idf-yellow">Our People.</span>',
                heroDesc: 'The 189 Reserve Brigade Association builds a fighting and supportive community - from the battlefield to civilian life.',
                btnJoin: 'Fill Member Form',
                btnProj: 'Our Activities',
                projTitle: 'The Soldiers\' Backbone',
                projSub: 'NGO Missions in Routine and Emergency',
                p1T: 'Welfare Mobile', p1D: 'Mobile unit reaching the field with logistics and treats to boost morale in real-time.',
                p2T: 'Family Welfare', p2D: 'Family days and unit vacations to strengthen the home front supporting the soldier.',
                p3T: 'Networking', p3D: 'Business and employment connection between members in civilian life for mutual growth.',
                p4T: 'Consumer Club', p4D: 'Unified purchasing power providing exclusive discounts for brigade members.',
                mgmtTitle: 'Leadership',
                mgmtChair: 'NGO Chairman',
                mgmtProc: 'In Appointment Process',
                mgmtMem: 'Board Member',
                mgmtRep: 'Brigade Representative',
                mgmtAud: 'NGO Auditor',
                forceTitle: 'Operational Backbone',
                b1N: '"Magnei Yoav"', b1D: 'Sector: Lachish Region, Kiryat Gat, and Yoav Regional Council. Protecting the Northern Negev.',
                b2N: '"Horev"', b2D: 'Sector: Gaza Envelope settlements. Comprised of local residents defending their homes and community.',
                b3N: '"Har HaNegev"', b3D: 'Sector: Dimona, Arad, Yeruham, and Mitzpe Ramon. Local-based model for rapid response.',
                b4N: '"Hillel"', b4D: 'Nature: Comprised of Navy veterans. Integrating elite maritime experience into infantry maneuvers.',
                b5N: '"Ya\'ala"', b5D: 'Sector: Eilat and Eilot region. Defending the southernmost border of the State of Israel.',
                repL: 'NGO Representative',
                recTitle: 'Recruitment',
                recDesc: 'Seeking warriors and commanders to defend the home.',
                lName: 'Full Name', lPhone: 'Phone',
                btnSub: 'Submit Recruitment Request',
                footTag: 'Official Association for Servicemen and Families',
                footCopy: '© 2024 Brigade 189 NGO. All rights reserved to the servicemen.'
            },
            fr: {
                dir: 'ltr',
                navTitle: 'Association Brigade 189',
                navSub: 'Une Famille. Un Chemin.',
                btnRecNav: 'Rejoindre la Brigade',
                heroTag: 'Du Néguev nous venons, le Néguev nous protégeons',
                heroTitle: 'Notre Force est <br><span class="text-idf-yellow">Notre Peuple.</span>',
                heroDesc: 'L\'association de la Brigade 189 bâtit une communauté combattante et solidaire - du front à la vie civile.',
                btnJoin: 'Formulaire Membre',
                btnProj: 'Nos Activités',
                projTitle: 'Le Soutien des Combattants',
                projSub: 'Missions de l\'ONG en Routine et Urgence',
                p1T: 'Unité Mobile Bien-être', p1D: 'Unité mobile apportant logistique et réconfort sur le terrain en temps réel.',
                p2T: 'Famille et Bien-être', p2D: 'Journées familiales et vacances d\'unité pour renforcer le foyer du soldat.',
                p3T: 'Networking', p3D: 'Connexion professionnelle entre les membres dans la vie civile pour une aide mutuelle.',
                p4T: 'Club de Consommation', p4D: 'Pouvoir d\'achat unifié offrant des remises exclusives aux membres de la brigade.',
                mgmtTitle: 'Direction',
                mgmtChair: 'Président de l\'ONG',
                mgmtProc: 'En cours de nomination',
                mgmtMem: 'Membre du Conseil',
                mgmtRep: 'Délégué de Brigade',
                mgmtAud: 'Auditrice de l\'ONG',
                forceTitle: 'Épine Dorsale Opérationnelle',
                b1N: '"Magnei Yoav"', b1D: 'Secteur : Région de Lakish, Kiryat Gat et Conseil Yoav. Protège le Nord du Néguev.',
                b2N: '"Horev"', b2D: 'Secteur : Enveloppe de Gaza. Composé de résidents locaux défendant leurs foyers.',
                b3N: '"Har HaNegev"', b3D: 'Secteur : Dimona, Arad, Yeruham et Mitzpe Ramon. Modèle de défense locale.',
                b4N: '"Hillel"', b4D: 'Profil : Composé de vétérans de la Marine. Intégration de l\'expérience maritime.',
                b5N: '"Ya\'ala"', b5D: 'Secteur : Ville d\'Eilat et Eilot. Défense de la frontière la plus au sud d\'Israël.',
                repL: 'Délégué de l\'ONG',
                recTitle: 'Recrutement',
                recDesc: 'Recherche de combattants et commandants pour défendre la patrie.',
                lName: 'Nom Complet', lPhone: 'Téléphone',
                btnSub: 'Envoyer la demande',
                footTag: 'Association officielle des réservistes et familles',
                footCopy: '© 2024 ONG Brigade 189. Tous droits réservés.'
            }
        };

        function changeLanguage(lang) {
            const t = translations[lang];
            document.documentElement.lang = lang;
            document.documentElement.dir = t.dir;
            document.body.style.textAlign = t.dir === 'rtl' ? 'right' : 'left';
            
            // UI Text Updates
            document.getElementById('nav-title').innerText = t.navTitle;
            document.getElementById('nav-subtitle').innerText = t.navSub;
            document.getElementById('btn-recruit-nav').innerText = t.btnRecNav;
            document.getElementById('hero-tagline').innerText = t.heroTag;
            document.getElementById('hero-title').innerHTML = t.heroTitle;
            document.getElementById('hero-desc').innerText = t.heroDesc;
            document.getElementById('btn-join-hero').innerText = t.btnJoin;
            document.getElementById('btn-projects-hero').innerText = t.btnProj;
            
            document.getElementById('projects-title').innerText = t.projTitle;
            document.getElementById('projects-subtitle').innerText = t.projSub;
            document.getElementById('p1-title').innerText = t.p1T; document.getElementById('p1-desc').innerText = t.p1D;
            document.getElementById('p2-title').innerText = t.p2T; document.getElementById('p2-desc').innerText = t.p2D;
            document.getElementById('p3-title').innerText = t.p3T; document.getElementById('p3-desc').innerText = t.p3D;
            document.getElementById('p4-title').innerText = t.p4T; document.getElementById('p4-desc').innerText = t.p4D;
            
            document.getElementById('mgmt-title').innerText = t.mgmtTitle;
            document.getElementById('mgmt-chair').innerText = t.mgmtChair;
            document.getElementById('mgmt-process').innerText = t.mgmtProc;
            document.querySelectorAll('#mgmt-member').forEach(el => el.innerText = t.mgmtMem);
            document.getElementById('mgmt-rep').innerText = t.mgmtRep;
            document.getElementById('mgmt-auditor').innerText = t.mgmtAud;
            
            document.getElementById('force-title').innerText = t.forceTitle;
            document.getElementById('b1-name').innerText = t.b1N; document.getElementById('b1-desc').innerText = t.b1D;
            document.getElementById('b2-name').innerText = t.b2N; document.getElementById('b2-desc').innerText = t.b2D;
            document.getElementById('b3-name').innerText = t.b3N; document.getElementById('b3-desc').innerText = t.b3D;
            document.getElementById('b4-name').innerText = t.b4N; document.getElementById('b4-desc').innerText = t.b4D;
            document.getElementById('b5-name').innerText = t.b5N; document.getElementById('b5-desc').innerText = t.b5D;
            
            document.querySelectorAll('[id^="rep-label"]').forEach(el => el.innerText = t.repL);
            
            document.getElementById('recruit-title').innerText = t.recTitle;
            document.getElementById('recruit-desc').innerText = t.recDesc;
            document.getElementById('label-name').innerText = t.lName;
            document.getElementById('label-phone').innerText = t.lPhone;
            document.getElementById('btn-submit').innerText = t.btnSub;
            
            document.getElementById('footer-tag').innerText = t.footTag;
            document.getElementById('footer-copy').innerText = t.footCopy;

            // Highlight active button
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active', 'bg-idf-yellow', 'text-idf-dark'));
            const activeBtn = document.getElementById('btn-' + lang);
            activeBtn.classList.add('active');
            if (window.innerWidth < 1024) activeBtn.classList.add('bg-idf-yellow', 'text-idf-dark');
        }
    </script>
</body>
</html>
